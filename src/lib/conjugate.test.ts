import { describe, expect, it } from 'vitest'
import { BUILT_IN_WORDS } from '../content/words'
import type { Word } from '../content/types'
import { conjugate, isDrillable } from './conjugate'
import { verbForms } from './verbForms'

function verb(italian: string, forms: string): Word {
  return { id: italian, kind: 'verb', italian, forms, english: '', example: '', exampleEnglish: '', theme: 'general', level: 'A1' }
}

const first = (forms: string[][]) => forms.map((answers) => answers[0])

describe('conjugate', () => {
  it('conjugates regular verbs in the present, with spelling changes', () => {
    expect(first(conjugate(verb('parlare', 'parlo, ho parlato'), 'presente'))).toEqual([
      'parlo', 'parli', 'parla', 'parliamo', 'parlate', 'parlano',
    ])
    expect(first(conjugate(verb('cercare', 'cerco, ho cercato'), 'presente'))).toEqual([
      'cerco', 'cerchi', 'cerca', 'cerchiamo', 'cercate', 'cercano',
    ])
    expect(first(conjugate(verb('mangiare', 'mangio, ho mangiato'), 'presente'))).toEqual([
      'mangio', 'mangi', 'mangia', 'mangiamo', 'mangiate', 'mangiano',
    ])
    expect(first(conjugate(verb('finire', 'finisco, ho finito'), 'presente'))).toEqual([
      'finisco', 'finisci', 'finisce', 'finiamo', 'finite', 'finiscono',
    ])
    expect(first(conjugate(verb('dormire', 'dormo, ho dormito'), 'presente'))[5]).toBe('dormono')
  })

  it('conjugates compounds like their base verb', () => {
    expect(first(conjugate(verb('ottenere', 'ottengo, ho ottenuto'), 'presente'))).toEqual([
      'ottengo', 'ottieni', 'ottiene', 'otteniamo', 'ottenete', 'ottengono',
    ])
    expect(first(conjugate(verb('riuscire', 'riesco, sono riuscito'), 'presente'))[3]).toBe('riusciamo')
    expect(first(conjugate(verb('tradurre', 'traduco, ho tradotto'), 'imperfetto'))[0]).toBe('traducevo')
    expect(first(conjugate(verb('proporre', 'propongo, ho proposto'), 'futuro'))[0]).toBe('proporrò')
    expect(first(conjugate(verb('raccogliere', 'raccolgo, ho raccolto'), 'presente'))[5]).toBe('raccolgono')
    expect(first(conjugate(verb('spedire', 'spedisco, ho spedito'), 'presente'))[0]).toBe('spedisco')
  })

  it('makes the passato prossimo with avere or essere, accepting both genders with essere', () => {
    expect(first(conjugate(verb('fare', 'faccio, ho fatto'), 'passato-prossimo'))[3]).toBe('abbiamo fatto')
    const andare = conjugate(verb('andare', 'vado, sono andato'), 'passato-prossimo')
    expect(andare[0]).toEqual(['sono andato', 'sono andata'])
    expect(andare[5]).toEqual(['sono andati', 'sono andate'])
  })

  it('adds reflexive pronouns and uses essere for reflexive verbs', () => {
    const alzarsi = verb('alzarsi', 'mi alzo, mi sono alzato')
    expect(first(conjugate(alzarsi, 'presente'))).toEqual([
      'mi alzo', 'ti alzi', 'si alza', 'ci alziamo', 'vi alzate', 'si alzano',
    ])
    expect(conjugate(alzarsi, 'passato-prossimo')[3]).toEqual(['ci siamo alzati', 'ci siamo alzate'])
  })

  it('makes the imperfetto, including essere and fare', () => {
    expect(first(conjugate(verb('avere', 'ho, ho avuto'), 'imperfetto'))[0]).toBe('avevo')
    expect(first(conjugate(verb('essere', 'sono, sono stato'), 'imperfetto'))[3]).toBe('eravamo')
    expect(first(conjugate(verb('fare', 'faccio, ho fatto'), 'imperfetto'))[5]).toBe('facevano')
  })

  it('makes the future, with spelling changes and irregular stems', () => {
    expect(first(conjugate(verb('parlare', 'parlo, ho parlato'), 'futuro'))[0]).toBe('parlerò')
    expect(first(conjugate(verb('pagare', 'pago, ho pagato'), 'futuro'))[1]).toBe('pagherai')
    expect(first(conjugate(verb('cominciare', 'comincio, ho cominciato'), 'futuro'))[2]).toBe('comincerà')
    expect(first(conjugate(verb('andare', 'vado, sono andato'), 'futuro'))[3]).toBe('andremo')
    expect(first(conjugate(verb('venire', 'vengo, sono venuto'), 'futuro'))[5]).toBe('verranno')
  })

  it('agrees with the io forms in the word bank for every drillable verb', () => {
    const mismatches = BUILT_IN_WORDS.filter(isDrillable).flatMap((word) => {
      const forms = verbForms(word)
      if (!forms) return []
      const present = conjugate(word, 'presente')[0][0]
      const perfect = conjugate(word, 'passato-prossimo')[0][0]
      return present === forms.present && perfect === forms.perfect
        ? []
        : [`${word.italian}: ${present}, ${perfect} ≠ ${forms.present}, ${forms.perfect}`]
    })
    expect(mismatches).toEqual([])
  })
})
