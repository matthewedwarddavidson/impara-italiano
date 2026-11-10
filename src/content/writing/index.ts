import type { WritingTask } from '../types'

// A starter task; writing practice is issue #22.
export const WRITING_TASKS: WritingTask[] = [
  {
    id: 'a1-presentarsi',
    title: 'Presentati',
    level: 'A1',
    theme: 'daily-life',
    format: 'informal-email',
    instructions: 'Scrivi una breve email a un nuovo amico italiano. Presentati.',
    points: ['Come ti chiami e quanti anni hai', 'Di dove sei e dove abiti', 'Che lavoro fai', 'Cosa ti piace fare nel tempo libero'],
    minWords: 40,
    phrases: [
      { it: 'Mi chiamo …', en: 'My name is …' },
      { it: 'Ho … anni.', en: "I'm … years old." },
      { it: 'Sono di … ma abito a …', en: "I'm from … but I live in …" },
      { it: 'Faccio l’insegnante / il medico.', en: "I'm a teacher / a doctor." },
      { it: 'Nel tempo libero mi piace …', en: 'In my free time I like …' },
      { it: 'A presto!', en: 'Speak soon!' },
    ],
    model:
      'Ciao Luca! Mi chiamo Emma e ho trentadue anni. Sono inglese e abito vicino a Cambridge con mio marito e nostra figlia. Faccio l’infermiera in un ospedale. Nel tempo libero mi piace cucinare, leggere e camminare in campagna. Studio l’italiano perché amo l’Italia. E tu? A presto, Emma',
  },
]
