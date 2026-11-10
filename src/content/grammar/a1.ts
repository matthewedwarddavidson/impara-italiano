import type { GrammarTopic } from '../types'

export const articoliDeterminativi: GrammarTopic = {
  id: 'articoli-determinativi',
  title: 'Articoli determinativi',
  english: 'The definite article: il, lo, l’, la, i, gli, le',
  level: 'A1',
  summary:
    'Italian has seven words for "the". Which one a noun takes depends on its **gender** (masculine or feminine), whether it is **singular or plural**, and the **sound it starts with**: **il** libro, **lo** studente, **l’**amico, **la** casa.',
  sections: [
    {
      heading: 'Masculine and feminine',
      body: [
        'Every noun is masculine or feminine. Most nouns ending in **-o** are masculine (il libro) and most ending in **-a** are feminine (la casa). Nouns ending in **-e** can be either (il pane, la notte), so learn each one with its article.',
      ],
      table: {
        head: ['', 'Singular', 'Plural', 'Used before'],
        rows: [
          ['Masculine', '**il**', '**i**', 'most consonants: il libro, i libri'],
          ['Masculine', '**lo**', '**gli**', 's + consonant, z, gn, ps: lo studente, gli studenti'],
          ['Masculine', '**l’**', '**gli**', 'a vowel: l’amico, gli amici'],
          ['Feminine', '**la**', '**le**', 'a consonant: la casa, le case'],
          ['Feminine', '**l’**', '**le**', 'a vowel: l’amica, le amiche'],
        ],
      },
      examples: [
        { it: '**Il** treno è in ritardo.', en: 'The train is late.' },
        { it: '**Lo** zucchero è sul tavolo.', en: 'The sugar is on the table.' },
        { it: '**L’**acqua è fredda.', en: 'The water is cold.' },
        { it: '**Gli** amici di Marco sono simpatici.', en: "Marco's friends are nice." },
      ],
    },
    {
      heading: 'The article follows the next word',
      body: [
        'The choice depends on the word straight after the article, so an adjective in between can change it: **lo** studente, but **il** nuovo studente; **l’**amica, but **la** nuova amica.',
      ],
      examples: [
        { it: '**Il** vecchio specchio è in cantina.', en: 'The old mirror is in the cellar.' },
        { it: '**La** mia amica abita a Napoli.', en: 'My friend lives in Naples.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'il studente', right: 'lo studente', why: 'Masculine words starting with s + consonant take lo.' },
    { wrong: 'la amica', right: 'l’amica', why: 'la becomes l’ before a vowel.' },
    { wrong: 'i amici', right: 'gli amici', why: 'Masculine plurals starting with a vowel take gli.' },
  ],
  exercises: [
    { kind: 'gap', prompt: '___ libro è sul tavolo.', answers: ['Il'], explanation: 'libro is masculine and starts with a consonant: il.' },
    { kind: 'gap', prompt: '___ zaino è pesante.', answers: ['Lo'], explanation: 'Masculine words starting with z take lo.' },
    { kind: 'gap', prompt: '___ albero è alto.', answers: ['L’', "L'"], explanation: 'albero starts with a vowel: l’.' },
    { kind: 'gap', prompt: '___ studenti sono in classe.', answers: ['Gli'], explanation: 'studenti starts with s + consonant: gli in the plural.' },
    { kind: 'gap', prompt: '___ ragazze arrivano domani.', answers: ['Le'], explanation: 'Feminine plurals always take le.' },
    {
      kind: 'choice',
      prompt: '___ nuovo studente si chiama Luca.',
      options: ['Il', 'Lo', 'L’'],
      answer: 0,
      explanation: 'The article goes with the next word, nuovo, which starts with n: il.',
    },
  ],
}

export const A1_TOPICS: GrammarTopic[] = [articoliDeterminativi]
