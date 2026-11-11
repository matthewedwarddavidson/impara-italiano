// A1 words: everyday life, home, food, useful phrases and general words.
// Topic words (people, shopping, travel, health…) are in a1-topics.ts.
// Format: see parseWords.

export const DAILY_LIFE = `
# A1
P | ciao | – | | hello; bye (informal) | {Ciao}, come stai? | Hi, how are you?
P | buongiorno | – | | good morning; hello | {Buongiorno}, signora Rossi. | Good morning, Mrs Rossi.
P | grazie | – | | thank you | {Grazie} mille! | Thanks a lot!
P | per favore | – | | please | Un caffè, {per favore}. | A coffee, please.
V | essere | sono, sono stato | | to be | Io {sono} inglese. | I'm English.
V | avere | ho, ho avuto | | to have | {Ho} due fratelli. | I have two brothers.
V | andare | vado, sono andato | a + town | to go | {Vado} a Roma domani. | I'm going to Rome tomorrow.
V | fare | faccio, ho fatto | | to do; to make | Cosa {fai} stasera? | What are you doing this evening?
V | parlare | parlo, ho parlato | | to speak | {Parlo} un po' di italiano. | I speak a little Italian.
V | alzarsi | mi alzo, mi sono alzato | | to get up | Mi {alzo} alle sette. | I get up at seven.
N | il giorno | i giorni | | day | Che {giorno} è oggi? | What day is it today?
N | la settimana | le settimane | | week | Ci vediamo la prossima {settimana}. | See you next week.
N | l'ora f | le ore | | hour; time (of day) | Che {ora} è? | What time is it?
ADV | oggi | – | | today | {Oggi} lavoro da casa. | Today I'm working from home.
ADV | domani | – | | tomorrow | A {domani}! | See you tomorrow!
N | la mattina | le mattine | | morning | Di {mattina} bevo un caffè. | In the morning I drink a coffee.
N | il pomeriggio | i pomeriggi | | afternoon | Ci vediamo nel {pomeriggio}. | See you in the afternoon.
N | la sera | le sere | | evening | La {sera} guardo la TV. | In the evening I watch TV.
N | la notte | le notti | | night | Questa {notte} ho dormito male. | I slept badly last night.
N | il mese | i mesi | | month | Il {mese} prossimo vado in Italia. | Next month I'm going to Italy.
N | l'anno m | gli anni | | year | Quanti {anni} hai? | How old are you?
N | il minuto | i minuti | | minute | Arrivo tra cinque {minuti}. | I'll be there in five minutes.
N | il secondo | i secondi | | second | Un {secondo}, per favore! | One second, please!
N | il fine settimana | i fine settimana | | weekend | Cosa fai nel {fine settimana}? | What are you doing at the weekend?
N | la mezzanotte | – | | midnight | Torno a casa a {mezzanotte}. | I get home at midnight.
N | il mezzogiorno | – | | midday; noon | Pranziamo a {mezzogiorno}. | We have lunch at noon.
N | la data | le date | | date | Qual è la {data} di oggi? | What's today's date?
N | il compleanno | i compleanni | | birthday | Buon {compleanno}! | Happy birthday!
N | la vita | le vite | | life | La {vita} in città è cara. | Life in the city is expensive.
N | la volta | le volte | | time (occasion) | È la prima {volta} che vengo qui. | It's the first time I've come here.
N | il tempo | – | | time; weather | Non ho {tempo}. | I don't have time.
N | l'orologio m | gli orologi | | clock; watch | Il mio {orologio} è indietro. | My watch is slow.
N | il quarto | i quarti | | quarter | Sono le tre e un {quarto}. | It's quarter past three.
N | il lunedì | i lunedì | | Monday | Il {lunedì} vado in palestra. | On Mondays I go to the gym.
N | il martedì | i martedì | | Tuesday | Ci vediamo {martedì}. | See you on Tuesday.
N | il mercoledì | i mercoledì | | Wednesday | {Mercoledì} vado dal dentista. | On Wednesday I'm going to the dentist.
N | il giovedì | i giovedì | | Thursday | {Giovedì} ho un esame. | On Thursday I have an exam.
N | il venerdì | i venerdì | | Friday | Il {venerdì} sera esco con gli amici. | On Friday evenings I go out with friends.
N | il sabato | i sabati | | Saturday | Il {sabato} non lavoro. | I don't work on Saturdays.
N | la domenica | le domeniche | | Sunday | La {domenica} pranziamo dai nonni. | On Sundays we have lunch at my grandparents'.
X | gennaio | – | | January | A {gennaio} fa freddo. | It's cold in January.
X | febbraio | – | | February | Il mio compleanno è a {febbraio}. | My birthday is in February.
X | marzo | – | | March | A {marzo} comincia la primavera. | Spring begins in March.
X | aprile | – | | April | Vado a Roma ad {aprile}. | I'm going to Rome in April.
X | maggio | – | | May | Il primo {maggio} è festa. | The first of May is a holiday.
X | giugno | – | | June | La scuola finisce a {giugno}. | School ends in June.
X | luglio | – | | July | A {luglio} andiamo al mare. | In July we go to the seaside.
X | agosto | – | | August | In {agosto} molti negozi sono chiusi. | In August many shops are closed.
X | settembre | – | | September | A {settembre} ricomincia la scuola. | School starts again in September.
X | ottobre | – | | October | Sono nata il 3 {ottobre}. | I was born on 3 October.
X | novembre | – | | November | A {novembre} piove spesso. | It often rains in November.
X | dicembre | – | | December | Natale è il 25 {dicembre}. | Christmas is on 25 December.
N | la primavera | le primavere | | spring | In {primavera} ci sono tanti fiori. | In spring there are lots of flowers.
N | l'estate f | le estati | | summer | In {estate} fa caldo. | It's hot in summer.
N | l'autunno m | gli autunni | | autumn | In {autunno} cadono le foglie. | Leaves fall in autumn.
N | l'inverno m | gli inverni | | winter | L'{inverno} a Milano è freddo. | Winter in Milan is cold.
V | svegliarsi | mi sveglio, mi sono svegliato | | to wake up | Mi {sveglio} presto. | I wake up early.
V | lavarsi | mi lavo, mi sono lavato | | to wash (yourself) | Mi {lavo} le mani. | I wash my hands.
V | vestirsi | mi vesto, mi sono vestito | | to get dressed | Mi {vesto} in fretta. | I get dressed quickly.
V | dormire | dormo, ho dormito | | to sleep | {Dormo} otto ore. | I sleep eight hours.
P | andare a letto | – | | to go to bed | {Vado a letto} alle undici. | I go to bed at eleven.
V | tornare | torno, sono tornato | | to come back; to return | A che ora {torni}? | What time are you coming back?
V | uscire | esco, sono uscito | | to go out | Stasera {esco} con Laura. | I'm going out with Laura tonight.
V | venire | vengo, sono venuto | | to come | {Vieni} con me? | Are you coming with me?
V | stare | sto, sono stato | | to stay; to be (well, ill) | Oggi {sto} a casa. | I'm staying at home today.
V | cominciare | comincio, ho cominciato | | to begin; to start | Il film {comincia} alle nove. | The film starts at nine.
V | finire | finisco, ho finito | | to finish | {Finisco} di lavorare alle cinque. | I finish work at five.
V | vivere | vivo, ho vissuto | | to live | {Vivo} a Londra. | I live in London.
V | abitare | abito, ho abitato | | to live (somewhere) | {Abitiamo} in un appartamento. | We live in a flat.
ADV | ieri | – | | yesterday | {Ieri} ho lavorato tanto. | I worked a lot yesterday.
ADV | stasera | – | | this evening; tonight | {Stasera} mangiamo fuori. | We're eating out tonight.
ADV | adesso | – | | now | {Adesso} non posso. | I can't right now.
ADV | sempre | – | | always | Prendo {sempre} il treno. | I always take the train.
ADV | mai | – | | never; ever | Non bevo {mai} caffè. | I never drink coffee.
ADV | spesso | – | | often | Vado {spesso} al cinema. | I often go to the cinema.
ADV | qualche volta | – | | sometimes | {Qualche volta} guardo la TV. | Sometimes I watch TV.
ADV | presto | – | | early; soon | Mi alzo {presto}. | I get up early.
ADV | tardi | – | | late | È {tardi}, andiamo! | It's late, let's go!
ADV | prima | – | | before; first | {Prima} mangiamo, poi usciamo. | First we eat, then we go out.
ADV | poi | – | | then | Vado al lavoro e {poi} in palestra. | I go to work and then to the gym.
ADV | dopo | – | | afterwards; later | Ci sentiamo {dopo}. | Talk to you later.
ADV | già | – | | already | Ho {già} mangiato. | I've already eaten.
ADV | ancora | – | | still; again | Sei {ancora} a casa? | Are you still at home?
ADV | subito | – | | straight away | Arrivo {subito}! | I'm coming straight away!
ADV | fa | – | | ago | Sono arrivata due giorni {fa}. | I arrived two days ago.
ADV | di solito | – | | usually | {Di solito} faccio la spesa il sabato. | I usually do the shopping on Saturdays.
P | che ore sono | – | | what time is it? | Scusi, {che ore sono}? | Excuse me, what time is it?
P | è l'una | – | | it's one o'clock | {È l'una} e mezza. | It's half past one.
ADJ | mezzo | – | | half | Un litro e {mezzo} d'acqua. | A litre and a half of water.
`

