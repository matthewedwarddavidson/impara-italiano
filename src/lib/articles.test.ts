import { describe, expect, it } from 'vitest'
import { expectedArticle, expectedPluralArticle, splitArticle, withArticle } from './articles'

describe('expectedArticle', () => {
  it('gives il, lo and l’ for masculine nouns', () => {
    expect(expectedArticle('libro', 'm')).toBe('il')
    expect(expectedArticle('studente', 'm')).toBe('lo')
    expect(expectedArticle('zaino', 'm')).toBe('lo')
    expect(expectedArticle('gnomo', 'm')).toBe('lo')
    expect(expectedArticle('psicologo', 'm')).toBe('lo')
    expect(expectedArticle('yogurt', 'm')).toBe('lo')
    expect(expectedArticle('amico', 'm')).toBe("l'")
    expect(expectedArticle('hotel', 'm')).toBe("l'")
  })

  it('gives la and l’ for feminine nouns', () => {
    expect(expectedArticle('casa', 'f')).toBe('la')
    expect(expectedArticle('scuola', 'f')).toBe('la')
    expect(expectedArticle('amica', 'f')).toBe("l'")
  })

  it('treats i + vowel as a consonant sound', () => {
    expect(expectedArticle('iena', 'f')).toBe('la')
  })
})

describe('expectedPluralArticle', () => {
  it('gives i, gli and le', () => {
    expect(expectedPluralArticle('libri', 'm')).toBe('i')
    expect(expectedPluralArticle('studenti', 'm')).toBe('gli')
    expect(expectedPluralArticle('amici', 'm')).toBe('gli')
    expect(expectedPluralArticle('zii', 'm')).toBe('gli')
    expect(expectedPluralArticle('case', 'f')).toBe('le')
    expect(expectedPluralArticle('amiche', 'f')).toBe('le')
  })
})

describe('splitArticle and withArticle', () => {
  it("joins l' without a space", () => {
    expect(withArticle("l'", 'amico')).toBe("l'amico")
    expect(withArticle('lo', 'studente')).toBe('lo studente')
  })

  it('splits typed nouns', () => {
    expect(splitArticle("l'amico")).toEqual({ article: "l'", noun: 'amico' })
    expect(splitArticle('Lo studente')).toEqual({ article: 'lo', noun: 'studente' })
    expect(splitArticle('casa')).toEqual({ noun: 'casa' })
    expect(splitArticle('gli amici', true)).toEqual({ article: 'gli', noun: 'amici' })
  })
})
