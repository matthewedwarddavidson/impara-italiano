import { parseWords } from '../parseWords'
import type { ThemeId, Word } from '../types'
import { DAILY_LIFE, FOOD, GENERAL, HOME, PHRASES } from './a1'
import { EDUCATION, ENVIRONMENT, FREE_TIME, HEALTH, RELATIONSHIPS, SERVICES, SHOPPING, TRAVEL, WORK } from './a1-topics'
import * as A2 from './a2'

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
  ['daily-life', A2.A2_DAILY_LIFE],
  ['home', A2.A2_HOME],
  ['food', A2.A2_FOOD],
  ['phrases', A2.A2_PHRASES],
  ['general', A2.A2_GENERAL],
  ['relationships', A2.A2_RELATIONSHIPS],
  ['shopping', A2.A2_SHOPPING],
  ['travel', A2.A2_TRAVEL],
  ['services', A2.A2_SERVICES],
  ['health', A2.A2_HEALTH],
  ['work', A2.A2_WORK],
  ['education', A2.A2_EDUCATION],
  ['free-time', A2.A2_FREE_TIME],
  ['environment', A2.A2_ENVIRONMENT],
  ['media', A2.A2_MEDIA],
  ['society', A2.A2_SOCIETY],
]

export const BUILT_IN_WORDS: Word[] = SOURCES.flatMap(([theme, source]) => parseWords(source, theme))
