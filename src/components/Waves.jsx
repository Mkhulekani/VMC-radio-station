import { useEffect, useRef } from 'react'

// Flowing sound waves drawn on a canvas. This is the hero background.
export default function Waves() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf
    let w = 0
    let h = 0

    const layers = [
      { amp: 0.09, freq: 1.2, speed: 0.35, y: 0.62, color: 'rgba(255,106,43,0.55)', width: 2 },
      { amp: 0.07, freq: 1.8, speed: -0.5, y: 0.66, color: 'rgba(255,197,49,0.45)', width: 1.5 },
      { amp: 0.11, freq: 0.9, speed: 0.25, y: 0.7, color: 'rgba(190,150,255,0.35)', width: 1.5 },
      { amp: 0.05, freq: 2.6, speed: 0.7, y: 0.74, color: 'rgba(255,255,255,0.22)', width: 1 },
      { amp: 0.08, freq: 1.5, speed: -0.3, y: 0.78, color: 'rgba(255,106,43,0.3)', width: 1 },
    ]

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      layers.forEach((l, i) => {
        ctx.beginPath()
        for (let x = 0; x <= w; x += 6) {
          const nx = x / w
          // taper the wave at both edges so it fades in and out
          const taper = Math.sin(nx * Math.PI)
          const y =
            h * l.y +
            Math.sin(nx * Math.PI * 2 * l.freq + t * l.speed + i) * h * l.amp * taper +
            Math.sin(nx * Math.PI * 5 + t * 0.9 + i * 2) * h * 0.012 * taper
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = l.color
        ctx.lineWidth = l.width
        ctx.stroke()
      })
    }

    const loop = (ms) => {
      draw(ms / 1000)
      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)
    if (reduce) draw(2)
    else raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="waves" aria-hidden="true" />
}
