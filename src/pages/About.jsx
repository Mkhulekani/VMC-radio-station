import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { principles } from '../data.js'

export default function About() {
  return (
    <>
      <PageHead title="About VMC Planet Radio">
        A youth empowerment and entertainment radio station based in the Johannesburg
        Athletic Stadium in New Doornfontein, and a division of VMC Academy, a school of
        media and information technology.
      </PageHead>

      <section className="section">
        <div className="container narrow">
          <h2>Our vision</h2>
          <p className="intro">
            Our principles, aims and objectives guide everything we put on air.
          </p>
          <dl className="principles">
            {principles.map((p) => (
              <div key={p.title} className="principle">
                <dt>{p.title}</dt>
                <dd>{p.text}</dd>
              </div>
            ))}
          </dl>
          <Link to="/contact" className="btn btn-dark">Get in touch</Link>
        </div>
      </section>
    </>
  )
}
