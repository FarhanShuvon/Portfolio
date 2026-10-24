import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { navLinks } from './Header.jsx'
import Icon from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-about">
          <strong className="serif">{profile.name}</strong>
          <p className="muted">{profile.role} in {profile.location}. Open to junior backend and automation roles.</p>
          <div className="social">
            <a href={profile.github} aria-label="GitHub"><Icon name="github" /></a>
            <a href={profile.linkedin} aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
          </div>
        </div>
        <nav aria-label="Footer" className="footer-links">
          <span>Pages</span>
          {navLinks.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </nav>
        <div className="footer-links">
          <span>Elsewhere</span>
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <a href={profile.codeforces}>Codeforces</a>
          <a href={profile.codechef}>CodeChef</a>
        </div>
      </div>
      <div className="wrap copy muted">© {new Date().getFullYear()} {profile.name}. Built with React.</div>
    </footer>
  )
}
