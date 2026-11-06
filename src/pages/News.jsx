import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import NewsFetcher from '../components/NewsFetcher.jsx'

export default function News() {
  return (
    <>
      <PageHead title="News">Stories from the station and the communities we serve.</PageHead>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Latest from South Africa</h2>
            <span className="meta">Updated automatically</span>
          </div>
          <NewsFetcher />

          <div className="empty" style={{ marginTop: '3rem' }}>
            <p>Have a story the community should hear? Send it to the newsroom.</p>
            <Link to="/contact" className="btn btn-dark">Send us a story</Link>
          </div>
        </div>
      </section>
    </>
  )
}