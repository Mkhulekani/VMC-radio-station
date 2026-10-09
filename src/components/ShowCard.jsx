export default function ShowCard({ show, live = false }) {
  return (
    <article className={`show-card ${live ? 'is-live' : ''}`}>
      <img src={show.image} alt="" loading="lazy" />
      <div className="show-card-body">
        <p className="show-time">
          {show.start} to {show.end}
          {live && <span className="badge">On air</span>}
        </p>
        <h3>{show.name}</h3>
        <p className="show-hosts">Hosted by {show.hosts}</p>
      </div>
    </article>
  )
}
