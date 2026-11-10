import type { Article, Gender, PluralArticle, Word } from '../content/types'

/** Words starting with a vowel (or a silent h) take l' and gli. */
function startsWithVowel(word: string): boolean {
  return /^[aeiouàèéìòùh]/i.test(word)
}

/** Masculine words starting with s + consonant, z, gn, ps, pn, x, y or i + vowel take lo and gli. */
function takesLo(word: string): boolean {
  return /^(s[^aeiouàèéìòù]|z|gn|ps|pn|x|y|i[aeiou])/i.test(word)
}

/** The singular definite article the rules give for a noun: il libro, lo studente, l'amico, la casa, l'amica. */
export function expectedArticle(noun: string, gender: Gender): Article {
  if (startsWithVowel(noun) && !/^i[aeiou]/i.test(noun)) return "l'"
  if (gender === 'f') return 'la'
  return takesLo(noun) ? 'lo' : 'il'
}

/** The plural definite article the rules give: i libri, gli studenti, gli amici, le case. */
export function expectedPluralArticle(plural: string, gender: Gender): PluralArticle {
  if (gender === 'f') return 'le'
  return startsWithVowel(plural) || takesLo(plural) ? 'gli' : 'i'
}

export function articleGender(article: Article | PluralArticle): Gender | undefined {
  if (article === 'il' || article === 'lo' || article === 'i' || article === 'gli') return 'm'
  if (article === 'la' || article === 'le') return 'f'
  return undefined
}

/** Joins an article and a word: l' attaches without a space. */
export function withArticle(article: string, noun: string): string {
  return article.endsWith("'") ? `${article}${noun}` : `${article} ${noun}`
}

/** The noun as shown on a card, with its article, e.g. "l'amico", "lo studente". */
export function nounWithArticle(word: Word): string {
  return word.article ? withArticle(word.article, word.italian) : word.italian
}

export function pluralWithArticle(word: Word): string {
  return word.plural && word.pluralArticle ? withArticle(word.pluralArticle, word.plural) : ''
}

const SINGULAR_ARTICLES = ['il', 'lo', "l'", 'la']
const PLURAL_ARTICLES = ['i', 'gli', 'le']

/** Splits a typed noun into its article and the rest: "l'amico", "l' amico" and "lo studente" all work. */
export function splitArticle(typed: string, plural = false): { article?: string; noun: string } {
  const text = typed.trim().replace(/[‘’`´]/g, "'")
  const elided = text.match(/^l'\s*(.*)$/i)
  if (elided && !plural) return { article: "l'", noun: elided[1] }
  const [first = '', ...rest] = text.split(/\s+/)
  const articles = plural ? PLURAL_ARTICLES : SINGULAR_ARTICLES
  if (articles.includes(first.toLowerCase()) && rest.length > 0) {
    return { article: first.toLowerCase(), noun: rest.join(' ') }
  }
  return { noun: text }
}

/** Why an article of the right gender is still the wrong form, e.g. "il amico". */
export function articleFormNote(expected: string): string {
  if (expected === "l'") return "Before a vowel, il and la become l'."
  if (expected === 'lo') return 'Masculine words starting with s + consonant, z, gn or ps take lo.'
  if (expected === 'gli') return 'Masculine plurals starting with a vowel, s + consonant, z, gn or ps take gli.'
  return `This word takes ${expected}.`
}
