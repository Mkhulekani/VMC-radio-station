import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import ShowCard from '../components/ShowCard.jsx'
import useNow from '../components/useNow.js'
import { schedule, dayNames, weekOrder, getOnAir } from '../data.js'

export default function Shows({ onListen }) {
  const now = useNow()
  const [day, setDay] = useState(now.getDay())
  const onAir = getOnAir(now)
  const liveId = onAir?.state === 'live' && day === now.getDay() ? onAir.show.id : null
  const list = schedule[day]

  return (
    <>
      <PageHead title="Shows">
        Pick a day to see who is on air and when.
      </PageHead>

      <section className="section">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Day of the week">
            {weekOrder.map((d) => (
              <button
                key={d}
                role="tab"
                aria-selected={day === d}
                className={`tab ${day === d ? 'is-active' : ''}`}
                onClick={() => setDay(d)}
              >
                {dayNames[d]}
                {d === now.getDay() && <span className="tab-today">Today</span>}
              </button>
            ))}
          </div>

          {list.length ? (
            <div className="show-grid" role="tabpanel">
              {list.map((s) => (
                <ShowCard key={s.id} show={s} live={s.id === liveId} />
              ))}
            </div>
          ) : (
            <div className="empty" role="tabpanel">
              <p>No shows are listed for {dayNames[day]} yet. Tune in live to hear what's playing.</p>
              <button className="btn btn-primary" onClick={onListen}>Listen live</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
