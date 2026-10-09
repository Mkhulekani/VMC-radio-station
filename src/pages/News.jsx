import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { news } from '../data.js'

export default function News() {
  const [first, ...rest] = news

  return (
    <>
      <PageHead title="News">Stories from the station and the communities we serve.</PageHead>

      <section className="section">
        <div className="container">
          <article className="feature">
            <img src={first.image} alt="" />
            <div className="feature-body">
              <p className="meta">{first.date}</p>
              <h2>{first.title}</h2>
              <p className="meta">By {first.author}</p>
              <p>{first.summary}</p>
            </div>
          </article>

          {rest.length > 0 && (
            <div className="news-grid">
              {rest.map((n) => (
                <article key={n.id} className="news-card">
                  <img src={n.image} alt="" loading="lazy" />
                  <p className="meta">{n.date}</p>
                  <h3>{n.title}</h3>
                </article>
              ))}
            </div>
          )}

          <div className="empty">
            <p>Have a story the community should hear? Send it to the newsroom.</p>
            <Link to="/contact" className="btn btn-dark">Send us a story</Link>
          </div>
        </div>
      </section>
    </>
  )
}
