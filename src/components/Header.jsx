import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { station, menu } from '../data.js'

function Group({ item, open, setOpen, pathname }) {
  const isOpen = open === item.label
  const inGroup = item.children.some((c) => c.to === pathname)

  return (
    <div
      className={`nav-group ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={() => window.matchMedia('(hover: hover) and (min-width: 1101px)').matches && setOpen(item.label)}
      onMouseLeave={() => window.matchMedia('(hover: hover) and (min-width: 1101px)').matches && setOpen(null)}
    >
      <button
        className={`nav-trigger ${inGroup ? 'active' : ''}`}
        aria-expanded={isOpen}
        onClick={() => setOpen(isOpen ? null : item.label)}
      >
        {item.label}
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <div className="dropdown">
        {item.children.map((c) => (
          <NavLink key={c.to} to={c.to}>{c.label}</NavLink>
        ))}
      </div>
    </div>
  )
}

export default function Header({ onListen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [pathname])

  useEffect(() => {
    const away = (e) => navRef.current && !navRef.current.contains(e.target) && setOpenGroup(null)
    const esc = (e) => e.key === 'Escape' && setOpenGroup(null)
    document.addEventListener('mousedown', away)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', away)
      document.removeEventListener('keydown', esc)
    }
  }, [])

  return (
    <header className={`site-header ${scrolled || mobileOpen ? 'is-solid' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="VMC Planet Radio home">
          <span className="brand-logo">
            <img src={station.logo} alt="" height="36" />
          </span>
          <span className="brand-name">VMC Planet Radio</span>
        </Link>

        <nav
          id="main-nav"
          ref={navRef}
          className={`nav ${mobileOpen ? 'is-open' : ''}`}
          aria-label="Main"
        >
          {menu.map((item) =>
            item.children ? (
              <Group key={item.label} item={item} open={openGroup} setOpen={setOpenGroup} pathname={pathname} />
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            )
          )}
          <button className="btn btn-primary nav-listen" onClick={onListen}>
            <span className="live-dot" aria-hidden="true" />
            Listen live
          </button>
        </nav>

        <button
          className="menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
