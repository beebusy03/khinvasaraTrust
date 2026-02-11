const purposes = [
  { icon: 'fas fa-graduation-cap', title: 'Student Scholarships', description: 'Helping students by way of donations or scholarships in cash or kind after a thorough evaluation process' },
  { icon: 'fas fa-hands-helping', title: 'Disaster Relief', description: 'Making help and assistance available to victims of natural calamities' },
  { icon: 'fas fa-heartbeat', title: 'Medical Treatment', description: 'Striving to make quality medical treatment available to the rural and urban poor' },
  { icon: 'fas fa-users', title: 'Community Support', description: 'Reaching out to the weaker section of the community, like widows and the aged and providing assistance in various forms' },
  { icon: 'fas fa-school', title: 'Education Infrastructure', description: 'Boosting the cause of education by helping schools and educational institutions create adequate infrastructure' },
];

const Purpose = () => {
  return (
    <section className="purpose-section">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-bullseye"></i> Our Mission</span>
        <h2>Purpose of the Trust</h2>
        <p>Dedicated to serving society through comprehensive welfare initiatives</p>
      </div>
      <div className="purpose-container">
        <div className="purpose-grid">
          {purposes.map((purpose, index) => (
            <div className="purpose-card" key={index}>
              <div className="purpose-icon">
                <i className={purpose.icon}></i>
              </div>
              <div className="purpose-content">
                <h4>{purpose.title}</h4>
                <p>{purpose.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;