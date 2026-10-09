import PageHead from '../components/PageHead.jsx'
import { schedule } from '../data.js'

// Built from the show line-up, so adding a show adds its presenters here.
function getPresenters() {
  const map = new Map()
  Object.values(schedule).flat().forEach((show) => {
    show.hosts.split(/,|&/).map((n) => n.trim()).filter(Boolean).forEach((name) => {
      if (!map.has(name)) map.set(name, new Map())
      map.get(name).set(show.id, show)
    })
  })
  return [...map.entries()].map(([name, shows]) => ({ name, shows: [...shows.values()] }))
}

const initials = (name) => name.split(' ').map((p) => p[0]).slice(0, 2).join('')

export default function Presenters() {
  const people = getPresenters()
  return (
    <>
      <PageHead title="On-air presenters">The voices you hear every day on VMC Planet Radio.</PageHead>
      <section className="section">
        <div className="container">
          <div className="people-grid">
            {people.map((p) => (
              <article key={p.name} className="person">
                <div className="avatar" aria-hidden="true">{initials(p.name)}</div>
                <h3>{p.name}</h3>
                {p.shows.map((s) => (
                  <p key={s.id} className="person-show">
                    {s.name}, {s.start} to {s.end}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
