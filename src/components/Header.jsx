import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

export const navLinks = [
  ['/', 'Home'],
  ['/projects', 'Projects'],
  ['/experience', 'Experience'],
  ['/skills', 'Skills'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link to="/" className="brand"><span className="logo">FS</span>{profile.name}</Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          {navLinks.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
