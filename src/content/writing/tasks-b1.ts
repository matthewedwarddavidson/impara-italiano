import type { WritingTask } from '../types'

/** B1: emails, forum posts, articles and stories of about 100 words, as in CILS UNO-B1. */
export const TASKS_B1: WritingTask[] = [
  {
    id: 'b1-reclamo-albergo',
    title: 'Un reclamo all’albergo',
    level: 'B1',
    theme: 'travel',
    format: 'formal-email',
    instructions:
      'Sei appena tornato/a da un soggiorno all’Hotel Miramare di Rimini e sei rimasto/a deluso/a. Scrivi un’email di reclamo al direttore (circa 100 parole).',
    points: ['Di’ quando sei stato/a in albergo.', 'Descrivi due problemi.', 'Spiega come ti sei sentito/a.', 'Chiedi un rimborso o uno sconto.'],
    minWords: 100,
    phrases: [
      { it: 'Gentile Direttore,', en: 'Dear Sir or Madam (to the manager)' },
      { it: 'Le scrivo per lamentarmi di …', en: 'I am writing to complain about …' },
      { it: 'Sul vostro sito … invece …', en: 'On your website … but in fact …' },
      { it: 'Nessuno è venuto a ripararlo.', en: 'Nobody came to repair it.' },
      { it: 'Le chiedo un rimborso parziale.', en: 'I am asking you for a partial refund.' },
      { it: 'In attesa di una sua risposta, porgo distinti saluti.', en: 'I look forward to your reply. Yours faithfully.' },
    ],
    model:
      'Gentile Direttore,\n\nle scrivo per lamentarmi del soggiorno che ho fatto nel suo albergo dal 10 al 14 agosto. Sul vostro sito la camera sembrava ampia e con vista mare; invece era piccola e dava sul parcheggio. Inoltre l’aria condizionata non funzionava e di notte faceva troppo caldo per dormire. Anche la colazione era scarsa e il caffè sempre freddo. L’ho detto due volte alla reception, ma nessuno è venuto a ripararla. Ero molto delusa, perché aspettavo questa vacanza da mesi. Per questo motivo le chiedo un rimborso parziale del prezzo pagato.\n\nIn attesa di una sua risposta, porgo distinti saluti.\nEmma Clarke',
  },
  {
    id: 'b1-candidatura',
    title: 'Un lavoro per l’estate',
    level: 'B1',
    theme: 'work',
    format: 'formal-email',
    instructions:
      'Hai letto questo annuncio: «Libreria nel centro di Bologna cerca commessi per i mesi estivi. Richiesta la conoscenza dell’inglese.» Scrivi un’email per candidarti (circa 100 parole).',
    points: [
      'Di’ dove hai visto l’annuncio.',
      'Presentati e parla delle tue esperienze.',
      'Spiega perché sei la persona giusta.',
      'Di’ quando sei disponibile.',
    ],
    minWords: 100,
    phrases: [
      { it: 'In riferimento al vostro annuncio …', en: 'With reference to your advert …' },
      { it: 'Vorrei candidarmi per il posto di …', en: "I'd like to apply for the post of …" },
      { it: 'Ho lavorato per tre anni come …', en: 'I worked for three years as …' },
      { it: 'Mi occupavo di …', en: 'I was responsible for …' },
      { it: 'Sarei disponibile da … a …', en: "I'd be available from … to …" },
      { it: 'Allego il mio curriculum.', en: 'I attach my CV.' },
    ],
    model:
      'Gentili Signori,\n\nin riferimento al vostro annuncio sul sito della libreria, vorrei candidarmi per il posto di commessa per l’estate. Mi chiamo Emma, ho trentadue anni e sono inglese, quindi l’inglese è la mia lingua madre. Studio l’italiano da due anni e ormai lo parlo abbastanza bene. Quando ero studentessa ho lavorato per tre anni in una libreria di Cambridge, dove consigliavo i libri ai clienti e mi occupavo della cassa. Amo leggere e sono una persona affidabile e gentile con il pubblico. Sarei disponibile da giugno a settembre, anche nel fine settimana. Allego il mio curriculum.\n\nCordiali saluti,\nEmma Clarke',
  },
  {
    id: 'b1-smartphone',
    title: 'Bambini e smartphone',
    level: 'B1',
    theme: 'media',
    format: 'forum',
    instructions:
      'Su un forum di genitori si discute: «A che età un bambino dovrebbe avere il suo primo smartphone?» Scrivi la tua opinione (circa 100 parole).',
    points: [
      'Di’ qual è la tua opinione.',
      'Dai almeno due motivi.',
      'Parla della tua esperienza o di quella di qualcuno che conosci.',
      'Concludi con un consiglio.',
    ],
    minWords: 100,
    phrases: [
      { it: 'Secondo me …', en: 'In my opinion …' },
      { it: 'Da un lato … dall’altro …', en: 'On the one hand … on the other …' },
      { it: 'Penso che sia meglio aspettare.', en: "I think it's better to wait." },
      { it: 'Il problema è che …', en: 'The problem is that …' },
      { it: 'Per esempio, mia nipote …', en: 'For example, my niece …' },
      { it: 'Il mio consiglio è di …', en: 'My advice is to …' },
    ],
    model:
      'Secondo me un bambino non dovrebbe avere uno smartphone prima dei dodici o tredici anni. Da un lato è utile, perché i genitori possono chiamare i figli quando sono fuori casa. Dall’altro, però, i bambini passano troppo tempo davanti allo schermo e giocano meno all’aperto. Inoltre sui social possono vedere cose non adatte alla loro età e fare brutti incontri. Per esempio, mia nipote ha avuto il telefono a nove anni e adesso non riesce a staccarsene, neanche a tavola. Il mio consiglio è di dare prima un telefono semplice, solo per chiamare e mandare messaggi, e di stabilire insieme delle regole chiare.',
  },
  {
    id: 'b1-ambiente',
    title: 'Piccoli gesti per l’ambiente',
    level: 'B1',
    theme: 'environment',
    format: 'essay',
    instructions:
      'Una rivista per studenti di italiano chiede ai lettori: «Che cosa fai tu, ogni giorno, per proteggere l’ambiente?» Scrivi un articolo (circa 120 parole).',
    points: [
      'Descrivi le tue abitudini.',
      'Spiega che cosa potresti fare di più.',
      'Di’ che cosa dovrebbero fare il governo o le aziende.',
      'Concludi con la tua opinione.',
    ],
    minWords: 120,
    phrases: [
      { it: 'Nella vita di tutti i giorni cerco di …', en: 'In everyday life I try to …' },
      { it: 'Faccio la raccolta differenziata.', en: 'I sort my rubbish for recycling.' },
      { it: 'Potrei però fare di più.', en: 'But I could do more.' },
      { it: 'Le aziende dovrebbero …', en: 'Companies should …' },
      { it: 'È necessario che tutti collaborino.', en: 'Everyone needs to work together.' },
      { it: 'In conclusione …', en: 'In conclusion …' },
    ],
    model:
      'Nella vita di tutti i giorni cerco di fare piccoli gesti per l’ambiente. Faccio sempre la raccolta differenziata, porto le mie borse quando vado al supermercato e, quando posso, vado al lavoro in bicicletta invece di prendere la macchina. A casa spengo le luci e non lascio la televisione in stand-by.\n\nPotrei però fare di più: per esempio, compro ancora troppi prodotti con tanta plastica e mangio carne quasi tutti i giorni. Mi piacerebbe anche prendere meno spesso l’aereo per andare in vacanza.\n\nSecondo me anche il governo e le aziende dovrebbero fare la loro parte. I treni dovrebbero costare meno e i supermercati dovrebbero vendere più prodotti sfusi.\n\nIn conclusione, penso che i piccoli gesti siano importanti, ma è necessario che tutti collaborino.',
  },
  {
    id: 'b1-viaggio',
    title: 'Un viaggio indimenticabile',
    level: 'B1',
    theme: 'travel',
    format: 'story',
    instructions: 'Racconta un viaggio che non dimenticherai mai (circa 100 parole).',
    points: ['Quando e dove sei andato/a, e con chi', 'Com’era il posto', 'Che cosa è successo di speciale', 'Perché non lo dimenticherai'],
    minWords: 100,
    phrases: [
      { it: 'Qualche anno fa sono andato/a …', en: 'A few years ago I went …' },
      { it: 'I paesi erano … e la gente era …', en: 'The villages were … and the people were …' },
      { it: 'Un giorno, mentre …', en: 'One day, while …' },
      { it: 'All’improvviso …', en: 'Suddenly …' },
      { it: 'Non dimenticherò mai …', en: "I'll never forget …" },
      { it: 'È stata la serata più bella di …', en: 'It was the best evening of …' },
    ],
    model:
      'Cinque anni fa sono andata in Sicilia con mio marito per il nostro anniversario. Abbiamo affittato una macchina e abbiamo girato l’isola per due settimane. I paesi erano bellissimi e la gente era molto ospitale. Un giorno, mentre salivamo verso l’Etna, la macchina si è fermata in mezzo alla strada. Non c’era nessuno e i telefoni non avevano campo. Dopo un’ora è passato un contadino con il suo trattore: ci ha portato fino al suo paese e sua moglie ci ha preparato una cena enorme. Non dimenticherò mai la loro gentilezza. È stata la serata più bella di tutto il viaggio.',
  },
  {
    id: 'b1-consigli',
    title: 'Consigli per un amico',
    level: 'B1',
    theme: 'relationships',
    format: 'informal-email',
    instructions:
      'Il tuo amico Luca si trasferisce in Inghilterra per lavoro e ti chiede consigli. Rispondi alla sua email (circa 100 parole).',
    points: [
      'Di’ che cosa pensi della sua decisione.',
      'Dagli due consigli pratici (casa, lavoro, lingua…).',
      'Avvertilo di una cosa che potrebbe essere difficile.',
      'Offri il tuo aiuto.',
    ],
    minWords: 100,
    phrases: [
      { it: 'Che bella notizia!', en: 'What great news!' },
      { it: 'Hai fatto benissimo a …', en: 'You were quite right to …' },
      { it: 'Ti consiglio di …', en: "I'd advise you to …" },
      { it: 'Fai attenzione a …', en: 'Watch out for …' },
      { it: 'All’inizio potresti …', en: 'At first you might …' },
      { it: 'Se hai bisogno di qualcosa, chiamami!', en: 'If you need anything, call me!' },
    ],
    model:
      'Caro Luca,\n\nche bella notizia! Secondo me hai fatto benissimo ad accettare questo lavoro. Ti do un paio di consigli. Prima di tutto, non cercare subito una casa da comprare: all’inizio è meglio affittare una stanza e conoscere bene la città. Poi ti consiglio di iscriverti a un corso di inglese o a un club sportivo, così conosci gente nuova. Fai attenzione al tempo: qui piove spesso e d’inverno fa buio alle quattro, quindi all’inizio potresti sentirti un po’ triste. Ti mando anche il numero di una mia amica che abita a Londra. Se hai bisogno di qualcosa, chiamami pure: puoi venire a trovarci quando vuoi.\n\nUn abbraccio,\nEmma',
  },
  {
    id: 'b1-vicini',
    title: 'Rumore in condominio',
    level: 'B1',
    theme: 'home',
    format: 'formal-email',
    instructions:
      'Da qualche settimana i nuovi vicini del piano di sopra fanno molto rumore la sera. Scrivi un’email all’amministratore del condominio, il signor Bassi (circa 100 parole).',
    points: [
      'Descrivi il problema.',
      'Spiega che conseguenze ha per te e la tua famiglia.',
      'Di’ che cosa hai già fatto.',
      'Chiedi all’amministratore di intervenire.',
    ],
    minWords: 100,
    phrases: [
      { it: 'Gentile signor Bassi,', en: 'Dear Mr Bassi,' },
      { it: 'Le scrivo a proposito di …', en: 'I am writing about …' },
      { it: 'Da circa un mese …', en: 'For about a month …' },
      { it: 'Ho già provato a parlarne con …', en: 'I have already tried talking to … about it' },
      { it: 'Le sarei grato/a se potesse …', en: 'I would be grateful if you could …' },
      { it: 'Resto in attesa di un suo riscontro.', en: 'I look forward to hearing from you.' },
    ],
    model:
      'Gentile signor Bassi,\n\nle scrivo a proposito dei nuovi inquilini dell’appartamento 6, al terzo piano. Da circa un mese ascoltano musica ad alto volume quasi tutte le sere, spesso fino a mezzanotte, e il sabato organizzano feste. Mia figlia ha sette anni e va a letto alle otto, ma con questo rumore non riesce a dormire. Anche io e mio marito ci alziamo presto per lavorare e siamo sempre stanchi. Ho già provato a parlarne con loro due volte, ma non è cambiato niente. Le sarei grata se potesse ricordare a tutti il regolamento del condominio.\n\nResto in attesa di un suo riscontro.\nCordiali saluti,\nEmma Clarke',
  },
  {
    id: 'b1-stare-bene',
    title: 'Vivere in modo sano',
    level: 'B1',
    theme: 'health',
    format: 'forum',
    instructions: 'Su un forum sulla salute si chiede: «Che cosa fate per stare bene?» Scrivi un messaggio (circa 100 parole).',
    points: [
      'Parla della tua alimentazione.',
      'Parla dello sport o del movimento che fai.',
      'Di’ quale abitudine vorresti cambiare.',
      'Chiedi un consiglio agli altri utenti.',
    ],
    minWords: 100,
    phrases: [
      { it: 'Per stare bene cerco di …', en: 'To keep well I try to …' },
      { it: 'Da allora mi sento meglio.', en: "Since then I've felt better." },
      { it: 'Per quanto riguarda lo sport, …', en: 'As far as sport goes, …' },
      { it: 'Il mio punto debole è …', en: 'My weak point is …' },
      { it: 'So che dovrei …', en: 'I know I should …' },
      { it: 'Avete qualche consiglio?', en: 'Do you have any tips?' },
    ],
    model:
      'Ciao a tutti! Per stare bene cerco di mangiare molta frutta e verdura e di cucinare a casa quasi sempre. Ho smesso di bere bibite gassate due anni fa e da allora mi sento molto meglio. Per quanto riguarda lo sport, vado a nuotare due volte alla settimana e la domenica faccio lunghe passeggiate in campagna con la famiglia. Il mio punto debole, però, è il sonno: lavoro su turni in ospedale e spesso dormo solo cinque o sei ore. So che dovrei dormire di più, ma con i turni non è facile. Voi lavorate di notte? Avete qualche consiglio per riposare meglio?',
  },
]
