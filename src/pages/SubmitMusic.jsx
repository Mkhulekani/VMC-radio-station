import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import { station } from '../data.js'

export default function SubmitMusic() {
  const [f, setF] = useState({ artist: '', title: '', link: '', email: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Music submission: ${f.artist} - ${f.title}`)
    const body = encodeURIComponent(
      `Artist: ${f.artist}\nSong: ${f.title}\nListen here: ${f.link}\nContact email: ${f.email}`
    )
    window.location.href = `mailto:${station.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHead title="Submit music">
        Are you an artist? Send us your song and our music team will listen.
      </PageHead>
      <section className="section">
        <div className="container narrow">
          <form className="form" onSubmit={submit}>
            <label>
              Artist or group name
              <input required value={f.artist} onChange={set('artist')} />
            </label>
            <label>
              Song title
              <input required value={f.title} onChange={set('title')} />
            </label>
            <label>
              Link to the song
              <input required type="url" placeholder="https://" value={f.link} onChange={set('link')} />
            </label>
            <label>
              Your email
              <input required type="email" value={f.email} onChange={set('email')} />
            </label>
            <button className="btn btn-primary btn-lg" type="submit">Send submission</button>
            <p className="form-note">
              Use a SoundCloud, YouTube, Dropbox or Google Drive link. This opens your email app
              with the submission ready to send.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
