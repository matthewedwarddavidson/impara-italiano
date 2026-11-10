import { RECORDED_VOICES, type RecordedVoice } from '../../lib/speechText'
import type { ListeningText } from '../types'

// A starter dialogue; listening practice is issue #18.
export const LISTENING_TEXTS: ListeningText[] = [
  {
    id: 'a1-al-bar',
    title: 'Al bar',
    level: 'A1',
    theme: 'food',
    genre: 'dialogue',
    situation: 'Sara orders breakfast at a café.',
    lines: [
      { speaker: 'Barista', text: 'Buongiorno! Cosa prende?' },
      { speaker: 'Sara', text: 'Buongiorno. Un cappuccino e un cornetto, per favore.' },
      { speaker: 'Barista', text: 'Il cornetto vuoto o alla crema?' },
      { speaker: 'Sara', text: 'Alla crema, grazie. Quant’è?' },
      { speaker: 'Barista', text: 'Sono tre euro e cinquanta.' },
      { speaker: 'Sara', text: 'Ecco a lei. Buona giornata!' },
    ],
    questions: [
      { kind: 'choice', question: 'Cosa beve Sara?', options: ['Un caffè', 'Un cappuccino', 'Un tè'], answer: 1 },
      { kind: 'choice', question: 'Quanto paga Sara?', options: ['€ 2,50', '€ 3,15', '€ 3,50'], answer: 2 },
    ],
  },
]

/** The voice for a speaker: as set in the script, otherwise the speakers take the voices in turn. */
export function voiceForSpeaker(text: ListeningText, speaker: string): RecordedVoice {
  const chosen = text.voices?.[speaker]
  if (chosen) return chosen
  const speakers = [...new Set(text.lines.map((line) => line.speaker))]
  return RECORDED_VOICES[speakers.indexOf(speaker) % RECORDED_VOICES.length]
}
