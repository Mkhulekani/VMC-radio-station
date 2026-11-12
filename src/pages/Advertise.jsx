import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { station } from '../data.js'

const packages = [
  {
    title: 'Starter',
    price: 'Custom',
    features: [
      '5 On-air mentions (weekdays)',
      '1 Social media post',
      'Mention in our newsletter',
    ],
  },
  {
    title: 'Growth',
    price: 'Custom',
    features: [
      '10 On-air mentions (weekdays)',
      '3 Social media posts',
      'Sponsored segment (15 mins)',
      'Logo on the website',
    ],
  },
  {
    title: 'Premium',
    price: 'Custom',
    features: [
      'Full show sponsorship',
      'Live read by the presenter',
      'Unlimited social media posts',
      'Logo on website & events',
      'Interview with the DJ',
    ],
  },
]

export default function Advertise() {
  return (
    <>
      <PageHead title="Advertise with us">
        Reach young Johannesburg listeners on a station they tune in to every day.
      </PageHead>

      {/* 1. Why Advertise Section */}
      <section className="section">
        <div className="container split">
          <div>
            <h2>Why advertise on VMC?</h2>
            <p className="lead">
              VMC Planet Radio is the voice of young Johannesburg. Our listeners are students, young professionals, and local trendsetters.
            </p>
            <p>
              By partnering with us, your brand reaches an engaged, loyal audience that actively supports local businesses and culture. Whether you want to build brand awareness or drive direct sales, our platform gives you a direct line to the community.
            </p>
          </div>
          <div className="contact-card">
            <h3>Talk to the studio</h3>
            <p><a href={station.phoneHref}>{station.phone}</a></p>
            <p><a href={`mailto:${station.email}`}>{station.email}</a></p>
            <Link to="/contact" className="text-link">More ways to reach us</Link>
          </div>
        </div>
      </section>

      {/* 2. By the Numbers */}
      <section className="section section-tint">
        <div className="container">
          <div className="about-section-head">
            <h2>By the numbers</h2>
            <p className="meta">A look at the reach you'll get.</p>
          </div>
          <ul className="stats-grid">
            <li className="stat-card">
              <strong>19</strong>
              <span>Live Presenters</span>
            </li>
            <li className="stat-card">
              <strong>4</strong>
              <span>Daily Live Shows</span>
            </li>
            <li className="stat-card">
              <strong>24/7</strong>
              <span>Live Streaming</span>
            </li>
            <li className="stat-card">
              <strong>100%</strong>
              <span>Youth Focused</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Advertising Packages */}
      <section className="section">
        <div className="container">
          <div className="about-section-head">
            <h2>Advertising Packages</h2>
            <p className="meta">Choose the option that fits your budget.</p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {packages.map((pkg) => (
              <article key={pkg.title} className="info-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: 'var(--dusk)' }}>{pkg.title}</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{pkg.price}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', flexGrow: 1 }}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--dusk)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span style={{ fontSize: '0.95rem', color: 'var(--ink-soft)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={`mailto:${station.email}?subject=Advertise: ${pkg.title} Package`} className="btn btn-dark" style={{ textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  Get this package
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="section section-tint">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Ready to grow your brand?</h2>
              <p>Contact our sales team today to discuss custom advertising options.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary btn-lg" href={`mailto:${station.email}?subject=Advertising Enquiry`}>
                Email us
              </a>
              <a className="btn btn-ghost btn-lg" href={station.phoneHref}>
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}