export const HOME = `
# A1
N | la casa | le case | | house; home | Torno a {casa} alle sei. | I get home at six.
N | l'appartamento m | gli appartamenti | | flat | Il mio {appartamento} è piccolo. | My flat is small.
N | lo specchio | gli specchi | | mirror | Lo {specchio} è in bagno. | The mirror is in the bathroom.
N | il bagno | i bagni | | bathroom | Dov'è il {bagno}? | Where's the bathroom?
N | la cucina | le cucine | | kitchen; cooking | La {cucina} è luminosa. | The kitchen is bright.
ADJ | piccolo | – | | small | Una casa {piccola}. | A small house.
ADJ | grande | – | | big | Un giardino {grande}. | A big garden.
N | la camera | le camere | | room; bedroom | La {camera} da letto è grande. | The bedroom is big.
N | la stanza | le stanze | | room | La casa ha cinque {stanze}. | The house has five rooms.
N | il soggiorno | i soggiorni | | living room | Guardiamo la TV in {soggiorno}. | We watch TV in the living room.
N | il letto | i letti | | bed | Il {letto} è troppo piccolo. | The bed is too small.
N | la porta | le porte | | door | Qualcuno bussa alla {porta}. | Someone's knocking at the door.
N | la finestra | le finestre | | window | La {finestra} è aperta. | The window is open.
N | il tavolo | i tavoli | | table | Il {tavolo} è in cucina. | The table is in the kitchen.
N | la sedia | le sedie | | chair | Prendi una {sedia}. | Take a chair.
N | il divano | i divani | | sofa | Dormo sul {divano}. | I'm sleeping on the sofa.
N | l'armadio m | gli armadi | | wardrobe | I vestiti sono nell'{armadio}. | The clothes are in the wardrobe.
N | la lampada | le lampade | | lamp | La {lampada} è sul tavolo. | The lamp is on the table.
N | la luce | le luci | | light | La {luce} è accesa. | The light is on.
N | il giardino | i giardini | | garden | Abbiamo un piccolo {giardino}. | We have a small garden.
N | il piano | i piani | | floor (storey) | Abito al terzo {piano}. | I live on the third floor.
N | la scala | le scale | | stairs; ladder | Prendo le {scale}. | I'll take the stairs.
N | l'ascensore m | gli ascensori | | lift | L'{ascensore} non funziona. | The lift isn't working.
N | la chiave | le chiavi | | key | Dove sono le {chiavi} di casa? | Where are the house keys?
N | il frigorifero | i frigoriferi | | fridge | Il latte è nel {frigorifero}. | The milk is in the fridge.
N | il forno | i forni | | oven | La pizza è nel {forno}. | The pizza is in the oven.
N | la lavatrice | le lavatrici | | washing machine | La {lavatrice} è rotta. | The washing machine is broken.
N | la doccia | le docce | | shower | Faccio la {doccia} la mattina. | I have a shower in the morning.
N | la parete | le pareti | | wall (inside) | Le {pareti} sono bianche. | The walls are white.
N | il pavimento | i pavimenti | | floor | Il {pavimento} è bagnato. | The floor is wet.
N | il tetto | i tetti | | roof | Il gatto è sul {tetto}. | The cat is on the roof.
N | il balcone | i balconi | | balcony | Facciamo colazione sul {balcone}. | We have breakfast on the balcony.
N | la via | le vie | | street | Abito in {via} Garibaldi. | I live on Via Garibaldi.
N | l'affitto m | gli affitti | | rent | L'{affitto} è troppo alto. | The rent is too high.
N | il gatto | i gatti | | cat | Il mio {gatto} si chiama Leo. | My cat is called Leo.
N | il cane | i cani | | dog | Porto fuori il {cane}. | I'm taking the dog out.
V | pulire | pulisco, ho pulito | | to clean | Oggi {pulisco} la casa. | Today I'm cleaning the house.
V | lavare | lavo, ho lavato | | to wash | {Lavo} i piatti. | I'm washing the dishes.
V | accendere | accendo, ho acceso | | to turn on; to light | {Accendo} la luce. | I'll turn on the light.
V | spegnere | spengo, ho spento | | to turn off | {Spegni} la TV, per favore. | Turn off the TV, please.
ADJ | comodo | – | | comfortable | Il divano è {comodo}. | The sofa is comfortable.
ADJ | pulito | – | | clean | La cucina è {pulita}. | The kitchen is clean.
ADJ | sporco | – | | dirty | Le scarpe sono {sporche}. | The shoes are dirty.
ADJ | rotto | – | | broken | Il telefono è {rotto}. | The phone is broken.
ADJ | moderno | – | | modern | Una cucina {moderna}. | A modern kitchen.
ADJ | tranquillo | – | | quiet; calm | È una zona {tranquilla}. | It's a quiet area.
ADJ | luminoso | – | | bright | Un appartamento {luminoso}. | A bright flat.
`

