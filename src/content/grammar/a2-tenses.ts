import type { GrammarTopic } from '../types'

export const passatoProssimo: GrammarTopic = {
  id: 'passato-prossimo',
  title: 'Il passato prossimo',
  english: 'The perfect tense: ho mangiato, sono andata',
  level: 'A2',
  summary:
    'The passato prossimo describes finished actions: **ho mangiato** (I ate, I have eaten). It is **avere** or **essere** + the past participle. With essere, the participle agrees with the subject: Anna è andat**a**.',
  sections: [
    {
      heading: 'Making the participle',
      body: [
        'Regular participles: -are → **-ato** (parlato), -ere → **-uto** (avuto), -ire → **-ito** (dormito). Many common verbs are irregular; the word bank lists each verb’s io form, such as "ho fatto".',
      ],
      table: {
        head: ['Infinitive', 'Participle', 'Infinitive', 'Participle'],
        rows: [
          ['fare', 'fatto', 'prendere', 'preso'],
          ['dire', 'detto', 'mettere', 'messo'],
          ['scrivere', 'scritto', 'vedere', 'visto'],
          ['leggere', 'letto', 'aprire', 'aperto'],
          ['essere', 'stato', 'venire', 'venuto'],
          ['bere', 'bevuto', 'chiudere', 'chiuso'],
        ],
      },
    },
    {
      heading: 'Avere or essere?',
      body: [
        'Most verbs take **avere**, including every verb with a direct object: **Ho comprato** il pane.',
        'Verbs of movement and change of state take **essere**: andare, venire, arrivare, partire, tornare, uscire, entrare, salire, scendere, nascere, morire, diventare, plus **essere**, **stare**, **restare** and **piacere**. Reflexive verbs also take essere: **mi sono alzata**.',
        'With essere, the participle ends like an adjective: -o, -a, -i, -e. With avere it stays in -o.',
      ],
      table: {
        head: ['', 'mangiare (avere)', 'andare (essere)'],
        rows: [
          ['io', 'ho mangiato', 'sono andato / andata'],
          ['tu', 'hai mangiato', 'sei andato / andata'],
          ['lui, lei', 'ha mangiato', 'è andato / andata'],
          ['noi', 'abbiamo mangiato', 'siamo andati / andate'],
          ['voi', 'avete mangiato', 'siete andati / andate'],
          ['loro', 'hanno mangiato', 'sono andati / andate'],
        ],
      },
      examples: [
        { it: 'Ieri **ho lavorato** fino alle sette.', en: 'Yesterday I worked until seven.' },
        { it: 'Le mie amiche **sono arrivate** ieri sera.', en: 'My friends arrived last night.' },
        { it: 'Siamo **stati** in Sicilia.', en: 'We have been to Sicily.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ho andato al cinema.', right: 'Sono andata al cinema.', why: 'andare takes essere.' },
    { wrong: 'Anna è arrivato.', right: 'Anna è arrivata.', why: 'With essere the participle agrees with the subject.' },
    { wrong: 'Ho prenduto il treno.', right: 'Ho preso il treno.', why: 'prendere has an irregular participle: preso.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Ieri ___ una pizza.', hint: 'mangiare, io', answers: ['ho mangiato'], explanation: 'mangiare takes avere.' },
    { kind: 'gap', prompt: 'Anna ___ a Roma.', hint: 'andare', answers: ['è andata'], explanation: 'andare takes essere; the participle agrees: andata.' },
    { kind: 'gap', prompt: 'Noi ___ il treno delle otto.', hint: 'prendere', answers: ['abbiamo preso'], explanation: 'Irregular participle: preso.' },
    { kind: 'gap', prompt: 'I ragazzi ___ tardi.', hint: 'tornare', answers: ['sono tornati'], explanation: 'tornare takes essere; masculine plural: tornati.' },
    { kind: 'gap', prompt: 'Cosa ___ sabato?', hint: 'fare, tu', answers: ['hai fatto'], explanation: 'fare takes avere; participle fatto.' },
    { kind: 'gap', prompt: 'Le mie sorelle ___ ieri.', hint: 'partire', answers: ['sono partite'], explanation: 'partire takes essere; feminine plural: partite.' },
    { kind: 'gap', prompt: 'Non ___ la tua email.', hint: 'leggere, io', answers: ['ho letto'], explanation: 'Irregular participle: letto.' },
    { kind: 'gap', prompt: 'Mi ___ alle sette.', hint: 'svegliarsi, io (f)', answers: ['sono svegliata'], explanation: 'Reflexive verbs take essere.' },
    {
      kind: 'choice',
      prompt: 'Siamo ___ in Puglia l’estate scorsa.',
      options: ['stato', 'stati', 'stata'],
      answer: 1,
      explanation: 'essere takes essere; noi needs a plural participle: stati.',
    },
    {
      kind: 'transform',
      instruction: 'Put it in the passato prossimo.',
      prompt: 'Scrivo una lettera.',
      answers: ['Ho scritto una lettera.'],
      explanation: 'scrivere takes avere; participle scritto.',
    },
    {
      kind: 'order',
      words: ['Sono', 'arrivata', 'a', 'casa', 'tardi.'],
      english: 'I got home late.',
      explanation: 'Auxiliary, then participle.',
    },
  ],
}

export const imperfetto: GrammarTopic = {
  id: 'imperfetto',
  title: 'L’imperfetto e il passato prossimo',
  english: 'The imperfect, and when to use it instead of the passato prossimo',
  level: 'A2',
  summary:
    'The **imperfetto** describes how things were, what used to happen, and what was going on: **Da bambina abitavo** a Napoli. The **passato prossimo** tells what happened: **Ho cambiato** casa.',
  sections: [
    {
      heading: 'The forms',
      body: [
        'Take off -re and add -vo, -vi, -va, -vamo, -vate, -vano. It is the most regular tense: only a few verbs change, notably **essere** (ero, eri, era, eravamo, eravate, erano), **fare** (facevo), **bere** (bevevo) and **dire** (dicevo).',
      ],
      table: {
        head: ['', 'parlare', 'avere', 'dormire', 'essere'],
        rows: [
          ['io', 'parlavo', 'avevo', 'dormivo', 'ero'],
          ['tu', 'parlavi', 'avevi', 'dormivi', 'eri'],
          ['lui, lei', 'parlava', 'aveva', 'dormiva', 'era'],
          ['noi', 'parlavamo', 'avevamo', 'dormivamo', 'eravamo'],
          ['voi', 'parlavate', 'avevate', 'dormivate', 'eravate'],
          ['loro', 'parlavano', 'avevano', 'dormivano', 'erano'],
        ],
      },
    },
    {
      heading: 'Which past?',
      body: [
        '**Imperfetto**: background, descriptions (time, weather, age, feelings), habits (used to), and actions in progress.',
        '**Passato prossimo**: single completed events, and events with a set length (per due ore, tre volte).',
        'Together: the imperfetto sets the scene, the passato prossimo interrupts it. **Dormivo** quando **è suonato** il telefono.',
      ],
      examples: [
        { it: 'Quando **ero** piccola, **andavo** al mare ogni estate.', en: 'When I was little, I used to go to the seaside every summer.' },
        { it: '**Pioveva** e **faceva** freddo.', en: 'It was raining and it was cold.' },
        { it: '**Guardavo** la TV quando **è arrivato** Marco.', en: 'I was watching TV when Marco arrived.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Quando ho avuto dieci anni, abitavo a Roma.', right: 'Quando avevo dieci anni, abitavo a Roma.', why: 'Age in the past is a description: imperfetto.' },
    { wrong: 'Da bambino ho giocato a calcio ogni sabato.', right: 'Da bambino giocavo a calcio ogni sabato.', why: 'Habits in the past use the imperfetto.' },
    { wrong: 'Mentre ho guardato la TV, è arrivato Marco.', right: 'Mentre guardavo la TV, è arrivato Marco.', why: 'An action in progress when something happened: imperfetto.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Da bambina ___ a Napoli.', hint: 'abitare, io', answers: ['abitavo'], explanation: 'A past situation: imperfetto.' },
    { kind: 'gap', prompt: 'Ieri ___ freddo.', hint: 'fare', answers: ['faceva'], explanation: 'Weather as background: imperfetto. fare → faceva.' },
    { kind: 'gap', prompt: 'Quando avevo dieci anni, ___ molto.', hint: 'leggere, io', answers: ['leggevo'], explanation: 'A habit: imperfetto.' },
    { kind: 'gap', prompt: 'La casa ___ grande e luminosa.', hint: 'essere', answers: ['era'], explanation: 'Description: imperfetto. essere → era.' },
    { kind: 'gap', prompt: 'Dormivo quando ___ il telefono.', hint: 'suonare', answers: ['è suonato', 'ha suonato'], explanation: 'An event interrupting: passato prossimo.' },
    { kind: 'gap', prompt: 'Noi ___ la cena quando sei arrivato.', hint: 'preparare', answers: ['preparavamo'], explanation: 'An action in progress: imperfetto.' },
    {
      kind: 'choice',
      prompt: 'Ieri sera ___ un bel film.',
      options: ['vedevo', 'ho visto', 'vedo'],
      answer: 1,
      explanation: 'A single completed event: passato prossimo.',
    },
    {
      kind: 'choice',
      prompt: 'Ogni estate ___ dai nonni.',
      options: ['andavamo', 'siamo andati', 'andiamo stati'],
      answer: 0,
      explanation: 'Every summer: a habit, so imperfetto.',
    },
    {
      kind: 'choice',
      prompt: 'Ho vissuto a Londra ___ dieci anni.',
      options: ['per', 'da', 'fa'],
      answer: 0,
      explanation: 'A finished period with a set length: passato prossimo + per.',
    },
    {
      kind: 'transform',
      instruction: 'Put it in the imperfetto.',
      prompt: 'Sono stanca.',
      answers: ['Ero stanca.'],
      explanation: 'essere → ero.',
    },
  ],
}

export const futuroSemplice: GrammarTopic = {
  id: 'futuro-semplice',
  title: 'Il futuro semplice',
  english: 'The future tense',
  level: 'A2',
  summary:
    'The future is formed from the infinitive minus its final -e, with -are verbs changing a to e: parlare → **parlerò**, prendere → **prenderò**, dormire → **dormirò**. For fixed plans Italians often use the present instead.',
  sections: [
    {
      heading: 'The forms',
      body: [
        'Endings: **-ò, -ai, -à, -emo, -ete, -anno**. Stress falls on the accented endings. -care and -gare add h (cercherò, pagherò); -ciare and -giare drop the i (comincerò, mangerò).',
      ],
      table: {
        head: ['', 'parlare', 'prendere', 'dormire'],
        rows: [
          ['io', 'parlerò', 'prenderò', 'dormirò'],
          ['tu', 'parlerai', 'prenderai', 'dormirai'],
          ['lui, lei', 'parlerà', 'prenderà', 'dormirà'],
          ['noi', 'parleremo', 'prenderemo', 'dormiremo'],
          ['voi', 'parlerete', 'prenderete', 'dormirete'],
          ['loro', 'parleranno', 'prenderanno', 'dormiranno'],
        ],
      },
    },
    {
      heading: 'Irregular stems',
      body: [
        'Some verbs shorten the stem: andare → **andrò**, avere → **avrò**, dovere → **dovrò**, potere → **potrò**, sapere → **saprò**, vedere → **vedrò**. Others double the r: volere → **vorrò**, venire → **verrò**, bere → **berrò**. And: essere → **sarò**, fare → **farò**, stare → **starò**, dare → **darò**.',
        'The future also expresses a guess about now: Che ore sono? **Saranno** le otto (It must be about eight).',
      ],
      examples: [
        { it: 'L’anno prossimo **andremo** in Sicilia.', en: "Next year we'll go to Sicily." },
        { it: 'Quando **avrò** tempo, ti **chiamerò**.', en: "When I have time, I'll call you." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'parlarò', right: 'parlerò', why: '-are verbs change a to e in the future.' },
    { wrong: 'anderò', right: 'andrò', why: 'andare has a short stem: andr-.' },
    { wrong: 'Quando ho tempo, ti chiamerò.', right: 'Quando avrò tempo, ti chiamerò.', why: 'After quando about the future, Italian uses the future too.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Domani ___ con il direttore.', hint: 'parlare, io', answers: ['parlerò'], explanation: 'parlare → parler- + ò.' },
    { kind: 'gap', prompt: 'L’anno prossimo ___ in Italia.', hint: 'andare, noi', answers: ['andremo'], explanation: 'Short stem: andr-.' },
    { kind: 'gap', prompt: 'Stasera ___ a casa.', hint: 'stare, io', answers: ['starò'], explanation: 'stare → starò.' },
    { kind: 'gap', prompt: 'Quanti anni ___ tuo figlio?', hint: 'avere, guess about now', answers: ['avrà'], explanation: 'The future can express a guess: avrà.' },
    { kind: 'gap', prompt: '___ anche Paolo alla festa?', hint: 'venire', answers: ['Verrà'], explanation: 'venire doubles the r: verrà.' },
    { kind: 'gap', prompt: 'Domani ___ il conto io.', hint: 'pagare', answers: ['pagherò'], explanation: 'Add h to keep the hard g: pagherò.' },
    { kind: 'gap', prompt: 'Ragazzi, ___ stanchi dopo il viaggio.', hint: 'essere, voi', answers: ['sarete'], explanation: 'essere → sar-.' },
    {
      kind: 'choice',
      prompt: 'Quando ___ in pensione, viaggerò.',
      options: ['vado', 'andrò', 'andavo'],
      answer: 1,
      explanation: 'quando about the future takes the future.',
    },
    {
      kind: 'transform',
      instruction: 'Put it in the future.',
      prompt: 'Faccio la spesa.',
      answers: ['Farò la spesa.'],
      explanation: 'fare → farò.',
    },
  ],
}

export const stareGerundio: GrammarTopic = {
  id: 'stare-gerundio',
  title: 'Stare + gerundio',
  english: 'Happening right now: sto mangiando',
  level: 'A2',
  summary:
    '**stare** + the gerund stresses that something is happening at this moment: **Sto mangiando** (I am eating, right now). The simple present also works, so use this only for "right now".',
  sections: [
    {
      heading: 'Making the gerund',
      body: [
        '-are → **-ando** (parlando); -ere and -ire → **-endo** (prendendo, dormendo). Irregular: fare → **facendo**, bere → **bevendo**, dire → **dicendo**. Conjugate stare: sto, stai, sta, stiamo, state, stanno.',
        'Reflexive and object pronouns go before stare: **Mi sto** vestendo, or join the end of the gerund: Sto vesten**domi**.',
      ],
      examples: [
        { it: 'Non posso parlare, **sto guidando**.', en: "I can't talk, I'm driving." },
        { it: 'Cosa **stai facendo**?', en: 'What are you doing?' },
        { it: 'I bambini **stanno dormendo**.', en: 'The children are sleeping.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Sono mangiando.', right: 'Sto mangiando.', why: 'The progressive uses stare, not essere.' },
    { wrong: 'Sto faciendo.', right: 'Sto facendo.', why: 'fare → facendo.' },
    { wrong: 'Domani sto lavorando.', right: 'Domani lavoro.', why: 'stare + gerundio is for right now, not plans.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Non posso parlare, ___ guidando.', hint: 'stare, io', answers: ['sto'], explanation: 'stare, io: sto.' },
    { kind: 'gap', prompt: 'Cosa stai ___?', hint: 'fare', answers: ['facendo'], explanation: 'fare → facendo.' },
    { kind: 'gap', prompt: 'I bambini stanno ___.', hint: 'dormire', answers: ['dormendo'], explanation: '-ire → -endo.' },
    { kind: 'gap', prompt: 'Stiamo ___ la cena.', hint: 'preparare', answers: ['preparando'], explanation: '-are → -ando.' },
    { kind: 'gap', prompt: 'Marco ___ leggendo il giornale.', hint: 'stare', answers: ['sta'], explanation: 'stare, lui: sta.' },
    { kind: 'gap', prompt: 'Che cosa state ___?', hint: 'bere', answers: ['bevendo'], explanation: 'bere → bevendo.' },
    {
      kind: 'choice',
      prompt: 'Aspetta, mi ___ vestendo!',
      options: ['sto', 'sono', 'ho'],
      answer: 0,
      explanation: 'Reflexive pronoun first, then stare.',
    },
    {
      kind: 'transform',
      instruction: 'Change to stare + gerundio.',
      prompt: 'Scrivo un messaggio.',
      answers: ['Sto scrivendo un messaggio.'],
      explanation: 'scrivere → scrivendo.',
    },
  ],
}
