import type { Word } from '../content/types'
import { takesEssere, verbForms } from './verbForms'

export const TENSES = ['presente', 'passato-prossimo', 'imperfetto', 'futuro'] as const
export type Tense = (typeof TENSES)[number]

export const TENSE_NAMES: Record<Tense, string> = {
  presente: 'Presente',
  'passato-prossimo': 'Passato prossimo',
  imperfetto: 'Imperfetto',
  futuro: 'Futuro',
}

export const PERSONS = ['io', 'tu', 'lui, lei', 'noi', 'voi', 'loro'] as const

/** One entry per person; each lists the accepted answers, the first being the one shown. */
export type Conjugation = string[][]

type SixForms = [string, string, string, string, string, string]

/** Present tenses that don't follow the rules, listed by hand. */
const IRREGULAR_PRESENT: Record<string, SixForms> = {
  essere: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
  avere: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
  andare: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
  fare: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'],
  venire: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'],
  stare: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'],
  dare: ['do', 'dai', 'dà', 'diamo', 'date', 'danno'],
  volere: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'],
  potere: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'],
  dovere: ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'],
  sapere: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'],
  uscire: ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'],
  dire: ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'],
  bere: ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'],
  piacere: ['piaccio', 'piaci', 'piace', 'piacciamo', 'piacete', 'piacciono'],
  salire: ['salgo', 'sali', 'sale', 'saliamo', 'salite', 'salgono'],
  spegnere: ['spengo', 'spegni', 'spegne', 'spegniamo', 'spegnete', 'spengono'],
  morire: ['muoio', 'muori', 'muore', 'moriamo', 'morite', 'muoiono'],
  rimanere: ['rimango', 'rimani', 'rimane', 'rimaniamo', 'rimanete', 'rimangono'],
  tenere: ['tengo', 'tieni', 'tiene', 'teniamo', 'tenete', 'tengono'],
}

/** Imperfetto stems that don't come from the infinitive (endings -vo, -vi… are added). */
const IRREGULAR_IMPERFETTO_STEM: Record<string, string> = { fare: 'face', bere: 'beve', dire: 'dice' }
const ESSERE_IMPERFETTO: SixForms = ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano']

/** Future stems that don't come from the infinitive (endings -ò, -ai… are added). */
const IRREGULAR_FUTURE_STEM: Record<string, string> = {
  essere: 'sar',
  avere: 'avr',
  andare: 'andr',
  dovere: 'dovr',
  potere: 'potr',
  sapere: 'sapr',
  vedere: 'vedr',
  vivere: 'vivr',
  volere: 'vorr',
  venire: 'verr',
  bere: 'berr',
  fare: 'far',
  stare: 'star',
  dare: 'dar',
  rimanere: 'rimarr',
  tenere: 'terr',
}

const PRESENT_ENDINGS: Record<string, SixForms> = {
  are: ['o', 'i', 'a', 'iamo', 'ate', 'ano'],
  ere: ['o', 'i', 'e', 'iamo', 'ete', 'ono'],
  ire: ['o', 'i', 'e', 'iamo', 'ite', 'ono'],
}
const ISC_ENDINGS: SixForms = ['isco', 'isci', 'isce', 'iamo', 'ite', 'iscono']
const IMPERFETTO_ENDINGS: SixForms = ['vo', 'vi', 'va', 'vamo', 'vate', 'vano']
const FUTURE_ENDINGS: SixForms = ['ò', 'ai', 'à', 'emo', 'ete', 'anno']
const ESSERE: SixForms = IRREGULAR_PRESENT.essere
const AVERE: SixForms = IRREGULAR_PRESENT.avere
const REFLEXIVE_PRONOUNS: SixForms = ['mi', 'ti', 'si', 'ci', 'vi', 'si']
const REGULAR_PARTICIPLE: Record<string, string> = { are: 'ato', ere: 'uto', ire: 'ito' }

/**
 * Joins an -are stem and an ending, keeping the sound: cerc + i → cerchi (hard c stays hard),
 * mangi + i → mangi (no double i).
 */
