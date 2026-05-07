interface CTAProps {
  onDonateClick?: () => void;
}

const CTA = ({ onDonateClick }: CTAProps) => {
  const handleContactWithSubject = (
    e: React.MouseEvent<HTMLAnchorElement>,
    subject: string
  ) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Dispatch after a brief delay so Contact is mounted/visible first
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('prefill-contact-subject', { detail: { subject } })
      );
    }, 400);
  };

  const handleDonate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onDonateClick) onDonateClick();
  };

  return (
    <section className="cta" id="donate">
      <div className="cta-content">
        <h2>Be the Change You Want to See</h2>
        <p>Join us in our mission to serve humanity.</p>
        <div className="hero-buttons">
          <a href="#donate" onClick={handleDonate} className="btn btn-outline">
            <i className="fas fa-heart"></i>
            Make a Donation
          </a>
          <a
            href="#contact"
            onClick={(e) => handleContactWithSubject(e, 'sahayogi')}
            className="btn btn-outline"
          >
            <i className="fas fa-handshake"></i>
            Become a Sahayogi Sabhasad
          </a>
          <a
            href="#contact"
            onClick={(e) => handleContactWithSubject(e, 'member')}
            className="btn btn-outline"
          >
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