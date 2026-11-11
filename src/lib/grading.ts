import { GRAMMAR_TOPICS } from '../content/grammar'
import type { GrammarExercise, GrammarTopic, Word } from '../content/types'
import { splitArticle } from './articles'
import { studyOrder } from './cards'
import { checkAnswer, checkNoun, type CheckResult, type Verdict } from './check'
import { Rating, type Grade } from './srs'
import type { AppState } from './store'

export function suggestedGrade(verdict: Verdict): Grade {
  if (verdict === 'correct') return Rating.Good
  if (verdict === 'almost') return Rating.Hard
  return Rating.Again
}

export function checkWord(word: Word, typed: string): CheckResult {
  if (word.article && word.gender) return checkNoun(typed, word.article, word.italian, word.gender)
  const result = checkAnswer(typed, [word.italian])
  const reflexive = word.italian.match(/^(.*)rsi$/)
  if (result.verdict === 'wrong' && word.kind === 'verb' && reflexive) {
    const withoutSi = checkAnswer(typed, [`${reflexive[1]}re`])
    if (withoutSi.verdict !== 'wrong') {
      return { verdict: 'almost', expected: word.italian, note: `This verb is reflexive: ${word.italian}.` }
    }
  }
  return result
}

/** A noun answer split into its parts, so feedback can say which one was wrong. */
export interface NounParts {
  /** Right article; "wrong" covers the wrong gender and the wrong form (il amico). */
  article: Verdict
  noun: Verdict
  plural?: Verdict
}

export function checkNounParts(word: Word, typed: string, typedPlural?: string): NounParts {
  const singular = splitArticle(typed)
  const parts: NounParts = {
    article: articleVerdict(singular.article, word),
    noun: checkAnswer(singular.noun, [word.italian]).verdict,
  }
  if (typedPlural !== undefined && word.plural) {
    parts.plural = checkAnswer(splitArticle(typedPlural, true).noun, [word.plural]).verdict
  }
  return parts
}

/** Only the exact article is right: il amico is as wrong as la amico. */
function articleVerdict(typed: string | undefined, word: Word): Verdict {
  return typed && typed === word.article ? 'correct' : 'wrong'
}

/**
 * One verdict for the card. The word and its article decide it; a wrong plural alone
 * only lowers it to "almost", so the word isn't treated as forgotten.
 */
export function nounVerdict(parts: NounParts): Verdict {
  if (parts.article === 'wrong' || parts.noun === 'wrong') return 'wrong'
  if (parts.article === 'almost' || parts.noun === 'almost' || (parts.plural && parts.plural !== 'correct')) return 'almost'
  return 'correct'
}

/** Drops words that don't change the meaning, so "to recognise" matches "recognise". */
function withoutFillers(text: string): string {
  return text
    .trim()
    .replace(/^(to|a|an|the)\s+/i, '')
    .replace(/\s*\.\.\.|\s*…/g, '')
    .trim()
}

/** Each separate meaning in an English gloss such as "to lock; to complete (sth)". */
export function englishMeanings(english: string): string[] {
  const withoutBrackets = english.replace(/\([^)]*\)/g, '')
  return withoutBrackets
    .split(/[;,/]/)
    .map(withoutFillers)
    .filter((meaning) => meaning !== '')
}

/** Checks a typed English meaning against the gloss. A miss may still be a valid synonym. */
export function checkMeaning(word: Word, typed: string): CheckResult {
  return checkAnswer(withoutFillers(typed), englishMeanings(word.english))
}

/** The first topic not yet studied up to the target level, in study order. */
export function nextTopic(state: AppState): GrammarTopic | undefined {
  const target = state.settings.level
  const order = (topic: GrammarTopic) => studyOrder(topic.level, target) ?? Number.MAX_SAFE_INTEGER
  return [...GRAMMAR_TOPICS]
    .filter((topic) => studyOrder(topic.level, target) !== undefined && !(topic.id in state.grammar))
    .sort((a, b) => order(a) - order(b))[0]
}

/** The full correct sentence, for reading aloud after answering. */
export function solvedSentence(exercise: GrammarExercise): string {
  switch (exercise.kind) {
    case 'gap':
      return exercise.prompt.replace('___', exercise.answers[0])
    case 'choice':
      return exercise.prompt.includes('___')
        ? exercise.prompt.replace('___', exercise.options[exercise.answer])
        : exercise.options[exercise.answer]
    case 'order':
      return exercise.words.join(' ')
    case 'transform':
      return exercise.answers[0]
  }
}
