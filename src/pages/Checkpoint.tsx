import { useEffect, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router'
import { Icon } from '../components/Icon'
import {
  CHECKPOINTS,
  PASS_MARK,
  type Checkpoint,
  type CheckpointModule,
  type ExamItem,
  type ExamText,
} from '../content/checkpoints'
import { recordActivity, recordExam } from '../lib/actions'
import { useTimeOnPage } from '../lib/hooks'
import { speakDialogue, stopSpeaking } from '../lib/speech'
import { useAppState, type ExamResult } from '../lib/store'
import { PlaybackProgress } from './Listening'

const MODULE_NAMES: Record<CheckpointModule, { italian: string; english: string }> = {
  reading: { italian: 'Comprensione della lettura', english: 'Reading' },
  listening: { italian: 'Comprensione dell’ascolto', english: 'Listening' },
}

/** Answers by item key, e.g. "p0-3": true or false, or an option's index. */
type Answers = Record<string, boolean | number>

const itemKey = (part: number, item: number) => `p${part}-${item}`

function itemCount(checkpoint: Checkpoint, module: CheckpointModule): number {
  return checkpoint[module].parts.reduce((sum, part) => sum + part.items.length, 0)
}

function resultsFor(exams: ExamResult[], checkpoint: Checkpoint, module: CheckpointModule): ExamResult[] {
  return exams.filter((exam) => exam.setId === checkpoint.id && exam.module === module)
}

export function CheckpointList() {
  const { exams } = useAppState()
  return (
    <div className="page narrow">
      <div className="page-header">
        <div className="eyebrow">Progress</div>
        <h1>Level checkpoints</h1>
        <p className="muted">
          A reading paper and a listening paper for each level, modelled on CILS (the Università per Stranieri di Siena
          exam). Each is timed, marked only at the end and scored out of 100; {PASS_MARK} passes. Pass both before
          moving up a level.
        </p>
      </div>
      {CHECKPOINTS.map((checkpoint) => (
        <div key={checkpoint.id} className="section">
          <div className="section-title">{checkpoint.level}</div>
          <div className="card stack">
            {(['reading', 'listening'] as const).map((module) => {
              const results = resultsFor(exams, checkpoint, module)
              const best = results.length ? Math.max(...results.map((result) => result.score)) : undefined
              return (
                <Link key={module} className="row" to={`/checkpoints/${checkpoint.id}/${module}`} style={{ gap: 12 }}>
                  <Icon name={module} />
                  <span style={{ flex: 1 }}>
                    <strong>{MODULE_NAMES[module].english}</strong>
                    <span className="small muted">
                      {' '}
                      · {itemCount(checkpoint, module)} questions · {checkpoint[module].minutes} minutes
                    </span>
                  </span>
                  <span className={`small ${best === undefined ? 'faint' : best >= PASS_MARK ? 'good-text' : 'muted'}`}>
                    {best === undefined ? 'Not taken' : `Best ${best}`}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
      <p className="small faint">
        These papers measure the app's material, not an official result. B2 gets its checkpoint with the B2 content.
      </p>
    </div>
  )
}

/** A countdown that warns when time is up but never takes the paper away. */
function Timer({ minutes, startedAt }: { minutes: number; startedAt: number }) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])
  const left = Math.max(0, minutes * 60 - Math.floor((now - startedAt) / 1000))
  const label = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`
  return (
    <div className={`exam-timer ${left === 0 ? 'over' : left < 300 ? 'low' : ''}`}>
      {left === 0 ? "Time's up: finish your last answers and check" : `${label} left`}
    </div>
  )
}

/** Before starting: guess your score. Comparing the guess with the result trains your sense of readiness. */
function Start({
  minutes,
  items,
  onStart,
}: {
  minutes: number
  items: number
  onStart: (predicted: number | undefined, timed: boolean) => void
}) {
  const [predicted, setPredicted] = useState('')
  const [timed, setTimed] = useState(true)
  const value = predicted === '' ? undefined : Math.min(100, Math.max(0, Number(predicted)))
  return (
    <div className="card stack">
      <p className="muted" style={{ margin: 0 }}>
        {items} questions, {minutes} minutes. Scored out of 100; {PASS_MARK} passes. Answers are marked only at the end.
      </p>
      <label className="field">
        What score do you expect? (optional)
        <input
          className="input"
          type="number"
          min={0}
          max={100}
          value={predicted}
          onChange={(event) => setPredicted(event.target.value)}
          style={{ maxWidth: 120 }}
        />
      </label>
      <label className="row small" style={{ gap: 8 }}>
        <input type="checkbox" checked={timed} onChange={(event) => setTimed(event.target.checked)} /> Show a {minutes}
        -minute timer
      </label>
      <div>
        <button className="btn primary" onClick={() => onStart(value, timed)}>
          Start
        </button>
      </div>
    </div>
  )
}

function Result({
  score,
  predicted,
  parts,
}: {
  score: number
  predicted?: number
  parts: { correct: number; total: number }[]
}) {
  const passed = score >= PASS_MARK
  return (
    <div className={`feedback ${passed ? 'correct' : 'wrong'}`}>
      <div className="feedback-title">
        {score} / 100 · {passed ? 'Superato' : `Not yet: ${PASS_MARK} passes`}
      </div>
      {predicted !== undefined && (
        <div className="small">
          You expected {predicted}.{' '}
          {Math.abs(predicted - score) <= 5
            ? 'A good estimate.'
            : predicted > score
              ? 'You overestimated: look again at the parts where you lost most points.'
              : 'You did better than you thought.'}
        </div>
      )}
      <div className="exam-part-scores small">
        {parts.map((part, index) => (
          <span key={index}>
            Prova {index + 1}: {part.correct}/{part.total}
          </span>
        ))}
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <Link className="btn small" to="/checkpoints">
          Back to checkpoints
        </Link>
      </div>
    </div>
  )
}

function ItemView({
  number,
  item,
  answer,
  checked,
  onAnswer,
}: {
  number: number
  item: ExamItem
  answer: boolean | number | undefined
  checked: boolean
  onAnswer: (answer: boolean | number) => void
}) {
  const state = (value: boolean | number) => {
    if (!checked) return answer === value ? 'chosen' : ''
    if (value === item.answer) return 'correct'
    return answer === value ? 'wrong' : ''
  }
  const options: { value: boolean | number; label: string }[] =
    item.kind === 'truefalse'
      ? [
          { value: true, label: 'Vero' },
          { value: false, label: 'Falso' },
        ]
      : item.options.map((option, index) => ({ value: index, label: `${String.fromCharCode(97 + index)}  ${option}` }))
  return (
    <div className="question">
      <div className="question-number">{number}</div>
      <div style={{ flex: 1 }}>
        {item.kind === 'choice' && item.context && (
          <div className="card it small" style={{ whiteSpace: 'pre-line', marginBottom: 8 }}>
            {item.context}
          </div>
        )}
        <div className="it question-text">{item.kind === 'truefalse' ? item.statement : item.question}</div>
        <div className={item.kind === 'truefalse' ? 'row' : 'stack'} style={{ marginTop: 8, gap: 6 }}>
          {options.map((option) => (
            <button
              key={String(option.value)}
              className={`choice it ${state(option.value)}`}
              onClick={() => !checked && onAnswer(option.value)}
              disabled={checked}
              style={item.kind === 'truefalse' ? { minWidth: 110 } : undefined}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function TextBlock({ text }: { text: ExamText }) {
  return (
    <div className="card reader">
      {text.source && <div className="eyebrow">{text.source}</div>}
      {text.title && <h3 className="it">{text.title}</h3>}
      <div className="reader-text it">
        {text.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

function Part({ index, instructions, children }: { index: number; instructions: string; children: ReactNode }) {
  return (
    <section className="section stack">
      <div className="section-title">Prova {index + 1}</div>
      <p className="it muted" style={{ margin: 0 }}>
        {instructions}
      </p>
      {children}
    </section>
  )
}

export function CheckpointPaper() {
  const { checkpointId, module } = useParams()
  const checkpoint = CHECKPOINTS.find((candidate) => candidate.id === checkpointId)
  if (!checkpoint || (module !== 'reading' && module !== 'listening')) {
    return (
      <div className="page narrow">
        <div className="card empty">
          Not found. <Link to="/checkpoints">Level checkpoints</Link>
        </div>
      </div>
    )
  }
  return <Paper key={`${checkpoint.id}-${module}`} checkpoint={checkpoint} module={module} />
}

function Paper({ checkpoint, module }: { checkpoint: Checkpoint; module: CheckpointModule }) {
  const [startedAt, setStartedAt] = useState<number>()
  const [timed, setTimed] = useState(true)
  const [predicted, setPredicted] = useState<number>()
  const [answers, setAnswers] = useState<Answers>({})
  const [marked, setMarked] = useState<Record<string, boolean>>()
  const [plays, setPlays] = useState<Record<number, number>>({})
  const [playing, setPlaying] = useState<{ part: number; line: number }>()
  useTimeOnPage((seconds) => recordActivity(module, seconds))
  useEffect(() => stopSpeaking, [])

  const paper = checkpoint[module]
  const total = itemCount(checkpoint, module)
  const checked = marked !== undefined
  const correctCount = marked ? Object.values(marked).filter(Boolean).length : 0
  const score = Math.round((correctCount / total) * 100)

  function play(partIndex: number) {
    const part = checkpoint.listening.parts[partIndex]
    setPlays({ ...plays, [partIndex]: (plays[partIndex] ?? 0) + 1 })
    setPlaying({ part: partIndex, line: 0 })
    speakDialogue(
      part.script.lines.map((line) => ({ text: line.text, voice: part.script.voices?.[line.speaker] })),
      { onLine: (line) => setPlaying({ part: partIndex, line }), onEnd: () => setPlaying(undefined) },
    )
  }

  function check() {
    stopSpeaking()
    setPlaying(undefined)
    const results: Record<string, boolean> = {}
    paper.parts.forEach((part, partIndex) =>
      part.items.forEach((item, index) => {
        const key = itemKey(partIndex, index)
        results[key] = answers[key] === item.answer
      }),
    )
    setMarked(results)
    const correct = Object.values(results).filter(Boolean).length
    recordExam({
      setId: checkpoint.id,
      module,
      score: Math.round((correct / total) * 100),
      predicted,
      startedAt: startedAt!,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let number = 0
  return (
    <div className="page narrow">
      <Link className="back-link" to="/checkpoints">
        ← Level checkpoints
      </Link>
      <div className="page-header">
        <div className="eyebrow">
          {checkpoint.level} · {MODULE_NAMES[module].english} · Modelled on CILS
        </div>
        <h1 className="it">{MODULE_NAMES[module].italian}</h1>
      </div>

      {startedAt === undefined ? (
        <Start
          minutes={paper.minutes}
          items={total}
          onStart={(guess, withTimer) => {
            setPredicted(guess)
            setTimed(withTimer)
            setStartedAt(Date.now())
          }}
        />
      ) : (
        <>
          {timed && !checked && <Timer minutes={paper.minutes} startedAt={startedAt} />}
          {marked && (
            <Result
              score={score}
              predicted={predicted}
              parts={paper.parts.map((part, partIndex) => ({
                total: part.items.length,
                correct: part.items.filter((_, index) => marked[itemKey(partIndex, index)]).length,
              }))}
            />
          )}
          {paper.parts.map((part, partIndex) => {
            const listening = module === 'listening' ? checkpoint.listening.parts[partIndex] : undefined
            const reading = module === 'reading' ? checkpoint.reading.parts[partIndex] : undefined
            const used = plays[partIndex] ?? 0
            return (
              <Part key={partIndex} index={partIndex} instructions={part.instructions}>
                {reading?.text && <TextBlock text={reading.text} />}
                {listening && (
                  <div className="card player">
                    <button
                      className="btn primary player-button"
                      onClick={() => play(partIndex)}
                      disabled={playing !== undefined || (used >= listening.plays && !checked)}
                    >
                      <Icon name="speaker" />
                      {used === 0 ? 'Play' : 'Play again'}
                    </button>
                    <div className="player-status">
                      {playing?.part === partIndex ? (
                        <PlaybackProgress lines={listening.script.lines.map((line) => line.text)} playing={playing.line} />
                      ) : (
                        <span className="small muted">
                          {checked
                            ? 'Replay as often as you like now.'
                            : `${Math.max(0, listening.plays - used)} of ${listening.plays} plays left`}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                {part.items.map((item, index) => {
                  const key = itemKey(partIndex, index)
                  return (
                    <ItemView
                      key={key}
                      number={++number}
                      item={item}
                      answer={answers[key]}
                      checked={checked}
                      onAnswer={(value) => setAnswers({ ...answers, [key]: value })}
                    />
                  )
                })}
                {listening && checked && (
                  <details className="card">
                    <summary>Transcript</summary>
                    <div className="stack it small" style={{ marginTop: 10 }}>
                      {listening.script.lines.map((line, index) => (
                        <div key={index}>
                          <strong>{line.speaker}:</strong> {line.text}
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </Part>
            )
          })}
          {!checked && (
            <div className="section row">
              <button className="btn primary" onClick={check} disabled={playing !== undefined}>
                Check answers
              </button>
              <span className="small muted">
                {Object.keys(answers).length} of {total} answered
              </span>
            </div>
          )}
        </>
      )}
    </div>
  )
}
