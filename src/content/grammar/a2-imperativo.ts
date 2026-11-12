import type { GrammarTopic } from '../types'

export const imperativo: GrammarTopic = {
  id: 'imperativo',
  title: 'L’imperativo',
  english: 'Commands: parla!, non parlare!, mi dica',
  level: 'A2',
  summary:
    'The imperative gives instructions. For **tu**, -are verbs end in **-a** (parla!) and -ere and -ire verbs in **-i** (prendi!, senti!). **Noi** and **voi** are the same as the present (andiamo!, venite!). Negative **tu** is **non** + infinitive: non parlare!',
  sections: [
    {
      heading: 'Forms',
      body: [
        'The **Lei** form (formal you) is borrowed from the congiuntivo: -are verbs end in **-i** (parli), the others in **-a** (prenda, senta). You hear it constantly in shops and offices: **Mi dica!** (How can I help?), **Scusi!**, **Prego, si accomodi.**',
      ],
      table: {
        head: ['', 'parlare', 'prendere', 'sentire', 'finire'],
        rows: [
          ['tu', 'parla', 'prendi', 'senti', 'finisci'],
          ['Lei', 'parli', 'prenda', 'senta', 'finisca'],
          ['noi', 'parliamo', 'prendiamo', 'sentiamo', 'finiamo'],
          ['voi', 'parlate', 'prendete', 'sentite', 'finite'],
        ],
      },
    },
    {
      heading: 'Saying "don’t"',
      body: [
        'For tu, use **non + infinitive**: **Non toccare!** (Don’t touch!). For the others, put **non** in front of the normal form: **Non parli** (Lei), **non andiamo**, **non mangiate**.',
      ],
    },
    {
      heading: 'Short forms and pronouns',
      body: [
        'Five verbs have a short tu form: **va’** (andare), **fa’** (fare), **sta’** (stare), **da’** (dare), **di’** (dire). Many people say vai, fai, stai and dai instead. Essere and avere have **sii** and **abbi**.',
        'Pronouns join the end of tu, noi and voi forms: **Mangialo!** (Eat it!), **Alziamoci!**, **Ditemi!** After a short form the consonant doubles: **dimmi** (tell me), **fammi** (let me), **dagli** (give him). With Lei the pronoun goes in front: **Mi dica**, **Si accomodi**.',
      ],
      examples: [
        { it: 'Gira a destra e poi **va’** dritto.', en: 'Turn right and then go straight on.' },
        { it: '**Non preoccuparti**, ci penso io.', en: 'Don’t worry, I’ll see to it.' },
        { it: '**Dimmi** la verità.', en: 'Tell me the truth.' },
        { it: 'Signora, **prenda** pure una sedia.', en: 'Do take a chair, madam.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Non parla! (to a friend)', right: 'Non parlare!', why: 'Negative tu is non + infinitive.' },
    { wrong: 'Signora, prendi una sedia.', right: 'Signora, prenda una sedia.', why: 'With Lei, -ere verbs end in -a.' },
    { wrong: 'Dami il libro.', right: 'Dammi il libro.', why: 'da’ + mi doubles the m.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Marco, ___ la finestra, per favore!', hint: 'aprire, tu', answers: ['apri'], explanation: '-ire verbs end in -i for tu.' },
    { kind: 'gap', prompt: '___ a destra al semaforo.', hint: 'girare, tu', answers: ['Gira', 'gira'], explanation: '-are verbs end in -a for tu.' },
    { kind: 'gap', prompt: 'Bambini, ___ i compiti!', hint: 'fare, voi', answers: ['fate'], explanation: 'voi is the same as the present.' },
    {
      kind: 'gap',
      prompt: 'Non ___ tardi, mi raccomando!',
      hint: 'tornare, tu',
      answers: ['tornare'],
      explanation: 'Negative tu: non + infinitive.',
    },
    { kind: 'gap', prompt: 'Signor Bianchi, ___ pure!', hint: 'entrare, Lei', answers: ['entri'], explanation: 'The Lei form of -are verbs ends in -i.' },
    { kind: 'gap', prompt: 'Buongiorno, mi ___!', hint: 'dire, Lei', answers: ['dica'], explanation: 'Mi dica: the formal "how can I help?".' },
    { kind: 'gap', prompt: '___ la verità!', hint: 'dire + mi, tu', answers: ['Dimmi', 'dimmi'], explanation: 'di’ + mi doubles the m: dimmi.' },
    {
      kind: 'choice',
      prompt: 'Your friend is worried. You say:',
      options: ['Non ti preoccupi!', 'Non preoccuparti!', 'Non preoccupati!'],
      answer: 1,
      explanation: 'Negative tu: non + infinitive, with the pronoun attached (non ti preoccupare is also right).',
    },
    {
      kind: 'choice',
      prompt: 'To one customer, formally:',
      options: ['Accomodati!', 'Accomodatevi!', 'Si accomodi!'],
      answer: 2,
      explanation: 'With Lei the pronoun goes in front: si accomodi.',
    },
    {
      kind: 'transform',
      instruction: 'Make it negative.',
      prompt: 'Mangia la torta!',
      answers: ['Non mangiare la torta!'],
      explanation: 'Negative tu: non + infinitive.',
    },
    {
      kind: 'transform',
      instruction: 'Replace the noun with a pronoun.',
      prompt: 'Compra il pane!',
      answers: ['Compralo!'],
      explanation: 'The pronoun joins the end of the tu form.',
    },
  ],
}
