import type { GrammarTopic } from '../types'

export const articoliIndeterminativi: GrammarTopic = {
  id: 'articoli-indeterminativi',
  title: 'Articoli indeterminativi',
  english: 'The indefinite article: un, uno, una, un’',
  level: 'A1',
  summary:
    '"A" or "an" is **un**, **uno**, **una** or **un’**. The choice follows the same sounds as the definite article: **un** libro (il libro), **uno** studente (lo studente), **una** casa (la casa), **un’**amica (l’amica).',
  sections: [
    {
      heading: 'Four forms',
      body: [
        'Masculine nouns take **un**, or **uno** before s + consonant, z, gn and ps. Feminine nouns take **una**, or **un’** before a vowel.',
        'Only the feminine form takes an apostrophe: **un amico** (masculine, no apostrophe), but **un’amica** (feminine).',
      ],
      table: {
        head: ['', 'Form', 'Used before', 'Example'],
        rows: [
          ['Masculine', '**un**', 'most sounds, including vowels', 'un libro, un amico'],
          ['Masculine', '**uno**', 's + consonant, z, gn, ps', 'uno studente, uno zaino'],
          ['Feminine', '**una**', 'a consonant', 'una casa, una studentessa'],
          ['Feminine', '**un’**', 'a vowel', 'un’amica, un’arancia'],
        ],
      },
      examples: [
        { it: 'Ho **un** fratello e **una** sorella.', en: 'I have a brother and a sister.' },
        { it: 'C’è **uno** zaino sulla sedia.', en: 'There is a rucksack on the chair.' },
        { it: 'Prendo **un’**insalata.', en: "I'll have a salad." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'un’amico', right: 'un amico', why: 'Masculine un never takes an apostrophe.' },
    { wrong: 'un studente', right: 'uno studente', why: 'Masculine words starting with s + consonant take uno.' },
    { wrong: 'una amica', right: 'un’amica', why: 'una becomes un’ before a vowel.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Ho ___ fratello.', answers: ['un'], explanation: 'fratello is masculine and starts with a consonant: un.' },
    { kind: 'gap', prompt: 'È ___ studente di Milano.', answers: ['uno'], explanation: 'studente starts with s + consonant: uno.' },
    { kind: 'gap', prompt: 'Vorrei ___ pizza.', answers: ['una'], explanation: 'pizza is feminine and starts with a consonant: una.' },
    { kind: 'gap', prompt: 'Ho ___amica a Roma.', answers: ["un'", 'un’'], explanation: 'amica is feminine and starts with a vowel: un’.' },
    { kind: 'gap', prompt: 'Mio padre ha ___ amico inglese.', answers: ['un'], explanation: 'amico is masculine: un, with no apostrophe.' },
    { kind: 'gap', prompt: 'Cerco ___ zaino nuovo.', answers: ['uno'], explanation: 'Masculine words starting with z take uno.' },
    {
      kind: 'choice',
      prompt: 'C’è ___ ospedale qui vicino?',
      options: ['un', 'un’', 'uno'],
      answer: 0,
      explanation: 'ospedale is masculine. Masculine un keeps no apostrophe, even before a vowel.',
    },
    {
      kind: 'choice',
      prompt: 'Mangio ___ arancia.',
      options: ['un', 'un’', 'una'],
      answer: 1,
      explanation: 'arancia is feminine and starts with a vowel: un’.',
    },
    {
      kind: 'transform',
      instruction: 'Change the definite article to the indefinite one.',
      prompt: 'lo zaino',
      answers: ['uno zaino'],
      explanation: 'lo becomes uno.',
    },
    {
      kind: 'transform',
      instruction: 'Change the definite article to the indefinite one.',
      prompt: "l'insalata",
      answers: ["un'insalata", 'un’insalata'],
      explanation: 'Feminine l’ becomes un’.',
    },
    {
      kind: 'order',
      words: ['Ho', 'una', 'casa', 'piccola.'],
      english: 'I have a small house.',
      explanation: 'Most adjectives come after the noun.',
    },
  ],
}

export const genereEPlurale: GrammarTopic = {
  id: 'genere-e-plurale',
  title: 'Il plurale dei nomi',
  english: 'Nouns: gender and plural',
  level: 'A1',
  summary:
    'Most nouns make their plural by changing the last vowel: **-o → -i** (libro, libri), **-a → -e** (casa, case), **-e → -i** (fiore, fiori). Nouns ending in an accented vowel or a consonant don’t change.',
  sections: [
    {
      heading: 'The main patterns',
      body: [
        'Most nouns in **-o** are masculine and most in **-a** are feminine. Nouns in **-e** can be either, so learn them with the article. A few nouns in -a are masculine (il problema, il cinema).',
      ],
      table: {
        head: ['Singular', 'Plural', 'Example'],
        rows: [
          ['-o (masculine)', '-i', 'il libro → i libri'],
          ['-a (feminine)', '-e', 'la casa → le case'],
          ['-e (masculine or feminine)', '-i', 'il fiore → i fiori; la chiave → le chiavi'],
          ['-a (masculine)', '-i', 'il problema → i problemi'],
          ['accented vowel', 'no change', 'la città → le città; il caffè → i caffè'],
          ['consonant', 'no change', 'il bar → i bar; il film → i film'],
          ['short forms', 'no change', 'la foto → le foto; la radio → le radio'],
        ],
      },
      examples: [
        { it: 'Ho due **fratelli** e tre **sorelle**.', en: 'I have two brothers and three sisters.' },
        { it: 'Le **chiavi** sono sul tavolo.', en: 'The keys are on the table.' },
        { it: 'Ci sono tanti **bar** in centro.', en: 'There are lots of cafés in the centre.' },
      ],
    },
    {
      heading: 'Spelling: keeping the sound',
      body: [
        'Nouns in **-ca** and **-ga** add an h to keep the hard sound: la banca → le banche, la riga → le righe.',
        'Nouns in **-co** and **-go** usually do too (il parco → i parchi, il lago → i laghi), but some soften: l’amico → gli amici, il medico → i medici. Learn these as you meet them.',
        'Nouns in **-cia** and **-gia** drop the i after a consonant (l’arancia → le arance, la spiaggia → le spiagge) and keep it after a vowel (la camicia → le camicie, la valigia → le valigie).',
      ],
    },
    {
      heading: 'Irregular plurals',
      body: [
        'A few common nouns are irregular: l’uomo → gli **uomini**, la mano → le **mani**, l’uovo → le **uova**, il braccio → le **braccia**, il dito → le **dita**. Uova, braccia and dita become feminine in the plural.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'le citte', right: 'le città', why: 'Nouns ending in an accented vowel don’t change.' },
    { wrong: 'le bance', right: 'le banche', why: 'Add h to keep the hard c sound.' },
    { wrong: 'i problema', right: 'i problemi', why: 'problema is masculine, so its plural ends in -i.' },
  ],
  exercises: [
    { kind: 'transform', instruction: 'Make it plural.', prompt: 'il libro', answers: ['i libri'], explanation: '-o becomes -i.' },
    { kind: 'transform', instruction: 'Make it plural.', prompt: 'la sedia', answers: ['le sedie'], explanation: '-a becomes -e; la becomes le.' },
    { kind: 'transform', instruction: 'Make it plural.', prompt: 'il fiore', answers: ['i fiori'], explanation: '-e becomes -i.' },
    { kind: 'transform', instruction: 'Make it plural.', prompt: 'la città', answers: ['le città'], explanation: 'An accented final vowel doesn’t change.' },
    { kind: 'transform', instruction: 'Make it plural.', prompt: 'la banca', answers: ['le banche'], explanation: '-ca becomes -che to keep the hard sound.' },
    { kind: 'transform', instruction: 'Make it plural.', prompt: 'lo studente', answers: ['gli studenti'], explanation: 'lo becomes gli; -e becomes -i.' },
    { kind: 'transform', instruction: 'Make it plural.', prompt: "l'amico", answers: ['gli amici'], explanation: 'amico softens: amici. Masculine l’ becomes gli.' },
    { kind: 'transform', instruction: 'Make it plural.', prompt: 'il problema', answers: ['i problemi'], explanation: 'Masculine nouns in -a take -i.' },
    { kind: 'transform', instruction: 'Make it plural.', prompt: 'la mano', answers: ['le mani'], explanation: 'mano is feminine and irregular: le mani.' },
    {
      kind: 'choice',
      prompt: 'Due ___, per favore.',
      options: ['caffè', 'caffi', 'caffe'],
      answer: 0,
      explanation: 'caffè ends in an accented vowel, so the plural is the same.',
    },
    {
      kind: 'choice',
      prompt: 'Le ___ sono pesanti.',
      options: ['valige', 'valigie', 'valigi'],
      answer: 1,
      explanation: 'A vowel comes before -gia, so the i stays: valigie.',
    },
  ],
}

export const aggettivi: GrammarTopic = {
  id: 'aggettivi',
  title: 'Gli aggettivi',
  english: 'Adjectives: agreement and position',
  level: 'A1',
  summary:
    'Adjectives match the noun in gender and number: un ragazzo **alto**, una ragazza **alta**, due ragazzi **alti**. Most come **after** the noun.',
  sections: [
    {
      heading: 'Two types, plus a few that never change',
      body: [
        'Adjectives in **-o** have four forms. Adjectives in **-e** have two: one singular, one plural. A few colours never change: **blu**, **rosa**, **viola**.',
      ],
      table: {
        head: ['', 'Masc. singular', 'Fem. singular', 'Masc. plural', 'Fem. plural'],
        rows: [
          ['-o type', 'rosso', 'rossa', 'rossi', 'rosse'],
          ['-e type', 'verde', 'verde', 'verdi', 'verdi'],
          ['invariable', 'blu', 'blu', 'blu', 'blu'],
        ],
      },
      examples: [
        { it: 'Ho una macchina **rossa**.', en: 'I have a red car.' },
        { it: 'Le pareti sono **verdi**.', en: 'The walls are green.' },
        { it: 'Marco e Anna sono **stanchi**.', en: 'Marco and Anna are tired.' },
      ],
    },
    {
      heading: 'Where they go',
      body: [
        'Most adjectives follow the noun: un libro **interessante**, una città **italiana**. Colours and nationalities always do.',
        'A few short, common ones usually come first: **bello**, **buono**, **brutto**, **grande**, **piccolo**, **nuovo**, **vecchio**. Una **bella** casa, un **piccolo** giardino.',
        'For a mixed group of men and women, use the masculine plural.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'una casa bianco', right: 'una casa bianca', why: 'casa is feminine, so the adjective ends in -a.' },
    { wrong: 'le scarpe blue', right: 'le scarpe blu', why: 'blu never changes.' },
    { wrong: 'un italiano ristorante', right: 'un ristorante italiano', why: 'Nationalities come after the noun.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'La casa è ___.', hint: 'piccolo', answers: ['piccola'], explanation: 'casa is feminine singular: piccola.' },
    { kind: 'gap', prompt: 'I ragazzi sono ___.', hint: 'stanco', answers: ['stanchi'], explanation: 'Masculine plural; -co adds h: stanchi.' },
    { kind: 'gap', prompt: 'Le ragazze sono ___.', hint: 'simpatico', answers: ['simpatiche'], explanation: 'Feminine plural; -ca adds h: simpatiche.' },
    { kind: 'gap', prompt: 'Ha gli occhi ___.', hint: 'verde', answers: ['verdi'], explanation: '-e adjectives take -i in the plural.' },
    { kind: 'gap', prompt: 'Le scarpe sono ___.', hint: 'nero', answers: ['nere'], explanation: 'scarpe is feminine plural: nere.' },
    { kind: 'gap', prompt: 'Una maglietta ___.', hint: 'blu', answers: ['blu'], explanation: 'blu never changes.' },
    { kind: 'gap', prompt: 'Marco e Anna sono ___.', hint: 'contento', answers: ['contenti'], explanation: 'A mixed group takes the masculine plural.' },
    {
      kind: 'choice',
      prompt: 'Ho comprato una macchina ___.',
      options: ['nuovo', 'nuova', 'nuove'],
      answer: 1,
      explanation: 'macchina is feminine singular.',
    },
    {
      kind: 'choice',
      prompt: 'Which is right?',
      options: ['un inglese amico', 'un amico inglese', 'un amico inglesa'],
      answer: 1,
      explanation: 'Nationalities follow the noun, and inglese has no -a form.',
    },
    {
      kind: 'order',
      words: ['È', 'una', 'città', 'molto', 'bella.'],
      english: "It's a very beautiful city.",
      explanation: 'Adjective after the noun; molto comes before the adjective.',
    },
  ],
}

export const possessivi: GrammarTopic = {
  id: 'possessivi',
  title: 'I possessivi',
  english: 'Possessives: il mio, la tua, i suoi…',
  level: 'A1',
  summary:
    'Possessives agree with the **thing owned**, not the owner, and usually take the article: **il mio** libro, **la mia** casa, **i miei** amici. Singular family members drop the article: **mia** madre.',
  sections: [
    {
      heading: 'The forms',
      body: [
        '**suo** means his, her and its, and also your in formal speech (Lei). Whose it is doesn’t change the form: Marco and **sua** madre, Anna and **suo** padre.',
      ],
      table: {
        head: ['', 'Masc. singular', 'Fem. singular', 'Masc. plural', 'Fem. plural'],
        rows: [
          ['my', 'il mio', 'la mia', 'i miei', 'le mie'],
          ['your (tu)', 'il tuo', 'la tua', 'i tuoi', 'le tue'],
          ['his, her, your (Lei)', 'il suo', 'la sua', 'i suoi', 'le sue'],
          ['our', 'il nostro', 'la nostra', 'i nostri', 'le nostre'],
          ['your (voi)', 'il vostro', 'la vostra', 'i vostri', 'le vostre'],
          ['their', 'il loro', 'la loro', 'i loro', 'le loro'],
        ],
      },
      examples: [
        { it: 'Dove sono **le mie** chiavi?', en: 'Where are my keys?' },
        { it: 'Anna ama **il suo** lavoro.', en: 'Anna loves her job.' },
        { it: '**I nostri** vicini sono simpatici.', en: 'Our neighbours are nice.' },
      ],
    },
    {
      heading: 'Family: no article in the singular',
      body: [
        'With a single family member, leave out the article: **mia** madre, **tuo** fratello, **sua** moglie. Put it back in the plural (**i miei** fratelli), with **loro** (**il loro** figlio), and with mamma and papà, which usually keep it (**la mia** mamma).',
      ],
      examples: [
        { it: '**Mia** sorella vive a Torino.', en: 'My sister lives in Turin.' },
        { it: '**I miei** nonni abitano in campagna.', en: 'My grandparents live in the country.' },
      ],
    },
  ],
  mistakes: [
    { wrong: 'la mia madre', right: 'mia madre', why: 'Singular family members take no article.' },
    { wrong: 'mio fratelli', right: 'i miei fratelli', why: 'Plural family members take the article, and mio becomes miei.' },
    { wrong: 'Anna e suo marita', right: 'Anna e suo marito', why: 'The possessive agrees with marito, not with Anna.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Questa è ___ casa.', hint: 'my', answers: ['la mia'], explanation: 'casa is feminine and not family: la mia.' },
    { kind: 'gap', prompt: '___ fratello si chiama Luca.', hint: 'my', answers: ['Mio'], explanation: 'One family member: no article.' },
    { kind: 'gap', prompt: 'Dove sono ___ chiavi?', hint: 'my', answers: ['le mie'], explanation: 'chiavi is feminine plural: le mie.' },
    { kind: 'gap', prompt: 'Anna ama ___ lavoro.', hint: 'her', answers: ['il suo'], explanation: 'lavoro is masculine: il suo, whoever owns it.' },
    { kind: 'gap', prompt: '___ genitori abitano a Roma.', hint: 'our', answers: ['I nostri'], explanation: 'Plural family members keep the article.' },
    { kind: 'gap', prompt: 'Come si chiama ___ sorella?', hint: 'your, informal', answers: ['tua'], explanation: 'One family member: no article.' },
    { kind: 'gap', prompt: 'Paolo è qui con ___ moglie.', hint: 'his', answers: ['sua'], explanation: 'moglie is feminine: sua, even though Paolo is a man.' },
    { kind: 'gap', prompt: 'Questa è ___ figlia.', hint: 'their', answers: ['la loro'], explanation: 'loro always takes the article, even with family.' },
    {
      kind: 'choice',
      prompt: 'Marco vive con ___ madre.',
      options: ['sua', 'la sua', 'suo'],
      answer: 0,
      explanation: 'madre is feminine and a single family member: sua, no article.',
    },
  ],
}

export const numeriEOre: GrammarTopic = {
  id: 'numeri-e-ore',
  title: 'Numeri, ore e date',
  english: 'Numbers, the time and dates',
  level: 'A1',
  summary:
    'Tens drop their last vowel before **uno** and **otto** (ventuno, ventotto), and **tre** takes an accent at the end of a longer number (ventitré). For the time, say **È l’una** but **Sono le due**.',
  sections: [
    {
      heading: 'Numbers above 20',
      body: [
        'Join the parts into one word: venti + due = **ventidue**. Before uno and otto the tens lose their vowel: **ventuno**, **trentotto**. Tre at the end has an accent: **trentatré**.',
        'Hundreds and thousands: **cento**, **duecento**; **mille**, but **duemila**, **tremila**.',
      ],
      table: {
        head: ['Number', 'In words'],
        rows: [
          ['21, 28', 'ventuno, ventotto'],
          ['23, 33', 'ventitré, trentatré'],
          ['45', 'quarantacinque'],
          ['100, 200', 'cento, duecento'],
          ['1000, 2000', 'mille, duemila'],
        ],
      },
    },
    {
      heading: 'The time',
      body: [
        'Ask **Che ore sono?** or **Che ora è?** Answer **È l’una** (one o’clock, singular) or **Sono le** + number for the other hours, since ore is plural. Midday and midnight: **È mezzogiorno**, **È mezzanotte**.',
        'Add minutes with **e**, take them away with **meno**: e un quarto (quarter past), e mezza (half past), meno un quarto (quarter to). For "at": **all’una**, **alle otto**, **a mezzogiorno**.',
      ],
      examples: [
        { it: '**Sono le** tre **e un quarto**.', en: "It's quarter past three." },
        { it: '**È l’una e mezza**.', en: "It's half past one." },
        { it: 'Il film comincia **alle** nove.', en: 'The film starts at nine.' },
      ],
    },
    {
      heading: 'Dates',
      body: [
        'Dates use ordinary numbers with **il**: il due giugno, il venticinque dicembre. The first of the month uses **primo**: il primo maggio.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'ventiuno', right: 'ventuno', why: 'Tens drop their vowel before uno.' },
    { wrong: 'Sono l’una', right: 'È l’una', why: 'One o’clock is singular.' },
    { wrong: 'il uno maggio', right: 'il primo maggio', why: 'The first of the month is primo.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Sono le tre e ___.', hint: '3:30', answers: ['mezza', 'mezzo', 'trenta'], explanation: 'Half past is e mezza (or e trenta).' },
    { kind: 'gap', prompt: '___ l’una e un quarto.', answers: ['È'], explanation: 'One o’clock is singular: è.' },
    { kind: 'gap', prompt: 'Il film comincia ___ nove.', answers: ['alle'], explanation: 'At nine: alle nove.' },
    { kind: 'gap', prompt: 'Mio nonno ha ___ anni.', hint: '81', answers: ['ottantuno'], explanation: 'ottanta loses its a before uno.' },
    { kind: 'gap', prompt: 'Ci vediamo ___ mezzogiorno.', answers: ['a'], explanation: 'At midday: a mezzogiorno, with no article.' },
    { kind: 'gap', prompt: 'Sono le sei ___ un quarto.', hint: '5:45', answers: ['meno'], explanation: 'Quarter to six: le sei meno un quarto.' },
    {
      kind: 'choice',
      prompt: '23 in words:',
      options: ['ventitre', 'ventitré', 'ventetré'],
      answer: 1,
      explanation: 'tre at the end of a longer number takes an accent.',
    },
    {
      kind: 'choice',
      prompt: 'Il ___ maggio è festa.',
      options: ['uno', 'primo', 'prima'],
      answer: 1,
      explanation: 'The first of the month is il primo.',
    },
    {
      kind: 'transform',
      instruction: 'Write the time in words, starting "Sono le…".',
      prompt: '2:15',
      answers: ['Sono le due e un quarto.', 'Sono le due e quindici.'],
      explanation: 'Quarter past: e un quarto.',
    },
    {
      kind: 'choice',
      prompt: '2000 in words:',
      options: ['duemille', 'duemila', 'due mille'],
      answer: 1,
      explanation: 'mille becomes mila after two or more.',
    },
  ],
}
