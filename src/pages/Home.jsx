import { Link } from 'react-router-dom'
import Waves from '../components/Waves.jsx'
import RotatingWord from '../components/RotatingWord.jsx'
import ShowCard from '../components/ShowCard.jsx'
import useNow from '../components/useNow.js'
import { rotatingWords, getOnAir, schedule, news, station } from '../data.js'

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
  const story = news[0]

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
              <p className="on-air-hosts">Hosted by {onAir.show.hosts}</p>
              <p className="on-air-time">
                {onAir.show.start} to {onAir.show.end}
              </p>
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
        <div className="container split">
          <img className="split-img" src={story.image} alt="" loading="lazy" />
          <div>
            <h2>Latest news</h2>
            <h3 className="story-title">{story.title}</h3>
            <p className="meta">By {story.author}, {story.date}</p>
            <p>{story.summary}</p>
            <Link to="/news" className="btn btn-dark">Read more news</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>More from VMC</h2>
          <div className="tiles">
            {tiles.map((t) => (
              <Link key={t.to} to={t.to} className="tile">
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container academy">
          <div>
            <h2>A station that trains the next voices</h2>
            <p>
              VMC Planet Radio is a division of VMC Academy, a school of media and
              information technology. Young people learn the craft here, then take it
              to air.
            </p>
            <Link to="/about" className="btn btn-dark">About the station</Link>
          </div>
          <div className="contact-card">
            <h3>Talk to the studio</h3>
            <p><a href={station.phoneHref}>{station.phone}</a></p>
            <p><a href={`mailto:${station.email}`}>{station.email}</a></p>
            <Link to="/contact" className="text-link">More ways to reach us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
