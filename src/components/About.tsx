import familyImage from '../../public/2020/007 Family Memebers 2.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-info-circle"></i> About Us</span>
        <h2>Together We Care, Together We Serve</h2>
        <p className="sanskrit-quote">"सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामया"</p>
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
          
          <p><strong>Khinvasara Family (Ghodegaonkar) Welfare Nidhi</strong>, popularly known as <strong>Khinvasara Trust</strong>, was founded with a simple belief — to give back to society with sincerity, compassion, and collective family commitment.</p>
          
          <p>Rooted in strong family values, the Trust reflects our belief that meaningful change begins when families come together to serve the community. Our mission is to nurture a culture of togetherness, responsibility, and compassion, while extending a helping hand to deserving individuals and communities for a better tomorrow.</p>

          <div className="focus-areas-box">
            <h4><i className="fas fa-bullseye"></i> Our Focus Areas</h4>
            <p>The Trust focuses on key areas that contribute to a stronger and more inclusive society:</p>
            <ul className="focus-areas-list">
              <li>
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <strong>Education</strong>
                  <span>Supporting students through scholarships and helping educational institutions to strengthen infrastructure.</span>
                </div>
              </li>
              <li>
                <i className="fas fa-heartbeat"></i>
                <div>
                  <strong>Healthcare</strong>
                  <span>Organizing medical camps and facilitating access to quality healthcare for rural and underserved communities.</span>
                </div>
              </li>
              <li>
                <i className="fas fa-leaf"></i>
                <div>
                  <strong>Environmental Care</strong>
                  <span>Promoting initiatives that encourage environmental sustainability.</span>
                </div>
              </li>
              <li>
                <i className="fas fa-hands-helping"></i>
                <div>
                  <strong>Social Welfare</strong>
                  <span>Extending support to vulnerable sections of society including the underprivileged.</span>
                </div>
              </li>
              <li>
                <i className="fas fa-home"></i>
                <div>
                  <strong>Natural Calamity Relief</strong>
                  <span>Providing assistance and relief to victims of natural disasters.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="registration-info">
            <h4><i className="fas fa-file-contract"></i> Official Registration Details</h4>
            <p>Established as a <strong>Public Charitable Trust</strong> (Registration No. F-21722/Pune) under the <strong>Societies Registration Act, 1860</strong> (Registration No. 241/2007/Pune dated 12 February 2007), the Trust operates from Flat No 302, Fortune House, Baner Pashan Link Road, Baner, Pune - 411045.</p>
          </div>

          <p>The Trust is guided by a <strong>seven-member board</strong> comprising the Chairman, Secretary, Treasurer, and committee members who oversee and drive its initiatives.</p>

          <div className="tax-exemption-box">
            <h4><i className="fas fa-certificate"></i> Income Tax Exemption (80G)</h4>
            <p>The Trust has received <strong>80G certification</strong> from the Income Tax Department, enabling donors to claim tax benefits for their contributions and encouraging wider participation in its mission.</p>
            <p><strong>Order No:</strong> Pn/CIT-I/80G/255/2011-12/3542 <strong>dated</strong> 20.12.2011</p>
          </div>

          <div className="membership-box">
            <h4><i className="fas fa-users"></i> Membership Categories</h4>
            <div className="membership-cards">
              <div className="membership-card">
                <i className="fas fa-gem"></i>
                <strong>Ajeevan Sabhasad</strong>
                <span>Life Member</span>
              </div>
              <div className="membership-card">
                <i className="fas fa-star"></i>
                <strong>Sansthapak Sabhasad</strong>
                <span>Founder Member</span>
              </div>
              <div className="membership-card">
                <i className="fas fa-handshake"></i>
                <strong>Sahayogi Sabhasad</strong>
                <span>Associate Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sanskrit-quote {
          font-size: 1.3rem;
          font-style: italic;
          color: var(--primary);
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .focus-areas-box {
          background: linear-gradient(135deg, #f0f9ff 0%, #e8f5e9 100%);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border: 1px solid rgba(0, 128, 0, 0.1);
        }

        .focus-areas-box h4 {
          color: var(--dark);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
        }

        .focus-areas-box > p {
          margin-bottom: 1rem;
          color: var(--text);
        }

        .focus-areas-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .focus-areas-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 8px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .focus-areas-list li:hover {
          transform: translateX(4px);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }

        .focus-areas-list li > i {
          font-size: 1.3rem;
          color: var(--primary);
          margin-top: 0.15rem;
          min-width: 1.5rem;
          text-align: center;
        }

        .focus-areas-list li div {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .focus-areas-list li strong {
          color: var(--dark);
          font-size: 0.95rem;
        }

        .focus-areas-list li span {
          color: var(--text);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .membership-box {
          background: linear-gradient(135deg, #fff8e1 0%, #fff3e0 100%);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border: 1px solid rgba(255, 152, 0, 0.15);
        }

        .membership-box h4 {
          color: var(--dark);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
        }

        .membership-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }

        .membership-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.25rem 1rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          gap: 0.5rem;
        }

        .membership-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .membership-card i {
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }

        .membership-card strong {
          color: var(--dark);
          font-size: 0.95rem;
        }

        .membership-card span {
          color: var(--text);
          font-size: 0.85rem;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .sanskrit-quote {
            font-size: 1.1rem;
          }

          .membership-cards {
            grid-template-columns: 1fr;
          }

          .focus-areas-list li {
            padding: 0.6rem 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;