function joinAre(stem: string, ending: string): string {
  if (!ending.startsWith('i')) return stem + ending
  if (/[cg]$/.test(stem)) return `${stem}h${ending}`
  if (stem.endsWith('i')) return stem + ending.slice(1)
  return stem + ending
}

function present(infinitive: string, ioForm: string | undefined): SixForms {
  const irregular = IRREGULAR_PRESENT[infinitive]
  if (irregular) return irregular
  const group = infinitive.slice(-3)
  const stem = infinitive.slice(0, -3)
  if (group === 'ire' && ioForm?.endsWith('isco')) return ISC_ENDINGS.map((ending) => stem + ending) as SixForms
  if (group === 'are') return PRESENT_ENDINGS.are.map((ending) => joinAre(stem, ending)) as SixForms
  return PRESENT_ENDINGS[group].map((ending) =>
    stem.endsWith('i') && ending.startsWith('i') ? stem + ending.slice(1) : stem + ending,
  ) as SixForms
}

function imperfetto(infinitive: string): SixForms {
  if (infinitive === 'essere') return ESSERE_IMPERFETTO
  const stem = IRREGULAR_IMPERFETTO_STEM[infinitive] ?? infinitive.slice(0, -2)
  return IMPERFETTO_ENDINGS.map((ending) => stem + ending) as SixForms
}

/** parlare → parler, cercare → cercher, mangiare → manger, prendere → prender, dormire → dormir. */
function futureStem(infinitive: string): string {
  const irregular = IRREGULAR_FUTURE_STEM[infinitive]
  if (irregular) return irregular
  if (!infinitive.endsWith('are')) return infinitive.slice(0, -1)
  const stem = infinitive.slice(0, -3)
  if (/[cg]i$/.test(stem)) return `${stem.slice(0, -1)}er`
  if (/[cg]$/.test(stem)) return `${stem}her`
  return `${stem}er`
}

function futuro(infinitive: string): SixForms {
  const stem = futureStem(infinitive)
  return FUTURE_ENDINGS.map((ending) => stem + ending) as SixForms
}

/** The participle in its masculine singular form, from the word bank's "ho fatto" or the regular rule. */
function participle(word: Word, infinitive: string): string {
  const perfect = verbForms(word)?.perfect
  if (perfect) return perfect.split(' ').at(-1)!
  const group = infinitive.slice(-3)
  return infinitive.slice(0, -3) + (REGULAR_PARTICIPLE[group] ?? 'ato')
}

/** With essere the participle agrees: andato or andata for one person, andati or andate for more. */
function passatoProssimo(word: Word, infinitive: string, reflexive: boolean): string[][] {
  const masculine = participle(word, infinitive)
  const stem = masculine.slice(0, -1)
  const withEssere = reflexive || takesEssere(word)
  return PERSONS.map((_, person) => {
    if (!withEssere) return [`${AVERE[person]} ${masculine}`]
    const endings = person < 3 ? ['o', 'a'] : ['i', 'e']
    return endings.map((ending) => `${ESSERE[person]} ${stem}${ending}`)
  })
}

/** The six persons of a verb in one tense, with every accepted answer for each. */
export function conjugate(word: Word, tense: Tense): Conjugation {
  const reflexive = /rsi$/.test(word.italian)
  const infinitive = word.italian.replace(/rsi$/, 're')
  const ioPresent = verbForms(word)?.present.split(' ').at(-1)
  const forms: string[][] =
    tense === 'passato-prossimo'
      ? passatoProssimo(word, infinitive, reflexive)
      : (tense === 'presente' ? present(infinitive, ioPresent) : tense === 'imperfetto' ? imperfetto(infinitive) : futuro(infinitive)).map(
          (form) => [form],
        )
  if (!reflexive) return forms
  return forms.map((answers, person) => answers.map((answer) => `${REFLEXIVE_PRONOUNS[person]} ${answer}`))
}

/** Verbs that can be drilled: those with a single-word infinitive. */
export function isDrillable(word: Word): boolean {
  return word.kind === 'verb' && /^[a-zàèéìòù]+$/.test(word.italian)
}
