import { describe, expect, it } from 'vitest'
import { READING_TEXTS } from '../content/reading'
import { coverageBand, knownShare } from './coverage'
import { initialState } from './store'

describe('knownShare', () => {
  it('counts glossed words as unknown', () => {
    const state = initialState()
    const text = READING_TEXTS[0]
    expect(knownShare(text, state)).toBeLessThan(1)
    expect(knownShare({ ...text, glossary: {} }, state)).toBeGreaterThan(knownShare(text, state))
  })

  it('bands shares by the 95% and 98% thresholds', () => {
    expect(coverageBand(0.99)).toBe('easy')
    expect(coverageBand(0.96)).toBe('study')
    expect(coverageBand(0.9)).toBe('hard')
  })
})
