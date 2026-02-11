const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">
          <i className="fas fa-certificate"></i>
          Registered Public Charitable Trust Since 2007
        </span>
        <h1>Khinvasara Family Welfare Nidhi</h1>
        <p className="hero-subtitle">Empowering Communities Through Education, Health & Social Service</p>
        <p className="hero-quote">"I know of no great men except those who have rendered great service to the human race."</p>
        <p className="hero-quote-author">— Voltaire</p>
        <div className="hero-buttons">
          <a href="#donate" onClick={(e) => handleScroll(e, '#donate')} className="btn btn-primary">
            <i className="fas fa-hand-holding-heart"></i>
            Make a Donation
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="btn btn-outline">
            <i className="fas fa-arrow-right"></i>
            Learn More
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;