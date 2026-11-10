import { useState, useEffect } from 'react'

const API_KEY = 'AIzaSyQVmPBcW4Q4m4y1__tjRmwodFnzFU2_5M8'
const PLAYLIST_ID = 'PLXaLBqnbT5uFSnK4-LxRlNnUSeGWDWYgO'

export default function YouTubeFetcher({ limit = 4 }) {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchVideos = () => {
      // We use the `limit` prop to decide how many videos to fetch
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${limit}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`

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

    fetchVideos() // Fetch immediately when the page loads

    // Automatically check for new videos every 15 minutes
    const interval = setInterval(fetchVideos, 15 * 60 * 1000)
    
    // Cleanup timer if user leaves the page
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

  return (
    <div className="youtube-grid">
      {videos.map((video) => {
        const title = video.snippet.title
        const videoId = video.snippet.resourceId.videoId
        const thumbnail = video.snippet.thumbnails.high?.url || video.snippet.thumbnails.default?.url
        const published = new Date(video.snippet.publishedAt).toLocaleDateString('en-ZA', {
          day: 'numeric', month: 'short', year: 'numeric'
        })

        return (
          <article key={videoId} className="yt-card">
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
  )
}