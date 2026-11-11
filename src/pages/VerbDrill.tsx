import { useState } from 'react'
import { Link } from 'react-router'
import { AnswerInput } from '../components/AnswerInput'
import { Feedback } from '../components/Feedback'
import { ProgressBar } from '../components/ProgressBar'
import { BUILT_IN_WORDS } from '../content/words'
import type { Word } from '../content/types'
import { recordActivity } from '../lib/actions'
import { allWords, isWordLearned } from '../lib/cards'
import { checkAnswer, type CheckResult } from '../lib/check'
import { conjugate, isDrillable, PERSONS, TENSE_NAMES, TENSES, type Tense } from '../lib/conjugate'
import { useTimeOnPage } from '../lib/hooks'
import { speak } from '../lib/speech'
import { getState } from '../lib/store'

const ROUND_LENGTH = 10
const MIN_LEARNED_VERBS = 5

interface DrillItem {
  word: Word
  tense: Tense
  person: number
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

/** Verbs you have learned, or every built-in verb until you have learned a handful. */
function drillVerbs(): Word[] {
  const state = getState()
  const learned = allWords(state).filter((word) => isDrillable(word) && isWordLearned(state, word))
  return learned.length >= MIN_LEARNED_VERBS ? learned : BUILT_IN_WORDS.filter(isDrillable)
}

function buildRound(tenses: Tense[]): DrillItem[] {
  const verbs = drillVerbs()
  return Array.from({ length: ROUND_LENGTH }, () => ({
    word: pick(verbs),
    tense: pick(tenses),
    person: Math.floor(Math.random() * PERSONS.length),
  }))
}

/** Drops a typed subject pronoun, so "noi andiamo" and "andiamo" both count. */
function withoutSubject(text: string): string {
  return text.trim().replace(/^(io|tu|lui|lei|noi|voi|loro)\s+/i, '')
}

export function VerbDrill() {
  const [tenses, setTenses] = useState<Tense[]>(['presente'])
  const [items, setItems] = useState<DrillItem[]>()
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  useTimeOnPage((seconds) => recordActivity('grammar', seconds))

  function toggle(tense: Tense) {
    const next = tenses.includes(tense) ? tenses.filter((chosen) => chosen !== tense) : [...tenses, tense]
    if (next.length > 0) setTenses(next)
  }

  function start() {
    setItems(buildRound(tenses))
    setIndex(0)
    setCorrect(0)
  }

  if (!items) {
    return (
      <div className="page narrow">
        <Link className="back-link" to="/grammar">
          ← Grammar
        </Link>
        <div className="page-header">
          <div className="eyebrow">Coniugazione</div>
          <h1>Verb drills</h1>
          <p>
            Type the verb for the person shown, in all six persons. Verbs come from the ones you have learned. Drills
            don’t affect your reviews; irregular verbs also come back there as their own cards.
          </p>
        </div>
        <div className="card stack">
          <h3>Tenses</h3>
          <div className="row">
            {TENSES.map((tense) => (
              <button
                key={tense}
                className={`btn ${tenses.includes(tense) ? 'primary' : ''}`}
                aria-pressed={tenses.includes(tense)}
                onClick={() => toggle(tense)}
              >
                {TENSE_NAMES[tense]}
              </button>
            ))}
          </div>
          <div>
            <button className="btn primary" onClick={start}>
              Start ({ROUND_LENGTH} verbs)
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (index >= items.length) {
    return (
      <div className="page narrow">
        <div className="card empty">
          <h2>
            {correct} of {items.length} right
          </h2>
          <div className="row" style={{ justifyContent: 'center' }}>
            <button className="btn primary" onClick={start}>
              Another round
            </button>
            <button className="btn" onClick={() => setItems(undefined)}>
              Change tenses
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <Link className="back-link" to="/grammar">
        ← Grammar
      </Link>
      <div className="review-meta">
        <div style={{ flex: 1 }}>
          <ProgressBar value={index / items.length} label="Round progress" />
        </div>
        <span className="muted small">
          {index + 1} / {items.length}
        </span>
      </div>
      <DrillCard
        key={index}
        item={items[index]}
        onNext={(right) => {
          if (right) setCorrect(correct + 1)
          setIndex(index + 1)
        }}
      />
    </div>
  )
}

function DrillCard({ item, onNext }: { item: DrillItem; onNext: (right: boolean) => void }) {
  const forms = conjugate(item.word, item.tense)
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult>()

  function submit() {
    if (result) return
    setResult(checkAnswer(withoutSubject(value), forms[item.person]))
    speak(`${PERSONS[item.person].split(',')[0]} ${forms[item.person][0]}`)
  }

  return (
    <div className="card stack">
      <div className="eyebrow">{TENSE_NAMES[item.tense]}</div>
      <div className="review-prompt">
        {PERSONS[item.person]} · {item.word.italian}
      </div>
      <div className="muted">{item.word.english}</div>
      <AnswerInput value={value} onChange={setValue} onSubmit={submit} verdict={result?.verdict} disabled={!!result} />
      {!result ? (
        <button className="btn primary" onClick={submit}>
          Check
        </button>
      ) : (
        <>
          <Feedback verdict={result.verdict}>
            <div>
              <strong>{forms[item.person].join(' / ')}</strong>
            </div>
            {result.note && <div className="small">{result.note}</div>}
          </Feedback>
          <table className="grammar-table">
            <tbody>
              {PERSONS.map((person, index) => (
                <tr key={person} style={index === item.person ? { fontWeight: 600 } : undefined}>
                  <td className="muted">{person}</td>
                  <td className="it">{forms[index].join(' / ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn primary" autoFocus onClick={() => onNext(result.verdict !== 'wrong')}>
            Next
          </button>
        </>
      )}
    </div>
  )
}
