import { useState, useEffect } from 'react'

const WORKER_URL = 'https://vmc-news-proxy.mkhulekani-469.workers.dev'

export default function NewsFetcher() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchNews = () => {
      fetch(`${WORKER_URL}/news`)
        .then((res) => res.text())
        .then((xmlText) => {
          const parser = new DOMParser()
          const xmlDoc = parser.parseFromString(xmlText, "text/xml")
          const items = xmlDoc.querySelectorAll("item")
          
          if (items.length === 0) throw new Error("No articles found.")

          // Grab up to 20 articles
          const formattedArticles = Array.from(items).slice(0, 20).map(item => ({
            title: item.querySelector("title")?.textContent || "No title",
            url: item.querySelector("link")?.textContent || "#",
            published_at: item.querySelector("pubDate")?.textContent || "",
            description: (item.querySelector("description")?.textContent || "").replace(/<[^>]*>?/gm, '').substring(0, 150) + '...',
            sitename: 'IOL News' // Changed from SABC News to IOL News
          }))

          setArticles(formattedArticles)
          setLoading(false)
          setErrorMsg('')
        })
        .catch((err) => {
          setErrorMsg(err.message)
          setLoading(false)
        })
    }

    fetchNews()
    // Refresh every 30 minutes automatically
    const interval = setInterval(fetchNews, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) return <p className="news-status">Loading latest news…</p>
  
  if (errorMsg) return (
    <div className="empty" style={{ textAlign: 'left' }}>
      <p><strong>Couldn't load the news feed.</strong></p>
      <p style={{ fontSize: '0.85rem', fontFamily: 'monospace' }}>{errorMsg}</p>
    </div>
  )

  return (
    <div className="news-fetcher-grid">
      {articles.map((article, index) => {
        const published = article.published_at
          ? new Date(article.published_at).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })
          : ''
        return (
          <article key={article.url || index} className="news-fetcher-card">
            <h3>{article.title}</h3>
            <p className="news-fetcher-meta">{article.sitename}{published && ` • ${published}`}</p>
            <p className="news-fetcher-desc">{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer" className="text-link">Read full story →</a>
          </article>
        )
      })}
    </div>
  )
}