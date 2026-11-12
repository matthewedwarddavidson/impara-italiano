import { describe, expect, it } from 'vitest'
import { connectorsUsed, countWords } from './writing'

describe('countWords', () => {
  it('counts words and numbers, not punctuation', () => {
    expect(countWords('Ciao Luca! Ho 32 anni — e tu?')).toBe(7)
  })
})

describe('connectorsUsed', () => {
  it('finds set phrases and apostrophe forms', () => {
    expect(connectorsUsed('Anche se piove, esco. D’altra parte, dato che…')).toEqual(['dato che', 'anche se', "d'altra parte"])
  })

  it('ignores connectors inside other words', () => {
    expect(connectorsUsed('Stasera mangiamo presto, mamma.')).toEqual([])
  })
})
