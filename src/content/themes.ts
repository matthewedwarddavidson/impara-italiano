import type { Theme, ThemeId } from './types'

export const THEMES: Theme[] = [
  { id: 'daily-life', title: 'Vita quotidiana', english: 'Daily life' },
  { id: 'home', title: 'La casa', english: 'Home and housing' },
  { id: 'work', title: 'Lavoro', english: 'Work and careers' },
  { id: 'health', title: 'Salute', english: 'Health' },
  { id: 'travel', title: 'Viaggi e trasporti', english: 'Travel and transport' },
  { id: 'media', title: 'Media e tecnologia', english: 'Media and technology' },
  { id: 'environment', title: 'Ambiente e natura', english: 'Environment and nature' },
  { id: 'society', title: 'Società e politica', english: 'Society and politics' },
  { id: 'education', title: 'Scuola e studio', english: 'Education and learning' },
  { id: 'free-time', title: 'Tempo libero e cultura', english: 'Free time and culture' },
  { id: 'relationships', title: 'Relazioni e sentimenti', english: 'Relationships and feelings' },
  { id: 'shopping', title: 'Acquisti e soldi', english: 'Shopping and money' },
  { id: 'food', title: 'Cibo e bevande', english: 'Food and drink' },
  { id: 'services', title: 'Uffici e servizi', english: 'Offices and services' },
  { id: 'general', title: 'Parole generali', english: 'General words for any topic' },
  { id: 'phrases', title: 'Espressioni utili', english: 'Useful phrases and connectors' },
  { id: 'own', title: 'Le mie parole', english: 'My own words' },
]

export function themeById(id: ThemeId): Theme {
  return THEMES.find((theme) => theme.id === id)!
}
