const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <a href="#" className="logo">
            <div className="logo-icon">
              <i className="fas fa-hands-holding-heart"></i>
            </div>
            <div className="logo-text-container">
              <span className="logo-text">Khinvasara Trust</span>
              <span className="logo-tagline">Serving Since 2007</span>
            </div>
          </a>
          <p>Khinvasara Family (Ghodegaonkar) Welfare Nidhi - A registered public charitable trust dedicated to serving humanity through comprehensive welfare initiatives in education, health, and community development.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
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
        <div className="footer-column">
          <h4>Our Work</h4>
          <ul className="footer-links">
            <li><a href="#"><i className="fas fa-chevron-right"></i> Student Scholarships</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Medical Camps</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Disaster Relief</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> School Infrastructure</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Community Support</a></li>
          </ul>
        </div>
        <div className="footer-column footer-contact">
          <h4>Contact Info</h4>
          <p><i className="fas fa-map-marker-alt"></i> 'Aastha', Madhukunj Hsg Society, Panchavati, Pune-08</p>
          <p><i className="fas fa-phone-alt"></i> +91 20-2589 8536 | +91 94226 46691</p>
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
          Registered under Public Charitable Trust (F-21722/Pune) & Societies Registration Act, 1860 (241/2007/Pune)
        </p>
        <p>© Copyright 2007 - 2024 Khinvasara Trust. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;