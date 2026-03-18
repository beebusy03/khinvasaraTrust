interface HeroProps {
  onDonateClick: () => void;
}

const Hero = ({ onDonateClick }: HeroProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onDonateClick();
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">
          <i className="fas fa-certificate"></i>
          Registered Public Charitable Trust Since 2007
        </span>
        <h1>Khinvasara Parivar (Ghodegaonkar) Welfare Nidhi</h1>
        <p className="hero-tagline" style={{marginBottom:"5px"}}>Serving Humanity with Compassion & Dedication</p>
        <div className="hero-buttons">
          <a href="#donate" onClick={handleDonateClick} className="btn btn-primary">
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