import { ipaFor } from '../content/ipa'
import { displayItalian, plainExample } from '../content/parseWords'
import { pluralWithArticle } from '../lib/articles'
import { themeById } from '../content/themes'
import type { Word } from '../content/types'
import { SpeakButton } from './SpeakButton'

const KIND_LABELS: Record<Word['kind'], string> = {
  noun: 'Nome',
  verb: 'Verbo',
  adjective: 'Aggettivo',
  adverb: 'Avverbio',
  phrase: 'Espressione',
  preposition: 'Preposizione',
  conjunction: 'Congiunzione',
  other: 'Parola',
}

export function ItalianWord({ word, size = 'normal' }: { word: Word; size?: 'normal' | 'large' }) {
  const style = size === 'large' ? { fontSize: '2rem', fontWeight: 600 } : { fontWeight: 600 }
  return (
    <span className="it" style={style}>
      {word.article ? (
        <>
          <span className={`gender-${word.gender}`}>{word.article}</span>
          {word.article.endsWith("'") ? '' : ' '}
          {word.italian}
        </>
      ) : (
        word.italian
      )}
    </span>
  )
}

/** Everything known about a word: forms, usage, example with audio. */
export function WordView({ word, showEnglish = true }: { word: Word; showEnglish?: boolean }) {
  const example = plainExample(word.example)
  const ipa = ipaFor(word)
  return (
    <div className="stack" style={{ gap: 14 }}>
      <div className="row between">
        <div className="row" style={{ gap: 6 }}>
          <ItalianWord word={word} size="large" />
          <SpeakButton text={displayItalian(word)} />
        </div>
        <div className="row" style={{ gap: 6 }}>
          <span className="pill">{KIND_LABELS[word.kind]}</span>
          <span className="pill accent">{word.level}</span>
        </div>
      </div>
      {ipa && (
        <div className="ipa muted" title="Pronunciation in IPA, from Wiktionary (CC BY-SA)">
          {ipa}
        </div>
      )}
      {showEnglish && <div style={{ fontSize: '1.15rem' }}>{word.english}</div>}
      <WordGrammar word={word} />
      <div className="example">
        <SpeakButton text={example} />
        <div className="example-text">
          <div className="it">{example}</div>
          {showEnglish && <div className="en">{word.exampleEnglish}</div>}
        </div>
      </div>
      <div className="faint small">{themeById(word.theme).title}</div>
    </div>
  )
}

export function WordGrammar({ word }: { word: Word }) {
  const facts: { label: string; value: string }[] = []
  if (word.kind === 'noun') {
    facts.push({ label: 'Gender', value: word.gender === 'f' ? 'feminine' : 'masculine' })
    facts.push({ label: 'Plural', value: word.plural ? pluralWithArticle(word) : 'no plural' })
  }
  if (word.forms) facts.push({ label: word.kind === 'verb' ? 'io: presente, passato prossimo' : 'Forms', value: word.forms })
  if (word.usage) facts.push({ label: 'Usage', value: word.usage })
  if (facts.length === 0) return null
  return (
    <dl className="word-facts">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd className="it">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
