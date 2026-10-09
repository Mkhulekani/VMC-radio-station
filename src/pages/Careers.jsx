import PageHead from '../components/PageHead.jsx'
import Empty from '../components/Empty.jsx'
import { station } from '../data.js'

export default function Careers() {
  return (
    <>
      <PageHead title="Careers">
        VMC Planet Radio is a division of VMC Academy, a school of media and information
        technology. Young people learn the craft here, then take it to air.
      </PageHead>
      <section className="section">
        <div className="container narrow">
          <h2>Open positions</h2>
          <Empty
            action={
              <a className="btn btn-dark" href={`mailto:${station.email}?subject=Careers%20enquiry`}>
                Email the studio
              </a>
            }
          >
            No positions are listed right now. Send us a short note about yourself and the
            role you're interested in, and we'll keep it on file.
          </Empty>
        </div>
      </section>
    </>
  )
}
