import { useMemo, useState } from 'react'
import { Rich } from '../components/Rich'
import { SpeakButton } from '../components/SpeakButton'
import coreVerbList from '../content/coreVerbs'
import type { Word } from '../content/types'
import { allWords } from '../lib/cards'
import { useAppState } from '../lib/store'
import { isIrregular, verbForms, verbFormsSpeech } from '../lib/verbForms'

interface Table {
  title: string
  note?: string
  head: string[]
  rows: string[][]
}

const TABLES: Table[] = [
  {
    title: 'Definite article',
    note: 'Chosen by the word straight after it: lo studente, but il nuovo studente.',
    head: ['', 'Singular', 'Plural', 'Before'],
    rows: [
      ['Masculine', '**il**', '**i**', 'most consonants'],
      ['Masculine', '**lo**', '**gli**', 's + consonant, z, gn, ps'],
      ['Masculine', "**l'**", '**gli**', 'a vowel'],
      ['Feminine', '**la**', '**le**', 'a consonant'],
      ['Feminine', "**l'**", '**le**', 'a vowel'],
    ],
  },
  {
    title: 'Indefinite article',
    head: ['', 'Article', 'Before'],
    rows: [
      ['Masculine', '**un**', 'most sounds, including vowels: un libro, un amico'],
      ['Masculine', '**uno**', 's + consonant, z, gn, ps: uno studente'],
      ['Feminine', '**una**', 'a consonant: una casa'],
      ['Feminine', "**un'**", "a vowel: un'amica"],
    ],
  },
  {
    title: 'Prepositions with the article',
    head: ['', 'il', 'lo', "l'", 'la', 'i', 'gli', 'le'],
    rows: [
      ['di', 'del', 'dello', "dell'", 'della', 'dei', 'degli', 'delle'],
      ['a', 'al', 'allo', "all'", 'alla', 'ai', 'agli', 'alle'],
      ['da', 'dal', 'dallo', "dall'", 'dalla', 'dai', 'dagli', 'dalle'],
      ['in', 'nel', 'nello', "nell'", 'nella', 'nei', 'negli', 'nelle'],
      ['su', 'sul', 'sullo', "sull'", 'sulla', 'sui', 'sugli', 'sulle'],
    ],
  },
  {
    title: 'Personal pronouns',
    head: ['Subject', 'Direct object', 'Indirect object', 'Reflexive'],
    rows: [
      ['io', 'mi', 'mi', 'mi'],
      ['tu', 'ti', 'ti', 'ti'],
      ['lui / lei / Lei', 'lo / la / La', 'gli / le / Le', 'si'],
      ['noi', 'ci', 'ci', 'ci'],
      ['voi', 'vi', 'vi', 'vi'],
      ['loro', 'li / le', 'gli (loro)', 'si'],
    ],
  },
  {
    title: 'Present tense endings',
    note: 'Some -ire verbs add -isc- except for noi and voi: capisco, capisci, capisce, capiamo, capite, capiscono.',
    head: ['', 'parlare', 'prendere', 'dormire'],
    rows: [
      ['io', 'parl**o**', 'prend**o**', 'dorm**o**'],
      ['tu', 'parl**i**', 'prend**i**', 'dorm**i**'],
      ['lui / lei', 'parl**a**', 'prend**e**', 'dorm**e**'],
      ['noi', 'parl**iamo**', 'prend**iamo**', 'dorm**iamo**'],
      ['voi', 'parl**ate**', 'prend**ete**', 'dorm**ite**'],
      ['loro', 'parl**ano**', 'prend**ono**', 'dorm**ono**'],
    ],
  },
  {
    title: 'essere and avere',
    head: ['', 'essere', 'avere'],
    rows: [
      ['io', 'sono', 'ho'],
      ['tu', 'sei', 'hai'],
      ['lui / lei', 'è', 'ha'],
      ['noi', 'siamo', 'abbiamo'],
      ['voi', 'siete', 'avete'],
      ['loro', 'sono', 'hanno'],
    ],
  },
]

/** The core verbs as words, so they share the forms helpers. */
function coreVerbs(): Word[] {
  return coreVerbList
    .trim()
    .split('\n')
    .map((line) => {
      const [italian, forms, english] = line.split('|').map((part) => part.trim())
      return {
        id: `core-${italian}`,
        kind: 'verb',
        italian,
        forms,
        english,
        example: '',
        exampleEnglish: '',
        theme: 'general',
        level: 'A2',
      }
    })
}

export function Reference() {
  const state = useAppState()
  const [filter, setFilter] = useState('')
  const verbs = useMemo(
    () =>
      [
        ...allWords(state).filter(isIrregular),
        ...coreVerbs().filter((core) => !allWords(state).some((word) => word.italian === core.italian)),
      ]
        .map((word) => ({ word, forms: verbForms(word)! }))
        .sort((a, b) => a.word.italian.localeCompare(b.word.italian, 'it')),
    [state],
  )
  const search = filter.trim().toLowerCase()
  const shownVerbs = verbs.filter(
    ({ word, forms }) =>
      !search ||
      word.italian.toLowerCase().includes(search) ||
      word.english.toLowerCase().includes(search) ||
      forms.perfect.toLowerCase().includes(search),
  )

  return (
    <div className="page">
      <div className="page-header">
        <div className="eyebrow">Consultare</div>
        <h1>Reference</h1>
        <p>The tables you reach for while writing.</p>
      </div>
      <div className="reference-grid">
        {TABLES.map((table) => (
          <section key={table.title} className="card">
            <h3>{table.title}</h3>
            {table.note && <p className="small muted">{table.note}</p>}
            <div className="table-wrap">
              <table className="grammar-table">
                <thead>
                  <tr>
                    {table.head.map((cell, index) => (
                      <th key={index}>{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, index) => (
                        <td key={index}>
                          <Rich text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      <div className="section">
        <div className="row between">
          <h2 style={{ margin: 0 }}>Irregular verbs</h2>
          <input
            className="input"
            style={{ maxWidth: 260 }}
            placeholder="Search"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            aria-label="Search verbs"
          />
        </div>
        <p className="small muted">{verbs.length} verbs: the basics plus every irregular verb in the word lists.</p>
        <div className="card table-wrap" style={{ padding: 0 }}>
          <table className="grammar-table verb-table">
            <thead>
              <tr>
                <th>Infinitive</th>
                <th>Presente (io)</th>
                <th>Passato prossimo (io)</th>
                <th>English</th>
                <th aria-label="Listen" />
              </tr>
            </thead>
            <tbody>
              {shownVerbs.map(({ word, forms }) => (
                <tr key={word.id}>
                  <td className="it">
                    <strong>{word.italian}</strong>
                  </td>
                  <td>{forms.present}</td>
                  <td>{forms.perfect}</td>
                  <td className="muted small">{word.english}</td>
                  <td>
                    <SpeakButton text={verbFormsSpeech(word)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
