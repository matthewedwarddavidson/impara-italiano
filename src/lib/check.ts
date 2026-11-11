export type Verdict = 'correct' | 'almost' | 'wrong'

export interface CheckResult {
  verdict: Verdict
  /** The accepted answer closest to what was typed. */
  expected: string
  note?: string
}

import { articleFormNote, articleGender, splitArticle, withArticle } from './articles'
import type { Article, Gender } from '../content/types'

/** Tidies spacing, quotes and dashes, and drops final punctuation. */
export function normalise(text: string): string {
  return text
    .normalize('NFC')
    .replace(/[‘’‚`´]/g, "'")
    .replace(/[“”„«»]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim()
    .replace(/[.!?]+$/, '')
    .trim()
}

/** Marking choices from Settings, set by the app whenever they change. */
const marking = { strictAccents: false }

/** With strict accents on, a missing or wrong accent is wrong instead of nearly right. */
export function setStrictAccents(strict: boolean) {
  marking.strictAccents = strict
}

function accentMistake(expected: string, note: string): CheckResult {
  return { verdict: marking.strictAccents ? 'wrong' : 'almost', expected, note }
}

function withoutCommas(text: string): string {
  return text.replace(/,/g, '').replace(/\s+/g, ' ')
}

/** Removes accents, so "perche" and "perché" compare equal. */
function withoutAccents(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC')
}

/** Turns an apostrophe typed for an accent into the accent: "e'" → "è", "perche'" → "perchè". */
function apostrophesAsAccents(text: string): string {
  const accents: Record<string, string> = { a: 'à', e: 'è', i: 'ì', o: 'ò', u: 'ù' }
  return text.replace(/([aeiou])'(?=\s|$|[,.!?;:])/gi, (_, vowel: string) => accents[vowel.toLowerCase()] ?? vowel)
}

/** Edit distance where swapping two neighbouring letters counts as one edit, like other typos. */
export function editDistance(a: string, b: string): number {
  const rows = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  )
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + cost)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        rows[i][j] = Math.min(rows[i][j], rows[i - 2][j - 2] + 1)
      }
    }
  }
  return rows[a.length][b.length]
}

function allowedTypos(length: number): number {
  if (length >= 12) return 2
  if (length >= 5) return 1
  return 0
}

function compareOne(given: string, expected: string): CheckResult {
  const typed = normalise(given)
  const target = normalise(expected)

  if (typed === target) return { verdict: 'correct', expected }

  if (withoutCommas(typed) === withoutCommas(target)) {
    return { verdict: 'almost', expected, note: 'Check the commas.' }
  }
  if (typed.toLowerCase() === target.toLowerCase()) {
    return { verdict: 'almost', expected, note: 'Check capital letters.' }
  }
  if (apostrophesAsAccents(typed) === target) {
    return accentMistake(expected, 'Use the accented letter (è, à, ò…) rather than an apostrophe.')
  }
  if (withoutAccents(typed).toLowerCase() === withoutAccents(target).toLowerCase()) {
    return accentMistake(expected, 'Check the accents.')
  }
  if (isTypo(typed.toLowerCase(), target.toLowerCase())) {
    return { verdict: 'almost', expected, note: 'Small spelling mistake.' }
  }
  return { verdict: 'wrong', expected }
}

/** Italian endings that carry gender, number or person: a wrong one is a grammar mistake, not a typo. */
const ENDING = /(o|a|i|e|ano|ono|iamo|ate|ete|ite)$/

/**
 * A slip of the keyboard, not a grammar mistake: exactly one word differs, it
 * is long enough to judge, it is off by a letter or two, and the difference
 * is not an inflectional ending (libro/libri, parlo/parla stay wrong).
 */
function isTypo(typed: string, target: string): boolean {
  const typedWords = typed.split(' ')
  const targetWords = target.split(' ')
  if (typedWords.length !== targetWords.length) return false
  const differing = targetWords
    .map((word, index) => [typedWords[index], word] as const)
    .filter(([typedWord, targetWord]) => typedWord !== targetWord)
  if (differing.length !== 1) return false
  const [typedWord, targetWord] = differing[0]
  if (targetWord.length < 5) return false
  if (typedWord.replace(ENDING, '') === targetWord.replace(ENDING, '')) return false
  const distance = editDistance(typedWord, targetWord)
  return distance > 0 && distance <= allowedTypos(targetWord.length)
}

const VERDICT_RANK: Record<Verdict, number> = { correct: 2, almost: 1, wrong: 0 }

/** Checks a typed answer against every accepted answer and returns the best match. */
export function checkAnswer(given: string, accepted: string[]): CheckResult {
  if (normalise(given) === '') return { verdict: 'wrong', expected: accepted[0], note: 'No answer.' }
  let best: CheckResult | undefined
  for (const answer of accepted) {
    const result = compareOne(given, answer)
    if (!best || VERDICT_RANK[result.verdict] > VERDICT_RANK[best.verdict]) best = result
    if (result.verdict === 'correct') break
  }
  return best!
}

/**
 * Checks a noun typed with its article. A missing article or the wrong gender is wrong,
 * because gender is part of knowing the word. The right gender in the wrong form
 * (il amico for l'amico) is wrong too, with a note on the rule.
 */
export function checkNoun(given: string, article: Article, noun: string, gender: Gender): CheckResult {
  const expected = withArticle(article, noun)
  const typed = splitArticle(normalise(given))
  const nounResult = compareOne(typed.noun, noun)

  if (!typed.article) {
    if (nounResult.verdict !== 'wrong') {
      return { verdict: 'wrong', expected, note: `Right word, but learn it with its article: ${expected}.` }
    }
    return { verdict: 'wrong', expected }
  }
  if (nounResult.verdict === 'wrong') return { verdict: 'wrong', expected }
  if (typed.article === article) return { ...nounResult, expected }

  const typedGender = articleGender(typed.article as Article)
  if (typedGender && typedGender !== gender) {
    return { verdict: 'wrong', expected, note: `Wrong gender: it's ${expected}.` }
  }
  return { verdict: 'wrong', expected, note: articleFormNote(article) }
}

export type TokenStatus = 'ok' | 'wrong' | 'missing' | 'extra'

export interface TokenDiff {
  text: string
  status: TokenStatus
  /** For wrong tokens: what was typed. */
  typed?: string
}

function tokenise(text: string, keepPunctuation: boolean): string[] {
  const tokens = text.normalize('NFC').replace(/[–—]/g, '-').split(/\s+/)
  const cleaned = keepPunctuation ? tokens : tokens.map((token) => token.replace(/^["“»«(]+|[.,!?;:"“”»«)]+$/g, ''))
  return cleaned.filter(Boolean)
}

