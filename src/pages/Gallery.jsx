import PageHead from '../components/PageHead.jsx'
import { gallery } from '../data.js'

export default function Gallery() {
  return (
    <>
      <PageHead title="Gallery">Photos from the studio and the stadium.</PageHead>
      <section className="section">
        <div className="container">
          <div className="gallery">
            {gallery.map((g) => (
              <figure key={g.src}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
