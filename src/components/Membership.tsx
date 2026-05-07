import I18nText from './I18nText';

const memberships = [
  { icon: 'fas fa-infinity',  title: 'Life Member',      titleMr: 'जीवन सभासद',     hindi: 'Ajeevan Sabhasad' },
  { icon: 'fas fa-star',      title: 'Founder Member',   titleMr: 'संस्थापक सभासद', hindi: 'Sansthapak Sabhasad' },
  { icon: 'fas fa-handshake', title: 'Associate Member', titleMr: 'सहयोगी सभासद',  hindi: 'Sahayogi Sabhasad' },
];

const Membership = () => {
  return (
    <section className="membership-section">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-users"></i> Join Us</span>
        <h2>Membership Categories</h2>
        <p>Become a part of our mission to serve humanity and create lasting impact</p>
      </div>
      <div className="membership-grid">
        {memberships.map((membership, index) => (
          <div className="membership-card" key={index}>
            <div className="membership-icon">
              <i className={membership.icon}></i>
            </div>
            <h3>
              <I18nText en={membership.title} mr={membership.titleMr} />
            </h3>
            <p className="hindi-name notranslate" translate="no">{membership.hindi}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Membership;