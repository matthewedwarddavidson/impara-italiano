import type { GrammarTopic } from '../types'
import { articoliDeterminativi } from './a1'
import { aggettivi, articoliIndeterminativi, genereEPlurale, numeriEOre, possessivi } from './a1-nouns'
import {
  ceECiSono,
  domandeENegazione,
  essereEAvere,
  preposizioniSemplici,
  presenteIrregolare,
  presenteRegolare,
} from './a1-verbs'
import { ciENe, comparativi, piacere, preposizioniArticolate, pronomiDiretti, pronomiIndiretti, verbiRiflessivi } from './a2-forms'
import { futuroSemplice, imperfetto, passatoProssimo, stareGerundio } from './a2-tenses'
import { imperativo } from './a2-imperativo'
import { condizionale, congiuntivoPassato, congiuntivoPresente, periodoIpotetico } from './b1-moods'
import { passatoRemoto, pronomiCombinati, pronomiRelativi, siImpersonale, trapassatoProssimo } from './b1-forms'

/** Topics in teaching order within each level. */
export const GRAMMAR_TOPICS: GrammarTopic[] = [
  articoliDeterminativi,
  articoliIndeterminativi,
  genereEPlurale,
  essereEAvere,
  aggettivi,
  ceECiSono,
  presenteRegolare,
  domandeENegazione,
  presenteIrregolare,
  preposizioniSemplici,
  possessivi,
  numeriEOre,
  preposizioniArticolate,
  passatoProssimo,
  verbiRiflessivi,
  pronomiDiretti,
  piacere,
  pronomiIndiretti,
  imperfetto,
  stareGerundio,
  comparativi,
  futuroSemplice,
  ciENe,
  imperativo,
  trapassatoProssimo,
  condizionale,
  pronomiCombinati,
  pronomiRelativi,
  congiuntivoPresente,
  congiuntivoPassato,
  periodoIpotetico,
  siImpersonale,
  passatoRemoto,
]

export function topicById(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((topic) => topic.id === id)
}
