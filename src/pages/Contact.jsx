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

            <p className="contact-row">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>
                <strong>Call</strong><br />
                <a href={station.phoneHref}>{station.phone}</a>
              </span>
            </p>

            <p className="contact-row">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>
                <strong>Email</strong><br />
                <a href={`mailto:${station.email}`}>{station.email}</a>
              </span>
            </p>

            <p className="contact-row">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                <strong>Visit</strong><br />
                {station.address}
              </span>
            </p>

            <p className="contact-row contact-row--label"><strong>Follow</strong></p>
            <div className="contact-socials">
              <a href={station.socials[0].href} target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href={station.socials[1].href} target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a href={station.socials[2].href} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
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

      {/* ---------- Map (full width, below the grid) ---------- */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <h2>Find us</h2>
            <span className="meta">Johannesburg Athletic Stadium, New Doornfontein</span>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=VMC+PLANET+RADIO,-26.1930675,28.0606177&z=17&output=embed"
              title="VMC Planet Radio location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}