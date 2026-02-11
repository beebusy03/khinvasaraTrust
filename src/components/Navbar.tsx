import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">
        <div className="logo-icon">
          <i className="fas fa-hands-holding-heart"></i>
        </div>
        <div className="logo-text-container">
          <span className="logo-text">Khinvasara Trust</span>
          <span className="logo-tagline">Serving Since 2007</span>
        </div>
      </a>
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
        <li><a href="#events" onClick={(e) => handleNavClick(e, '#events')}>Events</a></li>
        <li><a href="#media" onClick={(e) => handleNavClick(e, '#media')}>Media</a></li>
        <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        <li><a href="#donate" onClick={(e) => handleNavClick(e, '#donate')} className="btn btn-primary"><i className="fas fa-heart"></i> Donate</a></li>
      </ul>
      <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;