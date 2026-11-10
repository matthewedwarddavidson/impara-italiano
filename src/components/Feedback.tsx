import type { ReactNode } from 'react'
import type { Verdict } from '../lib/check'

const TITLES: Record<Verdict, string> = {
  correct: 'Giusto',
  almost: 'Quasi giusto',
  wrong: 'Non proprio',
}

export function Feedback({ verdict, children }: { verdict: Verdict; children?: ReactNode }) {
  return (
    <div className={`feedback ${verdict}`} role="status">
      <div className="feedback-title">{TITLES[verdict]}</div>
      {children}
    </div>
  )
}
