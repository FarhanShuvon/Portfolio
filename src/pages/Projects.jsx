import { fullStackProjects, frontendWorks, backendWorks } from '../data/projects.js'
import WorkCard from '../components/WorkCard.jsx'

export default function Projects() {
  return (
    <>
      <section className="page-title">
        <h1>Projects</h1>
        <p className="lead muted">Full-stack and mobile projects, my frontend works, and backend projects as I finish them.</p>
      </section>

      <section id="full-stack">
        <h2>Full-stack and mobile</h2>
        <div className="grid">
          {fullStackProjects.map((p) => (
            <article className="card" key={p.title}>
              <span className={p.track === 'Full-stack' ? 'tag b' : 'tag m'}>{p.track}</span>
              <h3>{p.title}</h3>
              <p className="stack muted">{p.stack}</p>
              <p>{p.summary}</p>
              <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              <div className="links">
                {p.links.map((l) => (
                  <a key={l.url} className="btn small" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="frontend">
        <h2>Frontend works</h2>
        <p className="muted">Pages I built while learning web development, from HTML and CSS to JavaScript and React. Each one opens in a new tab.</p>
        <div className="grid three">
          {frontendWorks.map((w) => <WorkCard key={w.title} {...w} />)}
        </div>
      </section>

      <section id="backend">
        <h2>Backend works</h2>
        {backendWorks.length === 0 ? (
          <div className="card">
            <h3>Coming soon</h3>
            <p className="muted">I’m building backend projects with Node.js, Express, and MongoDB. They’ll appear here when they’re ready.</p>
          </div>
        ) : (
          <div className="grid three">
            {backendWorks.map((w) => <WorkCard key={w.title} label="View project" {...w} />)}
          </div>
        )}
      </section>
    </>
  )
}
