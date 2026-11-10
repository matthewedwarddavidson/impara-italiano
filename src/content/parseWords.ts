import { articleGender, nounWithArticle, splitArticle } from '../lib/articles'
import type { Article, Gender, Level, PluralArticle, ThemeId, Word, WordKind } from './types'

const KINDS: Record<string, WordKind> = {
  N: 'noun',
  V: 'verb',
  ADJ: 'adjective',
  ADV: 'adverb',
  P: 'phrase',
  PREP: 'preposition',
  CONG: 'conjunction',
  X: 'other',
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Parses a word list. One word per line, seven fields separated by "|":
 *
 *   KIND | italian | grammar | usage | english | example | example in English
 *
 * KIND is N, V, ADJ, ADV, P, PREP, CONG or X. Nouns start with their article
 * (il libro, lo studente, la casa); after l' add the gender: "l'amico m",
 * "l'acqua f". Their "grammar" field is the plural with its article
 * ("i libri", "le uova"), or "–" for none. Verbs give the io present and
 * passato prossimo there ("vado, sono andato"). Lines starting with "# A1"
 * etc. set the level for what follows.
 */
export function parseWords(source: string, theme: ThemeId): Word[] {
  let level: Level = 'A2'
  const words: Word[] = []

  for (const rawLine of source.split('\n')) {
    const line = rawLine.trim()
    if (!line) continue
    const levelMatch = line.match(/^#\s*(A1|A2|B1|B2|C1)\b/)
    if (levelMatch) {
      level = levelMatch[1] as Level
      continue
    }
    if (line.startsWith('#')) continue

    const fields = line.split('|').map((field) => field.trim())
    if (fields.length !== 7) {
      throw new Error(`Expected 7 fields in ${theme} word list, got ${fields.length}: ${line}`)
    }
    const [kindCode, italianField, grammar, usage, english, example, exampleEnglish] = fields
    const kind = KINDS[kindCode]
    if (!kind) throw new Error(`Unknown word kind "${kindCode}": ${line}`)

    const word: Word = { id: '', kind, italian: italianField, english, example, exampleEnglish, theme, level }
    if (kind === 'noun') Object.assign(word, parseNoun(italianField, grammar, line))
    else if (grammar && grammar !== '–') {
      word.forms = grammar
    }
    if (usage) word.usage = usage
    word.id = kind === 'noun' ? slugify(word.italian) : `${slugify(word.italian)}-${kind}`
    words.push(word)
  }
  return words
}

/** "la casa" | "le case" → article, gender, noun and plural. */
function parseNoun(field: string, grammar: string, line: string): Partial<Word> {
  const genderMark = field.match(/\s+([mf])$/)
  const singular = splitArticle(field.replace(/\s+[mf]$/, ''))
  const article = singular.article as Article | undefined
  if (!article) throw new Error(`Noun without article: ${line}`)
  const gender = (genderMark?.[1] as Gender | undefined) ?? articleGender(article)
  if (!gender) throw new Error(`Give the gender after l' (m or f): ${line}`)
  if (grammar === '–') return { article, gender, italian: singular.noun, plural: '' }
  const plural = splitArticle(grammar, true)
  if (!plural.article) throw new Error(`Plural without article: ${line}`)
  return { article, gender, italian: singular.noun, plural: plural.noun, pluralArticle: plural.article as PluralArticle }
}

/** The word as shown on a card, with its article for nouns. */
export function displayItalian(word: Word): string {
  return nounWithArticle(word)
}

/** Removes the {braces} that mark the target word in an example. */
export function plainExample(example: string): string {
  return example.replace(/[{}]/g, '')
}

/** Splits an example into text and gaps, for cloze practice. */
export function clozeParts(example: string): { text: string; gap: boolean }[] {
  return example
    .split(/(\{[^}]+\})/)
    .filter(Boolean)
    .map((part) => (part.startsWith('{') ? { text: part.slice(1, -1), gap: true } : { text: part, gap: false }))
}
