import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import useNow from '../components/useNow.js'
import { getOnAir, getPresentersFor } from '../data.js'

function whenLabel(onAir) {
  if (!onAir) return ''
  if (onAir.state === 'live') return 'On air now'
  return `Coming up ${onAir.when.toLowerCase()} at ${onAir.show.start}`
}

function getNextShowWithPresenters(now) {
  const next = getOnAir(now)
  if (!next) return null
  const group = getPresentersFor(next.show.id)
  return group ? { onAir: next, group } : null
}

export default function Presenters() {
  const now = useNow()
  const onAir = getOnAir(now)

  const currentGroup = onAir ? getPresentersFor(onAir.show.id) : null
  const fallback = !currentGroup ? getNextShowWithPresenters(now) : null
  const group = currentGroup || fallback?.group
  const showing = currentGroup ? onAir : fallback?.onAir

  return (
    <>
      <PageHead title="On-air presenters">
        The voices you're hearing on VMC Planet Radio right now.
      </PageHead>

      <section className="section">
        <div className="container">
          {group && showing ? (
            <>
              <div className="on-air-head">
                <div>
                  <span className={`on-air-status ${showing.state === 'live' ? 'is-live' : ''}`}>
                    {showing.state === 'live' && (
                      <span className="eq" aria-hidden="true"><i /><i /><i /><i /></span>
                    )}
                    {whenLabel(showing)}
                  </span>
                  <h2>{showing.show.name}</h2>
                  <p className="on-air-meta">
                    {showing.show.start} – {showing.show.end}
                    {showing.show.hosts && ` · ${showing.show.hosts}`}
                  </p>
                </div>
                <Link to="/shows" className="text-link">See full schedule</Link>
              </div>

              <div className="on-air-carousel" role="region" aria-label={`${group.show} presenters`}>
                <ul className="on-air-track">
                  {[...group.people, ...group.people].map((p, i) => (
                    <li
                      key={`${p.name}-${i}`}
                      className="on-air-person"
                      aria-hidden={i >= group.people.length}
                    >
                      <div className="on-air-person-photo">
                        <img src={p.photo} alt="" loading="lazy" />
                      </div>
                      <h3>{p.name}</h3>
                      <p className="on-air-person-role">{group.show}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="on-air-hint">
                Hover to pause · scroll the row to explore
              </p>
            </>
          ) : (
            <div className="empty">
              <p>Nothing is on air right now.</p>
              <p style={{ color: 'var(--ink-soft)' }}>
                Presenter details will appear here when the next show starts.
              </p>
              <Link to="/shows" className="btn btn-dark">See the full schedule</Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}