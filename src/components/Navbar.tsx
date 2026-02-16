import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Tlogo from '../assets/Tlogo.png';

interface NavbarProps {
  onDonateClick: () => void;
}

const Navbar = ({ onDonateClick }: NavbarProps) => {
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

  const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onDonateClick();
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">
        <div className="logo-icon">
           <img src={Tlogo} alt="Khinvasara Trust Logo" className="logo-image" />
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
      </ul>
      
      <div className="nav-right-controls">
        <a href="#donate" onClick={handleDonateClick} className="btn btn-primary donate-btn">
          <i className="fas fa-heart"></i> Donate
        </a>
        <div className="desktop-lang-switcher">
          <LanguageSwitcher />
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;