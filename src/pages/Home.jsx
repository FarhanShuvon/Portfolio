import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { fullStackProjects } from '../data/projects.js'
import { skills } from '../data/resume.js'
import Icon from '../components/Icons.jsx'

const facts = [
  ['Based in', profile.location],
  ['Education', 'BSc in Computer Science and Engineering, Leading University (2026)'],
  ['Working at', 'Appsus Solutions Limited, as Junior Automation Engineer'],
  ['Looking for', 'Junior backend and automation roles'],
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="ring">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="720" height="960" />
        </div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="lead centered">{profile.bio}</p>
        <div className="social">
          <a href={profile.github} aria-label="GitHub"><Icon name="github" /></a>
          <a href={profile.linkedin} aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
          <a href={profile.codeforces} aria-label="Codeforces profile"><Icon name="chart" /></a>
          <a href={profile.codechef} aria-label="CodeChef profile"><Icon name="code" /></a>
        </div>
        <div className="links center">
          <Link className="btn main" to="/projects">See my projects</Link>
          {profile.cvUrl && <a className="btn" href={profile.cvUrl}>Download CV</a>}
          <Link className="btn" to="/contact">Contact me</Link>
        </div>
      </section>

      <section>
        <p className="eyebrow">What I do</p>
        <h2>Two tracks, one toolbox</h2>
        <div className="grid">
          <div className="card track a-card">
            <h3 className="a">Automation</h3>
            <p className="muted">CRM workflows, API integrations, and low-code builds with GoHighLevel and n8n for real client needs.</p>
            <ul className="chips">{skills.automation.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="card track b-card">
            <h3 className="b">Backend and full-stack</h3>
            <p className="muted">Node.js and Express services, MongoDB and PostgreSQL databases, and React frontends.</p>
            <ul className="chips">{skills.backend.slice(0, 8).map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </section>

      <section>
        <p className="eyebrow">Selected work</p>
        <h2>Things I’ve built</h2>
        <div className="grid">
          {fullStackProjects.map((p) => (
            <article className="card" key={p.title}>
              <span className={p.track === 'Full-stack' ? 'tag b' : 'tag m'}>{p.track}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.summary}</p>
              <p className="stack">{p.stack}</p>
            </article>
          ))}
        </div>
        <p className="more-link"><Link to="/projects">See all projects, including six frontend works</Link></p>
      </section>

      <section className="split">
        <div>
          <p className="eyebrow">About me</p>
          <h2>A builder who likes useful things</h2>
          <p className="lead">{profile.about}</p>
        </div>
        <dl className="facts">
          {facts.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>

      <section className="cta">
        <h2>Let’s build something together</h2>
        <p className="lead muted centered">I’m open to junior backend and automation roles. If you’re hiring, or working on something similar, I’d like to hear from you.</p>
        <div className="links center">
          <a className="btn main" href={`mailto:${profile.email}`}>Email me</a>
          <Link className="btn" to="/contact">Other ways to reach me</Link>
        </div>
      </section>
    </>
  )
}
