/** Linking words the writing page counts, single words and set phrases. */
export const CONNECTORS = [
  'perché',
  'quando',
  'se',
  'ma',
  'però',
  'quindi',
  'allora',
  'anche',
  'invece',
  'mentre',
  'poi',
  'dopo',
  'prima',
  'infatti',
  'comunque',
  'inoltre',
  'siccome',
  'dato che',
  'anche se',
  'benché',
  'sebbene',
  'affinché',
  'purché',
  'nonostante',
  'tuttavia',
  'dunque',
  'cioè',
  'per esempio',
  'da un lato',
  "dall'altro",
  "d'altra parte",
  'in conclusione',
]

export function countWords(text: string): number {
  return text.split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word)).length
}

/**
 * Connectors that appear in the text as whole words, so "se" isn't found inside "sera". Longer
 * phrases are matched first and taken out, so "anche se" doesn't also count as "anche" and "se".
 */
export function connectorsUsed(text: string): string[] {
  let remaining = text.toLowerCase().replace(/[’‘]/g, "'")
  const found = new Set<string>()
  for (const connector of [...CONNECTORS].sort((a, b) => b.length - a.length)) {
    const pattern = new RegExp(`(^|[^\\p{L}'])${connector}(?![\\p{L}])`, 'gu')
    if (pattern.test(remaining)) {
      found.add(connector)
      remaining = remaining.replace(pattern, '$1 ')
    }
  }
  return CONNECTORS.filter((connector) => found.has(connector))
}
