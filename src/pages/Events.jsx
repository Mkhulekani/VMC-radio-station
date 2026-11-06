import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'

export default function Events() {
  return (
    <>
      <PageHead title="Events">
        Where to find VMC Planet Radio next — and what's coming up on air.
      </PageHead>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Calendar</h2>
            <span className="meta">Updated automatically</span>
          </div>

          <div className="events-calendar">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=mkhulekani.469%40gmail.com&ctz=Africa%2FJohannesburg&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
              title="VMC Planet Radio events calendar"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          <div className="empty" style={{ marginTop: '2.5rem' }}>
            <p>Want to host VMC Planet Radio at your event?</p>
            <Link to="/contact" className="btn btn-dark">Talk to the studio</Link>
          </div>
        </div>
      </section>
    </>
  )
}