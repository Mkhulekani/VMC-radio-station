import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import Empty from '../components/Empty.jsx'
import { events } from '../data.js'

export default function Events() {
  return (
    <>
      <PageHead title="Events">Where to find VMC Planet Radio next.</PageHead>
      <section className="section">
        <div className="container">
          {events.length ? (
            <div className="card-grid">
              {events.map((e) => (
                <article key={e.id} className="info-card">
                  <p className="meta">{e.date}, {e.venue}</p>
                  <h3>{e.title}</h3>
                  <p>{e.summary}</p>
                </article>
              ))}
            </div>
          ) : (
            <Empty action={<Link className="btn btn-dark" to="/contact">Ask about an event</Link>}>
              No events are listed right now. Check back soon, or get in touch to book us for yours.
            </Empty>
          )}
        </div>
      </section>
    </>
  )
}
