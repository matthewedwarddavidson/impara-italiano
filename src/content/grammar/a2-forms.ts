import type { GrammarTopic } from '../types'

export const preposizioniArticolate: GrammarTopic = {
  id: 'preposizioni-articolate',
  title: 'Le preposizioni articolate',
  english: 'Prepositions with the article: del, al, nel, sul…',
  level: 'A2',
  summary:
    '**di**, **a**, **da**, **in** and **su** join the definite article that follows: a + il = **al**, in + la = **nella**, di + gli = **degli**. Con and per stay separate (con il, per la).',
  sections: [
    {
      heading: 'The table',
      body: ['In changes to ne- and di to de- before the article. Double the l wherever the article starts with l: della, nello, sull’.'],
      table: {
        head: ['', 'il', 'lo', 'l’', 'la', 'i', 'gli', 'le'],
        rows: [
          ['di', 'del', 'dello', 'dell’', 'della', 'dei', 'degli', 'delle'],
          ['a', 'al', 'allo', 'all’', 'alla', 'ai', 'agli', 'alle'],
          ['da', 'dal', 'dallo', 'dall’', 'dalla', 'dai', 'dagli', 'dalle'],
          ['in', 'nel', 'nello', 'nell’', 'nella', 'nei', 'negli', 'nelle'],
          ['su', 'sul', 'sullo', 'sull’', 'sulla', 'sui', 'sugli', 'sulle'],
        ],
      },
      examples: [
        { it: 'Il latte è **nel** frigo.', en: 'The milk is in the fridge.' },
        { it: 'Vado **al** supermercato e poi **dal** medico.', en: "I'm going to the supermarket and then to the doctor's." },
        { it: 'Le chiavi sono **sul** tavolo.', en: 'The keys are on the table.' },
      ],
    },
    {
      heading: 'When there is no article',
      body: [
        'If the phrase has no article, the preposition stays simple: **in** Italia but **nell’**Italia del sud; **a** casa, **in** banca, **in** cucina. Times take the article: **alle** otto, **all’**una.',
        'del, della, dei… also mean "some": Vorrei **del** pane (some bread), Ho comprato **delle** mele.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'in il frigo', right: 'nel frigo', why: 'in + il joins: nel.' },
    { wrong: 'a le otto', right: 'alle otto', why: 'a + le joins: alle.' },
    { wrong: 'nella Italia', right: 'in Italia', why: 'Countries on their own take no article, so the preposition stays simple.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Il latte è ___ frigo.', hint: 'in + il', answers: ['nel'], explanation: 'in + il = nel.' },
    { kind: 'gap', prompt: 'Vado ___ stazione.', hint: 'a + la', answers: ['alla'], explanation: 'a + la = alla.' },
    { kind: 'gap', prompt: 'Le chiavi sono ___ tavolo.', hint: 'su + il', answers: ['sul'], explanation: 'su + il = sul.' },
    { kind: 'gap', prompt: 'Torno ___ ufficio alle sei.', hint: 'da + l’', answers: ["dall'", 'dall’'], explanation: 'da + l’ = dall’.' },
    { kind: 'gap', prompt: 'Il libro ___ studente è sul banco.', hint: 'di + lo', answers: ['dello'], explanation: 'di + lo = dello.' },
    { kind: 'gap', prompt: 'Ci vediamo ___ otto.', hint: 'a + le', answers: ['alle'], explanation: 'Times take the article: alle otto.' },
    { kind: 'gap', prompt: 'I vestiti sono ___ armadio.', hint: 'in + l’', answers: ["nell'", 'nell’'], explanation: 'in + l’ = nell’.' },
    { kind: 'gap', prompt: 'Vorrei ___ pane.', hint: 'some', answers: ['del'], explanation: 'di + il = del, meaning some.' },
    {
      kind: 'choice',
      prompt: 'Abito ___ Inghilterra.',
      options: ['in', 'nell’', 'nella'],
      answer: 0,
      explanation: 'A country on its own: no article, so plain in.',
    },
    {
      kind: 'choice',
      prompt: 'Regalo dei fiori ___ amiche.',
      options: ['alle', 'agli', 'a le'],
      answer: 0,
      explanation: 'amiche is feminine plural: a + le = alle.',
    },
  ],
}

export const verbiRiflessivi: GrammarTopic = {
  id: 'verbi-riflessivi',
  title: 'I verbi riflessivi',
  english: 'Reflexive verbs: mi alzo, ti chiami',
  level: 'A2',
  summary:
    'Reflexive verbs end in **-rsi** (alzarsi, chiamarsi) and take a pronoun that matches the subject: **mi** alzo, **ti** alzi, **si** alza. In the passato prossimo they take essere: **mi sono alzata**.',
  sections: [
    {
      heading: 'The pronouns',
      body: [
        'Drop -rsi, conjugate as normal, and put the pronoun in front. Many daily-routine verbs are reflexive in Italian but not in English: svegliarsi, alzarsi, lavarsi, vestirsi, chiamarsi, sentirsi, divertirsi, riposarsi.',
      ],
      table: {
        head: ['', 'Pronoun', 'alzarsi (present)', 'alzarsi (passato prossimo)'],
        rows: [
          ['io', 'mi', 'mi alzo', 'mi sono alzato / alzata'],
          ['tu', 'ti', 'ti alzi', 'ti sei alzato / alzata'],
          ['lui, lei', 'si', 'si alza', 'si è alzato / alzata'],
          ['noi', 'ci', 'ci alziamo', 'ci siamo alzati / alzate'],
          ['voi', 'vi', 'vi alzate', 'vi siete alzati / alzate'],
          ['loro', 'si', 'si alzano', 'si sono alzati / alzate'],
        ],
      },
      examples: [
        { it: 'Come **ti chiami**?', en: "What's your name?" },
        { it: '**Ci siamo divertiti** molto.', en: 'We had a great time.' },
      ],
    },
    {
      heading: 'With modal verbs',
      body: [
        'With volere, potere and dovere, the pronoun goes before the modal or on the end of the infinitive: **Mi** devo alzare presto, or Devo alzar**mi** presto.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'Alzo alle sette.', right: 'Mi alzo alle sette.', why: 'alzarsi needs its pronoun.' },
    { wrong: 'Mi ho lavato.', right: 'Mi sono lavata.', why: 'Reflexive verbs take essere in the passato prossimo.' },
    { wrong: 'Devo mi alzare.', right: 'Devo alzarmi.', why: 'The pronoun goes before the modal or joins the infinitive.' },
  ],
  exercises: [
    { kind: 'gap', prompt: '___ alzo alle sette.', answers: ['Mi'], explanation: 'io: mi.' },
    { kind: 'gap', prompt: 'Come ___ chiami?', answers: ['ti'], explanation: 'tu: ti.' },
    { kind: 'gap', prompt: 'I bambini ___ divertono al parco.', answers: ['si'], explanation: 'loro: si.' },
    { kind: 'gap', prompt: 'Noi ___ vestiamo in fretta.', answers: ['ci'], explanation: 'noi: ci.' },
    { kind: 'gap', prompt: 'Ieri mi ___ alzata tardi.', answers: ['sono'], explanation: 'Reflexive verbs take essere.' },
    { kind: 'gap', prompt: 'Anna si è ___ alle sei.', hint: 'svegliarsi', answers: ['svegliata'], explanation: 'With essere the participle agrees: svegliata.' },
    { kind: 'gap', prompt: 'Domani devo ___ presto.', hint: 'alzarsi, io', answers: ['alzarmi'], explanation: 'The pronoun joins the infinitive: alzarmi.' },
    {
      kind: 'choice',
      prompt: 'Come ___ oggi, signora?',
      options: ['si sente', 'ti senti', 'sente'],
      answer: 0,
      explanation: 'Formal Lei takes the third person: si sente.',
    },
    {
      kind: 'transform',
      instruction: 'Put it in the passato prossimo.',
      prompt: 'Ci riposiamo.',
      answers: ['Ci siamo riposati.', 'Ci siamo riposate.'],
      explanation: 'essere + participle agreeing with noi.',
    },
  ],
}

export const pronomiDiretti: GrammarTopic = {
  id: 'pronomi-diretti',
  title: 'I pronomi diretti',
  english: 'Direct object pronouns: lo, la, li, le',
  level: 'A2',
  summary:
    'Direct object pronouns replace the thing or person the verb acts on, and go **before** the verb: Compro il pane → **Lo** compro. Conosci Anna? Sì, **la** conosco.',
  sections: [
    {
      heading: 'The forms',
      table: {
        head: ['', 'Pronoun', 'Example'],
        rows: [
          ['me', 'mi', 'Mi senti?'],
          ['you (tu)', 'ti', 'Ti chiamo stasera.'],
          ['him, it (m)', 'lo', 'Il caffè? Lo prendo amaro.'],
          ['her, it (f), you (Lei)', 'la', 'La pizza? La mangio qui.'],
          ['us', 'ci', 'Ci aspetti?'],
          ['you (voi)', 'vi', 'Vi vedo domani.'],
          ['them (m)', 'li', 'I biglietti? Li ho io.'],
          ['them (f)', 'le', 'Le chiavi? Le cerco da un’ora.'],
        ],
      },
      body: [
        'lo and la become **l’** before a vowel or h: **L’**ho visto. In the passato prossimo the participle agrees with lo, la, li, le: La pizza? **L’ho mangiata**. I biglietti? **Li ho comprati**.',
        'With an infinitive, the pronoun can join its end: Voglio veder**lo**, or **Lo** voglio vedere.',
      ],
      examples: [
        { it: 'Il giornale? **Lo** leggo ogni mattina.', en: 'The newspaper? I read it every morning.' },
        { it: 'Le foto? **Le** ho già mandate.', en: "The photos? I've already sent them." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Compro lo.', right: 'Lo compro.', why: 'The pronoun goes before a conjugated verb.' },
    { wrong: 'La pizza? L’ho mangiato.', right: 'La pizza? L’ho mangiata.', why: 'The participle agrees with la.' },
    { wrong: 'I libri? Le ho letti.', right: 'I libri? Li ho letti.', why: 'libri is masculine plural: li.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Il pane? ___ compro io.', answers: ['Lo'], explanation: 'il pane, masculine singular: lo.' },
    { kind: 'gap', prompt: 'Conosci Anna? Sì, ___ conosco.', answers: ['la'], explanation: 'Anna, feminine singular: la.' },
    { kind: 'gap', prompt: 'I biglietti? ___ ho io.', answers: ['Li'], explanation: 'biglietti, masculine plural: li.' },
    { kind: 'gap', prompt: 'Le chiavi? Non ___ trovo.', answers: ['le'], explanation: 'chiavi, feminine plural: le.' },
    { kind: 'gap', prompt: 'Ciao Marco, ___ chiamo stasera.', answers: ['ti'], explanation: 'you (tu): ti.' },
    { kind: 'gap', prompt: 'La torta? L’ho ___ io.', hint: 'fare', answers: ['fatta'], explanation: 'The participle agrees with la: fatta.' },
    { kind: 'gap', prompt: 'Questo film voglio veder___.', answers: ['lo'], explanation: 'The pronoun joins the infinitive: vederlo.' },
    {
      kind: 'choice',
      prompt: 'Le mele? ___ ho comprate ieri.',
      options: ['Le', 'Li', 'La'],
      answer: 0,
      explanation: 'mele is feminine plural: le, and comprate agrees.',
    },
    {
      kind: 'transform',
      instruction: 'Replace the object with a pronoun.',
      prompt: 'Guardo la televisione.',
      answers: ['La guardo.'],
      explanation: 'la televisione → la, before the verb.',
    },
  ],
}

export const pronomiIndiretti: GrammarTopic = {
  id: 'pronomi-indiretti',
  title: 'I pronomi indiretti',
  english: 'Indirect object pronouns: mi, ti, gli, le',
  level: 'A2',
  summary:
    'Indirect object pronouns mean "to me, to you, to him…" and also go before the verb: Telefono **a Marco** → **Gli** telefono. Scrivo **a Laura** → **Le** scrivo.',
  sections: [
    {
      heading: 'The forms',
      body: [
        'They differ from the direct pronouns only in the third person: **gli** (to him), **le** (to her, and to you formal: **Le**), and **gli** for "to them" in everyday speech.',
        'Verbs that take a + person use them: telefonare a, scrivere a, dare a, dire a, chiedere a, rispondere a, regalare a, piacere a.',
      ],
      table: {
        head: ['', 'Pronoun', 'Example'],
        rows: [
          ['to me', 'mi', 'Mi dai il sale?'],
          ['to you (tu)', 'ti', 'Ti scrivo domani.'],
          ['to him', 'gli', 'Gli telefono stasera.'],
          ['to her, to you (Lei)', 'le', 'Le porto un caffè.'],
          ['to us', 'ci', 'Ci spieghi la regola?'],
          ['to you (voi)', 'vi', 'Vi mando le foto.'],
          ['to them', 'gli', 'Gli rispondo subito.'],
        ],
      },
      examples: [
        { it: 'Cosa **gli** regali per il compleanno?', en: 'What are you giving him for his birthday?' },
        { it: '**Le** ho detto la verità.', en: 'I told her the truth.' },
      ],
    },
    {
      heading: 'No agreement',
      body: ['Unlike lo, la, li, le, indirect pronouns never change the participle: **Le** ho scritto (not scritta).'],
    },
  ],
  mistakes: [
    { wrong: 'Lo telefono.', right: 'Gli telefono.', why: 'telefonare a + person takes an indirect pronoun.' },
    { wrong: 'Gli ho scritto a Laura.', right: 'Le ho scritto.', why: 'Laura is a woman: le. And the pronoun replaces a Laura.' },
    { wrong: 'Le ho scritta.', right: 'Le ho scritto.', why: 'Indirect pronouns don’t make the participle agree.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Telefono a Marco: ___ telefono stasera.', answers: ['gli'], explanation: 'to him: gli.' },
    { kind: 'gap', prompt: 'Scrivo a Laura: ___ scrivo domani.', answers: ['le'], explanation: 'to her: le.' },
    { kind: 'gap', prompt: '___ dai il sale, per favore?', hint: 'to me', answers: ['Mi'], explanation: 'to me: mi.' },
    { kind: 'gap', prompt: 'Ragazzi, ___ mando le foto stasera.', answers: ['vi'], explanation: 'to you (voi): vi.' },
    { kind: 'gap', prompt: 'Signora, ___ porto un caffè?', answers: ['Le'], explanation: 'Formal you: Le.' },
    { kind: 'gap', prompt: 'Ai bambini ___ leggo una storia ogni sera.', answers: ['gli'], explanation: 'to them: gli.' },
    {
      kind: 'choice',
      prompt: 'Hai risposto a tua madre? Sì, ___ ho risposto.',
      options: ['le', 'la', 'gli'],
      answer: 0,
      explanation: 'rispondere a + a woman: le.',
    },
    {
      kind: 'choice',
      prompt: 'Il libro? ___ do a Paolo domani.',
      options: ['Lo', 'Gli', 'Le'],
      answer: 0,
      explanation: 'The book is the direct object: lo. Paolo would be gli.',
    },
    {
      kind: 'transform',
      instruction: 'Replace "a Luca" with a pronoun.',
      prompt: 'Regalo un libro a Luca.',
      answers: ['Gli regalo un libro.'],
      explanation: 'a Luca → gli, before the verb.',
    },
  ],
}

export const piacere: GrammarTopic = {
  id: 'piacere',
  title: 'Il verbo piacere',
  english: 'Saying you like something: mi piace, mi piacciono',
  level: 'A2',
  summary:
    'Italian says "it pleases me" rather than "I like it": **Mi piace** il gelato. The thing liked is the subject, so use **piacciono** for plural things: **Mi piacciono** i gatti.',
  sections: [
    {
      heading: 'Piace or piacciono',
      body: [
        'Use **piace** with one thing or a verb, **piacciono** with plural things. The person who likes takes an indirect pronoun (mi, ti, gli, le, ci, vi, gli) or a + name: **A Marco** piace il calcio.',
        'In the passato prossimo piacere takes essere and agrees with the thing liked: Il film **mi è piaciuto**; la pizza **mi è piaciuta**.',
      ],
      table: {
        head: ['', 'One thing or a verb', 'Plural things'],
        rows: [
          ['I like', 'mi piace', 'mi piacciono'],
          ['you like', 'ti piace', 'ti piacciono'],
          ['he likes / she likes', 'gli piace / le piace', 'gli piacciono / le piacciono'],
          ['we like', 'ci piace', 'ci piacciono'],
          ['they like', 'gli piace', 'gli piacciono'],
        ],
      },
      examples: [
        { it: '**Mi piace** viaggiare.', en: 'I like travelling.' },
        { it: '**Ti piacciono** i film italiani?', en: 'Do you like Italian films?' },
        { it: '**A mia madre** non **piace** il caffè.', en: "My mother doesn't like coffee." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Io piaccio la pizza.', right: 'Mi piace la pizza.', why: 'The thing liked is the subject; the person takes mi.' },
    { wrong: 'Mi piace i gatti.', right: 'Mi piacciono i gatti.', why: 'Plural things take piacciono.' },
    { wrong: 'Marco piace il calcio.', right: 'A Marco piace il calcio.', why: 'The person who likes needs a.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Mi ___ il gelato.', answers: ['piace'], explanation: 'One thing: piace.' },
    { kind: 'gap', prompt: 'Ti ___ i film italiani?', answers: ['piacciono'], explanation: 'Plural: piacciono.' },
    { kind: 'gap', prompt: '___ Marco piace il calcio.', answers: ['A'], explanation: 'The person who likes takes a.' },
    { kind: 'gap', prompt: 'A Laura non piace cucinare: non ___ piace.', answers: ['le'], explanation: 'to her: le.' },
    { kind: 'gap', prompt: 'Ci ___ molto viaggiare.', answers: ['piace'], explanation: 'A verb takes piace.' },
    { kind: 'gap', prompt: 'Il film ti è ___?', hint: 'piacere', answers: ['piaciuto'], explanation: 'Essere; agrees with il film: piaciuto.' },
    { kind: 'gap', prompt: 'Le lasagne mi sono ___ molto.', hint: 'piacere', answers: ['piaciute'], explanation: 'Agrees with le lasagne: piaciute.' },
    {
      kind: 'choice',
      prompt: 'Ai miei figli ___ gli animali.',
      options: ['piace', 'piacciono', 'piacciano'],
      answer: 1,
      explanation: 'animali is plural: piacciono.',
    },
    {
      kind: 'order',
      words: ['Mi', 'piacciono', 'molto', 'le', 'canzoni', 'italiane.'],
      english: 'I really like Italian songs.',
      explanation: 'Pronoun, piacciono, then what is liked.',
    },
  ],
}

export const ciENe: GrammarTopic = {
  id: 'ci-e-ne',
  title: 'Ci e ne',
  english: 'The pronouns ci (there) and ne (of it, some)',
  level: 'A2',
  summary:
    '**ci** replaces a place: Vai a Roma? Sì, **ci** vado. **ne** replaces a quantity or "of it": Quanti figli hai? **Ne** ho due.',
  sections: [
    {
      heading: 'Ci: there',
      body: [
        '**ci** stands for a place introduced by a, in or da: Sei mai stato in Sicilia? Sì, **ci** sono stato. It also appears in fixed phrases: **c’è**, **ci vuole** (it takes), **ci penso io** (I’ll see to it).',
      ],
      examples: [
        { it: 'Vieni al cinema? No, non **ci** vengo.', en: "Are you coming to the cinema? No, I'm not coming." },
        { it: '**Ci vuole** un’ora per arrivare.', en: 'It takes an hour to get there.' },
      ],
    },
    {
      heading: 'Ne: of it, of them',
      body: [
        '**ne** replaces a noun after a number or quantity, which Italian can’t leave out: Quante mele vuoi? **Ne** voglio tre. Prendi del pane? Sì, **ne** prendo un po’.',
        'It also replaces di + something: Parliamo **del viaggio**? Sì, **ne** parliamo domani.',
      ],
      examples: [
        { it: 'Quanti caffè bevi al giorno? **Ne** bevo due.', en: 'How many coffees do you drink a day? I drink two.' },
        { it: 'Hai fratelli? No, non **ne** ho.', en: "Do you have any brothers or sisters? No, I don't." },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Quanti figli hai? Ho due.', right: 'Ne ho due.', why: 'After a number, Italian needs ne.' },
    { wrong: 'Vai a Milano? Sì, vado.', right: 'Sì, ci vado.', why: 'The place needs ci.' },
    { wrong: 'Ne vado domani.', right: 'Ci vado domani.', why: 'A place takes ci, not ne.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Vai a Roma? Sì, ___ vado domani.', answers: ['ci'], explanation: 'A place: ci.' },
    { kind: 'gap', prompt: 'Quanti figli hai? ___ ho due.', answers: ['Ne'], explanation: 'After a number: ne.' },
    { kind: 'gap', prompt: 'Sei mai stata a Venezia? Sì, ___ sono stata.', answers: ['ci'], explanation: 'A place: ci.' },
    { kind: 'gap', prompt: 'Vuoi del caffè? Sì, ___ prendo un po’.', answers: ['ne'], explanation: 'A quantity: ne.' },
    { kind: 'gap', prompt: '___ vuole un’ora per arrivare.', answers: ['Ci'], explanation: 'ci vuole: it takes.' },
    { kind: 'gap', prompt: 'Hai figli? No, non ___ ho.', answers: ['ne'], explanation: 'None of them: non ne ho.' },
    {
      kind: 'choice',
      prompt: 'Quante mele compri? ___ compro un chilo.',
      options: ['Ne', 'Ci', 'Le'],
      answer: 0,
      explanation: 'A quantity: ne.',
    },
    {
      kind: 'choice',
      prompt: 'Vieni in palestra? No, oggi non ___ vengo.',
      options: ['ci', 'ne', 'la'],
      answer: 0,
      explanation: 'A place: ci.',
    },
    {
      kind: 'transform',
      instruction: 'Answer with ne: "I want three."',
      prompt: 'Quanti biglietti vuoi?',
      answers: ['Ne voglio tre.'],
      explanation: 'ne + verb + number.',
    },
  ],
}

export const comparativi: GrammarTopic = {
  id: 'comparativi',
  title: 'Comparativi e superlativi',
  english: 'Comparing: più alto di, il più alto, altissimo',
  level: 'A2',
  summary:
    'More than: **più** … **di**. Less than: **meno** … **di**. As … as: **(così)** … **come**. The most: **il più** … : Roma è **più grande di** Firenze; è la città **più grande** d’Italia.',
  sections: [
    {
      heading: 'Comparing two things',
      body: [
        'Use **di** before a noun or pronoun: Marco è più alto **di** me. Use **che** when comparing two adjectives, verbs or nouns about the same thing: È più bello **che** utile; Mi piace più leggere **che** scrivere.',
        'Irregular forms are common: **migliore** (better, adjective), **peggiore** (worse); **meglio** and **peggio** as adverbs: Parli **meglio** di me.',
      ],
      examples: [
        { it: 'Il treno è **più veloce dell’**autobus.', en: 'The train is faster than the bus.' },
        { it: 'Oggi fa **meno** freddo **di** ieri.', en: "It's less cold today than yesterday." },
        { it: 'Questo caffè è **migliore** di quello.', en: 'This coffee is better than that one.' },
      ],
    },
    {
      heading: 'The most, and very',
      body: [
        'The most: article + **più** + adjective, with **di** for the group: È la ragazza **più simpatica della** classe.',
        'Very: add **-issimo** to the adjective (minus its last vowel): bello → **bellissimo**, buono → **buonissimo**, caro → **carissimo**.',
      ],
    },
  ],
  mistakes: [
    { wrong: 'Roma è più grande che Firenze.', right: 'Roma è più grande di Firenze.', why: 'Before a noun, use di.' },
    { wrong: 'più buono', right: 'migliore', why: 'migliore is the usual form for better.' },
    { wrong: 'Parli migliore di me.', right: 'Parli meglio di me.', why: 'With a verb, use the adverb meglio.' },
  ],
  exercises: [
    { kind: 'gap', prompt: 'Roma è più grande ___ Firenze.', answers: ['di'], explanation: 'Before a noun: di.' },
    { kind: 'gap', prompt: 'Il treno è più veloce ___ autobus.', answers: ["dell'", 'dell’'], explanation: 'di + l’ = dell’.' },
    { kind: 'gap', prompt: 'Mi piace più leggere ___ scrivere.', answers: ['che'], explanation: 'Comparing two verbs: che.' },
    { kind: 'gap', prompt: 'Questa pizza è ___!', hint: 'very good', answers: ['buonissima'], explanation: 'buono + -issimo, feminine: buonissima.' },
    { kind: 'gap', prompt: 'È la città più bella ___ mondo.', answers: ['del'], explanation: 'The most … in: di + il = del.' },
    { kind: 'gap', prompt: 'Parli italiano ___ di me.', hint: 'better', answers: ['meglio'], explanation: 'With a verb: meglio.' },
    {
      kind: 'choice',
      prompt: 'Questo ristorante è ___ di quello.',
      options: ['migliore', 'meglio', 'più meglio'],
      answer: 0,
      explanation: 'Describing a noun: migliore.',
    },
    {
      kind: 'choice',
      prompt: 'Oggi fa ___ caldo di ieri.',
      options: ['meno', 'meglio', 'come'],
      answer: 0,
      explanation: 'Less … than: meno … di.',
    },
    {
      kind: 'order',
      words: ['Mia', 'sorella', 'è', 'più', 'alta', 'di', 'me.'],
      english: 'My sister is taller than me.',
      explanation: 'più + adjective + di.',
    },
  ],
}
