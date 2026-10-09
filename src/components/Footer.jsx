import { Link } from 'react-router-dom'
import { station } from '../data.js'

const groups = [
  {
    title: 'On air',
    links: [
      ['Show line-up', '/shows'],
      ['On-air presenters', '/presenters'],
      ['News', '/news'],
    ],
  },
  {
    title: 'Get involved',
    links: [
      ['Events', '/events'],
      ['Submit music', '/submit-music'],
      ['Advertise', '/advertise'],
    ],
  },
  {
    title: 'Multimedia',
    links: [
      ['Podcasts', '/podcasts'],
      ['Radio drama', '/radio-drama'],
      ['VMC TV', '/tv'],
      ['Gallery', '/gallery'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <span className="brand-logo">
            <img src={station.logo} alt="VMC Planet Radio" height="40" />
          </span>
          <p>{station.tagline}</p>
          <p className="muted">A division of VMC Academy, a school of media and information technology.</p>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.links.map(([label, to]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={station.phoneHref}>{station.phone}</a></li>
            <li><a href={`mailto:${station.email}`}>{station.email}</a></li>
            {station.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} VMC Planet Radio. All rights reserved.</span>
      </div>
    </footer>
  )
}
