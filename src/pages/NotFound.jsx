import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-title">
      <h1>Page not found</h1>
      <p className="lead muted">That address doesn’t exist on this site.</p>
      <div className="links"><Link className="btn main" to="/">Go to the home page</Link></div>
    </section>
  )
}
