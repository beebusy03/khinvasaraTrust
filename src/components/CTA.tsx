const CTA = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="cta" id="donate">
      <div className="cta-content">
        <h2>Be the Change You Want to See</h2>
        <p>Your contribution can transform lives and create lasting impact in communities that need it most. Join us in our mission to serve humanity.</p>
        <div className="hero-buttons">
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="btn btn-outline">
            <i className="fas fa-heart"></i>
            Make a Donation
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="btn btn-outline">
            <i className="fas fa-handshake"></i>
            Become a Member
          </a>
        </div>
        <div className="tax-badge">
          <i className="fas fa-certificate"></i>
          Income Tax Exemption u/sec. 80G vide Order No: Pn/CIT-I/80G/255/2011-12/3542 dated 20.12.2011
        </div>
      </div>
    </section>
  );
};

export default CTA;