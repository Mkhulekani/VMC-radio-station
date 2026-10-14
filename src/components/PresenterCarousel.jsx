// Infinite, left-moving ticker of presenter cards, grouped per show.
// Each row duplicates its content so the scroll loops seamlessly.
export default function PresenterCarousel({ group }) {
  // Two identical halves — CSS animates the track by exactly -50%.
  const row = [...group.people, ...group.people]

  return (
    <div className="presenter-group">
      <div className="presenter-group-head">
        <h3>{group.show}</h3>
        <span className="presenter-group-time">{group.time}</span>
      </div>

      <div className="carousel" role="region" aria-label={`${group.show} presenters`}>
        <ul className="carousel-track">
          {row.map((p, i) => (
            <li
              className="presenter-card"
              key={`${p.name}-${i}`}
              aria-hidden={i >= group.people.length}
            >
              <img src={p.photo} alt="" loading="lazy" />
              <div className="presenter-info">
                <strong>{p.name}</strong>
                <span>{group.show}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}