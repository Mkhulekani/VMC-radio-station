import { useState, useEffect } from 'react'

// Swaps the headline word every few seconds.
export default function RotatingWord({ words, interval = 2600 }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="rotator">
      {/* Screen readers get the full set once instead of every swap */}
      <span className="sr-only">{words.join(' ')}</span>
      <span key={i} className="rotator-word" aria-hidden="true">
        {words[i]}
      </span>
    </span>
  )
}
