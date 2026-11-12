# Impara italiano 🇮🇹

An Italian course that runs in the browser, built on the same design as [Deutsch lernen](https://github.com/matthewedwarddavidson/deutsch-lernen): typed recall with spaced repetition, grammar explained in English, graded reading and listening, and writing practice. No streaks, no AI tutor, nothing to pay for.

Work in progress. The plan is in [docs/roadmap.md](docs/roadmap.md); work is tracked as GitHub issues, grouped into stages by milestone.

### [Open the app →](https://matthewedwarddavidson.github.io/impara-italiano/)

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # unit and content tests (Vitest)
npm run build      # type-check and production build into dist/
```

Word lists live in `src/content/words` (format in `src/content/parseWords.ts`); nouns are written with their article, and a content test checks each article against the rules in `src/lib/articles.ts`.

Your progress stays in your browser, unless you sign in with Google to sync it between devices.

## Pronunciation

Word cards show each word's pronunciation in IPA, taken from [Wiktionary](https://en.wiktionary.org) (CC BY-SA 4.0) via [kaikki.org](https://kaikki.org). `src/content/ipa.json` is derived from it and shares that licence. After adding words, download kaikki.org's Italian file (about 800 MB) and run `npx tsx scripts/build-ipa.ts <path to kaikki.org-dictionary-Italian.jsonl>`. Multi-word phrases have no IPA: joining the words' transcriptions would miss the doubled consonants between words (a destra is [adˈdɛstra]).

## Recorded voices

Built-in content is recorded offline with [Chatterbox Multilingual](https://github.com/resemble-ai/chatterbox) (MIT) into `public/audio/` as AAC, as in Deutsch lernen. Giulia, Chiara, Marco and Luca are cloned from short excerpts of public-domain [LibriVox](https://librivox.org) readings in `scripts/voices/`; [docs/voice-candidates.md](docs/voice-candidates.md) lists the readers to choose from. Every sentence is transcribed with [Whisper](https://github.com/SYSTRAN/faster-whisper) (MIT) and regenerated if the words don't match. After five failures it uses [Piper](https://github.com/rhasspy/piper) (voices Paola and Riccardo) instead, listing the sentence in `audio-build/fallbacks.txt`. Until a sentence is recorded, the app uses the device's Italian voice, and stays silent if there isn't one.

Needs macOS with Apple silicon, `afconvert` and Python 3.11. If Deutsch lernen is set up on the same Mac, reuse its environment and models: `ln -s ../deutsch-lernen/.venv-tts .venv-tts` and copy `audio-build/chatterbox` and `audio-build/whisper-small` across. Otherwise:

```bash
python3.11 -m venv .venv-tts && .venv-tts/bin/pip install chatterbox-tts faster-whisper piper-tts "setuptools<81"  # once
mkdir -p audio-build/chatterbox audio-build/whisper-small && cd audio-build                              # once
for f in ve.pt t3_mtl23ls_v2.safetensors s3gen.pt grapheme_mtl_merged_expanded_v1.json conds.pt Cangjie5_TC.json; do
  curl -L -o chatterbox/$f https://huggingface.co/ResembleAI/chatterbox/resolve/main/$f; done
for f in config.json model.bin tokenizer.json vocabulary.txt; do
  curl -L -o whisper-small/$f https://huggingface.co/Systran/faster-whisper-small/resolve/main/$f; done
cd ..
```

Then, each time:

```bash
cd audio-build && for v in it_IT-paola-medium it_IT-riccardo-x_low; do ../.venv-tts/bin/python -m piper.download_voices $v; done && cd ..  # once
.venv-tts/bin/python scripts/cut_voice.py <chapter mp3 url> <start seconds> 12 giulia   # once per voice: giulia, chiara, marco, luca
npx tsx scripts/collect-speech.ts > audio-build/requests.json
scripts/record_all.sh
```

Only missing sentences are recorded. Current content is about 3,500 clips; it takes about 10 hours, at low priority with memory held under about 11 GB so the Mac stays usable. Commit `public/audio` when it finishes.
