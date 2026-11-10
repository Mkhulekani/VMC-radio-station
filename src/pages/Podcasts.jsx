import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import YouTubeFetcher from '../components/YouTubeFetcher.jsx'

export default function Podcasts() {
  return (
    <>
      <PageHead title="Podcasts">Missed a show? Catch up on our latest videos.</PageHead>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Latest Episodes</h2>
            <Link to="/tv" className="text-link">Watch on VMC TV</Link>
          </div>
          
          {/* We pass limit={10} to show 10 videos here */}
          <YouTubeFetcher limit={10} />
          
        </div>
      </section>
    </>
  )
}