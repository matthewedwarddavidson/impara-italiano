import type { RecordedVoice } from '../../lib/speechText'
import type { Level, ListeningLine } from '../types'

/** One checkpoint item. Items are marked only at the end, as in an exam. */
export type ExamItem =
  | { kind: 'truefalse'; statement: string; answer: boolean }
  /** `context` is a short text of the item's own, such as a notice or a message. */
  | { kind: 'choice'; question: string; options: string[]; answer: number; context?: string }

export interface ExamText {
  title?: string
  /** Where the text comes from, e.g. "Da un quotidiano". */
  source?: string
  body: string[]
}

export interface ReadingPart {
  instructions: string
  /** The text every item refers to; left out when each item has its own context. */
  text?: ExamText
  items: ExamItem[]
}

export interface ExamScript {
  id: string
  lines: ListeningLine[]
  voices?: Record<string, RecordedVoice>
}

export interface ListeningPart {
  instructions: string
  /** How many times the recording may be played before marking. */
  plays: number
  script: ExamScript
  items: ExamItem[]
}

/** A level checkpoint modelled on CILS: a reading paper and a listening paper, each timed and scored out of 100. */
export interface Checkpoint {
  id: string
  level: Level
  reading: { minutes: number; parts: ReadingPart[] }
  listening: { minutes: number; parts: ListeningPart[] }
}

export type CheckpointModule = 'reading' | 'listening'
