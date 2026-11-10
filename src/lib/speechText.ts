/**
 * Shared by the app and the audio build script, so a sentence spoken in the
 * app finds the recording made for it.
 */

/**
 * Recorded voices, to be made with Chatterbox (MIT) and cloned from public-domain LibriVox readers
 * (issue #20). Until then there are no recordings and every text uses the browser's voice.
 */
export const RECORDED_VOICES = ['giulia', 'marco', 'chiara', 'luca'] as const
export type RecordedVoice = (typeof RECORDED_VOICES)[number]

export const FEMALE_VOICES: RecordedVoice[] = ['giulia', 'chiara']

/** Sentences are read by Giulia. */
export const DEFAULT_VOICE: RecordedVoice = 'giulia'

/** Single words and short phrases are read by Marco. */
export const WORD_VOICE: RecordedVoice = 'marco'

/**
 * The voice for a text with no speaker: Marco for words, short phrases and lists of
 * verb forms (no full stop, at most six words), Giulia for sentences.
 */
export function defaultVoiceFor(text: string): RecordedVoice {
  const clean = cleanForSpeech(text)
  const words = clean.split(' ').length
  const isSentence = /[.!?…]["“”»]?$/.test(clean)
  return words < 3 || (!isSentence && words <= 6) ? WORD_VOICE : DEFAULT_VOICE
}

/** Strips formatting marks and bracketed hints, and tidies whitespace, so the same sentence always has the same key. */
export function cleanForSpeech(text: string): string {
  return text
    .normalize('NFC')
    .replace(/\*+/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** The text hashed to name a recording. */
export function recordingSource(voice: RecordedVoice, text: string): string {
  return `${voice}|${cleanForSpeech(text)}`
}

export function toHex(bytes: ArrayBuffer): string {
  return [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

/** Recordings are named by the first 16 hex characters of the SHA-1 of their source. */
export const KEY_LENGTH = 16
