import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-[5%] py-5 flex justify-between items-center z-[1000] transition-all duration-400 ${
        scrolled
          ? 'bg-white/[0.98] backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] py-4'
          : 'bg-transparent'
      }`}
    >
      <a href="#" className="flex items-center gap-3 no-underline">
        <div className="w-[52px] h-[52px] gradient-primary rounded-xl flex items-center justify-center text-white text-2xl transition-transform duration-300 hover:-translate-y-0.5">
          <i className="fas fa-hands-holding-heart"></i>
        </div>
        <div className="flex flex-col">
          <span
            className={`font-serif text-2xl font-bold leading-tight transition-colors duration-300 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Khinvasara Trust
          </span>
          <span
            className={`text-[0.65rem] font-medium tracking-wider uppercase transition-colors duration-300 ${
              scrolled ? 'text-text-light' : 'text-white/80'
            }`}
          >
            Serving Since 2007
          </span>
        </div>
      </a>

      <ul
        className={`flex list-none gap-10 items-center max-md:fixed max-md:top-0 max-md:w-[85%] max-md:h-screen max-md:bg-white max-md:flex-col max-md:justify-center max-md:transition-all max-md:duration-300 max-md:shadow-[-10px_0_40px_rgba(0,0,0,0.15)] max-md:z-[1000] ${
          mobileMenuOpen ? 'max-md:right-0' : 'max-md:-right-full'
        }`}
      >
        {['Home', 'About', 'Events', 'Media', 'Gallery', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
              className={`no-underline font-medium text-[0.95rem] transition-all duration-300 relative tracking-wide hover:text-accent max-md:text-dark max-md:text-xl ${
                scrolled ? 'text-text-primary' : 'text-white'
              } after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#donate"
            onClick={(e) => handleNavClick(e, '#donate')}
            className="btn btn-primary"
          >
            <i className="fas fa-heart"></i> Donate
          </a>
        </li>
      </ul>

      <button
        className={`hidden max-md:block bg-none border-none text-2xl cursor-pointer z-[1001] ${
          scrolled ? 'text-text-primary' : 'text-white'
        }`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </nav>
  )
}

export default Navbar