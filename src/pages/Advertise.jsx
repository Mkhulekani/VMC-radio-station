import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { adOptions, station } from '../data.js'

export default function Advertise() {
  return (
    <>
      <PageHead title="Advertise with us">
        Reach young Johannesburg listeners on a station they tune in to every day.
      </PageHead>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {adOptions.map((o) => (
              <article key={o.title} className="info-card">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>

          <div className="cta-band">
            <div>
              <h2>Talk to the studio about your campaign</h2>
              <p>Call {station.phone} or email {station.email}.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary btn-lg" href={`mailto:${station.email}?subject=Advertising%20enquiry`}>
                Email us
              </a>
              <Link className="btn btn-ghost btn-lg" to="/contact">Contact page</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
