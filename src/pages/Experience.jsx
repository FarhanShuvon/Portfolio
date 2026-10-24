import { experience, education } from '../data/resume.js'

function Timeline({ items, variant }) {
  return (
    <div className={`timeline ${variant}`}>
      {items.map((it) => (
        <div className="tl-item" key={it.title + it.when}>
          <div className="tl-when">{it.when}</div>
          <h3>{it.title}</h3>
          <p className="muted org">{it.org}</p>
          {it.points && <ul>{it.points.map((p) => <li key={p}>{p}</li>)}</ul>}
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <section className="page-title">
        <h1>My journey so far</h1>
        <p className="lead muted">Where I’ve worked and where I’ve studied.</p>
      </section>
      <section>
        <h2>Work</h2>
        <Timeline items={experience} variant="work" />
      </section>
      <section>
        <h2>Education</h2>
        <Timeline items={education} variant="edu" />
      </section>
    </>
  )
}
