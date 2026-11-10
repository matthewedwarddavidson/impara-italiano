import type { ReadingText } from '../types'

// A starter text; graded texts are issue #17.
export const READING_TEXTS: ReadingText[] = [
  {
    id: 'a1-messaggio-giulia',
    title: 'Un messaggio da Giulia',
    level: 'A1',
    theme: 'daily-life',
    genre: 'email',
    body: [
      'Ciao Anna, come stai? Io sto bene. Domani vado a Firenze con mio fratello Marco. Partiamo alle otto con il treno.',
      'A Firenze visitiamo il museo e mangiamo in una piccola trattoria vicino al Duomo. Torniamo a casa domenica sera.',
      'Sei libera sabato prossimo? Possiamo prendere un caffè insieme. Un abbraccio, Giulia',
    ],
    glossary: {
      'come stai': 'how are you',
      'sto bene': "I'm well",
      fratello: 'brother',
      partiamo: 'we leave',
      treno: 'train',
      visitiamo: 'we visit',
      trattoria: 'small, simple restaurant',
      'vicino al': 'near the',
      torniamo: 'we come back',
      libera: 'free',
      abbraccio: 'hug',
    },
    questions: [
      { kind: 'truefalse', statement: 'Giulia va a Firenze da sola.', answer: false, explanation: 'She goes with her brother Marco.' },
      { kind: 'choice', question: 'Come va a Firenze Giulia?', options: ['In macchina', 'In treno', 'In aereo'], answer: 1 },
      { kind: 'truefalse', statement: 'Giulia torna a casa domenica.', answer: true },
    ],
  },
]
