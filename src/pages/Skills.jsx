import { skills, achievements } from '../data/resume.js'
import { profile } from '../data/profile.js'

export default function Skills() {
  return (
    <>
      <section className="page-title">
        <h1>Skills and achievements</h1>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="grid">
          <div className="card track a-card">
            <h3 className="a">Automation</h3>
            <ul className="chips">{skills.automation.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="card track b-card">
            <h3 className="b">Backend</h3>
            <ul className="chips">{skills.backend.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
        <div className="more">
          {skills.other.map(([label, value]) => (
            <p key={label}><strong>{label}:</strong> <span className="muted">{value}</span></p>
          ))}
        </div>
      </section>

      <section>
        <h2>Achievements</h2>
        <ul>{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
        <div className="links" style={{ marginTop: '1rem' }}>
          <a className="btn small" href={profile.codeforces} target="_blank" rel="noreferrer">Codeforces profile</a>
          <a className="btn small" href={profile.codechef} target="_blank" rel="noreferrer">CodeChef profile</a>
        </div>
      </section>
    </>
  )
}
