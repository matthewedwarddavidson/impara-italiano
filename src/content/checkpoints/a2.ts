import type { Checkpoint } from './types'

export const CHECKPOINT_A2: Checkpoint = {
  id: 'checkpoint-a2',
  level: 'A2',
  reading: {
    minutes: 40,
    parts: [
      {
        instructions: 'Leggi i testi. Per ogni testo scegli la risposta giusta.',
        items: [
          {
            kind: 'choice',
            context:
              'BIBLIOTECA CIVICA – Da lunedì 3 marzo la biblioteca resta aperta anche il sabato pomeriggio, dalle 14 alle 18. Per prendere in prestito i libri è necessaria la tessera, gratuita per i residenti.',
            question: 'Che cosa cambia da lunedì 3 marzo?',
            options: ['La tessera diventa a pagamento.', 'La biblioteca è aperta più ore.', 'La biblioteca chiude il sabato.'],
            answer: 1,
          },
          {
            kind: 'choice',
            context:
              'Cari vicini, la riunione di condominio di giovedì è spostata a venerdì, alla stessa ora, perché l’amministratore è malato. Ci vediamo nell’atrio. Famiglia Rossi (interno 4)',
            question: 'La riunione …',
            options: ['è annullata.', 'si fa a un’altra ora.', 'si fa un altro giorno.'],
            answer: 2,
          },
          {
            kind: 'choice',
            context:
              'Cercasi baby-sitter per due bambini (4 e 7 anni), tre pomeriggi alla settimana dalle 16 alle 19. Richieste esperienza e patente. Telefonare a Francesca.',
            question: 'La baby-sitter deve …',
            options: ['saper guidare.', 'lavorare tutte le mattine.', 'abitare vicino alla famiglia.'],
            answer: 0,
          },
          {
            kind: 'choice',
            context:
              'Palestra Forma – Offerta di gennaio: iscriviti entro il 31 e paghi solo 30 euro al mese invece di 45. Prima lezione di prova gratuita!',
            question: 'Con l’offerta …',
            options: ['si pagano 45 euro al mese.', 'gennaio è gratuito.', 'la prima lezione non si paga.'],
            answer: 2,
          },
          {
            kind: 'choice',
            context:
              'Gentili passeggeri, a causa di lavori sulla linea, il treno delle 18.20 per Pisa oggi parte dal binario 7 invece che dal binario 2.',
            question: 'Il treno delle 18.20 …',
            options: ['parte da un altro binario.', 'è cancellato.', 'parte più tardi.'],
            answer: 0,
          },
        ],
      },
      {
        instructions: 'Leggi il testo. Le frasi sono vere o false?',
        text: {
          title: 'Dalla città alla campagna',
          source: 'Dal blog di Valentina',
          body: [
            'Fino a tre anni fa abitavo a Milano e lavoravo in un ufficio dalle nove alle sei. Avevo un buono stipendio, ma ero sempre stanca e non avevo mai tempo per me. Così, un giorno, io e mio marito abbiamo deciso di cambiare vita.',
            'Abbiamo comprato una vecchia casa in Umbria, vicino a Todi, e l’abbiamo trasformata in un piccolo agriturismo con quattro camere. I lavori sono durati più di un anno e sono costati più del previsto, ma alla fine ce l’abbiamo fatta.',
            'Adesso ci alziamo alle sei per dare da mangiare alle galline e preparare la colazione per gli ospiti. Il lavoro non manca, soprattutto d’estate, ma siamo più sereni. Non mi manca la città, anche se a volte mi mancano i miei amici. Per fortuna vengono spesso a trovarci!',
          ],
        },
        items: [
          { kind: 'truefalse', statement: 'A Milano Valentina aveva poco tempo libero.', answer: true },
          { kind: 'truefalse', statement: 'L’agriturismo ha quattro camere.', answer: true },
          { kind: 'truefalse', statement: 'I lavori nella casa sono costati meno del previsto.', answer: false },
          { kind: 'truefalse', statement: 'D’estate Valentina e suo marito hanno poco lavoro.', answer: false },
          { kind: 'truefalse', statement: 'Gli amici di Valentina vanno spesso a trovarla.', answer: true },
        ],
      },
      {
        instructions: 'Leggi il testo e scegli la risposta giusta.',
        text: {
          title: 'Il caffè sospeso',
          source: 'Da una rivista',
          body: [
            'A Napoli esiste una vecchia tradizione: il caffè sospeso. Quando un cliente entra in un bar, paga due caffè ma ne beve solo uno. Il secondo resta «sospeso», cioè pagato, per una persona che non ha soldi e che più tardi può chiedere al barista se c’è un caffè sospeso.',
            'Questa abitudine è nata nei quartieri popolari della città. Per molti anni è quasi scomparsa, ma dopo la crisi economica del 2008 è tornata di moda, non solo a Napoli ma in tutta Italia e anche all’estero.',
            'Oggi alcuni bar hanno una lavagna dove scrivono quanti caffè sospesi ci sono. In altre città la stessa idea si usa per il pane, la spesa o i libri. «È un piccolo gesto», dice Gennaro, barista nel centro storico, «ma fa sentire meno sole le persone in difficoltà.»',
          ],
        },
        items: [
          {
            kind: 'choice',
            question: 'Chi beve un caffè sospeso?',
            options: ['Il cliente che lo paga.', 'Il barista.', 'Una persona che non può pagarlo.'],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'Il caffè sospeso è nato …',
            options: ['nei quartieri popolari di Napoli.', 'dopo la crisi del 2008.', 'all’estero.'],
            answer: 0,
          },
          {
            kind: 'choice',
            question: 'Dopo il 2008 la tradizione …',
            options: ['è scomparsa.', 'è tornata a diffondersi.', 'è diventata obbligatoria.'],
            answer: 1,
          },
          {
            kind: 'choice',
            question: 'Su alcune lavagne i bar scrivono …',
            options: ['il prezzo del caffè.', 'i nomi dei clienti.', 'quanti caffè sono già stati pagati.'],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'Secondo Gennaro, il caffè sospeso …',
            options: ['costa troppo ai baristi.', 'aiuta anche moralmente chi è in difficoltà.', 'è solo una moda passeggera.'],
            answer: 1,
          },
        ],
      },
    ],
  },
  listening: {
    minutes: 25,
    parts: [
      {
        instructions: 'Ascolti un dialogo in un’agenzia di viaggi. Ascolti il dialogo due volte. Scegli la risposta giusta.',
        plays: 2,
        script: {
          id: 'checkpoint-a2-agenzia',
          voices: { Impiegata: 'chiara', Cliente: 'luca' },
          lines: [
            { speaker: 'Impiegata', text: 'Buongiorno, mi dica.' },
            { speaker: 'Cliente', text: 'Buongiorno. Vorrei andare in Sicilia con la mia famiglia a giugno, per una settimana.' },
            { speaker: 'Impiegata', text: 'Benissimo. Preferisce il treno o l’aereo?' },
            { speaker: 'Cliente', text: 'L’aereo. Con due bambini il viaggio in treno è troppo lungo.' },
            {
              speaker: 'Impiegata',
              text: 'Allora c’è un volo da Milano a Palermo il sabato mattina alle nove e quaranta. Quante persone siete?',
            },
            { speaker: 'Cliente', text: 'Quattro: io, mia moglie e i nostri figli di sei e dieci anni.' },
            { speaker: 'Impiegata', text: 'Per i bambini sotto i dodici anni c’è uno sconto del trenta per cento. Cerca anche un albergo?' },
            { speaker: 'Cliente', text: 'No, grazie, abbiamo già un appartamento vicino al mare. Ma ci serve una macchina.' },
            { speaker: 'Impiegata', text: 'Nessun problema, posso prenotarle un’auto all’aeroporto.' },
            { speaker: 'Cliente', text: 'Perfetto. Quanto viene in tutto?' },
            { speaker: 'Impiegata', text: 'Con i voli e la macchina sono milleduecento euro.' },
            { speaker: 'Cliente', text: 'Va bene, prenotiamo.' },
          ],
        },
        items: [
          {
            kind: 'choice',
            question: 'Il cliente vuole partire …',
            options: ['a luglio, per due settimane.', 'a giugno, per un fine settimana.', 'a giugno, per una settimana.'],
            answer: 2,
          },
          {
            kind: 'choice',
            question: 'Perché non prende il treno?',
            options: ['Il viaggio è troppo lungo per i bambini.', 'Costa troppo.', 'Non ci sono treni per Palermo.'],
            answer: 0,
          },
          {
            kind: 'choice',
            question: 'I bambini hanno lo sconto perché …',
            options: ['viaggiano di sabato.', 'hanno meno di dodici anni.', 'prenotano presto.'],
            answer: 1,
          },
          {
            kind: 'choice',
            question: 'Che cosa prenota il cliente oltre ai voli?',
            options: ['Un albergo.', 'Un appartamento.', 'Una macchina.'],
            answer: 2,
          },
          { kind: 'choice', question: 'Quanto spende in tutto?', options: ['1.200 euro.', '1.000 euro.', '200 euro.'], answer: 0 },
        ],
      },
      {
        instructions: 'Ascolti un programma alla radio. Ascolti il programma due volte. Le frasi sono vere o false?',
        plays: 2,
        script: {
          id: 'checkpoint-a2-radio',
          voices: { Speaker: 'marco' },
          lines: [
            { speaker: 'Speaker', text: 'Buongiorno a tutti e benvenuti a «Weekend in città».' },
            {
              speaker: 'Speaker',
              text: 'Sabato il tempo sarà bello, con sole e temperature fino a ventidue gradi. Domenica, invece, arriva la pioggia, soprattutto nel pomeriggio.',
            },
            {
              speaker: 'Speaker',
              text: 'Sabato sera in piazza del Duomo c’è un concerto gratuito di musica jazz. Comincia alle nove, ma vi consigliamo di arrivare presto perché ci sarà molta gente.',
            },
            { speaker: 'Speaker', text: 'Domenica mattina il museo di arte moderna è aperto gratis per tutti, dalle dieci all’una.' },
            { speaker: 'Speaker', text: 'E per i bambini? Nel parco, sabato pomeriggio, c’è uno spettacolo di burattini.' },
            {
              speaker: 'Speaker',
              text: 'Attenzione: domenica il centro è chiuso alle macchine per la maratona, quindi usate i mezzi pubblici.',
            },
          ],
        },
        items: [
          { kind: 'truefalse', statement: 'Domenica pomeriggio pioverà.', answer: true },
          { kind: 'truefalse', statement: 'Per il concerto di sabato bisogna comprare un biglietto.', answer: false },
          { kind: 'truefalse', statement: 'Domenica il museo è gratis tutto il giorno.', answer: false },
          { kind: 'truefalse', statement: 'Sabato pomeriggio c’è uno spettacolo per bambini nel parco.', answer: true },
          { kind: 'truefalse', statement: 'Domenica si può andare in centro in macchina.', answer: false },
        ],
      },
    ],
  },
}
