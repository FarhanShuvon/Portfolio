export default function WorkCard({ title, description, tags = [], url, label = 'Open live page' }) {
  return (
    <article className={tags.includes('React') ? 'card work react' : 'card work'}>
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      {tags.length > 0 && (
        <ul className="chips">
          {tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      )}
      {url ? (
        <a className="btn small" href={url} target="_blank" rel="noreferrer">{label}</a>
      ) : (
        <span className="muted soon">Link coming soon</span>
      )}
    </article>
  )
}
