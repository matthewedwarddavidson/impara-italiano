import { describe, expect, it } from 'vitest'
import { LISTENING_TEXTS } from '../listening'
import { CHECKPOINTS } from './index'
import type { ExamItem } from './types'

const allItems = (checkpoint: (typeof CHECKPOINTS)[number]): ExamItem[] =>
  [...checkpoint.reading.parts, ...checkpoint.listening.parts].flatMap((part) => part.items)

describe('level checkpoints', () => {
  it('have one checkpoint per level and unique script ids', () => {
    const levels = CHECKPOINTS.map((checkpoint) => checkpoint.level)
    expect(new Set(levels).size).toBe(levels.length)
    const scriptIds = [
      ...LISTENING_TEXTS.map((text) => text.id),
      ...CHECKPOINTS.flatMap((checkpoint) => checkpoint.listening.parts.map((part) => part.script.id)),
    ]
    expect(new Set(scriptIds).size).toBe(scriptIds.length)
  })

  it('have valid answers', () => {
    const bad = CHECKPOINTS.flatMap(allItems).filter(
      (item) => item.kind === 'choice' && (item.answer < 0 || item.answer >= item.options.length),
    )
    expect(bad).toEqual([])
  })

  it('give every reading item a text to read', () => {
    for (const checkpoint of CHECKPOINTS) {
      for (const part of checkpoint.reading.parts) {
        const missing = part.items.filter((item) => !part.text && !(item.kind === 'choice' && item.context))
        expect(missing).toEqual([])
      }
    }
  })

  it('give every speaker a voice', () => {
    for (const checkpoint of CHECKPOINTS) {
      for (const part of checkpoint.listening.parts) {
        const unvoiced = part.script.lines.filter((line) => !part.script.voices?.[line.speaker])
        expect(unvoiced).toEqual([])
      }
    }
  })
})
