/**
 * Writes src/content/ipa.json: the IPA transcription of each built-in word, from Wiktionary
 * (CC BY-SA 4.0) as extracted by kaikki.org. Matches the headword and its part of speech, so
 * homographs get the right reading, and falls back to any part of speech.
 *
 * Usage: download https://kaikki.org/dictionary/Italian/kaikki.org-dictionary-Italian.jsonl (about 800 MB), then
 *   npx tsx scripts/build-ipa.ts <path to the .jsonl>
 */
import { createReadStream, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import type { WordKind } from '../src/content/types'
import { BUILT_IN_WORDS } from '../src/content/words'

/** kaikki.org part-of-speech names for each word kind. */
const PARTS_OF_SPEECH: Record<WordKind, string[]> = {
  noun: ['noun'],
  verb: ['verb'],
  adjective: ['adj'],
  adverb: ['adv'],
  phrase: ['phrase', 'intj'],
  preposition: ['prep', 'prep_phrase'],
  conjunction: ['conj'],
  other: ['num', 'pron', 'det', 'article', 'name'],
}

interface KaikkiEntry {
  word: string
  pos: string
  sounds?: { ipa?: string }[]
}

/** The first phonemic (/…/) transcription, or the first of any kind. */
function bestIpa(entry: KaikkiEntry): string | undefined {
  const transcriptions = (entry.sounds ?? []).map((sound) => sound.ipa).filter((ipa): ipa is string => !!ipa)
  return transcriptions.find((ipa) => ipa.startsWith('/')) ?? transcriptions[0]
}

async function main() {
  const dumpPath = process.argv[2]
  if (!dumpPath) throw new Error('Pass the path to the kaikki.org Italian .jsonl file.')
  const headwords = new Set(BUILT_IN_WORDS.map((word) => word.italian))
  // Headword → part of speech → IPA, keeping the first entry seen for each.
  const found = new Map<string, Map<string, string>>()

  const lines = createInterface({ input: createReadStream(dumpPath), crlfDelay: Infinity })
  for await (const line of lines) {
    if (!line.includes('"ipa"')) continue
    const entry = JSON.parse(line) as KaikkiEntry
    if (!headwords.has(entry.word)) continue
    const ipa = bestIpa(entry)
    if (!ipa) continue
    const byPart = found.get(entry.word) ?? new Map<string, string>()
    if (!byPart.has(entry.pos)) byPart.set(entry.pos, ipa)
    found.set(entry.word, byPart)
  }

  const ipaById: Record<string, string> = {}
  for (const word of BUILT_IN_WORDS) {
    const byPart = found.get(word.italian)
    if (!byPart) continue
    const matching = PARTS_OF_SPEECH[word.kind].map((part) => byPart.get(part)).find(Boolean)
    ipaById[word.id] = matching ?? [...byPart.values()][0]
  }

  const sorted = Object.fromEntries(Object.entries(ipaById).sort(([a], [b]) => a.localeCompare(b)))
  writeFileSync('src/content/ipa.json', `${JSON.stringify(sorted, null, 1)}\n`)
  console.log(`${Object.keys(sorted).length} of ${BUILT_IN_WORDS.length} words have IPA`)
}

main()
