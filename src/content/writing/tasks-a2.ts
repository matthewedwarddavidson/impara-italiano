import type { WritingTask } from '../types'

/** A2: messages and short texts of 50–60 words, as in CILS A2. */
export const TASKS_A2: WritingTask[] = [
  {
    id: 'a2-fine-settimana',
    title: 'Il fine settimana',
    level: 'A2',
    theme: 'free-time',
    format: 'informal-email',
    instructions: 'La tua amica Giulia ti chiede: «Cosa hai fatto lo scorso fine settimana?» Rispondi con un’email (circa 50 parole).',
    points: ['Dove sei andato/a e con chi', 'Cosa avete fatto', 'Com’è stato', 'Chiedi a Giulia del suo fine settimana'],
    minWords: 50,
    phrases: [
      { it: 'Sabato sono andato/a a …', en: 'On Saturday I went to …' },
      { it: 'Abbiamo mangiato / visto / fatto …', en: 'We ate / saw / did …' },
      { it: 'Siamo tornati a casa tardi.', en: 'We came home late.' },
      { it: 'È stato bellissimo / un po’ noioso.', en: 'It was lovely / a bit boring.' },
      { it: 'E tu, cosa hai fatto?', en: 'What about you, what did you do?' },
      { it: 'Un bacio', en: 'Love (literally "a kiss")' },
    ],
    model:
      'Cara Giulia,\n\nsabato mattina sono andata al mercato con mia figlia e abbiamo comprato frutta e verdura. Il pomeriggio abbiamo fatto una passeggiata nel parco. Domenica sono venuti a pranzo i miei genitori: ho cucinato le lasagne e abbiamo giocato a carte. È stato un fine settimana tranquillo ma molto bello. E tu, cosa hai fatto?\n\nUn bacio,\nEmma',
  },
  {
    id: 'a2-dentista',
    title: 'Spostare un appuntamento',
    level: 'A2',
    theme: 'health',
    format: 'formal-email',
    instructions:
      'Hai un appuntamento dal dentista, il dottor Ferri, giovedì alle 10, ma non puoi andare. Scrivi un’email allo studio (circa 50 parole).',
    points: ['Spiega perché non puoi andare.', 'Chiedi scusa.', 'Proponi un altro giorno e un’altra ora.', 'Chiedi una conferma.'],
    minWords: 50,
    phrases: [
      { it: 'Gentile dottor Ferri,', en: 'Dear Dr Ferri,' },
      { it: 'Purtroppo giovedì non posso venire perché …', en: "Unfortunately I can't come on Thursday because …" },
      { it: 'Mi scusi per il disturbo.', en: 'Sorry for the trouble.' },
      { it: 'Sarebbe possibile spostare l’appuntamento a …?', en: 'Would it be possible to move the appointment to …?' },
      { it: 'Aspetto una sua conferma.', en: 'I look forward to your confirmation.' },
      { it: 'Cordiali saluti', en: 'Kind regards' },
    ],
    model:
      'Gentile dottor Ferri,\n\nho un appuntamento giovedì alle 10, ma purtroppo non posso venire perché devo lavorare tutto il giorno. Mi scusi per il disturbo. Sarebbe possibile spostare l’appuntamento a venerdì mattina o a lunedì pomeriggio? Lunedì per me va bene dopo le 14. Aspetto una sua conferma.\n\nCordiali saluti,\nEmma Clarke',
  },
  {
    id: 'a2-piatto-preferito',
    title: 'Il mio piatto preferito',
    level: 'A2',
    theme: 'food',
    format: 'forum',
    instructions: 'Su un forum di cucina, gli utenti parlano del loro piatto preferito. Scrivi un messaggio (circa 60 parole).',
    points: ['Qual è il tuo piatto preferito', 'Quali ingredienti servono', 'Come si prepara, in breve', 'Quando lo mangi e con chi'],
    minWords: 60,
    phrases: [
      { it: 'Il mio piatto preferito è …', en: 'My favourite dish is …' },
      { it: 'Servono …', en: 'You need …' },
      { it: 'Prima … poi … alla fine …', en: 'First … then … finally …' },
      { it: 'Si cuoce per venti minuti.', en: 'It cooks for twenty minutes.' },
      { it: 'Lo / La preparo quando …', en: 'I make it when …' },
      { it: 'Ve lo / Ve la consiglio!', en: 'I recommend it!' },
    ],
    model:
      'Il mio piatto preferito è la pasta al pomodoro, perché è semplice e buonissima. Servono spaghetti, pomodori, aglio, olio d’oliva, sale e basilico. Prima si fa scaldare l’olio con l’aglio, poi si aggiungono i pomodori e si cuoce il sugo per venti minuti. Alla fine si mette la pasta nel sugo con un po’ di basilico. La preparo ogni venerdì sera per tutta la famiglia. Ve la consiglio!',
  },
  {
    id: 'a2-infanzia',
    title: 'La mia infanzia',
    level: 'A2',
    theme: 'relationships',
    format: 'story',
    instructions: 'Scrivi un breve testo sulla tua infanzia (circa 60 parole).',
    points: ['Dove abitavi e com’era la casa', 'Com’era la tua famiglia', 'Cosa facevi dopo la scuola', 'Un ricordo speciale'],
    minWords: 60,
    phrases: [
      { it: 'Quando ero piccolo/a, abitavo a …', en: 'When I was little, I lived in …' },
      { it: 'Avevamo un giardino / un cane.', en: 'We had a garden / a dog.' },
      { it: 'Dopo la scuola giocavo con …', en: 'After school I used to play with …' },
      { it: 'Ogni estate andavamo …', en: 'Every summer we went …' },
      { it: 'Mi ricordo che …', en: 'I remember that …' },
      { it: 'Una volta …', en: 'Once …' },
    ],
    model:
      'Quando ero piccola abitavo in una casa vicino al mare con i miei genitori e mio fratello. Avevamo un grande giardino e un cane che si chiamava Max. Dopo la scuola giocavo in giardino o andavo in bicicletta con le mie amiche. Ogni estate andavamo in campeggio in Galles. Mi ricordo che una volta abbiamo dormito sulla spiaggia: è stata una notte magica!',
  },
  {
    id: 'a2-corso-firenze',
    title: 'Un corso di italiano a Firenze',
    level: 'A2',
    theme: 'education',
    format: 'formal-email',
    instructions:
      'Hai visto la pubblicità di una scuola di lingua a Firenze. Scrivi un’email alla scuola per chiedere informazioni (circa 60 parole).',
    points: [
      'Presentati e di’ perché scrivi.',
      'Di’ qual è il tuo livello di italiano.',
      'Chiedi quanto dura il corso e quanto costa.',
      'Chiedi se la scuola aiuta a trovare un alloggio.',
    ],
    minWords: 60,
    phrases: [
      { it: 'Gentili Signori,', en: 'Dear Sir or Madam,' },
      { it: 'Vi scrivo per avere informazioni su …', en: "I'm writing for information about …" },
      { it: 'Il mio livello è A2.', en: 'My level is A2.' },
      { it: 'Vorrei sapere quanto dura / quanto costa …', en: "I'd like to know how long … lasts / how much … costs" },
      { it: 'È possibile …?', en: 'Is it possible …?' },
      { it: 'In attesa di una vostra risposta, vi saluto cordialmente.', en: 'I look forward to your reply. Kind regards.' },
    ],
    model:
      'Gentili Signori,\n\nmi chiamo Emma Clarke e sono inglese. Vi scrivo perché vorrei frequentare un corso di italiano nella vostra scuola a luglio. Studio l’italiano da un anno e il mio livello è A2. Vorrei sapere quanto dura il corso, quante ore di lezione ci sono al giorno e quanto costa. È possibile anche avere una camera in famiglia?\n\nIn attesa di una vostra risposta, vi saluto cordialmente.\nEmma Clarke',
  },
  {
    id: 'a2-regalo',
    title: 'Un regalo per la mamma',
    level: 'A2',
    theme: 'shopping',
    format: 'informal-email',
    instructions:
      'Tra due settimane è il compleanno di tua madre. Scrivi a tua sorella Chiara per decidere il regalo (circa 50 parole).',
    points: ['Proponi un’idea per il regalo.', 'Di’ quanto potete spendere.', 'Proponi un giorno per andare a fare spese insieme.'],
    minWords: 50,
    phrases: [
      { it: 'Cara Chiara, …', en: 'Dear Chiara, …' },
      { it: 'Che ne dici di …?', en: 'How about …?' },
      { it: 'Secondo me le piacerebbe …', en: "I think she'd like …" },
      { it: 'Possiamo spendere al massimo … euro.', en: 'We can spend … euros at most.' },
      { it: 'Perché non andiamo …?', en: "Why don't we go …?" },
      { it: 'Fammi sapere!', en: 'Let me know!' },
    ],
    model:
      'Cara Chiara,\n\ntra due settimane è il compleanno della mamma. Che ne dici di comprarle una bella borsa? La sua è molto vecchia. Oppure possiamo regalarle un libro di cucina e dei fiori. Possiamo spendere al massimo cinquanta euro ciascuna. Perché non andiamo in centro insieme sabato mattina? Dopo possiamo prendere un caffè.\n\nFammi sapere!\nEmma',
  },
]
