import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-primary text-white border-none rounded-xl cursor-pointer text-xl shadow-[0_8px_25px_rgba(15,76,117,0.4)] transition-all duration-300 z-[999] hover:bg-primary-dark hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,76,117,0.5)] ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

export default BackToTop