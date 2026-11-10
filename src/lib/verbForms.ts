import type { Word } from '../content/types'

export interface VerbForms {
  /** io form of the present, e.g. "vado". */
  present: string
  /** io form of the passato prossimo, e.g. "sono andato". */
  perfect: string
}

/** Splits "vado, sono andato" into its two parts. */
export function verbForms(word: Word): VerbForms | undefined {
  if (word.kind !== 'verb' || !word.forms) return undefined
  const [present, perfect] = word.forms.split(',').map((part) => part.trim())
  if (!present || !perfect) return undefined
  return { present, perfect }
}

const REGULAR_PARTICIPLE: Record<string, string> = { are: 'ato', ere: 'uto', ire: 'ito' }

/** The infinitive without "si", e.g. "alzarsi" → "alzare". */
function plainInfinitive(word: Word): string {
  return word.italian.replace(/rsi$/, 're')
}

/** Drops a reflexive pronoun and the auxiliary: "mi sono alzato" → "alzato". */
function lastWord(form: string): string {
  return form.split(' ').at(-1) ?? form
}

/**
 * A verb is irregular when its io present isn't stem + o (or stem + isco for -ire verbs),
 * or its participle isn't stem + ato, uto or ito: andare (vado), fare (fatto), prendere (preso).
 */
export function isIrregular(word: Word): boolean {
  const forms = verbForms(word)
  if (!forms) return false
  const infinitive = plainInfinitive(word)
  const ending = infinitive.slice(-3)
  const stem = infinitive.slice(0, -3)
  const participle = lastWord(forms.perfect).replace(/[aie]$/, 'o')
  const present = lastWord(forms.present)
  const regularPresent = present === `${stem}o` || present === `${stem.replace(/i$/, '')}o` || (ending === 'ire' && present === `${stem}isco`)
  const regularParticiple = participle === `${stem}${REGULAR_PARTICIPLE[ending] ?? ''}`
  return !(regularPresent && regularParticiple)
}

/** True when the passato prossimo takes essere: "sono andato". */
export function takesEssere(word: Word): boolean {
  const forms = verbForms(word)
  return !!forms && /\bsono\b/.test(forms.perfect)
}

/** What is read aloud for a verb's forms: "andare, vado, sono andato". */
export function verbFormsSpeech(word: Word): string {
  const forms = verbForms(word)
  if (!forms) return word.italian
  return `${word.italian}, ${forms.present}, ${forms.perfect}`
}
