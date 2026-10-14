// Small auto-scrolling row of the presenters for the show that is
// currently on air. Duplicated content loops seamlessly, same idea as
// the big PresenterCarousel but sized to fit the "On air now" card.
export default function OnAirPresenters({ group }) {
  if (!group || !group.people?.length) return null

  const row = [...group.people, ...group.people]

  return (
    <div className="on-air-presenters">
      <p className="on-air-presenters-label">Presenters</p>
      <div className="mini-carousel" role="region" aria-label={`${group.show} presenters`}>
        <ul className="mini-carousel-track">
          {row.map((p, i) => (
            <li
              className="mini-presenter"
              key={`${p.name}-${i}`}
              aria-hidden={i >= group.people.length}
            >
              <img src={p.photo} alt="" loading="lazy" />
              <span>{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}