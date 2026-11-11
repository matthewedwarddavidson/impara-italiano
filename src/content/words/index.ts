import { parseWords } from '../parseWords'
import type { ThemeId, Word } from '../types'
import { DAILY_LIFE, FOOD, GENERAL, HOME, PHRASES } from './a1'
import { EDUCATION, ENVIRONMENT, FREE_TIME, HEALTH, RELATIONSHIPS, SERVICES, SHOPPING, TRAVEL, WORK } from './a1-topics'

const SOURCES: [ThemeId, string][] = [
  ['daily-life', DAILY_LIFE],
  ['home', HOME],
  ['food', FOOD],
  ['phrases', PHRASES],
  ['general', GENERAL],
  ['relationships', RELATIONSHIPS],
  ['shopping', SHOPPING],
  ['travel', TRAVEL],
  ['services', SERVICES],
  ['health', HEALTH],
  ['work', WORK],
  ['education', EDUCATION],
  ['free-time', FREE_TIME],
  ['environment', ENVIRONMENT],
]

export const BUILT_IN_WORDS: Word[] = SOURCES.flatMap(([theme, source]) => parseWords(source, theme))
