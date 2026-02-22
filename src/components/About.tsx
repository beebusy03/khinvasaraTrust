import familyImage from '../assets/2020/007 Family Memebers 2.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-info-circle"></i> About Us</span>
        <h2>Background of the Trust</h2>
        <p>Serving humanity through education, health, and community welfare since 2007</p>
      </div>
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-wrapper">
            <img src={familyImage} alt="Khinvasara Family Members" />
            <div className="established-badge">
              <span className="year">2007</span>
              <span className="label">Established</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <h3>Khinvasara Family (Ghodegaonkar) Welfare Nidhi</h3>
          <p>Khinvasara Family (Ghodegaonkar) Welfare Nidhi (hereinafter called "Khinvasara Trust") is located at "Aastha", Plot no 8, Madhukunj Hsg Society, Panchawati, Pashan Road, Pune -08.</p>
          
          <div className="registration-info">
            <h4><i className="fas fa-file-contract"></i> Official Registration Details</h4>
            <p><strong>Public Charitable Trust:</strong> Registration No. F-21722/Pune</p>
            <p><strong>Societies Registration Act, 1860:</strong> Registration No. 241/2007/Pune dated 12.02.07</p>
          </div>

          <p>The board of the Khinvasara Trust constitutes seven members which include one chairman, secretary, treasurers, and three other members.</p>

          <div className="tax-exemption-box">
            <h4><i className="fas fa-certificate"></i> Income Tax Exemption Certificate</h4>
            <p>The Trust has obtained an 80G certificate from the Income Tax department. This gives donors the opportunity to claim tax exemption as per rules of section 80G.</p>
            <p><strong>Order No:</strong> Pn/CIT-I/80G/255/2011-12/3542 <strong>dated</strong> 20.12.2011</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;