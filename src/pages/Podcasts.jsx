import PageHead from '../components/PageHead.jsx'
import Empty from '../components/Empty.jsx'
import { podcasts } from '../data.js'
import { Link } from 'react-router-dom'

export default function Podcasts() {
  return (
    <>
      <PageHead title="Podcasts">Missed a show? Catch up whenever you like.</PageHead>
      <section className="section">
        <div className="container narrow">
          {podcasts.length ? (
            <ul className="episodes">
              {podcasts.map((p) => (
                <li key={p.id}>
                  <h3>{p.title}</h3>
                  <p className="meta">{p.show}, {p.date}</p>
                  <audio controls preload="none" src={p.audio} />
                </li>
              ))}
            </ul>
          ) : (
            <Empty action={<Link className="btn btn-dark" to="/shows">See the show line-up</Link>}>
              Podcasts aren't available yet. Until then, catch every show live.
            </Empty>
          )}
        </div>
      </section>
    </>
  )
}
