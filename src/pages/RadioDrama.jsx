import PageHead from '../components/PageHead.jsx'
import Empty from '../components/Empty.jsx'
import { dramas } from '../data.js'
import { Link } from 'react-router-dom'

export default function RadioDrama() {
  return (
    <>
      <PageHead title="Radio drama">Stories told through sound.</PageHead>
      <section className="section">
        <div className="container narrow">
          {dramas.length ? (
            <ul className="episodes">
              {dramas.map((d) => (
                <li key={d.id}>
                  <h3>{d.title}</h3>
                  <p>{d.summary}</p>
                  <audio controls preload="none" src={d.audio} />
                </li>
              ))}
            </ul>
          ) : (
            <Empty action={<Link className="btn btn-dark" to="/podcasts">Browse podcasts</Link>}>
              No radio dramas have been added yet.
            </Empty>
          )}
        </div>
      </section>
    </>
  )
}
