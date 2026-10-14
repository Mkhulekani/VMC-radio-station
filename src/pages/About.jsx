import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { principles, about, station } from '../data.js'

const initials = (name) =>
  name
    .replace(/\[|\]/g, '')
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

// Reusable photo slot — reserves a fixed aspect ratio so the layout
// stays aligned whether or not a photo is present.
function PhotoSlot({ src, alt, ratio = '4 / 3', caption }) {
  return (
    <div className={`about-photo about-photo--${ratio.replace(/\s+/g, '-').replace(/\//g, 'x')}`}>
      {src ? (
        <img src={src} alt={alt || ''} loading="lazy" />
      ) : (
        <div className="about-photo-empty">
          <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="11" r="2" />
            <path d="M21 17l-5-5-9 7" />
          </svg>
          <span>{caption || 'Photo coming soon'}</span>
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <>
      <PageHead title="About VMC Planet Radio">{about.intro}</PageHead>

      {/* ---------- Our story ---------- */}
      <section className="section">
        <div className="container">
          <div className="about-card">
            <PhotoSlot src={about.story.image} alt={about.story.imageAlt} />
            <div className="about-card-body">
              <h2>{about.story.title}</h2>
              {about.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- By the numbers ---------- */}
      <section className="section section-tint">
        <div className="container">
          <div className="about-section-head">
            <h2>By the numbers</h2>
            <p className="meta">A quick look at the station.</p>
          </div>
          <ul className="stats-grid">
            {about.stats.map((s) => (
              <li key={s.label} className="stat-card">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Vision & mission ---------- */}
      <section className="section">
        <div className="container">
          <div className="about-section-head">
            <h2>Our vision &amp; mission</h2>
            <p className="meta">Why we exist and what we do.</p>
          </div>
          <div className="vm-grid">
            <article className="vm-card">
              <span className="vm-tag">Vision</span>
              <p>{about.vision}</p>
            </article>
            <article className="vm-card">
              <span className="vm-tag">Mission</span>
              <p>{about.mission}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="section section-tint">
        <div className="container">
          <div className="about-section-head">
            <h2>Meet the team</h2>
            <p className="meta">The people who keep the station running day to day.</p>
          </div>
          <ul className="team-grid">
            {about.team.map((m, i) => (
              <li key={i} className="team-card">
                <div className="team-photo">
                  {m.photo ? (
                    <img src={m.photo} alt="" loading="lazy" />
                  ) : (
                    <span className="team-initials" aria-hidden="true">{initials(m.name)}</span>
                  )}
                </div>
                <div className="team-body">
                  <h3>{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Principles ---------- */}
      <section className="section">
        <div className="container">
          <div className="about-section-head">
            <h2>Our principles</h2>
            <p className="meta">Our aims and objectives guide everything we put on air.</p>
          </div>
          <ul className="principles-grid">
            {principles.map((p) => (
              <li key={p.title} className="principle-card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Visit us ---------- */}
      <section className="section section-tint">
        <div className="container">
          <div className="about-card about-card--reverse">
            <PhotoSlot src={about.visit.image} alt={about.visit.imageAlt} />
            <div className="about-card-body">
              <h2>{about.visit.title}</h2>
              <p>{about.visit.text}</p>
              <dl className="visit-list">
                <div>
                  <dt>Address</dt>
                  <dd>{about.visit.address}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd><a href={station.phoneHref}>{station.phone}</a></dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd><a href={`mailto:${station.email}`}>{station.email}</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Work with us ---------- */}
      <section className="section">
        <div className="container">
          <div className="about-section-head">
            <h2>Work with us</h2>
            <p className="meta">Three ways to get involved with VMC Planet Radio.</p>
          </div>
          <div className="work-grid">
            <Link to="/advertise" className="work-card">
              <h3>Advertise</h3>
              <p>Reach young Johannesburg listeners on a station they trust.</p>
              <span className="work-arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/submit-music" className="work-card">
              <h3>Submit music</h3>
              <p>Artists — send us your song and our music team will listen.</p>
              <span className="work-arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/careers" className="work-card">
              <h3>Careers</h3>
              <p>Learn the craft at VMC Academy, then take it to air.</p>
              <span className="work-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}