export const FOOD = `
# A1
N | il caffè | i caffè | | coffee; café | Prendo un {caffè}. | I'll have a coffee.
N | l'acqua f | le acque | | water | Una bottiglia d'{acqua}, per favore. | A bottle of water, please.
N | il pane | – | | bread | Compro il {pane} ogni mattina. | I buy bread every morning.
N | lo zucchero | – | | sugar | Senza {zucchero}, grazie. | No sugar, thanks.
N | l'uovo m | le uova | | egg | Vorrei due {uova}. | I'd like two eggs.
V | mangiare | mangio, ho mangiato | | to eat | {Mangiamo} insieme? | Shall we eat together?
V | bere | bevo, ho bevuto | | to drink | Cosa {bevi}? | What are you drinking?
N | la colazione | le colazioni | | breakfast | Faccio {colazione} alle sette. | I have breakfast at seven.
N | il pranzo | i pranzi | | lunch | Il {pranzo} è pronto. | Lunch is ready.
N | la cena | le cene | | dinner | Cosa c'è per {cena}? | What's for dinner?
N | il latte | – | | milk | Compro il {latte} al supermercato. | I buy milk at the supermarket.
N | il tè | i tè | | tea | Prendo un {tè} al limone. | I'll have a lemon tea.
N | il succo | i succhi | | juice | Un {succo} d'arancia, per favore. | An orange juice, please.
N | il formaggio | i formaggi | | cheese | Questo {formaggio} è buonissimo. | This cheese is delicious.
N | il burro | – | | butter | Metti il {burro} in frigo. | Put the butter in the fridge.
N | la carne | le carni | | meat | Non mangio {carne}. | I don't eat meat.
N | il pesce | i pesci | | fish | Il venerdì mangiamo {pesce}. | On Fridays we eat fish.
N | il pollo | i polli | | chicken | {Pollo} arrosto con patate. | Roast chicken with potatoes.
N | il prosciutto | i prosciutti | | ham | Un panino al {prosciutto}. | A ham sandwich.
N | l'insalata f | le insalate | | salad | Prendo un'{insalata} mista. | I'll have a mixed salad.
N | la verdura | le verdure | | vegetables | Mangio molta {verdura}. | I eat a lot of vegetables.
N | la frutta | – | | fruit | La {frutta} fa bene. | Fruit is good for you.
N | la mela | le mele | | apple | Compro un chilo di {mele}. | I'm buying a kilo of apples.
N | l'arancia f | le arance | | orange | Una spremuta d'{arancia}. | A freshly squeezed orange juice.
N | la banana | le banane | | banana | Mangio una {banana} a colazione. | I eat a banana at breakfast.
N | il pomodoro | i pomodori | | tomato | Pasta al {pomodoro}. | Pasta with tomato sauce.
N | la patata | le patate | | potato | Vorrei le {patate} fritte. | I'd like chips.
N | la cipolla | le cipolle | | onion | Taglio la {cipolla}. | I'm cutting the onion.
N | la pasta | le paste | | pasta; pastry | La {pasta} è pronta? | Is the pasta ready?
N | la pizza | le pizze | | pizza | Una {pizza} margherita, per favore. | A margherita pizza, please.
N | il riso | – | | rice | Il {riso} con le verdure. | Rice with vegetables.
N | il panino | i panini | | sandwich; roll | Mangio un {panino} a pranzo. | I eat a sandwich at lunch.
N | il gelato | i gelati | | ice cream | Un {gelato} al cioccolato. | A chocolate ice cream.
N | il cioccolato | – | | chocolate | Adoro il {cioccolato}. | I love chocolate.
N | la torta | le torte | | cake | Una {torta} per il compleanno. | A cake for the birthday.
N | il dolce | i dolci | | dessert; sweet | Prendi un {dolce}? | Will you have a dessert?
N | il biscotto | i biscotti | | biscuit | Un tè con i {biscotti}. | Tea with biscuits.
N | il cornetto | i cornetti | | croissant | Cappuccino e {cornetto}. | A cappuccino and a croissant.
N | il cappuccino | i cappuccini | | cappuccino | Due {cappuccini}, per favore. | Two cappuccinos, please.
N | l'olio m | gli oli | | oil | L'{olio} d'oliva è buono. | Olive oil is good.
N | il sale | – | | salt | Mi passi il {sale}? | Can you pass me the salt?
N | il pepe | – | | pepper | Sale e {pepe}. | Salt and pepper.
N | la bottiglia | le bottiglie | | bottle | Una {bottiglia} d'olio. | A bottle of oil.
N | il bicchiere | i bicchieri | | glass | Un {bicchiere} di latte. | A glass of milk.
N | il piatto | i piatti | | plate; dish | Il {piatto} del giorno. | The dish of the day.
N | la tazza | le tazze | | cup | Una {tazza} di tè. | A cup of tea.
N | il cucchiaio | i cucchiai | | spoon | Mi serve un {cucchiaio}. | I need a spoon.
N | la forchetta | le forchette | | fork | Manca una {forchetta}. | There's a fork missing.
N | il coltello | i coltelli | | knife | Il {coltello} è nel cassetto. | The knife is in the drawer.
N | il ristorante | i ristoranti | | restaurant | Conosci un buon {ristorante}? | Do you know a good restaurant?
N | il bar | i bar | | café; bar | Ci vediamo al {bar}. | See you at the café.
N | il cameriere | i camerieri | | waiter | Il {cameriere} porta il menù. | The waiter brings the menu.
N | il menù | i menù | | menu | Posso vedere il {menù}? | Can I see the menu?
N | il conto | i conti | | bill | Il {conto}, per favore. | The bill, please.
N | la fame | – | | hunger | Ho {fame}! | I'm hungry!
N | la sete | – | | thirst | Ho {sete}. | I'm thirsty.
V | cucinare | cucino, ho cucinato | | to cook | Stasera {cucino} io. | I'm cooking tonight.
V | cenare | ceno, ho cenato | | to have dinner | A che ora {ceniamo}? | What time are we having dinner?
V | pranzare | pranzo, ho pranzato | | to have lunch | {Pranzo} in ufficio. | I have lunch at the office.
V | ordinare | ordino, ho ordinato | | to order | Possiamo {ordinare}? | Can we order?
V | assaggiare | assaggio, ho assaggiato | | to taste; to try | {Assaggia} questa torta! | Try this cake!
ADJ | dolce | – | | sweet | Il caffè è troppo {dolce}. | The coffee is too sweet.
ADJ | fresco | – | | fresh; cool | Il pesce è {fresco}? | Is the fish fresh?
ADJ | vegetariano | – | | vegetarian | Sono {vegetariana}. | I'm vegetarian.
ADJ | frizzante | – | | sparkling | Acqua naturale o {frizzante}? | Still or sparkling water?
`

