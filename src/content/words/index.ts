import { parseWords } from '../parseWords'
import type { ThemeId, Word } from '../types'
import { DAILY_LIFE, FOOD, HOME } from './a1'

const SOURCES: [ThemeId, string][] = [
  ['daily-life', DAILY_LIFE],
  ['home', HOME],
  ['food', FOOD],
]

export const BUILT_IN_WORDS: Word[] = SOURCES.flatMap(([theme, source]) => parseWords(source, theme))
