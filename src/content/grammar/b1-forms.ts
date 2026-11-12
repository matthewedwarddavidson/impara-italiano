import type { GrammarTopic } from '../types'

export const trapassatoProssimo: GrammarTopic = {
  id: 'trapassato-prossimo',
  title: 'Il trapassato prossimo',
  english: 'The pluperfect: avevo già mangiato',
  level: 'B1',
  summary:
    'The trapassato prossimo describes something that had happened before another past event: **Quando sono arrivata, il film era già cominciato.** It is the **imperfetto** of avere or essere + the participle.',
  sections: [
    {
      heading: 'Forms',
      body: ['Avere or essere, and the agreement, work as in the passato prossimo.'],
      table: {
        head: ['', 'finire', 'partire'],
        rows: [
          ['io', 'avevo finito', 'ero partito / partita'],
          ['tu', 'avevi finito', 'eri partito / partita'],
          ['lui, lei', 'aveva finito', 'era partito / partita'],
          ['noi', 'avevamo finito', 'eravamo partiti / partite'],
          ['voi', 'avevate finito', 'eravate partiti / partite'],
          ['loro', 'avevano finito', 'erano partiti / partite'],
        ],
      },
    },
    {
      heading: 'Use',
      body: [
        'Use it for the earlier of two past events. **Già** (already), **prima** (before), **non… ancora** (not yet) and **mai** (ever, never) often go with it: **Non avevo mai visto** il mare prima di quel viaggio.',
        'It is common in stories and explanations: Ero stanca perché **avevo lavorato** tutto il giorno.',
      ],
      examples: [
        { it: 'Quando ho chiamato, **erano** già **usciti**.', en: 'When I called, they had already gone out.' },
        { it: 'Mi ha detto che **aveva perso** il portafoglio.', en: 'He told me he had lost his wallet.' },
        { it: '**Non avevo** ancora **finito** quando è arrivato il capo.', en: 'I hadn’t finished yet when the boss arrived.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Quando sono arrivato, il treno è già partito.',
      right: 'Quando sono arrivato, il treno era già partito.',
      why: 'The earlier past event takes the trapassato.',
    },
    { wrong: 'Avevo andato a letto.', right: 'Ero andato a letto.', why: 'andare takes essere.' },
    {
      wrong: 'Mi ha detto che ha perso le chiavi.',
      right: 'Mi ha detto che aveva perso le chiavi.',
      why: 'In reported speech, the earlier event usually moves to the trapassato.',
    },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Quando sono arrivata, la lezione ___ da dieci minuti.',
      hint: 'cominciare',
      answers: ['era cominciata'],
      explanation: 'The earlier event: trapassato.',
    },
    { kind: 'gap', prompt: 'Ero stanco perché ___ male.', hint: 'dormire, io', answers: ['avevo dormito'], explanation: 'avere in the imperfetto + dormito.' },
    {
      kind: 'gap',
      prompt: 'Prima di quel viaggio non ___ il mare.',
      hint: 'vedere mai, io',
      answers: ['avevo mai visto'],
      explanation: 'mai goes between the auxiliary and the participle.',
    },
    { kind: 'gap', prompt: 'Mi ha detto che ___ lavoro.', hint: 'trovare, lui', answers: ['aveva trovato'], explanation: 'Reported earlier event.' },
    {
      kind: 'gap',
      prompt: 'Quando li ho chiamati, ___ a letto.',
      hint: 'andare, loro',
      answers: ['erano andati', 'erano già andati', 'erano andate'],
      explanation: 'andare takes essere.',
    },
    {
      kind: 'gap',
      prompt: 'Abbiamo mangiato la torta che ___ la nonna.',
      hint: 'preparare',
      answers: ['aveva preparato'],
      explanation: 'The cake was made before it was eaten.',
    },
    {
      kind: 'choice',
      prompt: 'When we arrived, they had left.',
      options: ['Quando siamo arrivati, sono partiti.', 'Quando siamo arrivati, erano partiti.', 'Quando eravamo arrivati, sono partiti.'],
      answer: 1,
      explanation: 'Leaving came first: trapassato.',
    },
    {
      kind: 'order',
      words: ['Avevo', 'già', 'mangiato', 'quando', 'sei', 'arrivato.'],
      english: 'I had already eaten when you arrived.',
      explanation: 'già goes between the auxiliary and the participle.',
    },
  ],
}

export const pronomiCombinati: GrammarTopic = {
  id: 'pronomi-combinati',
  title: 'I pronomi combinati',
  english: 'Double pronouns: me lo, glielo, me ne',
  level: 'B1',
  summary:
    'When an indirect and a direct pronoun meet, the indirect one comes first and changes: mi → **me**, ti → **te**, ci → **ce**, vi → **ve**, and gli or le → **glie-**, written as one word with the next: **Te lo** do. **Glielo** dico.',
  sections: [
    {
      heading: 'The combinations',
      body: [
        '**Glie-** serves for him, her and formal you (Lei), and in speech often for them too: **Gliel’ho** detto (I told him, her or them).',
      ],
      table: {
        head: ['', 'lo', 'la', 'li', 'le', 'ne'],
        rows: [
          ['mi', 'me lo', 'me la', 'me li', 'me le', 'me ne'],
          ['ti', 'te lo', 'te la', 'te li', 'te le', 'te ne'],
          ['gli, le', 'glielo', 'gliela', 'glieli', 'gliele', 'gliene'],
          ['ci', 'ce lo', 'ce la', 'ce li', 'ce le', 'ce ne'],
          ['vi', 've lo', 've la', 've li', 've le', 've ne'],
        ],
      },
    },
    {
      heading: 'Position',
      body: [
        'Like single pronouns, they go before a conjugated verb (**Me lo** presti?) and join the end of an infinitive, a gerund or a tu, noi or voi imperative: Puoi prestar**melo**? **Dammelo!** **Diglielo!**',
        'In the passato prossimo the participle agrees with lo, la, li and le: **Te le ho** comprat**e** (the shoes). Lo and la drop their vowel before ho: **Me l’ha** detto.',
      ],
    },
    {
      heading: 'Reflexive verbs and fixed phrases',
      body: [
        'Reflexive si becomes **se**: **Se lo** mette (He puts it on). Common fixed phrases: **me ne vado** (I’m leaving), **ce l’ho** (I’ve got it), **ce la faccio** (I can manage).',
      ],
      examples: [
        { it: 'Il libro? **Te lo** porto domani.', en: 'The book? I’ll bring it to you tomorrow.' },
        { it: 'Hai detto a Maria della festa? Sì, **gliel’ho** detto.', en: 'Did you tell Maria about the party? Yes, I told her.' },
        { it: 'Le mele sono buone: **me ne** dai tre?', en: 'The apples are good: will you give me three?' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Mi lo dai?', right: 'Me lo dai?', why: 'Before lo, la, li, le and ne, mi becomes me.' },
    { wrong: 'Le lo dico.', right: 'Glielo dico.', why: 'le (to her) + lo = glielo.' },
    { wrong: 'Lo te do.', right: 'Te lo do.', why: 'The indirect pronoun comes first.' },
  ],
  exercises: [
    {
      kind: 'gap',
      prompt: 'Mi presti la penna? Sì, ___ presto.',
      hint: 'to you + it',
      answers: ['te la'],
      explanation: 'ti + la = te la.',
    },
    {
      kind: 'gap',
      prompt: 'Quando dai il regalo a Luca? ___ do stasera.',
      hint: 'to him + it',
      answers: ['Glielo', 'glielo'],
      explanation: 'gli + lo = glielo.',
    },
    {
      kind: 'gap',
      prompt: 'Ci mandi le foto? Sì, ___ mando subito.',
      hint: 'to you (plural) + them',
      answers: ['ve le'],
      explanation: 'vi + le = ve le.',
    },
    { kind: 'gap', prompt: 'Vuoi dei biscotti? Sì, ___ dai due?', hint: 'to me + of them', answers: ['me ne'], explanation: 'mi + ne = me ne.' },
    {
      kind: 'gap',
      prompt: 'Non ho capito: puoi spiegar___ di nuovo?',
      hint: 'to me + it',
      answers: ['melo'],
      explanation: 'Joined to the end of the infinitive: spiegarmelo.',
    },
    {
      kind: 'gap',
      prompt: 'Questo vestito è bellissimo: ___ metto stasera.',
      hint: 'reflexive + it',
      answers: ['me lo'],
      explanation: 'mi + lo = me lo.',
    },
    {
      kind: 'gap',
      prompt: 'Il caffè, signora? ___ porto subito.',
      hint: 'to you (Lei) + it',
      answers: ['Glielo', 'glielo'],
      explanation: 'Le (formal you) + lo = glielo.',
    },
    {
      kind: 'choice',
      prompt: 'Did you tell your parents? Yes, …',
      options: ['li l’ho detto.', 'gli l’ho detto.', 'gliel’ho detto.'],
      answer: 2,
      explanation: 'gli + lo = glielo, shortened before ho.',
    },
    {
      kind: 'transform',
      instruction: 'Replace "il libro" and "a Marco" with pronouns.',
      prompt: 'Do il libro a Marco.',
      answers: ['Glielo do.'],
      explanation: 'gli + lo = glielo, before the verb.',
    },
  ],
}

export const siImpersonale: GrammarTopic = {
  id: 'si-impersonale',
  title: 'Il si impersonale e passivante',
  english: 'People in general, and the passive: si mangia bene, si vendono case',
  level: 'B1',
  summary:
    '**si** + verb means people in general: **In Italia si mangia tardi** (In Italy people eat late). With a plural noun the verb is plural: **Si vendono appartamenti** (Flats for sale). It is the commonest way to say "is done" in Italian.',
  sections: [
    {
      heading: 'Si impersonale',
      body: [
        'si + the lui/lei form: **Qui si parla italiano.** **Come si dice "spoon"?** **Non si fuma.**',
        'Adjectives after si + essere are plural: **Quando si è stanchi**, si dorme bene.',
      ],
    },
    {
      heading: 'Si passivante',
      body: [
        'When the verb has an object, it agrees with it: **Si vede il mare** (singular), **Si vedono le montagne** (plural). Signs and adverts use it all the time: Affittasi (si affitta), Vendesi.',
      ],
    },
    {
      heading: 'Reflexive verbs and past tenses',
      body: [
        'With a reflexive verb, use **ci si**: **Ci si alza** presto in campagna (People get up early in the country).',
        'In the passato prossimo si always takes **essere**: **Si è mangiato** bene. With an object, the participle agrees: **Si sono vendute** molte case.',
      ],
      examples: [
        { it: 'In questo ristorante **si mangia** benissimo.', en: 'You eat very well in this restaurant.' },
        { it: 'In Italia **si bevono** molti caffè.', en: 'In Italy people drink a lot of coffee.' },
        { it: '**Ci si diverte** a queste feste.', en: 'You have fun at these parties.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Si vende case.', right: 'Si vendono case.', why: 'With a plural noun the verb is plural.' },
    { wrong: 'Si si alza presto.', right: 'Ci si alza presto.', why: 'Reflexive verbs use ci si.' },
    { wrong: 'Si ha mangiato bene.', right: 'Si è mangiato bene.', why: 'si takes essere.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Come ___ "thank you" in italiano?', hint: 'dire', answers: ['si dice'], explanation: 'si + lui/lei form.' },
    { kind: 'gap', prompt: 'In Italia ___ la pasta ogni giorno.', hint: 'mangiare', answers: ['si mangia'], explanation: 'Singular noun: singular verb.' },
    { kind: 'gap', prompt: 'Dalla finestra ___ le montagne.', hint: 'vedere', answers: ['si vedono'], explanation: 'Plural noun: plural verb.' },
    { kind: 'gap', prompt: 'In vacanza ___ tardi.', hint: 'svegliarsi', answers: ['ci si sveglia'], explanation: 'Reflexive verb: ci si.' },
    { kind: 'gap', prompt: 'Qui non ___.', hint: 'fumare', answers: ['si fuma'], explanation: 'si + lui/lei form.' },
    { kind: 'gap', prompt: 'Al mercato ___ frutta fresca.', hint: 'vendere', answers: ['si vende'], explanation: 'frutta is singular.' },
    { kind: 'gap', prompt: 'Ieri sera ___ molto bene.', hint: 'mangiare, past', answers: ['si è mangiato'], explanation: 'si takes essere.' },
    {
      kind: 'choice',
      prompt: 'Flats to let (on a sign):',
      options: ['Si affitta appartamenti', 'Si affittano appartamenti', 'Si affittato appartamenti'],
      answer: 1,
      explanation: 'appartamenti is plural, so the verb is plural.',
    },
  ],
}

export const pronomiRelativi: GrammarTopic = {
  id: 'pronomi-relativi',
  title: 'I pronomi relativi',
  english: 'Relative pronouns: che, cui, il quale',
  level: 'B1',
  summary:
    '**Che** links clauses as subject or object (who, which, that): **La ragazza che** abita qui. After a preposition, use **cui**: **la città in cui** vivo, **l’amico a cui** ho scritto. **Il quale** is a more formal alternative.',
  sections: [
    {
      heading: 'Che',
      body: [
        'Che never changes, and unlike English "that" it is never left out: **Il libro che** leggo (The book I’m reading).',
        '**Quello che** or **ciò che** means "what" (the thing that): **Quello che** dici è vero.',
      ],
    },
    {
      heading: 'Cui',
      body: [
        'After a preposition: **di cui** (of which, about whom), **a cui** (to whom), **con cui**, **in cui**, **per cui**. Il motivo **per cui** sono qui. La persona **con cui** lavoro.',
        'Between the article and a noun, **cui** means whose: **Il signore il cui figlio** è medico (The man whose son is a doctor).',
      ],
    },
    {
      heading: 'Il quale',
      body: [
        '**Il quale**, **la quale**, **i quali** and **le quali** agree with the noun and can replace che or cui, mostly in writing: La collega **della quale** ti ho parlato. They help when che would be unclear: Il fratello di Anna, **il quale** vive a Roma… (the brother lives in Rome, not Anna).',
      ],
      examples: [
        { it: 'Ti presento l’amica **di cui** ti ho parlato.', en: 'This is the friend I told you about.' },
        { it: 'Non trovo la penna **che** mi hai prestato.', en: 'I can’t find the pen you lent me.' },
        { it: 'È la casa **in cui** sono nata.', en: 'It’s the house where I was born.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'La ragazza con che esco.', right: 'La ragazza con cui esco.', why: 'After a preposition: cui.' },
    { wrong: 'Il film ho visto era bello.', right: 'Il film che ho visto era bello.', why: 'che can’t be left out.' },
    { wrong: 'Che dici è vero.', right: 'Quello che dici è vero.', why: '"What" meaning "the thing that" is quello che or ciò che.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Il ragazzo ___ parla con Anna è mio fratello.', answers: ['che'], explanation: 'Subject of the clause: che.' },
    { kind: 'gap', prompt: 'La città in ___ abito è piccola.', answers: ['cui'], explanation: 'After a preposition: cui.' },
    { kind: 'gap', prompt: 'Ecco il libro di ___ ti ho parlato.', answers: ['cui'], explanation: 'parlare di: di cui.' },
    { kind: 'gap', prompt: 'Le persone con ___ lavoro sono simpatiche.', answers: ['cui'], explanation: 'After con: cui.' },
    { kind: 'gap', prompt: 'Non capisco ___ dici.', hint: 'what', answers: ['quello che', 'ciò che'], explanation: '"What" = the thing that.' },
    { kind: 'gap', prompt: 'Il motivo per ___ ti chiamo è importante.', answers: ['cui'], explanation: 'After per: cui.' },
    {
      kind: 'gap',
      prompt: 'La signora, il ___ marito è medico, abita qui.',
      hint: 'whose',
      answers: ['cui'],
      explanation: 'article + cui + noun = whose.',
    },
    {
      kind: 'choice',
      prompt: 'The friend I wrote to.',
      options: ['L’amico che ho scritto.', 'L’amico a cui ho scritto.', 'L’amico cui ho scritto a.'],
      answer: 1,
      explanation: 'scrivere a qualcuno: a cui.',
    },
    {
      kind: 'choice',
      prompt: 'Which uses il quale correctly?',
      options: ['La collega del quale ti ho parlato.', 'La collega della quali ti ho parlato.', 'La collega della quale ti ho parlato.'],
      answer: 2,
      explanation: 'collega here is feminine singular: della quale.',
    },
  ],
}

export const passatoRemoto: GrammarTopic = {
  id: 'passato-remoto',
  title: 'Il passato remoto',
  english: 'The past historic, for reading: fu, nacque, disse',
  level: 'B1',
  summary:
    'The passato remoto tells of finished events in history, novels and fairy tales: **Dante nacque a Firenze nel 1265.** In the North it is rare in speech; in parts of the South people use it instead of the passato prossimo. At B1 you mainly need to **recognise** it.',
  sections: [
    {
      heading: 'Regular forms',
      body: ['Spot the endings: **-ò**, **-é** and **-ì** for he and she, **-arono**, **-erono** and **-irono** for they.'],
      table: {
        head: ['', 'parlare', 'credere', 'partire'],
        rows: [
          ['io', 'parlai', 'credei (credetti)', 'partii'],
          ['tu', 'parlasti', 'credesti', 'partisti'],
          ['lui, lei', 'parlò', 'credé (credette)', 'partì'],
          ['noi', 'parlammo', 'credemmo', 'partimmo'],
          ['voi', 'parlaste', 'credeste', 'partiste'],
          ['loro', 'parlarono', 'crederono (credettero)', 'partirono'],
        ],
      },
    },
    {
      heading: 'Irregular verbs',
      body: [
        'Many verbs are irregular only in the io, lui/lei and loro forms, which share one stem: **ebbi, ebbe, ebbero** (avere), **dissi, disse, dissero** (dire), **nacqui, nacque, nacquero** (nascere), **vidi, vide, videro** (vedere), **presi, prese, presero** (prendere), **venni, venne, vennero** (venire), **scrissi, scrisse, scrissero** (scrivere). The other forms are regular: avesti, avemmo, aveste.',
      ],
      table: {
        head: ['', 'essere', 'avere', 'fare'],
        rows: [
          ['io', 'fui', 'ebbi', 'feci'],
          ['tu', 'fosti', 'avesti', 'facesti'],
          ['lui, lei', 'fu', 'ebbe', 'fece'],
          ['noi', 'fummo', 'avemmo', 'facemmo'],
          ['voi', 'foste', 'aveste', 'faceste'],
          ['loro', 'furono', 'ebbero', 'fecero'],
        ],
      },
      examples: [
        { it: 'C’era una volta un re che **ebbe** tre figlie.', en: 'Once upon a time there was a king who had three daughters.' },
        { it: 'Garibaldi **morì** nel 1882.', en: 'Garibaldi died in 1882.' },
        { it: 'Quando **vide** il lupo, Cappuccetto Rosso **ebbe** paura.', en: 'When she saw the wolf, Little Red Riding Hood was frightened.' },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Ieri andai al cinema. (in everyday speech in the North)',
      right: 'Ieri sono andata al cinema.',
      why: 'For recent events in everyday speech, use the passato prossimo.',
    },
    { wrong: 'Dante parlo con Virgilio.', right: 'Dante parlò con Virgilio.', why: 'The accent matters: parlò is he spoke, parlo is I speak.' },
    { wrong: 'Io fu felice.', right: 'Io fui felice.', why: 'fui is I was; fu is he, she or it was.' },
  ],
  exercises: [
    {
      kind: 'choice',
      prompt: 'nacque means:',
      options: ['they were born', 'he or she was born', 'I was born'],
      answer: 1,
      explanation: 'nascere: nacqui, nacque, nacquero.',
    },
    { kind: 'choice', prompt: 'Which verb is "dissero"?', options: ['dare', 'dormire', 'dire'], answer: 2, explanation: 'dire: dissi, disse, dissero.' },
    {
      kind: 'choice',
      prompt: '"fecero" means:',
      options: ['they did or made', 'you (plural) did', 'he did'],
      answer: 0,
      explanation: 'fare: feci, fece, fecero.',
    },
    {
      kind: 'choice',
      prompt: 'Which is the passato prossimo of "andò"?',
      options: ['andava', 'è andato', 'andrà'],
      answer: 1,
      explanation: 'andò = he went = è andato.',
    },
    {
      kind: 'choice',
      prompt: '"Fu un grande poeta." Fu means:',
      options: ['I was', 'they were', 'he was'],
      answer: 2,
      explanation: 'essere: fui (I), fu (he or she).',
    },
    {
      kind: 'choice',
      prompt: '"Vennero a Roma nel 1960." Who came?',
      options: ['they', 'we', 'he'],
      answer: 0,
      explanation: 'venire: venni, venne, vennero.',
    },
    {
      kind: 'gap',
      prompt: 'Michelangelo ___ la volta della Cappella Sistina.',
      hint: 'dipingere, he form',
      answers: ['dipinse'],
      explanation: 'dipingere: dipinsi, dipinse, dipinsero.',
    },
    {
      kind: 'transform',
      instruction: 'Change it to the passato prossimo.',
      prompt: 'Arrivarono tardi.',
      answers: ['Sono arrivati tardi.', 'Sono arrivate tardi.'],
      explanation: 'arrivare takes essere.',
    },
  ],
}
