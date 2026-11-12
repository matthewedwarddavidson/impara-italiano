import { describe, expect, it } from 'vitest'
import { GRAMMAR_TOPICS } from './grammar'
import { LISTENING_TEXTS } from './listening'
import { READING_TEXTS } from './reading'
import type { Question } from './types'
import { WRITING_TASKS } from './writing'
import { countWords } from '../lib/writing'
import { BUILT_IN_WORDS } from './words'
import { expectedArticle, expectedPluralArticle } from '../lib/articles'
import ipaById from './ipa.json'

function checkQuestions(questions: Question[]): string[] {
  const problems: string[] = []
  for (const question of questions) {
    if (question.kind === 'choice' && (question.answer < 0 || question.answer >= question.options.length)) {
      problems.push(`answer out of range: ${question.question}`)
    }
  }
  return problems
}

describe('reading texts', () => {
  it('have unique ids', () => {
    const ids = READING_TEXTS.map((text) => text.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('only gloss words that appear in the text', () => {
    const missing: string[] = []
    for (const text of READING_TEXTS) {
      const body = [text.title, ...text.body].join(' ').toLowerCase()
      for (const key of Object.keys(text.glossary)) {
        if (!body.includes(key.toLowerCase())) missing.push(`${text.id}: ${key}`)
      }
    }
    expect(missing).toEqual([])
  })

  it('have valid questions', () => {
    expect(READING_TEXTS.flatMap((text) => checkQuestions(text.questions))).toEqual([])
  })
})

describe('listening texts', () => {
  it('have unique ids and valid questions', () => {
    const ids = LISTENING_TEXTS.map((text) => text.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(LISTENING_TEXTS.flatMap((text) => checkQuestions(text.questions))).toEqual([])
  })
})

describe('writing tasks', () => {
  it('have unique ids', () => {
    const ids = WRITING_TASKS.map((task) => task.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('have model answers at least as long as they ask for', () => {
    const short = WRITING_TASKS.filter((task) => countWords(task.model) < task.minWords).map(
      (task) => `${task.id}: ${countWords(task.model)} of ${task.minWords}`,
    )
    expect(short).toEqual([])
  })
})

describe('grammar topics', () => {
  it('have unique ids', () => {
    const ids = GRAMMAR_TOPICS.map((topic) => topic.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('have one gap in every gap exercise and at most one in choice exercises', () => {
    const bad: string[] = []
    for (const topic of GRAMMAR_TOPICS) {
      for (const exercise of topic.exercises) {
        const gaps = exercise.kind === 'gap' || exercise.kind === 'choice' ? exercise.prompt.split('___').length - 1 : 1
        if ((exercise.kind === 'gap' && gaps !== 1) || (exercise.kind === 'choice' && gaps > 1)) {
          bad.push(`${topic.id}: ${exercise.prompt}`)
        }
      }
    }
    expect(bad).toEqual([])
  })

  it('have valid choice answers and non-empty answer lists', () => {
    const bad: string[] = []
    for (const topic of GRAMMAR_TOPICS) {
      for (const exercise of topic.exercises) {
        if (exercise.kind === 'choice' && !exercise.options[exercise.answer])
          bad.push(`${topic.id}: ${exercise.prompt}`)
        if ((exercise.kind === 'gap' || exercise.kind === 'transform') && exercise.answers.length === 0) {
          bad.push(`${topic.id}: ${exercise.prompt}`)
        }
      }
    }
    expect(bad).toEqual([])
  })

  it('have no duplicate exercises within a topic', () => {
    const bad: string[] = []
    for (const topic of GRAMMAR_TOPICS) {
      const keys = topic.exercises.map((exercise) => JSON.stringify(exercise))
      if (new Set(keys).size !== keys.length) bad.push(topic.id)
    }
    expect(bad).toEqual([])
  })
})


describe('words', () => {
  it('have unique ids', () => {
    const ids = BUILT_IN_WORDS.map((word) => word.id)
    expect(ids.filter((id, index) => ids.indexOf(id) !== index)).toEqual([])
  })

  it('give every noun a gender and an article that follows the rules', () => {
    const bad = BUILT_IN_WORDS.filter((word) => word.kind === 'noun').filter(
      (word) => !word.gender || word.article !== expectedArticle(word.italian, word.gender),
    )
    expect(bad.map((word) => word.id)).toEqual([])
  })

  it('give plurals an article that follows the rules (nouns that change gender, like uova, are listed)', () => {
    const changesGender = new Set(['uovo', 'braccio', 'dito', 'orecchio'])
    const bad = BUILT_IN_WORDS.filter((word) => word.plural && word.gender && !changesGender.has(word.id)).filter(
      (word) => word.pluralArticle !== expectedPluralArticle(word.plural!, word.gender!),
    )
    expect(bad.map((word) => word.id)).toEqual([])
  })

  it('only have IPA for words that exist (rebuild with scripts/build-ipa.ts after renaming)', () => {
    const ids = new Set(BUILT_IN_WORDS.map((word) => word.id))
    expect(Object.keys(ipaById).filter((id) => !ids.has(id))).toEqual([])
  })

  it('mark the target word in every example', () => {
    expect(BUILT_IN_WORDS.filter((word) => !/\{[^}]+\}/.test(word.example)).map((word) => word.id)).toEqual([])
  })
})
