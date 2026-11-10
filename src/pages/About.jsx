import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { principles, about, station } from '../data.js'

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

      {/* ---------- Principles ---------- */}
      <section className="section section-tint">
        <div className="container">
          <div className="about-section-head">
            <h2>Our principles</h2>
            <p className="meta">Our aims and objectives guide everything we put on air.</p>
          </div>
          <ul className="principles-grid">
            {principles.map((p) => (
              <li key={p.title} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>{p.title}</h3>
                    <span className="flip-hint">Tap to read</span>
                  </div>
                  <div className="flip-card-back">
                    <p>{p.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Visit us ---------- */}
      <section className="section">
        <div className="container">
          <div className="about-card about-card--reverse">
            
            {/* Studio Info Card (Replaces the empty photo placeholder) */}
            <div className="visit-info-card">
              <h3>Studio Information</h3>
              <div className="visit-info-item">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <div>
                  <span className="visit-info-label">Operating Hours</span>
                  <p className="visit-info-text">{about.visit.hours}</p>
                </div>
              </div>
              <div className="visit-info-item">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <div>
                  <span className="visit-info-label">Booking Policy</span>
                  <p className="visit-info-text">{about.visit.note}</p>
                </div>
              </div>
            </div>

            <div className="about-card-body">
              <h2>{about.visit.title}</h2>
              <p>{about.visit.text}</p>
              <dl className="visit-list">
                <div className="visit-item">
                  <svg className="visit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <dt>Address</dt>
                    <dd>{about.visit.address}</dd>
                  </div>
                </div>
                <div className="visit-item">
                  <svg className="visit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <dt>Phone</dt>
                    <dd><a href={station.phoneHref}>{station.phone}</a></dd>
                  </div>
                </div>
                <div className="visit-item">
                  <svg className="visit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <dt>Email</dt>
                    <dd><a href={`mailto:${station.email}`}>{station.email}</a></dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Work with us ---------- */}
      <section className="section section-tint">
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