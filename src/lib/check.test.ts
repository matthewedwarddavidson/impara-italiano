import { describe, expect, it } from 'vitest'
import { checkAnswer, checkNoun, diffScore, diffWords, editDistance, normalise } from './check'

describe('normalise', () => {
  it('tidies spacing and final punctuation', () => {
    expect(normalise('  Vado  a casa . ')).toBe('Vado a casa')
  })
})

describe('editDistance', () => {
  it('counts edits', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3)
    expect(editDistance('', 'abc')).toBe(3)
    expect(editDistance('finestar', 'finestra')).toBe(1)
  })
})

describe('checkAnswer', () => {
  it('accepts exact answers and any listed alternative', () => {
    expect(checkAnswer('perché', ['perché']).verdict).toBe('correct')
    expect(checkAnswer('quando', ['se', 'quando']).verdict).toBe('correct')
  })

  it('treats a missing or wrong accent as nearly right', () => {
    const missing = checkAnswer('perche', ['perché'])
    expect(missing.verdict).toBe('almost')
    expect(missing.note).toMatch(/accent/)
    expect(checkAnswer('lui e qui', ['lui è qui']).verdict).toBe('almost')
    expect(checkAnswer('perchè', ['perché']).verdict).toBe('almost')
  })

  it('treats an apostrophe for an accent as nearly right', () => {
    const result = checkAnswer("citta'", ['città'])
    expect(result.verdict).toBe('almost')
    expect(result.note).toMatch(/apostrophe/)
  })

  it('treats a capitalisation slip as nearly right', () => {
    expect(checkAnswer('roma', ['Roma']).verdict).toBe('almost')
  })

  it('allows one typo in longer words but not short ones', () => {
    expect(checkAnswer('finestar', ['finestra']).verdict).toBe('almost')
    expect(checkAnswer('fnestra', ['finestra']).verdict).toBe('almost')
    expect(checkAnswer('fnesrta', ['finestra']).verdict).toBe('wrong')
    expect(checkAnswer('del', ['dal']).verdict).toBe('wrong')
  })

  it('treats a wrong ending as wrong, not a typo', () => {
    expect(checkAnswer('bello', ['bella']).verdict).toBe('wrong')
    expect(checkAnswer('le ragazze sono stanchi', ['le ragazze sono stanche']).verdict).toBe('wrong')
    expect(checkAnswer('parliamo', ['parlate']).verdict).toBe('wrong')
    expect(checkAnswer('ho andato', ['sono andato']).verdict).toBe('wrong')
  })

  it('still forgives a typo inside a longer sentence', () => {
    expect(checkAnswer('Apro la finestar', ['Apro la finestra']).verdict).toBe('almost')
  })

  it('flags missing commas', () => {
    expect(checkAnswer('Penso che sì ma non lo so', ['Penso che sì, ma non lo so.']).verdict).toBe('almost')
  })

  it('rejects empty input', () => {
    expect(checkAnswer('  ', ['sì']).verdict).toBe('wrong')
  })
})

describe('checkNoun', () => {
  it('needs the right gender', () => {
    expect(checkNoun('la casa', 'la', 'casa', 'f').verdict).toBe('correct')
    const wrongGender = checkNoun('il casa', 'la', 'casa', 'f')
    expect(wrongGender.verdict).toBe('wrong')
    expect(wrongGender.note).toMatch(/gender/)
  })

  it("accepts l' with or without a space, and any apostrophe", () => {
    expect(checkNoun("l'amico", "l'", 'amico', 'm').verdict).toBe('correct')
    expect(checkNoun("l' amico", "l'", 'amico', 'm').verdict).toBe('correct')
    expect(checkNoun('l’amico', "l'", 'amico', 'm').verdict).toBe('correct')
  })

  it('treats the right gender in the wrong form as nearly right', () => {
    const elision = checkNoun('il amico', "l'", 'amico', 'm')
    expect(elision.verdict).toBe('almost')
    expect(elision.note).toMatch(/l'/)
    expect(checkNoun('la amica', "l'", 'amica', 'f').verdict).toBe('almost')
    expect(checkNoun('il studente', 'lo', 'studente', 'm').verdict).toBe('almost')
    expect(checkNoun('la amico', "l'", 'amico', 'm').verdict).toBe('wrong')
  })

  it('marks a missing article as wrong with a note', () => {
    const result = checkNoun('casa', 'la', 'casa', 'f')
    expect(result.verdict).toBe('wrong')
    expect(result.note).toMatch(/article/)
  })

  it('accepts a capitalised article and tolerates a typo', () => {
    expect(checkNoun('La casa', 'la', 'casa', 'f').verdict).toBe('correct')
    expect(checkNoun('la finestar', 'la', 'finestra', 'f').verdict).toBe('almost')
  })
})

describe('diffWords', () => {
  it('marks every word right when the text matches', () => {
    const diff = diffWords('Non ho tempo', 'Non ho tempo.')
    expect(diff.every((token) => token.status === 'ok')).toBe(true)
    expect(diffScore(diff)).toBe(1)
  })

  it('finds wrong, missing and extra words', () => {
    const diff = diffWords('Non avevo tempo oggi', 'Non ho purtroppo tempo.')
    expect(diff).toEqual([
      { text: 'Non', status: 'ok' },
      { text: 'ho', status: 'wrong', typed: 'avevo' },
      { text: 'purtroppo', status: 'missing' },
      { text: 'tempo', status: 'ok' },
      { text: 'oggi', status: 'extra' },
    ])
  })
})