export const PHRASES = `
# A1
P | buonasera | – | | good evening | {Buonasera}, signori. | Good evening, ladies and gentlemen.
P | buonanotte | – | | good night | {Buonanotte}, a domani! | Good night, see you tomorrow!
P | arrivederci | – | | goodbye | Grazie e {arrivederci}! | Thanks and goodbye!
P | salve | – | | hello (neutral) | {Salve}, cerco il signor Bianchi. | Hello, I'm looking for Mr Bianchi.
P | prego | – | | you're welcome; please, go ahead | {Prego}, si accomodi. | Please, take a seat.
P | scusa | – | informal | sorry; excuse me | {Scusa}, che ore sono? | Excuse me, what time is it?
P | scusi | – | formal | sorry; excuse me | {Scusi}, dov'è la stazione? | Excuse me, where's the station?
P | come stai | – | informal | how are you? | Ciao Marco, {come stai}? | Hi Marco, how are you?
P | come sta | – | formal | how are you? | Buongiorno, signora, {come sta}? | Good morning, how are you?
P | sto bene | – | | I'm well | {Sto bene}, grazie, e tu? | I'm well, thanks, and you?
P | piacere | – | | pleased to meet you | {Piacere}, sono Giulia. | Pleased to meet you, I'm Giulia.
P | mi chiamo | – | | my name is | {Mi chiamo} Anna. | My name is Anna.
P | come ti chiami | – | informal | what's your name? | Ciao, {come ti chiami}? | Hi, what's your name?
P | di dove sei | – | informal | where are you from? | {Di dove sei}? Sono di Londra. | Where are you from? I'm from London.
P | sì | – | | yes | {Sì}, certo. | Yes, of course.
P | no | – | | no | {No}, grazie. | No, thanks.
P | va bene | – | | OK; that's fine | Alle otto? {Va bene}. | At eight? That's fine.
P | d'accordo | – | | agreed; OK | Sono {d'accordo} con te. | I agree with you.
P | certo | – | | of course; sure | {Certo}, nessun problema. | Of course, no problem.
P | non lo so | – | | I don't know | Mi dispiace, {non lo so}. | Sorry, I don't know.
P | mi dispiace | – | | I'm sorry | {Mi dispiace}, sono in ritardo. | I'm sorry, I'm late.
P | non capisco | – | | I don't understand | Scusi, {non capisco}. | Sorry, I don't understand.
P | può ripetere | – | formal | could you repeat that? | {Può ripetere}, per favore? | Could you repeat that, please?
P | a presto | – | | see you soon | Ciao, {a presto}! | Bye, see you soon!
P | ci vediamo | – | | see you | {Ci vediamo} domani. | See you tomorrow.
P | benvenuto | – | | welcome | {Benvenuto} in Italia! | Welcome to Italy!
P | buon appetito | – | | enjoy your meal | {Buon appetito}! | Enjoy your meal!
P | auguri | – | | best wishes; happy birthday | Tanti {auguri}! | Happy birthday!
P | buon viaggio | – | | have a good trip | {Buon viaggio}, e chiamami! | Have a good trip, and call me!
P | quanto costa | – | | how much does it cost? | {Quanto costa} questa borsa? | How much is this bag?
P | vorrei | – | | I would like | {Vorrei} un cappuccino. | I'd like a cappuccino.
P | c'è | – | | there is | {C'è} un bar qui vicino? | Is there a café near here?
P | ci sono | – | | there are | {Ci sono} tre camere. | There are three bedrooms.
P | ecco | – | | here is; here are | {Ecco} il conto. | Here's the bill.
P | aiuto | – | | help! | {Aiuto}! Chiamate un medico! | Help! Call a doctor!
P | permesso | – | | excuse me (to get past) | {Permesso}, posso passare? | Excuse me, can I get past?
`

