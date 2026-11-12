# Voice candidates (#20)

The recorded voices are cloned from LibriVox readers. LibriVox recordings are public domain. Below is every reader who read an Italian LibriVox book on their own (listed 2026-11-11). Choose four readers by ear, two women and two men, and give them the app's voice names:

| App voice | Reads | File |
|---|---|---|
| giulia | sentences (main voice) | `scripts/voices/giulia.wav` |
| marco | single words and short phrases | `scripts/voices/marco.wav` |
| chiara | second female speaker in dialogues | `scripts/voices/chiara.wav` |
| luca | second male speaker in dialogues | `scripts/voices/luca.wav` |

Prose readings make better models than verse: verse is read slowly and with drama.

| Reader | Book | Listen (one chapter) |
|---|---|---|
| Claudia Caldi | Ricordi di Londra (De Amicis) | [mp3](https://www.archive.org/download/ricordi_di_londra_2210_librivox/ricordidilondra_06_deamicis_64kb.mp3) |
| Simona | Le avventure di Pinocchio (Collodi) | [mp3](https://www.archive.org/download/avventure_pinocchio_librivox/avventurepinocchio_36_collodi_64kb.mp3) |
| Francesca Roma | Storia di una capinera (Verga) | [mp3](https://www.archive.org/download/storia_di_una_capinera_2104_librivox/storiadiunacapinera_06_verga_64kb.mp3) |
| Lisa Caputo | I Malavoglia (Verga) | [mp3](https://www.archive.org/download/i_malavoglia_1303_librivox/imalavoglia_10_verga_64kb.mp3) |
| Enrica Giampieretti | Canne al vento (Deledda) | [mp3](https://www.archive.org/download/canne_al_vento_1609_librivox/cannealvento_02_deledda_64kb.mp3) |
| Marilena | Il giro del mondo in ottanta giorni (Verne) | [book page](https://librivox.org/search?q=giro%20del%20mondo%20in%20ottanta%20giorni) |
| Mary J | Vita Nuova (Dante), verse and prose | [mp3](https://www.archive.org/download/vitanuova_1405_librivox/vitanuova_05_alighieri_64kb.mp3) |
| Fabiola | Gl'Inni sacri (Manzoni), verse | [mp3](https://www.archive.org/download/glinni_sacri_1701_librivox/innisacri_4_manzoni_64kb.mp3) |
| Paolo Fedi | Favole di La Fontaine | [mp3](https://www.archive.org/download/favole_di_la_fontaine_01_librivox/favole_14_libro01_lafontaine_64kb.mp3) |
| Riccardo Fasol | La contessa di Karolystria (Ghislanzoni) | [mp3](https://www.archive.org/download/karolystria_r_librivox/la_contessa_di_karolystria_7_ghislanzoni_64kb.mp3) |
| Filippo Gioachin | Cuore (De Amicis) | [mp3](https://www.archive.org/download/cuore_fg_librivox/cuore_02_deamicis_64kb.mp3) |
| Davide Lequile | Ricordi di Parigi (De Amicis) | [mp3](https://www.archive.org/download/ricordi_parigi_dl_librivox/ricordi_di_parigi_08_deamicis_64kb.mp3) |
| Renzo Clerico | Il Principe (Machiavelli) | [mp3](https://www.archive.org/download/il_principe_1711_librivox/ilprincipe_03_machiavelli_64kb.mp3) |
| Davide | Ultime lettere di Jacopo Ortis (Foscolo) | [mp3](https://www.archive.org/download/ultime_lettere_jacopo_ortis_2007_librivox/ultimeletteredijacopoortis_7_foscolo_64kb.mp3) |
| paolo67 | L'undecimo comandamento (Barrili) | [mp3](https://www.archive.org/download/undecimo_comandamento_1607_librivox/lundecimocomandamento_20_barrili_64kb.mp3) |
| Sergio Baldelli | Myricae (Pascoli), verse | [mp3](https://www.archive.org/download/myricae_sb_librivox1/myricae_28_pascoli_64kb.mp3) |
| Pier | Il Paradiso (Dante), verse | [mp3](https://www.archive.org/download/il_paradiso_2107_librivox/divinacommediailparadiso_30_alighieri_64kb.mp3) |

Once you have chosen, note a stretch of 10 to 15 seconds of clean, even reading in each chapter (no music, no "LibriVox recording" intro), then cut it with `scripts/cut_voice.py` (see README, "Recorded voices").

## Chosen (2026-11-12)

| App voice | Reader | Chapter |
|---|---|---|
| giulia | Enrica Giampieretti | Canne al vento, ch. 2 |
| chiara | Claudia Caldi | Ricordi di Londra, ch. 6 |
| marco | Paolo Fedi | Favole di La Fontaine, book 1, fable 14 |
| luca | Sergio Baldelli | Myricae, poem 28 |

Each reference is the 12 s with the least silence between 40 s and 160 s of the linked chapter, picked automatically and checked by ear through Chatterbox clones.
