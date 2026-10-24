import { useState } from 'react'
import { profile } from '../data/profile.js'

const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('_honey')) return // spam trap: real people never fill this in
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: `Portfolio message from ${data.get('name')}`,
          _template: 'table',
        }),
      })
      const json = await res.json()
      if (res.ok && String(json.success) === 'true') {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-title">
        <h1>Contact</h1>
        <p className="lead muted">I’m open to junior backend and automation roles. Send me a message and it goes straight to my inbox.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-info">
          <h2>Other ways to reach me</h2>
          <p className="muted">Prefer your own email app? Write to me directly, or find me on GitHub and LinkedIn.</p>
          <div className="links">
            <a className="btn main" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>
            Your name
            <input name="name" type="text" required maxLength={80} autoComplete="name" />
          </label>
          <label>
            Your email
            <input name="email" type="email" required maxLength={120} autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" required maxLength={3000} />
          </label>
          <input className="hp" name="_honey" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          <p className="status ok" role="status" hidden={status !== 'sent'}>Thanks, your message was sent. I’ll reply soon.</p>
          <p className="status err" role="alert" hidden={status !== 'error'}>
            Something went wrong. Please email me directly at {profile.email}.
          </p>
        </form>
      </section>
    </>
  )
}