export const GENERAL = `
# A1
X | zero | – | | zero | Fuori ci sono {zero} gradi. | It's zero degrees outside.
X | uno | – | | one | Ho {un} fratello e due sorelle. | I have one brother and two sisters.
X | due | – | | two | Vorrei {due} biglietti. | I'd like two tickets.
X | tre | – | | three | Ho {tre} sorelle. | I have three sisters.
X | quattro | – | | four | Siamo in {quattro}. | There are four of us.
X | cinque | – | | five | Lavoro {cinque} giorni a settimana. | I work five days a week.
X | sei | – | | six | Il treno parte alle {sei}. | The train leaves at six.
X | sette | – | | seven | Una settimana ha {sette} giorni. | A week has seven days.
X | otto | – | | eight | La lezione comincia alle {otto}. | The lesson starts at eight.
X | nove | – | | nine | Lavoro dalle {nove} alle cinque. | I work from nine to five.
X | dieci | – | | ten | Costa {dieci} euro. | It costs ten euros.
X | undici | – | | eleven | Mia figlia ha {undici} anni. | My daughter is eleven.
X | dodici | – | | twelve | Un anno ha {dodici} mesi. | A year has twelve months.
X | tredici | – | | thirteen | Abito al numero {tredici}. | I live at number thirteen.
X | quattordici | – | | fourteen | Ci sono {quattordici} studenti in classe. | There are fourteen students in the class.
X | quindici | – | | fifteen | Arrivo tra {quindici} minuti. | I'll arrive in fifteen minutes.
X | sedici | – | | sixteen | Mio fratello ha {sedici} anni. | My brother is sixteen.
X | diciassette | – | | seventeen | L'autobus {diciassette} va in centro. | The number 17 bus goes to the centre.
X | diciotto | – | | eighteen | In Italia si vota a {diciotto} anni. | In Italy you vote at eighteen.
X | diciannove | – | | nineteen | La camera {diciannove} è libera. | Room nineteen is free.
X | venti | – | | twenty | Aspetto da {venti} minuti. | I've been waiting for twenty minutes.
X | trenta | – | | thirty | Settembre ha {trenta} giorni. | September has thirty days.
X | quaranta | – | | forty | Il viaggio dura {quaranta} minuti. | The journey takes forty minutes.
X | cinquanta | – | | fifty | Ho speso {cinquanta} euro. | I spent fifty euros.
X | sessanta | – | | sixty | Un'ora ha {sessanta} minuti. | An hour has sixty minutes.
X | settanta | – | | seventy | Mio nonno ha {settanta} anni. | My grandfather is seventy.
X | ottanta | – | | eighty | Il libro ha {ottanta} pagine. | The book has eighty pages.
X | novanta | – | | ninety | La partita dura {novanta} minuti. | The match lasts ninety minutes.
X | cento | – | | a hundred | Costa {cento} euro. | It costs a hundred euros.
X | mille | – | | a thousand | La città ha {mille} anni. | The town is a thousand years old.
ADJ | primo | – | | first | Abito al {primo} piano. | I live on the first floor.
ADJ | secondo | – | | second | È la {seconda} porta a destra. | It's the second door on the right.
ADJ | terzo | – | | third | Il {terzo} giorno siamo andati a Firenze. | On the third day we went to Florence.
ADJ | ultimo | – | | last | È l'{ultimo} treno. | It's the last train.
N | il colore | i colori | | colour | Di che {colore} è? | What colour is it?
ADJ | rosso | – | | red | Ho una macchina {rossa}. | I have a red car.
ADJ | blu | – | | blue | Il mare è {blu}. | The sea is blue.
ADJ | azzurro | – | | light blue; sky blue | Il cielo è {azzurro}. | The sky is blue.
ADJ | giallo | – | | yellow | Mi piace il vestito {giallo}. | I like the yellow dress.
ADJ | verde | – | | green | Ha gli occhi {verdi}. | She has green eyes.
ADJ | nero | – | | black | Porto sempre le scarpe {nere}. | I always wear black shoes.
ADJ | bianco | – | | white | La casa è {bianca}. | The house is white.
ADJ | grigio | – | | grey | Oggi il cielo è {grigio}. | The sky is grey today.
ADJ | marrone | – | | brown | Ho una borsa {marrone}. | I have a brown bag.
ADJ | rosa | – | | pink | Una maglietta {rosa}. | A pink T-shirt.
ADJ | arancione | – | | orange | Le sedie sono {arancioni}. | The chairs are orange.
ADJ | buono | – | | good | Questa pizza è molto {buona}. | This pizza is very good.
ADJ | cattivo | – | | bad; naughty | Che odore {cattivo}! | What a bad smell!
ADJ | bello | – | | beautiful; nice | Che {bella} giornata! | What a lovely day!
ADJ | brutto | – | | ugly; bad | Oggi fa {brutto} tempo. | The weather is bad today.
ADJ | nuovo | – | | new | Ho un telefono {nuovo}. | I have a new phone.
ADJ | vecchio | – | | old | La mia macchina è {vecchia}. | My car is old.
ADJ | giovane | – | | young | Il professore è molto {giovane}. | The teacher is very young.
ADJ | lungo | – | | long | È un viaggio {lungo}. | It's a long journey.
ADJ | corto | – | | short | Ha i capelli {corti}. | She has short hair.
ADJ | alto | – | | tall; high | Mio fratello è {alto}. | My brother is tall.
ADJ | basso | – | | short; low | Il tavolo è troppo {basso}. | The table is too low.
ADJ | caldo | – | | hot; warm | Vorrei un tè {caldo}. | I'd like a hot tea.
ADJ | freddo | – | | cold | L'acqua è {fredda}. | The water is cold.
ADJ | facile | – | | easy | L'esercizio è {facile}. | The exercise is easy.
ADJ | difficile | – | | difficult | L'italiano non è {difficile}! | Italian isn't difficult!
ADJ | caro | – | | expensive; dear | Questo ristorante è {caro}. | This restaurant is expensive.
ADJ | economico | – | | cheap | Cerco un albergo {economico}. | I'm looking for a cheap hotel.
ADJ | aperto | – | | open | La farmacia è {aperta}? | Is the chemist's open?
ADJ | chiuso | – | | closed | La banca è {chiusa} la domenica. | The bank is closed on Sundays.
ADJ | pieno | – | | full | Il treno è {pieno}. | The train is full.
ADJ | vuoto | – | | empty | La bottiglia è {vuota}. | The bottle is empty.
ADJ | importante | – | | important | È una riunione {importante}. | It's an important meeting.
ADJ | libero | – | | free; vacant | Sei {libero} stasera? | Are you free tonight?
ADJ | occupato | – | | busy; taken | Scusi, è {occupato} questo posto? | Excuse me, is this seat taken?
ADJ | pronto | – | | ready; hello (on the phone) | La cena è {pronta}! | Dinner's ready!
ADJ | giusto | – | | right; correct; fair | Hai ragione, è {giusto}. | You're right, that's correct.
ADJ | sbagliato | – | | wrong | Ho preso il treno {sbagliato}. | I took the wrong train.
ADJ | diverso | – | | different | Siamo molto {diversi}. | We're very different.
ADJ | stesso | – | | same | Abitiamo nella {stessa} via. | We live in the same street.
ADJ | altro | – | | other; another | Vuoi un {altro} caffè? | Do you want another coffee?
ADJ | tutto | – | | all; whole | Ho mangiato {tutta} la pizza. | I ate the whole pizza.
ADJ | vero | – | | true; real | È una storia {vera}. | It's a true story.
ADV | molto | – | | very; a lot | Mi piace {molto}. | I like it a lot.
ADV | poco | – | | little; not much | Mangio {poco} la sera. | I don't eat much in the evening.
ADV | troppo | – | | too; too much | È {troppo} caro. | It's too expensive.
ADV | abbastanza | – | | quite; enough | Parlo {abbastanza} bene. | I speak quite well.
ADV | un po' | – | | a bit | Aspetta {un po'}. | Wait a bit.
ADV | più | – | | more | Roma è {più} grande di Firenze. | Rome is bigger than Florence.
ADV | meno | – | | less | Questo costa {meno}. | This one costs less.
ADV | bene | – | | well | Parli {bene} l'italiano! | You speak Italian well!
ADV | male | – | | badly | Ho dormito {male}. | I slept badly.
ADV | anche | – | | also; too | Vengo {anche} io. | I'm coming too.
ADV | solo | – | | only | Ho {solo} dieci euro. | I only have ten euros.
ADV | insieme | – | | together | Andiamo {insieme}? | Shall we go together?
ADV | qui | – | | here | Abito {qui}. | I live here.
ADV | lì | – | | there | Il bagno è {lì}. | The bathroom is there.
ADV | vicino | – | | near; nearby | La stazione è {vicino}. | The station is nearby.
ADV | lontano | – | | far | Casa mia è {lontano}. | My house is far away.
ADV | fuori | – | | outside | Aspetto {fuori}. | I'll wait outside.
ADV | dentro | – | | inside | Andiamo {dentro}, fa freddo. | Let's go inside, it's cold.
ADV | forse | – | | perhaps; maybe | {Forse} vengo domani. | Maybe I'll come tomorrow.
ADV | purtroppo | – | | unfortunately | {Purtroppo} non posso venire. | Unfortunately I can't come.
ADV | piano | – | | slowly; quietly | Parla più {piano}, per favore. | Speak more slowly, please.
ADV | così | – | | like this; so | Si scrive {così}. | It's written like this.
ADV | davvero | – | | really | {Davvero}? Non ci credo! | Really? I don't believe it!
X | chi | – | | who | {Chi} è? | Who is it?
X | che cosa | – | | what | {Che cosa} vuoi mangiare? | What do you want to eat?
ADV | dove | – | | where | {Dove} abiti? | Where do you live?
ADV | quando | – | | when | {Quando} parti? | When are you leaving?
ADV | come | – | | how; like | {Come} si dice "apple" in italiano? | How do you say "apple" in Italian?
ADV | perché | – | | why; because | {Perché} studi l'italiano? | Why are you studying Italian?
X | quanto | – | | how much; how many | {Quanti} fratelli hai? | How many brothers and sisters do you have?
X | quale | – | | which | {Quale} preferisci? | Which do you prefer?
PREP | di | – | | of; from | Sono {di} Milano. | I'm from Milan.
PREP | a | – | | to; at; in (towns) | Vado {a} Napoli in treno. | I'm going to Naples by train.
PREP | da | – | | from; at (someone's place) | Il treno arriva {da} Napoli. | The train arrives from Naples.
PREP | in | – | | in; to (countries, rooms) | Abito {in} Inghilterra. | I live in England.
PREP | con | – | | with | Vivo {con} mia sorella. | I live with my sister.
PREP | su | – | | on | Il gatto dorme {su} una sedia. | The cat is sleeping on a chair.
PREP | per | – | | for | Questo è {per} te. | This is for you.
PREP | tra | – | | between; in (time) | Arrivo {tra} un'ora. | I'll be there in an hour.
PREP | senza | – | | without | Esco {senza} ombrello. | I'm going out without an umbrella.
PREP | sopra | – | | above; on top of | La lampada è {sopra} il tavolo. | The lamp is above the table.
PREP | sotto | – | | under | Il gatto è {sotto} il letto. | The cat is under the bed.
PREP | davanti a | – | | in front of | Ti aspetto {davanti a} casa. | I'll wait for you in front of the house.
PREP | dietro | – | | behind | Il giardino è {dietro} la casa. | The garden is behind the house.
CONG | e | – | | and | Io {e} te. | You and me.
CONG | o | – | | or | Tè {o} caffè? | Tea or coffee?
CONG | ma | – | | but | È bello {ma} caro. | It's nice but expensive.
CONG | se | – | | if | {Se} piove, resto a casa. | If it rains, I'll stay at home.
CONG | però | – | | but; however | È tardi, {però} non sono stanca. | It's late, but I'm not tired.
CONG | allora | – | | so; then | {Allora}, cosa facciamo? | So, what shall we do?
CONG | quindi | – | | so; therefore | Piove, {quindi} prendo l'ombrello. | It's raining, so I'll take the umbrella.
V | potere | posso, ho potuto | | can; to be able to | {Posso} entrare? | May I come in?
V | volere | voglio, ho voluto | | to want | {Voglio} imparare l'italiano. | I want to learn Italian.
V | dovere | devo, ho dovuto | | must; to have to | {Devo} lavorare domani. | I have to work tomorrow.
V | sapere | so, ho saputo | | to know (a fact); can (a skill) | Non {so} nuotare. | I can't swim.
V | conoscere | conosco, ho conosciuto | | to know (a person, a place) | {Conosci} Marco? | Do you know Marco?
V | dire | dico, ho detto | | to say; to tell | Cosa {dici}? | What are you saying?
V | dare | do, ho dato | | to give | Mi {dai} il tuo numero? | Will you give me your number?
V | vedere | vedo, ho visto | | to see | Non {vedo} bene senza occhiali. | I can't see well without glasses.
V | sentire | sento, ho sentito | | to hear; to feel | Non ti {sento}, puoi parlare più forte? | I can't hear you, can you speak up?
V | prendere | prendo, ho preso | | to take; to have (food, drink) | {Prendo} l'autobus. | I take the bus.
V | mettere | metto, ho messo | | to put; to put on | {Metto} il latte in frigo. | I put the milk in the fridge.
V | cercare | cerco, ho cercato | | to look for | {Cerco} le chiavi. | I'm looking for my keys.
V | trovare | trovo, ho trovato | | to find | Non {trovo} il telefono. | I can't find my phone.
V | aspettare | aspetto, ho aspettato | | to wait (for) | Ti {aspetto} qui. | I'll wait for you here.
V | chiamare | chiamo, ho chiamato | | to call | Ti {chiamo} stasera. | I'll call you tonight.
V | chiedere | chiedo, ho chiesto | | to ask | Posso {chiedere} una cosa? | Can I ask something?
V | rispondere | rispondo, ho risposto | | to answer | Non {risponde} al telefono. | She isn't answering the phone.
V | aprire | apro, ho aperto | | to open | {Apro} la finestra? | Shall I open the window?
V | chiudere | chiudo, ho chiuso | | to close | {Chiudi} la porta, per favore. | Close the door, please.
V | capire | capisco, ho capito | | to understand | Hai {capito}? | Did you understand?
V | piacere | piaccio, sono piaciuto | mi piace + thing | to please (mi piace: I like) | Mi {piace} il gelato. | I like ice cream.
V | pensare | penso, ho pensato | | to think | {Penso} di sì. | I think so.
V | usare | uso, ho usato | | to use | {Uso} il computer ogni giorno. | I use the computer every day.
V | aiutare | aiuto, ho aiutato | | to help | Mi {aiuti}, per favore? | Can you help me, please?
V | portare | porto, ho portato | | to bring; to take; to wear | {Porto} i bambini a scuola. | I take the children to school.
V | entrare | entro, sono entrato | | to come in; to go in | {Entriamo} nel negozio. | Let's go into the shop.
V | arrivare | arrivo, sono arrivato | | to arrive | Il treno {arriva} alle tre. | The train arrives at three.
V | partire | parto, sono partito | | to leave; to depart | {Parto} domani per Roma. | I'm leaving for Rome tomorrow.
V | scrivere | scrivo, ho scritto | | to write | {Scrivo} un messaggio a Luca. | I'm writing a message to Luca.
V | leggere | leggo, ho letto | | to read | {Leggo} il giornale. | I read the newspaper.
V | ascoltare | ascolto, ho ascoltato | | to listen (to) | {Ascolto} la radio in macchina. | I listen to the radio in the car.
V | guardare | guardo, ho guardato | | to watch; to look at | {Guardiamo} un film? | Shall we watch a film?
V | lasciare | lascio, ho lasciato | | to leave (something) | Ho {lasciato} l'ombrello al bar. | I left my umbrella at the café.
V | perdere | perdo, ho perso | | to lose; to miss (a train) | Ho {perso} il treno. | I missed the train.
N | la cosa | le cose | | thing | Ho tante {cose} da fare. | I have lots of things to do.
N | la persona | le persone | | person | È una {persona} gentile. | She's a kind person.
N | il nome | i nomi | | name | Qual è il tuo {nome}? | What's your name?
N | il cognome | i cognomi | | surname | Come si scrive il {cognome}? | How do you spell your surname?
N | il numero | i numeri | | number | Qual è il tuo {numero} di telefono? | What's your phone number?
N | l'indirizzo m | gli indirizzi | | address | Qual è il tuo {indirizzo}? | What's your address?
N | la parola | le parole | | word | Non conosco questa {parola}. | I don't know this word.
N | la lingua | le lingue | | language; tongue | Parli altre {lingue}? | Do you speak other languages?
N | il problema | i problemi | | problem | Nessun {problema}! | No problem!
N | la domanda | le domande | | question | Posso fare una {domanda}? | Can I ask a question?
N | la risposta | le risposte | | answer | La {risposta} è giusta. | The answer is right.
N | la parte | le parti | | part | La prima {parte} del film è lenta. | The first part of the film is slow.
X | io | – | | I | {Io} sono Anna. | I'm Anna.
X | tu | – | | you (informal) | E {tu}? | And you?
X | lui | – | | he | {Lui} è mio marito. | He's my husband.
X | lei | – | | she; you (formal) | {Lei} lavora qui? | Do you work here?
X | noi | – | | we | {Noi} abitiamo a Londra. | We live in London.
X | voi | – | | you (plural) | {Voi} di dove siete? | Where are you all from?
X | loro | – | | they | {Loro} sono i miei vicini. | They're my neighbours.
ADJ | questo | – | | this | Quanto costa {questo} libro? | How much is this book?
ADJ | quello | – | | that | Mi piace {quella} giacca. | I like that jacket.
ADJ | mio | – | | my; mine | Questa è {mia} madre. | This is my mother.
ADJ | tuo | – | | your (informal) | Come si chiama {tuo} fratello? | What's your brother's name?
ADJ | suo | – | | his; her; your (formal) | La {sua} macchina è nuova. | His car is new.
ADJ | nostro | – | | our | La {nostra} casa è piccola. | Our house is small.
ADJ | ogni | – | | every; each | Vado in palestra {ogni} giorno. | I go to the gym every day.
ADJ | qualche | – | | some; a few | Ho {qualche} domanda. | I have a few questions.
X | niente | – | | nothing | Non ho mangiato {niente}. | I haven't eaten anything.
X | qualcosa | – | | something; anything | Vuoi {qualcosa} da bere? | Do you want something to drink?
X | tutti | – | | everyone | Ciao a {tutti}! | Hi everyone!
X | nessuno | – | | nobody | Non c'è {nessuno}. | There's nobody here.
`
