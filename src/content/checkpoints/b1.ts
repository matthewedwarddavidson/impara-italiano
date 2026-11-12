import type { Checkpoint } from './types'

export const CHECKPOINT_B1: Checkpoint = {
  id: 'checkpoint-b1',
  level: 'B1',
  reading: {
    minutes: 50,
    parts: [
      {
        instructions: 'Leggi l’articolo e scegli la risposta giusta.',
        text: {
          title: 'Lavorare da casa: vantaggi e rischi',
          source: 'Da un quotidiano',
          body: [
            'Dopo la pandemia, per molti italiani lavorare da casa è diventato normale. Alcune aziende hanno scelto il lavoro «ibrido»: due o tre giorni in ufficio e gli altri a casa. Altre, invece, chiedono ai dipendenti di tornare in ufficio tutti i giorni.',
            'In un’azienda di software di Torino hanno fatto un esperimento. Per sei mesi metà dei dipendenti ha lavorato da casa quattro giorni alla settimana, mentre gli altri sono rimasti in ufficio. Alla fine i risultati del lavoro erano simili, ma chi lavorava da casa si è ammalato di meno e ha dichiarato di essere più soddisfatto.',
            'Non mancano però i problemi. Molti dipendenti hanno raccontato che a casa è difficile separare il lavoro dalla vita privata: si risponde alle email anche la sera e nel fine settimana. Altri si sono sentiti soli e hanno detto che il contatto con i colleghi era importante non solo per l’umore, ma anche per avere nuove idee.',
            'Per questo l’azienda ha deciso di non tornare indietro, ma di fissare alcune regole: nessuna email dopo le sette di sera e almeno un giorno alla settimana in cui tutti si trovano in ufficio. «Il lavoro da casa funziona», spiega la direttrice del personale, «ma solo se lo organizziamo bene.»',
          ],
        },
        items: [
          {
            kind: 'choice',
            question: 'Secondo il primo paragrafo, le aziende italiane …',
            options: ['hanno tutte scelto il lavoro da casa.', 'non fanno tutte la stessa scelta.', 'vogliono chiudere gli uffici.'],
            answer: 1,
          },
          {
            kind: 'choice',
            question: 'Nell’esperimento, i dipendenti che lavoravano da casa …',
            options: ['si sono ammalati meno spesso.', 'hanno lavorato molto meno.', 'sono tornati in ufficio dopo un mese.'],
            answer: 0,
          },
          {
            kind: 'choice',
            question: 'Un problema del lavoro da casa è che …',
            options: ['i computer non funzionano bene.', 'costa troppo all’azienda.', 'si lavora anche fuori orario.'],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'Alcuni dipendenti dicono che i colleghi …',
            options: ['li disturbano.', 'li aiutano ad avere idee nuove.', 'lavorano meno di loro.'],
            answer: 1,
          },
          {
            kind: 'choice',
            question: 'Dopo l’esperimento, l’azienda …',
            options: ['ha introdotto alcune regole.', 'ha chiuso l’ufficio.', 'ha vietato il lavoro da casa.'],
            answer: 0,
          },
          {
            kind: 'choice',
            question: 'Secondo la direttrice del personale, il lavoro da casa …',
            options: ['è sempre positivo.', 'non funziona.', 'funziona se è ben organizzato.'],
            answer: 2,
          },
        ],
      },
      {
        instructions: 'Leggi l’intervista. Le frasi sono vere o false?',
        text: {
          title: 'La libreria che ha salvato un paese',
          source: 'Da un settimanale',
          body: [
            'Quando Martina, trentaquattro anni, è tornata nel suo paese in Abruzzo dopo dieci anni a Roma, ha trovato la piazza vuota: il bar aveva chiuso, la scuola elementare pure, e l’unica libreria stava per chiudere perché il proprietario andava in pensione.',
            '«All’inizio pensavo di restare solo qualche mese, per stare vicino a mia madre», racconta. «Poi il signor Di Marco mi ha chiesto se volevo continuare la sua attività. Non avevo nessuna esperienza nel commercio, ma ho detto di sì quasi senza pensarci.»',
            'I primi due anni sono stati difficili. Le vendite non bastavano a pagare l’affitto e Martina ha dovuto lavorare anche come traduttrice di sera. Allora ha avuto un’idea: trasformare la libreria in un luogo d’incontro, con un piccolo caffè, letture per bambini il sabato mattina e un club del libro per gli anziani.',
            'Oggi la libreria organizza anche un festival letterario ogni estate, che porta in paese centinaia di visitatori. «Non sono diventata ricca», dice Martina ridendo, «ma ogni giorno qualcuno entra solo per fare due chiacchiere. Ed è proprio questo che mi rende felice.»',
          ],
        },
        items: [
          { kind: 'truefalse', statement: 'Martina è tornata al paese dopo aver vissuto a Roma.', answer: true },
          { kind: 'truefalse', statement: 'Quando è tornata, nel paese c’era ancora la scuola elementare.', answer: false },
          { kind: 'truefalse', statement: 'Martina aveva già lavorato in un negozio.', answer: false },
          { kind: 'truefalse', statement: 'All’inizio la libreria non guadagnava abbastanza.', answer: true },
          { kind: 'truefalse', statement: 'Il club del libro è per i bambini.', answer: false },
          { kind: 'truefalse', statement: 'Grazie al festival molte persone visitano il paese.', answer: true },
        ],
      },
      {
        instructions: 'Leggi gli annunci. Per ogni annuncio scegli la risposta giusta.',
        items: [
          {
            kind: 'choice',
            context:
              'Raccolta rifiuti: da lunedì 2 settembre la plastica si ritira il martedì e il venerdì, non più il mercoledì. Il vetro va portato nelle campane stradali. Per i rifiuti ingombranti è necessario prenotare il ritiro al numero verde.',
            question: 'Che cosa cambia da settembre?',
            options: ['Il ritiro del vetro.', 'I giorni di raccolta della plastica.', 'Il numero verde.'],
            answer: 1,
          },
          {
            kind: 'choice',
            context:
              'Corso serale di fotografia digitale – 10 incontri il giovedì dalle 20 alle 22. Non è necessario avere esperienza, ma bisogna portare la propria macchina fotografica. Posti limitati: iscrizioni in segreteria entro il 15 ottobre.',
            question: 'Per partecipare al corso bisogna …',
            options: ['essere esperti di fotografia.', 'iscriversi online.', 'avere una macchina fotografica.'],
            answer: 2,
          },
          {
            kind: 'choice',
            context:
              'Cerco una persona con cui condividere il viaggio in macchina da Bologna a Monaco di Baviera il 22 dicembre. Dividiamo le spese di benzina e autostrada. Niente animali, per favore: sono allergica. Laura',
            question: 'Laura cerca qualcuno che …',
            options: ['viaggi con lei pagando una parte delle spese.', 'le presti la macchina.', 'porti il suo cane in Germania.'],
            answer: 0,
          },
          {
            kind: 'choice',
            context:
              'Avviso ai viaggiatori: a causa di uno sciopero, venerdì 8 novembre i treni regionali potrebbero essere cancellati dalle 9 alle 18. Sono comunque garantiti i treni in partenza tra le 6 e le 9 e tra le 18 e le 21.',
            question: 'Venerdì 8 novembre …',
            options: ['tutti i treni sono cancellati.', 'i treni partono solo di pomeriggio.', 'un treno delle 7 parte regolarmente.'],
            answer: 2,
          },
          {
            kind: 'choice',
            context:
              'Ristorante Da Gino cerca cameriere o cameriera per il fine settimana: venerdì e sabato sera, domenica a pranzo. È richiesta una buona conoscenza dell’inglese. Presentarsi con il curriculum dal martedì al giovedì dopo le 15.',
            question: 'Chi è interessato deve …',
            options: ['mandare un’email.', 'andare al ristorante con il curriculum.', 'telefonare nel fine settimana.'],
            answer: 1,
          },
        ],
      },
    ],
  },
  listening: {
    minutes: 30,
    parts: [
      {
        instructions: 'Ascolti un colloquio di lavoro. Ascolti il colloquio due volte. Scegli la risposta giusta.',
        plays: 2,
        script: {
          id: 'checkpoint-b1-colloquio',
          voices: { Direttrice: 'giulia', Candidato: 'luca' },
          lines: [
            { speaker: 'Direttrice', text: 'Buongiorno, si accomodi. Lei è il signor Bianchi, giusto?' },
            { speaker: 'Candidato', text: 'Sì, buongiorno. Grazie per avermi invitato.' },
            {
              speaker: 'Direttrice',
              text: 'Allora, ho letto il suo curriculum. Vedo che negli ultimi tre anni ha lavorato in un albergo a Rimini. Perché vuole cambiare?',
            },
            {
              speaker: 'Candidato',
              text: 'L’albergo è aperto solo d’estate, quindi d’inverno restavo senza lavoro. Adesso cerco un posto per tutto l’anno, e la vostra agenzia di viaggi mi interessa molto.',
            },
            { speaker: 'Direttrice', text: 'Che cosa faceva esattamente in albergo?' },
            {
              speaker: 'Candidato',
              text: 'Lavoravo alla reception. Accoglievo i clienti, rispondevo al telefono e organizzavo le escursioni. Molti clienti erano tedeschi, quindi parlavo spesso tedesco.',
            },
            { speaker: 'Direttrice', text: 'Ah, ottimo. E l’inglese?' },
            {
              speaker: 'Candidato',
              text: 'L’inglese lo parlo bene: ho studiato un anno a Londra. Il tedesco un po’ meno, ma mi faccio capire.',
            },
            {
              speaker: 'Direttrice',
              text: 'Il lavoro qui è soprattutto al computer e al telefono, ma a volte bisogna accompagnare i gruppi in viaggio, anche per una settimana. Sarebbe un problema per lei?',
            },
            { speaker: 'Candidato', text: 'No, anzi, mi piacerebbe molto. Non ho figli e viaggiare è la mia passione.' },
            {
              speaker: 'Direttrice',
              text: 'Bene. L’orario è dalle nove alle sei, con un’ora di pausa. Quando potrebbe cominciare?',
            },
            { speaker: 'Candidato', text: 'Anche subito: l’albergo ha chiuso a fine settembre.' },
            { speaker: 'Direttrice', text: 'Perfetto. Le faremo sapere entro venerdì.' },
          ],
        },
        items: [
          {
            kind: 'choice',
            question: 'Il signor Bianchi vuole cambiare lavoro perché …',
            options: ['in albergo guadagnava poco.', 'non gli piace Rimini.', 'cerca un lavoro che duri tutto l’anno.'],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'In albergo lui …',
            options: ['lavorava alla reception.', 'cucinava per i clienti.', 'accompagnava i gruppi in viaggio.'],
            answer: 0,
          },
          { kind: 'choice', question: 'Quale lingua parla meglio?', options: ['Il tedesco.', 'L’inglese.', 'Il francese.'], answer: 1 },
          {
            kind: 'choice',
            question: 'Nell’agenzia, a volte bisogna …',
            options: ['lavorare di notte.', 'lavorare in un albergo.', 'viaggiare con i gruppi.'],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'Che cosa pensa il candidato dei viaggi di lavoro?',
            options: ['Sono un problema per la sua famiglia.', 'Gli piacciono molto.', 'Li accetta solo se sono brevi.'],
            answer: 1,
          },
          { kind: 'choice', question: 'Quando può cominciare?', options: ['Subito.', 'Il mese prossimo.', 'Dopo venerdì.'], answer: 0 },
        ],
      },
      {
        instructions: 'Ascolti una guida turistica. Ascolti il testo due volte. Le frasi sono vere o false?',
        plays: 2,
        script: {
          id: 'checkpoint-b1-matera',
          voices: { Guida: 'chiara' },
          lines: [
            { speaker: 'Guida', text: 'Buongiorno a tutti e benvenuti a Matera. Mi chiamo Chiara e oggi sarò la vostra guida.' },
            {
              speaker: 'Guida',
              text: 'La visita dura circa due ore. Vi chiedo di restare sempre vicini al gruppo, perché le stradine dei Sassi sono strette e tutte uguali: è facile perdersi.',
            },
            {
              speaker: 'Guida',
              text: 'I Sassi sono i quartieri antichi della città, con case scavate nella roccia. Fino agli anni Cinquanta qui vivevano migliaia di persone, spesso in una sola stanza insieme agli animali, senza acqua corrente.',
            },
            {
              speaker: 'Guida',
              text: 'Poi lo Stato ha costruito nuovi quartieri e gli abitanti si sono trasferiti. Per molti anni i Sassi sono rimasti quasi vuoti.',
            },
            {
              speaker: 'Guida',
              text: 'Nel 1993 sono diventati patrimonio dell’UNESCO e nel 2019 Matera è stata capitale europea della cultura. Oggi molte case sono diventate alberghi, ristoranti e negozi.',
            },
            {
              speaker: 'Guida',
              text: 'Durante la visita entreremo in una casa-grotta arredata come una volta. Lì potete fare foto, ma senza flash, per favore.',
            },
            {
              speaker: 'Guida',
              text: 'Alla fine del giro, chi vuole può fermarsi con me a mangiare in una trattoria tipica: il pranzo non è compreso nel prezzo della visita.',
            },
          ],
        },
        items: [
          { kind: 'truefalse', statement: 'La visita dura circa due ore.', answer: true },
          { kind: 'truefalse', statement: 'Nei Sassi è difficile perdersi.', answer: false },
          { kind: 'truefalse', statement: 'Negli anni Cinquanta le case dei Sassi avevano l’acqua corrente.', answer: false },
          { kind: 'truefalse', statement: 'Nel 2019 Matera è stata capitale europea della cultura.', answer: true },
          { kind: 'truefalse', statement: 'Nella casa-grotta si possono fare foto senza flash.', answer: true },
          { kind: 'truefalse', statement: 'Il pranzo è compreso nel prezzo della visita.', answer: false },
        ],
      },
    ],
  },
}
