import { useState, useEffect } from 'react'

const API_KEY = 'AIzaSyB_usBeg6ot1CsYpKaXrt7pemOUgERIvIM'
// The UU... ID we found (Uploads Playlist)
const UPLOADS_PLAYLIST_ID = 'UUxeuFWK7f060YImVrl_mjeA' 

// Helper to decode HTML entities in YouTube titles (like &amp;)
const decodeHTML = (html) => {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

export default function YouTubeFetcher({ limit = 4, carousel = false }) {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchVideos = () => {
      // Using playlistItems (cheap, 1 unit) instead of search (expensive, 100 units)
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${limit}&playlistId=${UPLOADS_PLAYLIST_ID}&key=${API_KEY}`

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error.message)
          }
          setVideos(data.items || [])
          setLoading(false)
          setErrorMsg('')
        })
        .catch((err) => {
          setErrorMsg(err.message)
          setLoading(false)
        })
    }

    fetchVideos() 
    const interval = setInterval(fetchVideos, 15 * 60 * 1000)
    return () => clearInterval(interval)
  }, [limit])

  if (loading) return <p>Loading videos...</p>

  if (errorMsg) {
    return (
      <div className="empty">
        <p>Could not load videos. Check API key.</p>
        <p style={{ fontSize: '0.8rem' }}>{errorMsg}</p>
      </div>
    )
  }
  
  if (videos.length === 0) return <p>No videos found.</p>

  // Duplicate items for seamless loop if carousel is true
  const displayVideos = carousel ? [...videos, ...videos] : videos

  return (
    <div className={carousel ? "yt-carousel" : "youtube-grid"}>
      <div className={carousel ? "yt-track" : ""} style={!carousel ? { display: 'contents' } : {}}>
        {displayVideos.map((video, index) => {
          // playlistItems nests the ID differently than search
          const videoId = video.snippet.resourceId.videoId
          const title = decodeHTML(video.snippet.title)
          const thumbnail = video.snippet.thumbnails.high?.url || video.snippet.thumbnails.default?.url
          const published = new Date(video.snippet.publishedAt).toLocaleDateString('en-ZA', {
            day: 'numeric', month: 'short', year: 'numeric'
          })

          return (
            <article 
              key={`${videoId}-${index}`} 
              className="yt-card"
              aria-hidden={carousel && index >= videos.length}
            >
              <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" className="yt-thumb">
                <img src={thumbnail} alt="" loading="lazy" />
                <span className="yt-play">▶</span>
              </a>
              <div className="yt-info">
                <h3>{title}</h3>
                <p className="meta">{published}</p>
                <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" className="yt-btn">
                  Watch Video
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}