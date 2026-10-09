import PageHead from '../components/PageHead.jsx'
import Empty from '../components/Empty.jsx'
import { videos, station } from '../data.js'

export default function Tv() {
  return (
    <>
      <PageHead title="VMC TV">Watch the people and moments behind the radio.</PageHead>
      <section className="section">
        <div className="container">
          {videos.length ? (
            <div className="video-grid">
              {videos.map((v) => (
                <article key={v.id}>
                  <div className="video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={v.title}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <Empty
              action={<a className="btn btn-dark" href={station.socials[0].href} target="_blank" rel="noreferrer">Watch on Facebook</a>}
            >
              No videos have been added yet. Follow us on social media to see our latest clips.
            </Empty>
          )}
        </div>
      </section>
    </>
  )
}
