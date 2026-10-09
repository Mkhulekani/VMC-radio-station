import PageHead from '../components/PageHead.jsx'
import Empty from '../components/Empty.jsx'
import { competitions, station } from '../data.js'

const fmt = (d) =>
  new Date(d).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' })

function Card({ c }) {
  return (
    <article className="info-card">
      <p className="meta">Closes {fmt(c.closing)}</p>
      <h3>{c.title}</h3>
      <p>{c.summary}</p>
    </article>
  )
}

export default function Competition() {
  const today = new Date().setHours(0, 0, 0, 0)
  const active = competitions.filter((c) => new Date(c.closing) >= today)
  const past = competitions.filter((c) => new Date(c.closing) < today)
  const insta = station.socials[1]

  return (
    <>
      <PageHead title="Competitions">Listen in, enter and win.</PageHead>
      <section className="section">
        <div className="container">
          <h2>Active competitions</h2>
          {active.length ? (
            <div className="card-grid">{active.map((c) => <Card key={c.id} c={c} />)}</div>
          ) : (
            <Empty
              action={<a className="btn btn-dark" href={insta.href} target="_blank" rel="noreferrer">Follow us on Instagram</a>}
            >
              No competitions are running right now. Follow us to hear about the next one first.
            </Empty>
          )}

          {past.length > 0 && (
            <>
              <h2 className="gap-top">Past competitions</h2>
              <div className="card-grid">{past.map((c) => <Card key={c.id} c={c} />)}</div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