/**
 * Word-by-word comparison. Uses the longest common subsequence to line the two
 * texts up. Case always counts; punctuation is ignored unless asked for.
 */
export function diffWords(typed: string, expected: string, keepPunctuation = false): TokenDiff[] {
  const typedTokens = tokenise(typed, keepPunctuation)
  const expectedTokens = tokenise(expected, keepPunctuation)
  const rows = typedTokens.length
  const cols = expectedTokens.length
  const lengths = Array.from({ length: rows + 1 }, () => new Array<number>(cols + 1).fill(0))
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      lengths[i][j] =
        typedTokens[i] === expectedTokens[j]
          ? lengths[i + 1][j + 1] + 1
          : Math.max(lengths[i + 1][j], lengths[i][j + 1])
    }
  }

  const result: TokenDiff[] = []
  let i = 0
  let j = 0
  while (i < rows && j < cols) {
    if (typedTokens[i] === expectedTokens[j]) {
      result.push({ text: expectedTokens[j], status: 'ok' })
      i++
      j++
    } else if (lengths[i + 1][j] === lengths[i][j + 1] && lengths[i + 1][j + 1] === lengths[i][j]) {
      // Neither skip helps: treat as a substitution.
      result.push({ text: expectedTokens[j], status: 'wrong', typed: typedTokens[i] })
      i++
      j++
    } else if (lengths[i + 1][j] >= lengths[i][j + 1]) {
      result.push({ text: typedTokens[i], status: 'extra' })
      i++
    } else {
      result.push({ text: expectedTokens[j], status: 'missing' })
      j++
    }
  }
  while (j < cols) result.push({ text: expectedTokens[j++], status: 'missing' })
  while (i < rows) result.push({ text: typedTokens[i++], status: 'extra' })
  return result
}

export function diffScore(diff: TokenDiff[]): number {
  const expectedCount = diff.filter((token) => token.status !== 'extra').length
  const correct = diff.filter((token) => token.status === 'ok').length
  const extra = diff.filter((token) => token.status === 'extra').length
  if (expectedCount === 0) return 0
  return Math.max(0, (correct - extra * 0.5) / expectedCount)
}
