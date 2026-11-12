import type { GrammarTopic } from '../types'

export const congiuntivoPresente: GrammarTopic = {
  id: 'congiuntivo-presente',
  title: 'Il congiuntivo presente',
  english: 'The present subjunctive: penso che sia, voglio che tu venga',
  level: 'B1',
  summary:
    'The congiuntivo follows verbs of opinion, wishing, doubt and feeling, and some conjunctions: **Penso che sia** vero. **Voglio che tu venga.** The io, tu and lui/lei forms are the same, so add the subject when it isn’t clear: che **tu** parli.',
  sections: [
    {
      heading: 'Regular forms',
      body: ['-are verbs take **-i**; -ere and -ire verbs take **-a**. Noi is the same as the present (parliamo); voi ends in **-iate**.'],
      table: {
        head: ['', 'parlare', 'prendere', 'partire', 'finire'],
        rows: [
          ['che io', 'parli', 'prenda', 'parta', 'finisca'],
          ['che tu', 'parli', 'prenda', 'parta', 'finisca'],
          ['che lui, lei', 'parli', 'prenda', 'parta', 'finisca'],
          ['che noi', 'parliamo', 'prendiamo', 'partiamo', 'finiamo'],
          ['che voi', 'parliate', 'prendiate', 'partiate', 'finiate'],
          ['che loro', 'parlino', 'prendano', 'partano', 'finiscano'],
        ],
      },
    },
    {
      heading: 'Irregular verbs',
      body: [
        'Most irregular verbs build the congiuntivo on the io present: vengo → **venga**, faccio → **faccia**, dico → **dica**, esco → **esca**, posso → **possa**, voglio → **voglia**. Learn these separately:',
      ],
      table: {
        head: ['', 'io, tu, lui, lei', 'noi', 'voi', 'loro'],
        rows: [
          ['essere', 'sia', 'siamo', 'siate', 'siano'],
          ['avere', 'abbia', 'abbiamo', 'abbiate', 'abbiano'],
          ['andare', 'vada', 'andiamo', 'andiate', 'vadano'],
          ['stare', 'stia', 'stiamo', 'stiate', 'stiano'],
          ['dare', 'dia', 'diamo', 'diate', 'diano'],
          ['sapere', 'sappia', 'sappiamo', 'sappiate', 'sappiano'],
          ['dovere', 'debba', 'dobbiamo', 'dobbiate', 'debbano'],
        ],
      },
    },
    {
      heading: 'When to use it',
      body: [
        'After verbs of **opinion** (pensare, credere, sembrare che), **wanting** (volere, preferire, sperare che), **feeling** (essere contento, avere paura che) and **doubt** (non sapere se, dubitare), and after phrases like **è importante**, **è meglio** and **bisogna che**.',
        'After the conjunctions **benché** and **sebbene** (although), **affinché** and **perché** meaning "so that", **prima che**, **a meno che** and **purché**.',
        'Not after facts: **So che** è vero (indicative). When both verbs have the same subject, use **di + infinitive**: Penso **di partire**, not *penso che io parta*.',
      ],
      examples: [
        { it: 'Credo che Marco **abbia** ragione.', en: 'I think Marco is right.' },
        { it: 'È meglio che tu **vada** a letto.', en: 'You’d better go to bed.' },
        { it: 'Spero che **stiate** bene.', en: 'I hope you’re all well.' },
        { it: 'Ti presto la macchina purché tu **guidi** piano.', en: 'I’ll lend you the car as long as you drive slowly.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Penso che è vero.',
      right: 'Penso che sia vero.',
      why: 'pensare che takes the congiuntivo. You will hear "è" in speech, but in writing it counts as a mistake.',
    },
    { wrong: 'Voglio che vieni.', right: 'Voglio che tu venga.', why: 'volere che takes the congiuntivo.' },
    { wrong: 'Spero che io trovo lavoro.', right: 'Spero di trovare lavoro.', why: 'Same subject: di + infinitive.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Penso che Luca ___ a casa.', hint: 'essere', answers: ['sia'], explanation: 'essere: sia.' },
    { kind: 'gap', prompt: 'Voglio che tu ___ subito.', hint: 'venire', answers: ['venga'], explanation: 'From vengo: venga.' },
    {
      kind: 'gap',
      prompt: 'È importante che voi ___ in orario.',
      hint: 'arrivare',
      answers: ['arriviate'],
      explanation: 'voi ends in -iate.',
    },
    { kind: 'gap', prompt: 'Spero che i bambini ___ bene.', hint: 'dormire', answers: ['dormano'], explanation: '-ire verbs: loro ends in -ano.' },
    { kind: 'gap', prompt: 'Credo che ___ ragione tu.', hint: 'avere', answers: ['abbia'], explanation: 'avere: abbia.' },
    { kind: 'gap', prompt: 'Bisogna che tu ___ il biglietto.', hint: 'comprare', answers: ['compri'], explanation: '-are verbs end in -i.' },
    { kind: 'gap', prompt: 'Esco benché ___.', hint: 'piovere', answers: ['piova'], explanation: 'benché takes the congiuntivo.' },
    {
      kind: 'gap',
      prompt: 'Ti aiuto purché tu mi ___ un caffè.',
      hint: 'offrire',
      answers: ['offra'],
      explanation: 'purché takes the congiuntivo; -ire verbs end in -a.',
    },
    {
      kind: 'gap',
      prompt: 'Ho paura che non ___ abbastanza tempo.',
      hint: 'esserci',
      answers: ['ci sia'],
      explanation: 'avere paura che takes the congiuntivo: ci sia.',
    },
    {
      kind: 'choice',
      prompt: 'Which is right?',
      options: ['So che Anna sia stanca.', 'So che Anna è stanca.'],
      answer: 1,
      explanation: 'sapere states a fact: indicative.',
    },
    {
      kind: 'choice',
      prompt: 'Which is right?',
      options: ['Spero che io ti veda presto.', 'Spero di vederti presto.'],
      answer: 1,
      explanation: 'Same subject: di + infinitive.',
    },
    {
      kind: 'transform',
      instruction: 'Start with "Penso che".',
      prompt: 'Il film è noioso.',
      answers: ['Penso che il film sia noioso.'],
      explanation: 'pensare che + congiuntivo: sia.',
    },
  ],
}

export const congiuntivoPassato: GrammarTopic = {
  id: 'congiuntivo-passato',
  title: 'Il congiuntivo passato',
  english: 'The perfect subjunctive: penso che sia partito',
  level: 'B1',
  summary:
    'For a past action after a congiuntivo trigger, use the **congiuntivo passato**: the congiuntivo of **avere** or **essere** + the participle. **Penso che abbia capito.** **Mi dispiace che siate arrivati tardi.**',
  sections: [
    {
      heading: 'Forms',
      body: ['Choose avere or essere as in the passato prossimo, and make the participle agree in the same way.'],
      table: {
        head: ['', 'mangiare', 'andare'],
        rows: [
          ['che io', 'abbia mangiato', 'sia andato / andata'],
          ['che tu', 'abbia mangiato', 'sia andato / andata'],
          ['che lui, lei', 'abbia mangiato', 'sia andato / andata'],
          ['che noi', 'abbiamo mangiato', 'siamo andati / andate'],
          ['che voi', 'abbiate mangiato', 'siate andati / andate'],
          ['che loro', 'abbiano mangiato', 'siano andati / andate'],
        ],
      },
    },
    {
      heading: 'Present or past?',
      body: [
        'Compare the time of the second action with the first: **Penso che Marco sia a casa** (now), **Penso che Marco sia andato a casa** (before now). For something still to come, use the present congiuntivo or the future: Penso che **arrivi** / **arriverà** domani.',
      ],
      examples: [
        { it: 'Credo che **abbiano venduto** la casa.', en: 'I think they’ve sold the house.' },
        { it: 'Sono contenta che tu **sia venuto**.', en: 'I’m glad you came.' },
        { it: 'Non sembra che **abbia piovuto**.', en: 'It doesn’t look as if it’s rained.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Penso che ha capito.', right: 'Penso che abbia capito.', why: 'pensare che takes the congiuntivo.' },
    { wrong: 'Mi dispiace che siete partiti.', right: 'Mi dispiace che siate partiti.', why: 'mi dispiace che takes the congiuntivo.' },
    { wrong: 'Credo che Anna abbia uscita.', right: 'Credo che Anna sia uscita.', why: 'uscire takes essere.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Penso che Giulia ___ il treno.', hint: 'perdere', answers: ['abbia perso'], explanation: 'avere + perso.' },
    {
      kind: 'gap',
      prompt: 'Sono contento che voi ___.',
      hint: 'venire',
      answers: ['siate venuti', 'siate venute'],
      explanation: 'venire takes essere; the participle agrees.',
    },
    {
      kind: 'gap',
      prompt: 'Credo che i ragazzi ___ ieri.',
      hint: 'partire',
      answers: ['siano partiti', 'siano partite'],
      explanation: 'partire takes essere.',
    },
    {
      kind: 'gap',
      prompt: 'Non è possibile che tu ___ tutta la torta!',
      hint: 'mangiare',
      answers: ['abbia mangiato'],
      explanation: 'non è possibile che takes the congiuntivo.',
    },
    {
      kind: 'gap',
      prompt: 'Mi dispiace che Anna non ___ bene.',
      hint: 'stare, past',
      answers: ['sia stata'],
      explanation: 'stare takes essere: sia stata.',
    },
    {
      kind: 'gap',
      prompt: 'Speriamo che ___ la lettera.',
      hint: 'ricevere, loro',
      answers: ['abbiano ricevuto'],
      explanation: 'avere + ricevuto.',
    },
    {
      kind: 'choice',
      prompt: 'I think she called yesterday.',
      options: ['Penso che chiami ieri.', 'Penso che ha chiamato ieri.', 'Penso che abbia chiamato ieri.'],
      answer: 2,
      explanation: 'A past action after pensare che: congiuntivo passato.',
    },
    {
      kind: 'transform',
      instruction: 'Start with "Credo che".',
      prompt: 'Marco è uscito.',
      answers: ['Credo che Marco sia uscito.'],
      explanation: 'credere che + congiuntivo passato.',
    },
  ],
}

export const condizionale: GrammarTopic = {
  id: 'condizionale',
  title: 'Il condizionale',
  english: 'The conditional: vorrei, potresti, sarei venuta',
  level: 'B1',
  summary:
    'The condizionale presente softens requests and gives advice: **Vorrei** un caffè. **Potresti** aiutarmi? **Dovresti** riposare. It is the future stem + **-ei, -esti, -ebbe, -emmo, -este, -ebbero**. The condizionale passato (**avrei** or **sarei** + participle) is for things that didn’t happen.',
  sections: [
    {
      heading: 'Forms',
      body: [
        'Take the future stem (parler-, prender-, dormir-) and add the endings. Irregular future stems stay irregular: **sarei**, **avrei**, **andrei**, **farei**, **potrei**, **dovrei**, **vorrei**, **verrei**, **berrei**.',
      ],
      table: {
        head: ['', 'parlare', 'essere', 'volere'],
        rows: [
          ['io', 'parlerei', 'sarei', 'vorrei'],
          ['tu', 'parleresti', 'saresti', 'vorresti'],
          ['lui, lei', 'parlerebbe', 'sarebbe', 'vorrebbe'],
          ['noi', 'parleremmo', 'saremmo', 'vorremmo'],
          ['voi', 'parlereste', 'sareste', 'vorreste'],
          ['loro', 'parlerebbero', 'sarebbero', 'vorrebbero'],
        ],
      },
    },
    {
      heading: 'Uses',
      body: [
        '**Polite requests**: Mi **daresti** una mano? **Advice**: **Dovresti** dormire di più. **Wishes**: Mi **piacerebbe** visitare la Puglia. **Unconfirmed news**: Secondo la polizia, il ladro **sarebbe** fuggito in macchina.',
      ],
    },
    {
      heading: 'Condizionale passato',
      body: [
        '**avere** or **essere** in the condizionale + participle: **avrei mangiato**, **sarei andata**. It describes what would have happened: Sarei venuta, ma ero malata.',
        'Italian also uses it for a future seen from the past, where English says "would": Ha detto che **sarebbe arrivato** alle otto (He said he would arrive at eight).',
      ],
      examples: [
        { it: '**Vorrei** prenotare un tavolo per due.', en: 'I’d like to book a table for two.' },
        { it: 'Al tuo posto **parlerei** con il capo.', en: 'If I were you I’d talk to the boss.' },
        { it: '**Avrei** dovuto studiare di più.', en: 'I should have studied more.' },
        { it: 'Mi ha promesso che mi **avrebbe chiamato**.', en: 'He promised he would call me.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ha detto che arriverebbe alle otto.',
      right: 'Ha detto che sarebbe arrivato alle otto.',
      why: 'A future seen from the past takes the condizionale passato.',
    },
    { wrong: 'Vorrebbi un caffè.', right: 'Vorrei un caffè.', why: 'The io ending is -ei.' },
    { wrong: 'Io dovrebbe studiare.', right: 'Io dovrei studiare.', why: 'dovrebbe is lui or lei; io is dovrei.' },
  ],
  exercises: [
    { kind: 'gap', prompt: '___ un cappuccino, per favore.', hint: 'volere, io', answers: ['Vorrei', 'vorrei'], explanation: 'volere: vorrei.' },
    {
      kind: 'gap',
      prompt: '___ chiudere la finestra?',
      hint: 'potere, tu',
      answers: ['Potresti', 'potresti'],
      explanation: 'A polite request: potresti.',
    },
    { kind: 'gap', prompt: 'Al tuo posto non lo ___.', hint: 'fare, io', answers: ['farei'], explanation: 'fare: farei.' },
    { kind: 'gap', prompt: 'Mi ___ vivere al mare.', hint: 'piacere', answers: ['piacerebbe'], explanation: 'A wish: mi piacerebbe.' },
    { kind: 'gap', prompt: 'Voi ___ venire con noi?', hint: 'volere', answers: ['vorreste'], explanation: 'voi: -este.' },
    {
      kind: 'gap',
      prompt: 'Secondo me, loro ___ prendere il treno.',
      hint: 'dovere',
      answers: ['dovrebbero'],
      explanation: 'Advice: dovrebbero.',
    },
    {
      kind: 'gap',
      prompt: 'Ieri ___ venire, ma ero stanca.',
      hint: 'potere, io, past',
      answers: ['avrei potuto', 'sarei potuta', 'sarei potuto'],
      explanation: 'Condizionale passato. With a modal + venire, avere and essere are both right.',
    },
    {
      kind: 'gap',
      prompt: 'Ha detto che ___ alle nove.',
      hint: 'tornare, lui',
      answers: ['sarebbe tornato'],
      explanation: 'A future seen from the past: condizionale passato.',
    },
    {
      kind: 'choice',
      prompt: 'Which is more polite?',
      options: ['Mi dà il sale?', 'Mi darebbe il sale?'],
      answer: 1,
      explanation: 'The condizionale softens the request.',
    },
    {
      kind: 'transform',
      instruction: 'Make it more polite.',
      prompt: 'Voglio un tavolo vicino alla finestra.',
      answers: ['Vorrei un tavolo vicino alla finestra.'],
      explanation: 'vorrei is the polite form of voglio.',
    },
  ],
}

export const periodoIpotetico: GrammarTopic = {
  id: 'periodo-ipotetico',
  title: 'Il periodo ipotetico',
  english: 'If-sentences: se piove, se avessi tempo, se fossi venuta',
  level: 'B1',
  summary:
    'Three kinds of "if" sentence. **Real**: Se piove, resto a casa. **Imaginary**: Se **avessi** tempo, **viaggerei** di più. **Past and impossible**: Se **fossi venuta**, ti **saresti divertita**. The last two need the **congiuntivo imperfetto** or **trapassato** after se.',
  sections: [
    {
      heading: 'Real conditions',
      body: [
        'se + present or future, then present, future or imperative: **Se hai fame, mangia!** **Se finisco presto, ti chiamo** (or ti chiamerò). Italian often puts the future on both sides: Se **verrai**, ti **divertirai**.',
      ],
    },
    {
      heading: 'Imaginary: congiuntivo imperfetto + condizionale',
      body: [
        'The congiuntivo imperfetto takes the infinitive minus **-re** and adds **-ssi, -ssi, -sse, -ssimo, -ste, -ssero**: parla**ssi**, prende**ssi**, dormi**ssi**. Irregular: **fossi** (essere), **dessi** (dare), **stessi** (stare), **facessi** (fare), **dicessi** (dire), **bevessi** (bere).',
        '**Se fossi** ricca, **comprerei** una casa a Venezia. The congiuntivo imperfetto also follows a trigger in the past or the condizionale: **Vorrei che tu venissi.** Pensavo che **fosse** vero.',
      ],
      table: {
        head: ['', 'parlare', 'essere', 'avere'],
        rows: [
          ['io', 'parlassi', 'fossi', 'avessi'],
          ['tu', 'parlassi', 'fossi', 'avessi'],
          ['lui, lei', 'parlasse', 'fosse', 'avesse'],
          ['noi', 'parlassimo', 'fossimo', 'avessimo'],
          ['voi', 'parlaste', 'foste', 'aveste'],
          ['loro', 'parlassero', 'fossero', 'avessero'],
        ],
      },
    },
    {
      heading: 'Past and impossible',
      body: [
        'se + **congiuntivo trapassato** (avessi or fossi + participle), then the **condizionale passato**: **Se avessi studiato, avrei superato l’esame.** If the result is in the present, use the condizionale presente: Se avessi studiato medicina, ora **sarei** medico.',
        'Never put the condizionale after se: *se avrei* is a classic mistake.',
      ],
      examples: [
        { it: 'Se **vinco** la lotteria, smetto di lavorare.', en: 'If I win the lottery, I’ll stop working.' },
        { it: 'Se **potessi**, **partirei** domani.', en: 'If I could, I’d leave tomorrow.' },
        { it: 'Se mi **avessi chiamato**, **sarei venuta**.', en: 'If you’d called me, I’d have come.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Se avrei tempo, verrei.', right: 'Se avessi tempo, verrei.', why: 'No condizionale after se.' },
    { wrong: 'Se sarei stato lì, ti avrei aiutato.', right: 'Se fossi stato lì, ti avrei aiutato.', why: 'After se: congiuntivo trapassato.' },
    {
      wrong: 'Se avevo soldi, compravo una casa.',
      right: 'Se avessi soldi, comprerei una casa.',
      why: 'The imperfetto version is spoken Italian; in writing use the congiuntivo and the condizionale.',
    },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Se ___ tempo, verrei al cinema.', hint: 'avere, io', answers: ['avessi'], explanation: 'Imaginary: congiuntivo imperfetto.' },
    { kind: 'gap', prompt: 'Se ___ ricca, viaggerei sempre.', hint: 'essere, io', answers: ['fossi'], explanation: 'essere: fossi.' },
    {
      kind: 'gap',
      prompt: 'Se piove, ___ a casa.',
      hint: 'restare, noi',
      answers: ['restiamo', 'resteremo'],
      explanation: 'Real condition: present or future.',
    },
    {
      kind: 'gap',
      prompt: 'Se tu ___ più piano, capirei meglio.',
      hint: 'parlare',
      answers: ['parlassi'],
      explanation: 'Imaginary: congiuntivo imperfetto.',
    },
    {
      kind: 'gap',
      prompt: 'Se avessi saputo, ti ___.',
      hint: 'aiutare, io',
      answers: ['avrei aiutato'],
      explanation: 'Past and impossible: condizionale passato.',
    },
    {
      kind: 'gap',
      prompt: 'Se ___ prima, avremmo preso il treno.',
      hint: 'partire, noi',
      answers: ['fossimo partiti', 'fossimo partite'],
      explanation: 'Congiuntivo trapassato; partire takes essere.',
    },
    { kind: 'gap', prompt: 'Se fossi in te, non ___ niente.', hint: 'dire, io', answers: ['direi'], explanation: 'Condizionale: direi.' },
    {
      kind: 'gap',
      prompt: 'Vorrei che tu ___ con me.',
      hint: 'venire',
      answers: ['venissi'],
      explanation: 'After vorrei che: congiuntivo imperfetto.',
    },
    {
      kind: 'choice',
      prompt: 'If I had known, I would have come.',
      options: ['Se lo sapevo, venivo.', 'Se lo saprei, verrei.', 'Se lo avessi saputo, sarei venuto.'],
      answer: 2,
      explanation: 'Congiuntivo trapassato + condizionale passato. The first is spoken Italian; the second is wrong.',
    },
    {
      kind: 'transform',
      instruction: 'Make it imaginary.',
      prompt: 'Se ho soldi, compro una macchina.',
      answers: ['Se avessi soldi, comprerei una macchina.', 'Se avessi i soldi, comprerei una macchina.'],
      explanation: 'Congiuntivo imperfetto after se, condizionale in the result.',
    },
  ],
}
