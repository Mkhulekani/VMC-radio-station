import { useState, useEffect } from 'react'

const FNA_KEY = 'fna_live_4sMJja10NdRj4d2E4wpJM7bwPj76ss4y4g_lD7CaEDM'

export default function NewsFetcher() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const apiUrl =
      'https://freenewsapi.ai/v1/search?country=ZA&lang=en&date=48h&sort=date&size=12&strict_country=true'

    // CORS proxy: browser → Cloudflare Worker → API
    const url = `https://vmc-news-proxy.mkhulekani-469.workers.dev/?url=${encodeURIComponent(apiUrl)}`

    const fetchNews = () => {
      fetch(url, {
        headers: { Authorization: `Bearer ${FNA_KEY}` },
      })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)
          return res.json()
        })
        .then((data) => {
          if (!Array.isArray(data.results)) {
            throw new Error('Unexpected response: ' + JSON.stringify(data).slice(0, 200))
          }
          setArticles(data.results)
          setLoading(false)
          setErrorMsg('') // clear any previous error when a retry succeeds
        })
        .catch((err) => {
          setErrorMsg(err.message || String(err))
          setLoading(false)
        })
    }

    fetchNews()                                         // initial load
    const id = setInterval(fetchNews, 30 * 60 * 1000)   // every 30 minutes
    return () => clearInterval(id)
  }, [])

  if (loading) return <p className="news-status">Loading latest news…</p>

  if (errorMsg) {
    return (
      <div className="empty" style={{ textAlign: 'left' }}>
        <p><strong>Couldn't load the news feed.</strong></p>
        <p style={{ fontSize: '0.85rem', fontFamily: 'monospace', wordBreak: 'break-all' }}>
          {errorMsg}
        </p>
        <p style={{ fontSize: '0.85rem' }}>
          The page will try again automatically in a few minutes.
        </p>
      </div>
    )
  }

  if (articles.length === 0) {
    return <p className="news-status">No recent South African articles were returned.</p>
  }

  return (
    <div className="news-fetcher-grid">
      {articles.map((article, index) => {
        const published = article.published_at
          ? new Date(article.published_at).toLocaleDateString('en-ZA', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })
          : ''

        return (
          <article key={article.url || index} className="news-fetcher-card">
            <h3>{article.title}</h3>
            <p className="news-fetcher-meta">
              {(article.sitename || article.host || 'Source')}
              {published && ` • ${published}`}
            </p>
            <p className="news-fetcher-desc">
              {article.description || 'No summary available.'}
            </p>
            <a href={article.url} target="_blank" rel="noreferrer" className="text-link">
              Read full story →
            </a>
          </article>
        )
      })}
    </div>
  )
}