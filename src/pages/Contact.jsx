import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import { station } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No server needed: the form opens the visitor's email app, addressed to the studio.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${station.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHead title="Contact us">We're happy to hear from you.</PageHead>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <h2>Reach the studio</h2>
            <p>
              <strong>Call</strong>
              <br />
              <a href={station.phoneHref}>{station.phone}</a>
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${station.email}`}>{station.email}</a>
            </p>
            <p>
              <strong>Visit</strong>
              <br />
              {station.address}
            </p>
            <p>
              <strong>Follow</strong>
              <br />
              {station.socials.map((s, i) => (
                <span key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
                  {i < station.socials.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>

          <form className="form" onSubmit={submit}>
            <h2>Send a message</h2>
            <label>
              Your name
              <input required value={form.name} onChange={update('name')} autoComplete="name" />
            </label>
            <label>
              Your email
              <input required type="email" value={form.email} onChange={update('email')} autoComplete="email" />
            </label>
            <label>
              Message
              <textarea required rows="6" value={form.message} onChange={update('message')} />
            </label>
            <button className="btn btn-primary btn-lg" type="submit">Send message</button>
            <p className="form-note">This opens your email app with the message ready to send.</p>
          </form>
        </div>
      </section>
    </>
  )
}
