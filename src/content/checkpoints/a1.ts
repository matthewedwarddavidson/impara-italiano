import type { Checkpoint } from './types'

export const CHECKPOINT_A1: Checkpoint = {
  id: 'checkpoint-a1',
  level: 'A1',
  reading: {
    minutes: 30,
    parts: [
      {
        instructions: 'Leggi i testi. Per ogni testo scegli la risposta giusta.',
        items: [
          {
            kind: 'choice',
            context: 'FARMACIA COMUNALE\nAperta dal lunedì al sabato, 8.30–13.00 e 15.30–19.30.\nDomenica chiuso.',
            question: 'La farmacia …',
            options: ['è aperta la domenica mattina.', 'chiude a pranzo.', 'è aperta tutto il giorno senza pause.'],
            answer: 1,
          },
          {
            kind: 'choice',
            context: 'Ciao Marta, stasera non posso venire al cinema perché sono malata. Andiamo sabato? Baci, Elena',
            question: 'Elena …',
            options: ['propone un altro giorno.', 'va al cinema stasera.', 'invita Marta a casa sua.'],
            answer: 0,
          },
          {
            kind: 'choice',
            context: 'AFFITTASI monolocale in centro, arredato, 450 euro al mese. Vicino alla stazione. Telefonare solo la sera.',
            question: 'Quando si può telefonare?',
            options: ['La mattina.', 'All’ora di pranzo.', 'La sera.'],
            answer: 2,
          },
          {
            kind: 'choice',
            context: 'Avviso ai clienti: il ristorante è chiuso per ferie dal 10 al 25 agosto. Riapriamo il 26 agosto. Grazie!',
            question: 'Il ristorante …',
            options: ['è chiuso tutto agosto.', 'chiude il 26 agosto.', 'riapre il 26 agosto.'],
            answer: 2,
          },
          {
            kind: 'choice',
            context: 'Treno regionale 3245 per Firenze: partenza ore 10.15 dal binario 4. Il treno ha 20 minuti di ritardo.',
            question: 'Il treno per Firenze parte …',
            options: ['alle 10.15.', 'alle 10.35.', 'dal binario 20.'],
            answer: 1,
          },
        ],
      },
      {
        instructions: 'Leggi l’email. Le frasi sono vere o false?',
        text: {
          title: 'Una nuova vita a Bologna',
          source: 'Email di Paolo',
          body: [
            'Cara Anna, come stai? Io sto bene. Da un mese abito a Bologna con mia moglie Lucia. Abbiamo un appartamento piccolo ma molto carino, al secondo piano, vicino all’università.',
            'Lavoro in una banca in centro. Comincio alle otto e mezza e finisco alle cinque. Vado al lavoro a piedi: sono solo dieci minuti. Lucia invece lavora in un ospedale fuori città e prende l’autobus.',
            'Il sabato andiamo al mercato e la sera mangiamo spesso in una piccola trattoria sotto casa. La domenica dormiamo fino a tardi! Quando vieni a trovarci? Un abbraccio, Paolo',
          ],
        },
        items: [
          { kind: 'truefalse', statement: 'Paolo abita a Bologna da un anno.', answer: false },
          { kind: 'truefalse', statement: 'L’appartamento è vicino all’università.', answer: true },
          { kind: 'truefalse', statement: 'Paolo lavora in un ospedale.', answer: false },
          { kind: 'truefalse', statement: 'Paolo va al lavoro a piedi.', answer: true },
          { kind: 'truefalse', statement: 'La domenica Paolo e Lucia si alzano presto.', answer: false },
        ],
      },
      {
        instructions: 'Leggi il testo e scegli la risposta giusta.',
        text: {
          title: 'La sagra della castagna',
          source: 'Dal giornale locale',
          body: [
            'Sabato 18 e domenica 19 ottobre a Montefiore c’è la sagra della castagna. La festa comincia sabato alle 16 in piazza Garibaldi, con musica e balli fino a mezzanotte.',
            'Domenica mattina c’è un mercato di prodotti locali: formaggi, miele, pane e, naturalmente, castagne. A pranzo si può mangiare sotto un grande tendone: il menù costa 15 euro, per i bambini 8 euro.',
            'Per arrivare a Montefiore da Ancona ci sono autobus ogni ora. Il parcheggio vicino alla piazza è gratuito.',
          ],
        },
        items: [
          {
            kind: 'choice',
            question: 'La festa comincia …',
            options: ['sabato pomeriggio.', 'sabato a mezzanotte.', 'domenica mattina.'],
            answer: 0,
          },
          {
            kind: 'choice',
            question: 'Domenica mattina si può …',
            options: ['ballare in piazza.', 'visitare un museo.', 'comprare prodotti locali.'],
            answer: 2,
          },
          { kind: 'choice', question: 'Il pranzo per un bambino costa …', options: ['15 euro.', '8 euro.', 'niente.'], answer: 1 },
          {
            kind: 'choice',
            question: 'Da Ancona gli autobus partono …',
            options: ['ogni mezz’ora.', 'solo la mattina.', 'ogni ora.'],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'Il parcheggio …',
            options: ['non si paga.', 'costa 15 euro.', 'è lontano dalla piazza.'],
            answer: 0,
          },
        ],
      },
    ],
  },
  listening: {
    minutes: 20,
    parts: [
      {
        instructions: 'Ascolti un dialogo al bar. Ascolti il dialogo due volte. Scegli la risposta giusta.',
        plays: 2,
        script: {
          id: 'checkpoint-a1-bar',
          voices: { Barista: 'marco', Cliente: 'giulia' },
          lines: [
            { speaker: 'Barista', text: 'Buongiorno! Cosa prende?' },
            { speaker: 'Cliente', text: 'Buongiorno. Un cappuccino e un cornetto alla marmellata, per favore.' },
            { speaker: 'Barista', text: 'Mi dispiace, i cornetti alla marmellata sono finiti. Ho quelli al cioccolato o vuoti.' },
            { speaker: 'Cliente', text: 'Allora uno al cioccolato. E anche una bottiglia d’acqua naturale.' },
            { speaker: 'Barista', text: 'Piccola o grande?' },
            { speaker: 'Cliente', text: 'Piccola, grazie. Quant’è?' },
            {
              speaker: 'Barista',
              text: 'Allora, cappuccino un euro e cinquanta, cornetto un euro e venti, acqua un euro. In tutto tre euro e settanta.',
            },
            { speaker: 'Cliente', text: 'Ecco a lei cinque euro.' },
            { speaker: 'Barista', text: 'Ed ecco il resto: un euro e trenta. Buona giornata!' },
          ],
        },
        items: [
          { kind: 'choice', question: 'La cliente ordina da bere …', options: ['un caffè.', 'un cappuccino.', 'un tè.'], answer: 1 },
          {
            kind: 'choice',
            question: 'Che cornetto prende alla fine?',
            options: ['Al cioccolato.', 'Alla marmellata.', 'Vuoto.'],
            answer: 0,
          },
          {
            kind: 'choice',
            question: 'Perché non prende il cornetto alla marmellata?',
            options: ['Non le piace.', 'Costa troppo.', 'Non ce ne sono più.'],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'L’acqua è …',
            options: ['frizzante e grande.', 'naturale e grande.', 'naturale e piccola.'],
            answer: 2,
          },
          { kind: 'choice', question: 'Quanto paga in tutto?', options: ['5 euro.', '3,70 euro.', '1,30 euro.'], answer: 1 },
        ],
      },
      {
        instructions: 'Ascolti un messaggio in segreteria. Ascolti il messaggio due volte. Le frasi sono vere o false?',
        plays: 2,
        script: {
          id: 'checkpoint-a1-segreteria',
          voices: { Chiara: 'chiara' },
          lines: [
            { speaker: 'Chiara', text: 'Ciao Sara, sono Chiara. Ti chiamo per sabato.' },
            { speaker: 'Chiara', text: 'La festa per il compleanno di Luca è a casa mia, non al ristorante.' },
            { speaker: 'Chiara', text: 'Comincia alle otto di sera, ma se vuoi puoi venire prima e aiutarmi a preparare.' },
            { speaker: 'Chiara', text: 'Io faccio la torta; tu puoi comprare le bibite?' },
            { speaker: 'Chiara', text: 'Il mio nuovo indirizzo è via Roma 25, terzo piano.' },
            { speaker: 'Chiara', text: 'Chiamami stasera dopo le nove. Ciao!' },
          ],
        },
        items: [
          { kind: 'truefalse', statement: 'La festa è al ristorante.', answer: false },
          { kind: 'truefalse', statement: 'La festa comincia alle otto di sera.', answer: true },
          { kind: 'truefalse', statement: 'Chiara chiede a Sara di portare la torta.', answer: false },
          { kind: 'truefalse', statement: 'Chiara abita in via Roma.', answer: true },
          { kind: 'truefalse', statement: 'Sara deve telefonare a Chiara domani mattina.', answer: false },
        ],
      },
    ],
  },
}
