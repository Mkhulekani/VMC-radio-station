import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Player from './components/Player.jsx'
import Home from './pages/Home.jsx'
import Shows from './pages/Shows.jsx'
import Presenters from './pages/Presenters.jsx'
import Events from './pages/Events.jsx'
import News from './pages/News.jsx'
import Podcasts from './pages/Podcasts.jsx'
import RadioDrama from './pages/RadioDrama.jsx'
import Tv from './pages/Tv.jsx'
import SubmitMusic from './pages/SubmitMusic.jsx'
import Gallery from './pages/Gallery.jsx'
import Advertise from './pages/Advertise.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [playerOpen, setPlayerOpen] = useState(false)
  const openPlayer = () => setPlayerOpen(true)

  return (
    <>
      <ScrollToTop />
      <Header onListen={openPlayer} />
      <main>
        <Routes>
          <Route path="/" element={<Home onListen={openPlayer} />} />
          <Route path="/shows" element={<Shows onListen={openPlayer} />} />
          <Route path="/presenters" element={<Presenters />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/radio-drama" element={<RadioDrama />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/submit-music" element={<SubmitMusic />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home onListen={openPlayer} />} />
        </Routes>
      </main>
      <Footer />
      <Player open={playerOpen} onClose={() => setPlayerOpen(false)} />
    </>
  )
}
