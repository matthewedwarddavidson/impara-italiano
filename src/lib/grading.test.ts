import { describe, expect, it } from 'vitest'
import type { Word } from '../content/types'
import { checkMeaning, checkNounParts, englishMeanings, nounVerdict } from './grading'

function wordWithMeaning(english: string): Word {
  return { english } as Word
}

describe('englishMeanings', () => {
  it('splits a gloss into separate meanings without fillers or brackets', () => {
    expect(englishMeanings('to lock; to complete')).toEqual(['lock', 'complete'])
    expect(englishMeanings('to lend; to borrow (sich)')).toEqual(['lend', 'borrow'])
    expect(englishMeanings('as … as possible')).toEqual(['as as possible'])
  })
})

describe('checkMeaning', () => {
  const word = wordWithMeaning('to recognise')

  it('accepts a meaning with or without "to"', () => {
    expect(checkMeaning(word, 'recognise').verdict).toBe('correct')
    expect(checkMeaning(word, 'to recognise').verdict).toBe('correct')
  })

  it('accepts any listed meaning', () => {
    expect(checkMeaning(wordWithMeaning('weather'), 'the weather').verdict).toBe('correct')
    expect(checkMeaning(wordWithMeaning('to swap, exchange'), 'exchange').verdict).toBe('correct')
  })

  it('treats a small typo as almost', () => {
    expect(checkMeaning(word, 'recognize').verdict).not.toBe('wrong')
  })

  it('rejects an unrelated answer', () => {
    expect(checkMeaning(word, 'forget').verdict).toBe('wrong')
  })
})

describe('checkNounParts', () => {
  const noun = { italian: 'amico', gender: 'm', article: "l'", plural: 'amici', pluralArticle: 'gli', kind: 'noun' } as Word

  it('marks article, word and plural separately', () => {
    expect(checkNounParts(noun, "l'amico", 'gli amici')).toEqual({
      article: 'correct',
      noun: 'correct',
      plural: 'correct',
    })
    expect(checkNounParts(noun, 'la amico', 'amici').article).toBe('wrong')
    expect(checkNounParts(noun, 'il amico', 'amici').article).toBe('wrong')
  })

  it('lets a wrong plural lower the grade without failing the word', () => {
    expect(nounVerdict(checkNounParts(noun, "l'amico", 'amichi'))).toBe('almost')
    expect(nounVerdict(checkNounParts(noun, 'il amico', 'amici'))).toBe('wrong')
    expect(nounVerdict(checkNounParts(noun, 'la amico', 'amici'))).toBe('wrong')
    expect(nounVerdict(checkNounParts(noun, "l'amico", 'amici'))).toBe('correct')
  })
})
