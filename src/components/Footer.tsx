import Tlogo from '../assets/Tlogo.png';

// Map focus areas to their event year anchors
const focusAreaLinks = [
  { icon: 'fas fa-graduation-cap', label: 'Education', year: '2023' },
  { icon: 'fas fa-heartbeat',      label: 'Healthcare', year: '2021' },
  { icon: 'fas fa-leaf',           label: 'Environmental Care', year: '2025' },
  { icon: 'fas fa-hands-helping',  label: 'Social Welfare', year: '2020' },
  { icon: 'fas fa-home',           label: 'Natural Calamity Relief', year: '2018' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleFocusAreaClick = (e: React.MouseEvent<HTMLAnchorElement>, year: string) => {
    e.preventDefault();

    const eventsSection = document.querySelector('#events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      const badges = document.querySelectorAll('.year-badge');
      badges.forEach((badge) => {
        if (badge.textContent?.trim().startsWith(year)) {
          (badge as HTMLElement).click();
        }
      });
    }, 800);
  };

  return (
    <footer>
      <div className="footer-container">
        {/* ── BRAND ── */}
        <div className="footer-about">
          <a href="#" className="logo footer-logo">
            <div className="logo-icon footer-logo-icon">
              <img src={Tlogo} alt="Khinvasara Trust Logo" className="logo-image" />
            </div>
            <div className="logo-text-container">
              <span className="logo-text">Khinvasara Trust</span>
              <span className="logo-tagline">Serving Since 2007</span>
            </div>
          </a>
          <p>
            Khinvasara Family (Ghodegaonkar) Welfare Nidhi — A registered public charitable trust
            dedicated to serving humanity through comprehensive welfare initiatives in education,
            health, and community development.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* ── QUICK LINKS ── */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
            <li><a href="#about"><i className="fas fa-chevron-right"></i> About Us</a></li>
            <li><a href="#events"><i className="fas fa-chevron-right"></i> Events</a></li>
            <li><a href="#media"><i className="fas fa-chevron-right"></i> Media</a></li>
            <li><a href="#gallery"><i className="fas fa-chevron-right"></i> Gallery</a></li>
            <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact</a></li>
          </ul>
        </div>

        {/* ── FOCUS AREAS ── */}
        <div className="footer-column">
          <h4>Our Focus Areas</h4>
          <ul className="footer-links footer-focus-links">
            {focusAreaLinks.map(({ icon, label, year }) => (
              <li key={label}>
                <a
                  href="#events"
                  onClick={(e) => handleFocusAreaClick(e, year)}
                  title={`View ${label} events`}
                >
                  <i className={icon}></i> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── CONTACT ── */}
        <div className="footer-column footer-contact">
          <h4>Contact Info</h4>
          <p><i className="fas fa-map-marker-alt"></i> Flat No 302, Fortune House, Baner Pashan Link Road, Baner, Pune-411045</p>
          <p><i className="fas fa-phone-alt"></i> +91 94226 46691</p>
          <p><i className="fas fa-envelope"></i> info@khinvasaratrust.org</p>
          <p><i className="fas fa-globe"></i> www.khinvasaratrust.org</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="tax-info">
          <i className="fas fa-certificate"></i>
          Income Tax Exemption u/sec. 80G | Order No: Pn/CIT-I/80G/255/2011-12/3542
        </div>
        <p className="registration-info">
          Registered under Public Charitable Trust (F-21722/Pune) &amp; Societies Registration Act, 1860 (241/2007/Pune)
        </p>
        <p>© Copyright 2007 - {currentYear} Khinvasara Trust. All Rights Reserved.</p>
      </div>

      <style>{`
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          margin-bottom: 1rem;
        }

        .footer-logo-icon {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          flex-shrink: 0;
        }

        .footer-logo-icon .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .footer-focus-links li a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center; /* centred on mobile */
        }

        @media (min-width: 768px) {
          .footer-focus-links li a {
            justify-content: flex-start; /* left-aligned on tablet+ */
          }
        }

        .footer-focus-links li a i {
          font-size: 0.85rem;
          width: 1.1rem;
          color: var(--secondary, #d4770e);
          transition: color 0.2s ease;
        }

        .footer-focus-links li a:hover i {
          color: white;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .social-links a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.8);
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
          font-size: 0.95rem;
        }

        .social-links a:hover {
          background: var(--secondary, #d4770e);
          color: white;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
