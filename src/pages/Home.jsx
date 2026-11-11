import { Link } from 'react-router-dom'
import Waves from '../components/Waves.jsx'
import RotatingWord from '../components/RotatingWord.jsx'
import ShowCard from '../components/ShowCard.jsx'
import OnAirPresenters from '../components/OnAirPresenters.jsx'
import PresenterCarousel from '../components/PresenterCarousel.jsx'
import YouTubeFetcher from '../components/YouTubeFetcher.jsx'
import useNow from '../components/useNow.js'
import { rotatingWords, getOnAir, schedule, presenters, getPresentersFor } from '../data.js'

const tiles = [
  { to: '/competition', title: 'Competitions', text: 'Listen in, enter and win.' },
  { to: '/events', title: 'Events', text: 'See where we are next.' },
  { to: '/podcasts', title: 'Podcasts', text: 'Catch up on shows you missed.' },
  { to: '/tv', title: 'VMC TV', text: 'Watch clips from the studio.' },
  { to: '/submit-music', title: 'Submit music', text: 'Artists, send us your song.' },
  { to: '/advertise', title: 'Advertise', text: 'Reach young listeners.' },
]

export default function Home({ onListen }) {
  const now = useNow()
  const onAir = getOnAir(now)
  const today = schedule[now.getDay()]
  const liveId = onAir?.state === 'live' ? onAir.show.id : null
  const onAirPresenters = onAir ? getPresentersFor(onAir.show.id) : null

  return (
    <>
      <section className="hero">
        <Waves />
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Listen to
              <RotatingWord words={rotatingWords} />
            </h1>
            <p className="lead">
              Youth empowerment and entertainment radio, live from the Johannesburg
              Athletic Stadium in New Doornfontein.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg" onClick={onListen}>
                <span className="live-dot" aria-hidden="true" />
                Listen live
              </button>
              <Link to="/shows" className="btn btn-ghost btn-lg">
                See the show line-up
              </Link>
            </div>
          </div>

          {onAir && (
            <aside className="on-air glass" aria-label="On air">
              <p className="on-air-label">
                {onAir.state === 'live' ? (
                  <>
                    <span className="eq" aria-hidden="true"><i /><i /><i /><i /></span>
                    On air now
                  </>
                ) : (
                  <>Up next, {onAir.when.toLowerCase()}</>
                )}
              </p>
              <img src={onAir.show.image} alt="" />
              <h2>{onAir.show.name}</h2>
              <p className="on-air-time">
                {onAir.show.start} to {onAir.show.end}
              </p>
              {onAirPresenters && (
                <OnAirPresenters group={onAirPresenters} />
              )}
            </aside>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Today on VMC</h2>
            <Link to="/shows" className="text-link">Full weekly schedule</Link>
          </div>
          {today.length ? (
            <div className="show-grid">
              {today.map((s) => (
                <ShowCard key={s.id} show={s} live={s.id === liveId} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <p>No shows are scheduled today. Tune in live to hear what's playing.</p>
              <button className="btn btn-primary" onClick={onListen}>Listen live</button>
            </div>
          )}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <h2>Meet the presenters</h2>
            <Link to="/presenters" className="text-link">All presenters</Link>
          </div>
          {presenters.map((g) => (
            <PresenterCarousel key={g.show} group={g} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Latest from VMC TV</h2>
            <Link to="/tv" className="text-link">See all videos</Link>
          </div>
          <YouTubeFetcher limit={4} carousel={true} />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <h2>More from VMC</h2>
          <div className="tiles-grid">
            {tiles.map((t) => (
              <Link key={t.to} to={t.to} className="flip-tile">
                <div className="flip-tile-inner">
                  <div className="flip-tile-front">
                    <h3>{t.title}</h3>
                  </div>
                  <div className="flip-tile-back">
                    <p>{t.text}</p>
                    <span className="text-link" style={{ color: 'var(--marigold)' }}>Go to page →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}