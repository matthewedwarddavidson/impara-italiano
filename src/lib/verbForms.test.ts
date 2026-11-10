import { describe, expect, it } from 'vitest'
import type { Word } from '../content/types'
import { isIrregular, takesEssere, verbForms } from './verbForms'

function verb(italian: string, forms: string): Word {
  return {
    id: italian,
    kind: 'verb',
    italian,
    forms,
    english: '',
    example: '',
    exampleEnglish: '',
    theme: 'daily-life',
    level: 'A1',
  }
}

describe('verbForms', () => {
  it('splits the io present and passato prossimo', () => {
    expect(verbForms(verb('andare', 'vado, sono andato'))).toEqual({ present: 'vado', perfect: 'sono andato' })
  })
})

describe('isIrregular', () => {
  it('spots irregular presents and participles', () => {
    expect(isIrregular(verb('andare', 'vado, sono andato'))).toBe(true)
    expect(isIrregular(verb('fare', 'faccio, ho fatto'))).toBe(true)
    expect(isIrregular(verb('prendere', 'prendo, ho preso'))).toBe(true)
    expect(isIrregular(verb('venire', 'vengo, sono venuto'))).toBe(true)
    expect(isIrregular(verb('essere', 'sono, sono stato'))).toBe(true)
  })

  it('leaves regular verbs out, including -isc- and reflexive verbs', () => {
    expect(isIrregular(verb('parlare', 'parlo, ho parlato'))).toBe(false)
    expect(isIrregular(verb('credere', 'credo, ho creduto'))).toBe(false)
    expect(isIrregular(verb('dormire', 'dormo, ho dormito'))).toBe(false)
    expect(isIrregular(verb('capire', 'capisco, ho capito'))).toBe(false)
    expect(isIrregular(verb('mangiare', 'mangio, ho mangiato'))).toBe(false)
    expect(isIrregular(verb('alzarsi', 'mi alzo, mi sono alzato'))).toBe(false)
    expect(isIrregular(verb('arrivare', 'arrivo, sono arrivato'))).toBe(false)
  })
})

describe('takesEssere', () => {
  it('reads the auxiliary from the passato prossimo', () => {
    expect(takesEssere(verb('andare', 'vado, sono andato'))).toBe(true)
    expect(takesEssere(verb('alzarsi', 'mi alzo, mi sono alzato'))).toBe(true)
    expect(takesEssere(verb('parlare', 'parlo, ho parlato'))).toBe(false)
  })
})
