import { useState, useEffect } from 'react'

// Re-renders every minute so "on air now" stays correct.
export default function useNow() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(id)
  }, [])
  return now
}
