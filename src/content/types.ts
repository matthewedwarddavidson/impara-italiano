import type { RecordedVoice } from '../lib/speechText'
export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'] as const
export type Level = (typeof LEVELS)[number]

export type ThemeId =
  | 'daily-life'
  | 'home'
  | 'work'
  | 'health'
  | 'travel'
  | 'media'
  | 'environment'
  | 'society'
  | 'education'
  | 'free-time'
  | 'relationships'
  | 'shopping'
  | 'food'
  | 'services'
  | 'general'
  | 'phrases'
  | 'own'

export interface Theme {
  id: ThemeId
  title: string
  english: string
}

export type WordKind = 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'preposition' | 'conjunction' | 'other'

export type Gender = 'm' | 'f'

/** Singular definite article. */
export type Article = 'il' | 'lo' | "l'" | 'la'

/** Plural definite article. */
export type PluralArticle = 'i' | 'gli' | 'le'

export interface Word {
  id: string
  /** When you added it, for your own words. */
  addedAt?: string
  kind: WordKind
  /** Lemma without article, e.g. "casa", "alzarsi". */
  italian: string
  gender?: Gender
  /** Nouns: the singular definite article, e.g. "lo" for "studente". */
  article?: Article
  /** Nouns: the plural without article, e.g. "case". Empty when the noun has no plural. */
  plural?: string
  /** Nouns: the plural definite article, which can differ in gender (l'uovo, le uova). */
  pluralArticle?: PluralArticle
  /** Verbs: the io form of the present and of the passato prossimo, e.g. "vado, sono andato". */
  forms?: string
  /** Preposition or construction the word takes, e.g. "a + infinitive". */
  usage?: string
  english: string
  /** Example sentence. Target word forms are wrapped in {braces}. */
  example: string
  exampleEnglish: string
  theme: ThemeId
  level: Level
}

export interface GrammarExplanationSection {
  heading: string
  /** Paragraphs in a small markdown subset: **bold**, *italic*, `code`. */
  body: string[]
  table?: { head: string[]; rows: string[][] }
  examples?: { it: string; en: string }[]
}

export type GrammarExercise =
  | {
      kind: 'gap'
      /** Sentence with one "___" gap. */
      prompt: string
      answers: string[]
      hint?: string
      explanation: string
    }
  | {
      kind: 'choice'
      prompt: string
      options: string[]
      answer: number
      explanation: string
    }
  | {
      kind: 'order'
      /** Words in correct order; shuffled when shown. */
      words: string[]
      /** Other accepted orders, as full sentences. */
      alternatives?: string[]
      english: string
      explanation: string
    }
  | {
      kind: 'transform'
      instruction: string
      prompt: string
      answers: string[]
      explanation: string
    }

export interface GrammarTopic {
  id: string
  title: string
  english: string
  level: Level
  summary: string
  sections: GrammarExplanationSection[]
  mistakes: { wrong: string; right: string; why: string }[]
  exercises: GrammarExercise[]
}

export type Question =
  | { kind: 'truefalse'; statement: string; answer: boolean; explanation?: string }
  | { kind: 'choice'; question: string; options: string[]; answer: number; explanation?: string }
  | { kind: 'open'; question: string; model: string }

export type TextGenre =
  'blog' | 'article' | 'email' | 'forum' | 'story' | 'notice' | 'interview' | 'dialogue' | 'announcement' | 'report'

export interface ReadingText {
  id: string
  title: string
  level: Level
  theme: ThemeId
  genre: TextGenre
  /** Paragraphs. */
  body: string[]
  /** Surface form in text (case-insensitive) → English gloss. */
  glossary: Record<string, string>
  questions: Question[]
}

export interface ListeningLine {
  speaker: string
  text: string
}

export interface ListeningText {
  id: string
  title: string
  level: Level
  theme: ThemeId
  genre: TextGenre
  /** What the learner is told before listening. */
  situation: string
  lines: ListeningLine[]
  /** Recorded voice per speaker; speakers without one get voices in turn. */
  voices?: Record<string, RecordedVoice>
  questions: Question[]
}

export type WritingFormat = 'informal-email' | 'formal-email' | 'forum' | 'essay' | 'story' | 'summary'

export interface WritingTask {
  id: string
  title: string
  level: Level
  theme: ThemeId
  format: WritingFormat
  /** The situation and instructions, in Italian. */
  instructions: string
  /** Content points the text must cover. */
  points: string[]
  minWords: number
  phrases: { it: string; en: string }[]
  model: string
}

