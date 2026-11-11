import type { GrammarTopic } from '../types'

export const essereEAvere: GrammarTopic = {
  id: 'essere-e-avere',
  title: 'Essere e avere',
  english: 'To be and to have',
  level: 'A1',
  summary:
    '**Essere** (to be) and **avere** (to have) are irregular and used constantly. Italian uses avere for age and for feelings like hunger and cold: **Ho trent’anni**, **ho fame**.',
  sections: [
    {
      heading: 'The forms',
      body: [
        'Subject pronouns (io, tu…) are usually left out, since the verb shows the person. The h in ho, hai, ha and hanno is silent: it only tells **ho** (I have) from **o** (or) and **hanno** (they have) from **anno** (year).',
      ],
      table: {
        head: ['', 'essere', 'avere'],
        rows: [
          ['io', 'sono', 'ho'],
          ['tu', 'sei', 'hai'],
          ['lui, lei, Lei', 'è', 'ha'],
          ['noi', 'siamo', 'abbiamo'],
          ['voi', 'siete', 'avete'],
          ['loro', 'sono', 'hanno'],
        ],
      },
      examples: [
        { it: '**Sono** inglese, ma mio marito **è** italiano.', en: "I'm English, but my husband is Italian." },
        { it: '**Abbiamo** due figli.', en: 'We have two children.' },
        { it: 'Lei **è** di Roma?', en: 'Are you from Rome? (formal)' },
      ],
    },
    {
      heading: 'Avere where English uses "to be"',
      body: [
        'Age: **Ho** trent’anni (I am thirty). Feelings: **ho fame** (I’m hungry), **ho sete** (thirsty), **ho caldo** (hot), **ho freddo** (cold), **ho sonno** (sleepy), **ho paura** (afraid), **ho ragione** (right), **ho fretta** (in a hurry).',
      ],
      examples: [
        { it: 'Quanti anni **hai**?', en: 'How old are you?' },
        { it: '**Ho** freddo, chiudi la finestra.', en: "I'm cold, close the window." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Sono trent’anni.', right: 'Ho trent’anni.', why: 'Age uses avere.' },
    { wrong: 'Sono freddo.', right: 'Ho freddo.', why: 'Feeling cold uses avere; sono freddo means "I am a cold person".' },
    { wrong: 'Loro anno due figli.', right: 'Loro hanno due figli.', why: 'hanno (they have) needs the h; anno means year.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Io ___ inglese.', answers: ['sono'], explanation: 'essere, io: sono.' },
    { kind: 'gap', prompt: 'Tu ___ un fratello?', answers: ['hai'], explanation: 'avere, tu: hai.' },
    { kind: 'gap', prompt: 'Noi ___ a casa.', answers: ['siamo'], explanation: 'essere, noi: siamo.' },
    { kind: 'gap', prompt: 'Loro ___ due figli.', answers: ['hanno'], explanation: 'avere, loro: hanno.' },
    { kind: 'gap', prompt: 'Voi ___ stanchi?', answers: ['siete'], explanation: 'essere, voi: siete.' },
    { kind: 'gap', prompt: 'Marco ___ venticinque anni.', answers: ['ha'], explanation: 'Age uses avere: ha.' },
    { kind: 'gap', prompt: 'Mia sorella ___ medico.', answers: ['è'], explanation: 'essere, lei: è.' },
    { kind: 'gap', prompt: 'Abbiamo ___. Mangiamo?', hint: 'hungry', answers: ['fame'], explanation: 'Hunger uses avere: avere fame.' },
    {
      kind: 'choice',
      prompt: 'Quanti anni ___?',
      options: ['sei', 'hai', 'è'],
      answer: 1,
      explanation: 'Age uses avere: Quanti anni hai?',
    },
    {
      kind: 'transform',
      instruction: 'Change to "we" (noi).',
      prompt: 'Sono stanca.',
      answers: ['Siamo stanche.', 'Siamo stanchi.'],
      explanation: 'sono becomes siamo, and the adjective goes plural.',
    },
    {
      kind: 'order',
      words: ['Quanti', 'anni', 'hai?'],
      english: 'How old are you?',
      explanation: 'The question word comes first.',
    },
  ],
}

export const ceECiSono: GrammarTopic = {
  id: 'c-e-ci-sono',
  title: 'C’è e ci sono',
  english: 'There is and there are',
  level: 'A1',
  summary: '**C’è** means "there is" and **ci sono** "there are". Questions are the same with a question mark: **C’è** un bar qui vicino?',
  sections: [
    {
      heading: 'Singular and plural',
      body: [
        'Use **c’è** with one thing and **ci sono** with more. For "there isn’t" or "there aren’t", put **non** in front: **non c’è** latte.',
        'To ask where something specific is, use **dov’è** (where is) or **dove sono** (where are), not c’è: **Dov’è** la stazione?',
      ],
      table: {
        head: ['', 'Statement', 'Question', 'Negative'],
        rows: [
          ['Singular', 'C’è un bar.', 'C’è un bar?', 'Non c’è un bar.'],
          ['Plural', 'Ci sono due bar.', 'Ci sono bar?', 'Non ci sono bar.'],
        ],
      },
      examples: [
        { it: '**C’è** una farmacia qui vicino?', en: "Is there a chemist's near here?" },
        { it: 'In classe **ci sono** venti studenti.', en: 'There are twenty students in the class.' },
        { it: '**Non c’è** nessuno.', en: "There's nobody here." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'C’è tre camere.', right: 'Ci sono tre camere.', why: 'More than one thing: ci sono.' },
    { wrong: 'C’è la stazione?', right: 'Dov’è la stazione?', why: 'To ask where a particular place is, use dov’è.' },
    { wrong: 'Ce un bar.', right: 'C’è un bar.', why: 'c’è is ci + è: it needs the apostrophe and the accent.' },
  ],
  exercises: [
    { kind: 'gap', prompt: '___ un bar qui vicino?', answers: ["C'è", 'C’è'], explanation: 'One thing: c’è.' },
    { kind: 'gap', prompt: '___ tre camere da letto.', answers: ['Ci sono'], explanation: 'More than one: ci sono.' },
    { kind: 'gap', prompt: 'Non ___ latte in frigo.', answers: ["c'è", 'c’è'], explanation: 'latte is singular: non c’è.' },
    { kind: 'gap', prompt: 'In classe ___ venti studenti.', answers: ['ci sono'], explanation: 'Plural: ci sono.' },
    { kind: 'gap', prompt: 'Oggi ___ molta gente in centro.', answers: ["c'è", 'c’è'], explanation: 'gente is singular in Italian: c’è.' },
    {
      kind: 'choice',
      prompt: 'Scusi, ___ la stazione?',
      options: ['dov’è', 'c’è', 'ci sono'],
      answer: 0,
      explanation: 'Asking where a known place is: dov’è.',
    },
    {
      kind: 'choice',
      prompt: '___ molti turisti a Venezia.',
      options: ['C’è', 'Ci sono', 'È'],
      answer: 1,
      explanation: 'turisti is plural: ci sono.',
    },
    {
      kind: 'transform',
      instruction: 'Make it negative.',
      prompt: 'Ci sono problemi.',
      answers: ['Non ci sono problemi.'],
      explanation: 'Put non in front.',
    },
    {
      kind: 'order',
      words: ['Ci', 'sono', 'due', 'bagni', 'in', 'casa.'],
      english: 'There are two bathrooms in the house.',
      explanation: 'Ci sono comes first, then what there is.',
    },
  ],
}

export const presenteRegolare: GrammarTopic = {
  id: 'presente-regolare',
  title: 'Il presente: verbi regolari',
  english: 'The present tense of regular verbs',
  level: 'A1',
  summary:
    'Italian verbs end in **-are**, **-ere** or **-ire**. Take off the ending and add one for each person: parl**are** → parl**o**, parl**i**, parl**a**… The present covers "I speak", "I am speaking" and often "I will speak".',
  sections: [
    {
      heading: 'The three groups',
      body: [
        'The io, tu and noi endings are the same for all three groups: **-o**, **-i**, **-iamo**. Leave out the pronoun unless you want to stress it.',
      ],
      table: {
        head: ['', 'parlare', 'prendere', 'dormire', 'finire'],
        rows: [
          ['io', 'parlo', 'prendo', 'dormo', 'finisco'],
          ['tu', 'parli', 'prendi', 'dormi', 'finisci'],
          ['lui, lei, Lei', 'parla', 'prende', 'dorme', 'finisce'],
          ['noi', 'parliamo', 'prendiamo', 'dormiamo', 'finiamo'],
          ['voi', 'parlate', 'prendete', 'dormite', 'finite'],
          ['loro', 'parlano', 'prendono', 'dormono', 'finiscono'],
        ],
      },
      examples: [
        { it: '**Parlo** un po’ di italiano.', en: 'I speak a little Italian.' },
        { it: 'Domani **prendiamo** il treno.', en: "We're taking the train tomorrow." },
        { it: 'I bambini **dormono**.', en: 'The children are sleeping.' },
      ],
    },
    {
      heading: '-isc- verbs',
      body: [
        'Many -ire verbs add **-isc-** in every form except noi and voi: **finire**, **capire**, **preferire**, **pulire**, **spedire**. Dictionaries mark them; the word bank gives the io form, such as "finisco".',
      ],
    },
    {
      heading: 'Spelling changes',
      body: [
        'Verbs in **-care** and **-gare** add h before i to keep the hard sound: cer**care** → tu cer**chi**, noi cer**chiamo**; pa**gare** → tu pa**ghi**.',
        'Verbs in **-iare** don’t double the i: mang**iare** → tu **mangi**, noi **mangiamo**; stud**iare** → tu **studi**.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'io finio', right: 'io finisco', why: 'finire is an -isc- verb.' },
    { wrong: 'tu cerci', right: 'tu cerchi', why: 'Add h to keep the hard c.' },
    { wrong: 'loro parlono', right: 'loro parlano', why: '-are verbs end in -ano for loro; -ere and -ire take -ono.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Io ___ italiano.', hint: 'parlare', answers: ['parlo'], explanation: 'io: -o.' },
    { kind: 'gap', prompt: 'Tu ___ il treno?', hint: 'prendere', answers: ['prendi'], explanation: 'tu: -i.' },
    { kind: 'gap', prompt: 'Noi ___ a Londra.', hint: 'abitare', answers: ['abitiamo'], explanation: 'noi: -iamo.' },
    { kind: 'gap', prompt: 'Loro ___ fino a tardi.', hint: 'dormire', answers: ['dormono'], explanation: '-ire verbs: loro dormono.' },
    { kind: 'gap', prompt: 'Lei ___ di lavorare alle cinque.', hint: 'finire', answers: ['finisce'], explanation: '-isc- verb: lei finisce.' },
    { kind: 'gap', prompt: 'Voi ___ la lezione?', hint: 'capire', answers: ['capite'], explanation: 'voi has no -isc-: capite.' },
    { kind: 'gap', prompt: 'Tu ___ le chiavi?', hint: 'cercare', answers: ['cerchi'], explanation: 'Add h before i: cerchi.' },
    { kind: 'gap', prompt: 'Noi ___ alle otto.', hint: 'mangiare', answers: ['mangiamo'], explanation: 'One i only: mangiamo.' },
    { kind: 'gap', prompt: 'Loro ___ il tè.', hint: 'preferire', answers: ['preferiscono'], explanation: '-isc- verb: loro preferiscono.' },
    { kind: 'gap', prompt: 'Mio marito ___ in un ufficio.', hint: 'lavorare', answers: ['lavora'], explanation: 'lui: -a for -are verbs.' },
    {
      kind: 'choice',
      prompt: 'I miei genitori ___ la radio.',
      options: ['ascoltano', 'ascoltono', 'ascolteno'],
      answer: 0,
      explanation: '-are verbs: loro -ano.',
    },
    {
      kind: 'order',
      words: ['Domani', 'parto', 'per', 'Roma.'],
      alternatives: ['Parto per Roma domani.', 'Parto domani per Roma.'],
      english: "I'm leaving for Rome tomorrow.",
      explanation: 'The present often describes plans.',
    },
  ],
}

export const domandeENegazione: GrammarTopic = {
  id: 'domande-e-negazione',
  title: 'Domande e negazione',
  english: 'Questions and negatives',
  level: 'A1',
  summary:
    'A yes/no question has the same words as a statement, with a rising voice: Parli italiano**?** To make a verb negative, put **non** in front: **Non** parlo tedesco.',
  sections: [
    {
      heading: 'Question words',
      body: [
        'Put the question word first. Dove, come and cosa shorten before è: **Dov’è**, **Com’è**, **Cos’è**.',
      ],
      table: {
        head: ['Word', 'Meaning', 'Example'],
        rows: [
          ['chi', 'who', 'Chi è?'],
          ['che cosa, cosa, che', 'what', 'Cosa fai?'],
          ['dove', 'where', 'Dove abiti?'],
          ['quando', 'when', 'Quando parti?'],
          ['come', 'how', 'Come stai?'],
          ['perché', 'why', 'Perché studi l’italiano?'],
          ['quanto, quanta, quanti, quante', 'how much, how many', 'Quanti anni hai?'],
          ['quale, quali', 'which', 'Quale preferisci?'],
        ],
      },
    },
    {
      heading: 'Negatives',
      body: [
        '**non** goes straight before the verb (and before mi, ti, lo… if there is one): **Non** mi piace.',
        'Words like **mai** (never), **niente** (nothing) and **nessuno** (nobody) go after the verb and still need non: **Non** bevo **mai** caffè. **Non** c’è **nessuno**.',
      ],
      examples: [
        { it: '**Non** capisco **niente**.', en: "I don't understand anything." },
        { it: '**Non** vado **mai** al cinema.', en: 'I never go to the cinema.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Io no parlo francese.', right: 'Io non parlo francese.', why: 'no answers a question; non goes before a verb.' },
    { wrong: 'Bevo mai caffè.', right: 'Non bevo mai caffè.', why: 'mai after the verb needs non before it.' },
    { wrong: 'Dove è la stazione?', right: 'Dov’è la stazione?', why: 'dove and è join.' },
  ],
  exercises: [
    { kind: 'transform', instruction: 'Make it negative.', prompt: 'Parlo francese.', answers: ['Non parlo francese.'], explanation: 'non before the verb.' },
    { kind: 'transform', instruction: 'Make it negative.', prompt: 'Ho tempo.', answers: ['Non ho tempo.'], explanation: 'non before the verb.' },
    {
      kind: 'transform',
      instruction: 'Answer with "non … mai".',
      prompt: 'Vai spesso al cinema?',
      answers: ['Non vado mai al cinema.', 'No, non vado mai al cinema.'],
      explanation: 'non before the verb, mai after it.',
    },
    { kind: 'gap', prompt: '___ abiti? A Londra.', answers: ['Dove'], explanation: 'Asking for a place: dove.' },
    { kind: 'gap', prompt: '___ costa? Dieci euro.', answers: ['Quanto'], explanation: 'Asking a price: quanto.' },
    { kind: 'gap', prompt: '___ ti chiami?', answers: ['Come'], explanation: 'Come ti chiami? What is your name?' },
    { kind: 'gap', prompt: '___ è quel ragazzo? È mio fratello.', answers: ['Chi'], explanation: 'Asking about a person: chi.' },
    { kind: 'gap', prompt: '___ fratelli hai?', answers: ['Quanti'], explanation: 'fratelli is masculine plural: quanti.' },
    { kind: 'gap', prompt: '___ parti? Domani.', answers: ['Quando'], explanation: 'Asking for a time: quando.' },
    {
      kind: 'choice',
      prompt: 'Non c’è ___.',
      options: ['nessuno', 'qualcuno', 'mai'],
      answer: 0,
      explanation: 'Non c’è nessuno: there is nobody.',
    },
    {
      kind: 'order',
      words: ['Non', 'capisco', 'niente.'],
      english: "I don't understand anything.",
      explanation: 'non before the verb, niente after it.',
    },
  ],
}

export const presenteIrregolare: GrammarTopic = {
  id: 'presente-irregolare',
  title: 'Il presente: verbi irregolari',
  english: 'Common irregular verbs in the present',
  level: 'A1',
  summary:
    'The most common verbs are irregular: **andare** (vado), **fare** (faccio), **venire** (vengo), **stare** (sto), and the modals **volere**, **potere** and **dovere**, which take an infinitive: **Voglio** mangiare.',
  sections: [
    {
      heading: 'Andare, fare, venire, stare',
      body: ['Learn these as they are: most of their forms break the usual pattern.'],
      table: {
        head: ['', 'andare', 'fare', 'venire', 'stare'],
        rows: [
          ['io', 'vado', 'faccio', 'vengo', 'sto'],
          ['tu', 'vai', 'fai', 'vieni', 'stai'],
          ['lui, lei, Lei', 'va', 'fa', 'viene', 'sta'],
          ['noi', 'andiamo', 'facciamo', 'veniamo', 'stiamo'],
          ['voi', 'andate', 'fate', 'venite', 'state'],
          ['loro', 'vanno', 'fanno', 'vengono', 'stanno'],
        ],
      },
      examples: [
        { it: 'Domani **vado** a Roma.', en: "I'm going to Rome tomorrow." },
        { it: 'Come **stai**?', en: 'How are you?' },
      ],
    },
    {
      heading: 'Volere, potere, dovere',
      body: [
        'These modal verbs are followed directly by an infinitive, with no preposition: **Posso** entrare? **Devo** lavorare.',
      ],
      table: {
        head: ['', 'volere (want)', 'potere (can)', 'dovere (must)'],
        rows: [
          ['io', 'voglio', 'posso', 'devo'],
          ['tu', 'vuoi', 'puoi', 'devi'],
          ['lui, lei, Lei', 'vuole', 'può', 'deve'],
          ['noi', 'vogliamo', 'possiamo', 'dobbiamo'],
          ['voi', 'volete', 'potete', 'dovete'],
          ['loro', 'vogliono', 'possono', 'devono'],
        ],
      },
      examples: [
        { it: '**Vuoi** venire al cinema?', en: 'Do you want to come to the cinema?' },
        { it: 'Non **possiamo** restare.', en: "We can't stay." },
      ],
    },
    {
      heading: 'Uscire, dire, sapere, bere',
      body: ['Four more you will need early: **esco**, esci, esce, usciamo, uscite, **escono**; **dico**, dici, dice, diciamo, dite, **dicono**; **so**, sai, sa, sappiamo, sapete, **sanno**; **bevo**, bevi, beve, beviamo, bevete, **bevono**.'],
    },
  ],
  mistakes: [
    { wrong: 'io ando', right: 'io vado', why: 'andare is irregular.' },
    { wrong: 'Posso di venire?', right: 'Posso venire?', why: 'Modal verbs take the infinitive directly.' },
    { wrong: 'lui puo', right: 'lui può', why: 'può has an accent.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Domani ___ a Roma.', hint: 'andare, io', answers: ['vado'], explanation: 'andare, io: vado.' },
    { kind: 'gap', prompt: 'Cosa ___ stasera?', hint: 'fare, tu', answers: ['fai'], explanation: 'fare, tu: fai.' },
    { kind: 'gap', prompt: '___ anche voi alla festa?', hint: 'venire', answers: ['Venite'], explanation: 'venire, voi: venite.' },
    { kind: 'gap', prompt: 'Come ___ tua madre?', hint: 'stare', answers: ['sta'], explanation: 'stare, lei: sta.' },
    { kind: 'gap', prompt: 'Noi ___ partire presto.', hint: 'dovere', answers: ['dobbiamo'], explanation: 'dovere, noi: dobbiamo.' },
    { kind: 'gap', prompt: '___ aprire la finestra?', hint: 'potere, io', answers: ['Posso'], explanation: 'potere, io: posso.' },
    { kind: 'gap', prompt: 'I bambini ___ un gelato.', hint: 'volere', answers: ['vogliono'], explanation: 'volere, loro: vogliono.' },
    { kind: 'gap', prompt: 'Ad agosto i miei genitori ___ al mare.', hint: 'andare', answers: ['vanno'], explanation: 'andare, loro: vanno.' },
    { kind: 'gap', prompt: 'Mio fratello non ___ guidare.', hint: 'sapere', answers: ['sa'], explanation: 'sapere, lui: sa.' },
    { kind: 'gap', prompt: 'Stasera ___ con gli amici.', hint: 'uscire, io', answers: ['esco'], explanation: 'uscire, io: esco.' },
    {
      kind: 'choice',
      prompt: 'Lei ___ parlare più piano, per favore?',
      options: ['può', 'puoi', 'posso'],
      answer: 0,
      explanation: 'Formal Lei takes the third person: può.',
    },
    {
      kind: 'order',
      words: ['Vuoi', 'venire', 'al', 'cinema?'],
      english: 'Do you want to come to the cinema?',
      explanation: 'Modal verb, then the infinitive.',
    },
  ],
}

export const preposizioniSemplici: GrammarTopic = {
  id: 'preposizioni-semplici',
  title: 'Le preposizioni semplici',
  english: 'Simple prepositions: di, a, da, in, con, su, per, tra',
  level: 'A1',
  summary:
    'Italian prepositions rarely map one-to-one onto English ones. Learn them in phrases: **a** Roma, **in** Italia, **da** Maria, **in** treno, **da** un anno.',
  sections: [
    {
      heading: 'What each one does',
      table: {
        head: ['Preposition', 'Main uses', 'Examples'],
        rows: [
          ['di', 'of; from (with essere)', 'il libro di Marco; Sono di Roma.'],
          ['a', 'to, at, in (towns); times', 'Vado a Roma. A domani! alle otto'],
          ['da', 'from; to or at someone’s place; since, for', 'Vengo da Londra. Vado da Maria. Studio da un anno.'],
          ['in', 'countries, regions, rooms; transport', 'in Italia, in cucina, in treno'],
          ['con', 'with', 'con mia sorella'],
          ['su', 'on; about', 'su una sedia'],
          ['per', 'for; through', 'per te; per tre giorni'],
          ['tra, fra', 'between; in (time from now)', 'tra dieci minuti'],
        ],
      },
      body: [
        'With the article, most of these join into one word (del, al, nel…): see the next level.',
      ],
    },
    {
      heading: 'Going places',
      body: [
        'Towns take **a**; countries and regions take **in**: Abito **a** Londra, **in** Inghilterra. Some everyday places take **a** (a casa, a scuola, a letto) and others **in** (in banca, in centro, in ufficio, in palestra).',
        'Transport takes **in**: in treno, in macchina, in bicicletta. On foot is **a piedi**.',
        'For something still going on, Italian uses the present + **da**: Studio italiano **da** un anno (I have been studying Italian for a year).',
      ],
      examples: [
        { it: 'Vado **a** Firenze **in** treno.', en: "I'm going to Florence by train." },
        { it: 'Stasera vado **da** Giulia.', en: "Tonight I'm going to Giulia's." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Vado in Roma.', right: 'Vado a Roma.', why: 'Towns take a.' },
    { wrong: 'Abito a Italia.', right: 'Abito in Italia.', why: 'Countries take in.' },
    { wrong: 'Studio italiano per un anno.', right: 'Studio italiano da un anno.', why: 'For something still going on, use da with the present.' },
    { wrong: 'Vado con il treno.', right: 'Vado in treno.', why: 'Transport takes in.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Abito ___ Londra.', answers: ['a'], explanation: 'Towns take a.' },
    { kind: 'gap', prompt: 'In agosto andiamo ___ Spagna.', answers: ['in'], explanation: 'Countries take in.' },
    { kind: 'gap', prompt: 'Vengo ___ Manchester.', answers: ['da'], explanation: 'Coming from a place: da.' },
    { kind: 'gap', prompt: 'Studio italiano ___ un anno.', answers: ['da'], explanation: 'Still going on: present + da.' },
    { kind: 'gap', prompt: 'Vado al lavoro ___ macchina.', answers: ['in'], explanation: 'Transport takes in.' },
    { kind: 'gap', prompt: 'Esco ___ mia sorella.', answers: ['con'], explanation: 'With: con.' },
    { kind: 'gap', prompt: 'Questo regalo è ___ te.', answers: ['per'], explanation: 'For: per.' },
    { kind: 'gap', prompt: 'Il treno arriva ___ dieci minuti.', answers: ['tra', 'fra'], explanation: 'In ten minutes from now: tra (or fra).' },
    { kind: 'gap', prompt: 'Mio marito è ___ Napoli.', answers: ['di'], explanation: 'Being from a town: essere di.' },
    {
      kind: 'choice',
      prompt: 'Stasera vado ___ Maria.',
      options: ['a', 'da', 'in'],
      answer: 1,
      explanation: 'To someone’s place: da.',
    },
    {
      kind: 'choice',
      prompt: 'Oggi lavoro ___ casa.',
      options: ['da', 'in', 'per'],
      answer: 0,
      explanation: 'Working from home: da casa.',
    },
  ],
}
