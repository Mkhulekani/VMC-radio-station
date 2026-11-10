import PageHead from '../components/PageHead.jsx'
import YouTubeFetcher from '../components/YouTubeFetcher.jsx'

export default function Tv() {
  return (
    <>
      <PageHead title="VMC TV">
        Watch the latest videos, interviews, and moments from the VMC Planet Radio studio.
      </PageHead>
      <section className="section">
        <div className="container">
          <YouTubeFetcher limit={12} />
        </div>
      </section>
    </>
  )
}