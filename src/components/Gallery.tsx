import { useState } from 'react';

const filters = ['All', 'Health', 'Education', 'Community Service', 'Events'];

const galleryItems = [
  { image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', title: 'Community Awareness Program', category: 'Health & Education', large: true },
  { image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80', title: 'Education Initiative', category: 'Scholarship Program', large: false },
  { image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', title: 'Medical Health Camp', category: 'Free Check-ups', large: false },
  { image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', title: 'Food Distribution', category: 'Relief Work', large: false },
  { image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80', title: 'Volunteer Activities', category: 'Community Service', large: false },
  { image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', title: 'School Infrastructure', category: 'Education', large: false },
  { image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', title: 'Annual Gathering', category: 'Team & Beneficiaries', large: true },
  { image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', title: 'Healthcare Services', category: 'Medical Camp', large: false },
  { image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', title: 'Vaccination Drive', category: 'COVID-19 Initiative', large: false },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-images"></i> Gallery</span>
        <h2>Our Work in Pictures</h2>
        <p>Visual stories of impact and transformation across communities</p>
      </div>
      <div className="gallery-container">
        <div className="gallery-filters">
          {filters.map((filter) => (
            <div
              key={filter}
              className={`gallery-filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className={`gallery-item ${item.large ? 'large' : ''}`} key={index}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;