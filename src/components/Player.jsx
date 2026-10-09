import { useEffect } from 'react'
import { station } from '../data.js'

// The live player is the station's Famcast embed. It only loads once the
// listener asks for it, so the page stays fast.
export default function Player({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <section className="player" aria-label="Live radio player">
      <div className="player-bar">
        <div className="player-title">
          <span className="eq" aria-hidden="true"><i /><i /><i /><i /></span>
          <strong>VMC Planet Radio, live</strong>
        </div>
        <button className="player-close" onClick={onClose} aria-label="Close player">
          Close
        </button>
      </div>
      <iframe
        title="VMC Planet Radio live player"
        src={station.playerUrl}
        allow="autoplay"
      />
    </section>
  )
}
