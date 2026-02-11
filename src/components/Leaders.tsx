const Leaders = () => {
  return (
    <section className="leaders">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-user-tie"></i> Leadership</span>
        <h2>Trust Leaders</h2>
        <p>Visionaries dedicated to making a difference in society</p>
      </div>
      <div className="leaders-container">
        <div className="leader-card">
          <div className="leader-avatar">
            <i className="fas fa-user"></i>
          </div>
          <h3>Mr. Shantilal Khinvasara</h3>
          <p className="role">Founder & Trustee</p>
        </div>
        <div className="leader-card">
          <div className="leader-avatar">
            <i className="fas fa-user-md"></i>
          </div>
          <h3>Dr. Anil Khinvasara</h3>
          <p className="role">Trustee</p>
        </div>
      </div>
    </section>
  );
};

export default Leaders;