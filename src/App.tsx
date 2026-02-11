import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Media from './components/Media'
import Footer from './components/Footer'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Leaders from './components/Leaders'
import Purpose from './components/Purpose'
import Membership from './components/Membership'
import Gallery from './components/Gallery'
import Board from './components/Board'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader isLoading={loading} />
      <Navbar />
      <Hero />
      <About />
      <Purpose />
      <Membership />
      <Events />
      <Media />
      <Gallery />
      <Board />
      <Leaders />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}

export default App