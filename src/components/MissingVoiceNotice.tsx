import { useSyncExternalStore } from 'react'
import { dismissMissingVoice, italianVoiceIsMissing, onItalianVoiceMissingChange } from '../lib/speech'

/** How to add an Italian voice on each kind of device. Menu names vary a little between versions. */
export function InstallItalianVoice() {
  return (
    <ul className="small" style={{ margin: 0, paddingLeft: 20 }}>
      <li>
        <strong>Windows:</strong> Settings → Time &amp; language → Speech → Add voices → Italiano. Or open the app in
        Microsoft Edge, which has natural Italian voices built in.
      </li>
      <li>
        <strong>Android:</strong> Settings → search for "Text-to-speech" → Speech Services by Google → Install voice
        data → Italiano.
      </li>
      <li>
        <strong>iPhone or iPad:</strong> Settings → Accessibility → Spoken Content → Voices → Italiano, then download a
        voice.
      </li>
      <li>
        <strong>Mac:</strong> System Settings → Accessibility → Spoken Content → System voice → Manage Voices → Italian.
      </li>
    </ul>
  )
}

/** Shown after the app tried to speak and found no Italian voice, instead of reading Italian with an English one. */
export function MissingVoiceNotice() {
  const missing = useSyncExternalStore(onItalianVoiceMissingChange, italianVoiceIsMissing)
  if (!missing) return null
  return (
    <div className="card stack" role="status" style={{ marginBottom: 16, borderColor: 'var(--accent)' }}>
      <strong>This device has no Italian voice</strong>
      <p className="small" style={{ margin: 0 }}>
        Audio is off rather than read with an English accent. Add an Italian voice, then reload the app:
      </p>
      <InstallItalianVoice />
      <div>
        <button className="btn" onClick={dismissMissingVoice}>
          OK
        </button>
      </div>
    </div>
  )
}
