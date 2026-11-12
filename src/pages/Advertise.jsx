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
        <div className="container split" style={{ alignItems: 'center' }}>
          <div style={{ paddingRight: '1rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Why advertise on VMC?</h2>
            <p className="lead" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              VMC Planet Radio is the voice of young Johannesburg. Our listeners are students, young professionals, and local trendsetters.
            </p>
            <p style={{ lineHeight: '1.7', color: 'var(--ink-soft)' }}>
              By partnering with us, your brand reaches an engaged, loyal audience that actively supports local businesses and culture. Whether you want to build brand awareness or drive direct sales, our platform gives you a direct line to the community.
            </p>
          </div>
          
          <div className="contact-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--marigold)' }}>
              Talk to the studio
            </h3>
            
            {/* Phone with Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--marigold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href={station.phoneHref} style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--on-dark)' }}>
                {station.phone}
              </a>
            </div>

            {/* Email with Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--marigold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href={`mailto:${station.email}`} style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--on-dark-soft)', wordBreak: 'break-all' }}>
                {station.email}
              </a>
            </div>
            
            <Link to="/contact" className="text-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--marigold)' }}>
              More ways to reach us 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
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
                <h3 style={{ color: 'var(--dusk)', fontSize: '1.3rem' }}>{pkg.title}</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--ink)' }}>{pkg.price}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flexGrow: 1 }}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--dusk)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', lineHeight: '1.5' }}>{feature}</span>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}