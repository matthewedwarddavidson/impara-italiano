interface Source {
  name: string
  url: string
  level: string
  description: string
}

const READING: Source[] = [
  {
    name: 'Focus Junior',
    url: 'https://www.focusjunior.it',
    level: 'B1',
    description: 'Science, nature and news for children: short articles in clear, simple Italian.',
  },
  {
    name: 'Il Post',
    url: 'https://www.ilpost.it',
    level: 'B2',
    description: 'Free Italian news that explains the background to each story.',
  },
]

const LISTENING: Source[] = [
  {
    name: 'Easy Italian',
    url: 'https://www.youtube.com/@EasyItalian',
    level: 'A2–B2',
    description: 'Street interviews with Italian and English subtitles. Real speech, many voices.',
  },
  {
    name: 'Podcast Italiano',
    url: 'https://www.podcastitaliano.com',
    level: 'B1–C1',
    description: 'Episodes on Italian language and culture, with transcripts.',
  },
  {
    name: 'Italiano Automatico',
    url: 'https://www.italianoautomatico.com',
    level: 'B1–B2',
    description: 'Videos and podcasts in natural Italian, aimed at learners.',
  },
  {
    name: 'RaiPlay Sound',
    url: 'https://www.raiplaysound.it',
    level: 'B2+',
    description: 'Italian public radio and podcasts: news, culture and talk at native speed.',
  },
]

/**
 * Real Italian beyond the app. The app can't hold enough text and audio for B2 and C1,
 * and human voices with natural speed and hesitations matter for listening.
 */
export function OutsideInput({ kind }: { kind: 'reading' | 'listening' }) {
  const sources = kind === 'reading' ? READING : LISTENING
  return (
    <div className="section">
      <div className="section-title">Beyond the app</div>
      <p className="small muted">
        {kind === 'reading'
          ? 'From B1, most new words come from reading a lot. These are free and pitched at learners or young readers.'
          : 'From B1, listen to real people too: natural speed, accents and hesitations that recorded voices lack.'}
      </p>
      <div className="grid two">
        {sources.map((source) => (
          <a key={source.name} className="card card-link" href={source.url} target="_blank" rel="noreferrer">
            <div className="row between">
              <h3 style={{ margin: 0 }}>{source.name} ↗</h3>
              <span className="pill">{source.level}</span>
            </div>
            <div className="small muted">{source.description}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
