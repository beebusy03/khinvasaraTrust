import { useState } from 'react';

// Health Category Images
const health_2009_camp = '/2009MedicalCamp/002.jpg';
const health_2009_ecg = '/2009MedicalCamp/004.jpg';
const health_2010_dental = '/2010Dental/005.jpg';
const health_2010_dental2 = '/2010Dental/012.jpg';
const health_2010_dental3 = '/2010Dental/022.jpg';
const health_2011_ortho = '/2011Ortho/003.jpg';
const health_2011_ortho2 = '/2011Ortho/010.jpg';
const health_2013_hb = '/2013Hb/011.JPG';
const health_2013_hb2 = '/2013Hb/013.JPG';
const health_2014_camp = '/2014Health/003.jpg';
const health_2014_camp2 = '/2014Health/010.JPG';
const health_2020_umed = '/2020/001 Umed Parivar.jpg';
const health_2020_transformer = '/2020/002 Transformer.jpg';
const health_2021_vaccine = '/2021/003.jpg';
const health_2021_vaccine2 = '/2021/008.jpg';
const health_2020_pmcares = '/2020PMCares/image152.jpg';

// Education Category Images
const edu_2008_chairs = '/2008/001.jpg';
const edu_2009_watercooler = '/2009/001 2009 Water cooler.jpg';
const edu_2010_bench1 = '/2010Benchesdonation/15th Aug Snap 1.jpg';
const edu_2010_bench2 = '/2010Benchesdonation/15th Aug Snap 2.jpg';
const edu_2011_science = '/2011Science/005.jpg';
const edu_2011_science2 = '/2011Science/012.jpg';
const edu_2013_scholarship = '/2013Scholarship/001.jpg';
const edu_2013_scholarship2 = '/2013Scholarship/003.jpg';
const edu_2023_elearning = '/2023/001.jpg';
const edu_2023_elearning2 = '/2023/003.jpg';

// Environment Category Images
const env_2012_cfl = '/2012CFL/005.JPG';
const env_2012_cfl2 = '/2012CFL/010.JPG';
const env_2013_cfl = '/2013CFL/003.JPG';
const env_2013_cfl2 = '/2013CFL/007.JPG';
const env_2016_shettale = '/2016ShetTale/009.JPG';
const env_2016_shettale2 = '/2016ShetTale/0014.JPG';
const env_2018_solar = '/2018/01.JPG';
const env_2018_solar2 = '/2018/06.JPG';
const env_2025_tree = '/2025/005.jpg';
const env_2025_tree2 = '/2025/009.jpg';
const env_2025_tree3 = '/2025/007.jpg';

// Community Service Category Images
const community_2008_food = '/2008/002.jpg';
const community_2020_family = '/2020/007 Family Memebers 2.jpg';
const community_2020_team = '/2020/006 Members with Umed team.jpg';
const community_2025_group = '/2025/001.jpg';

const filters = ['All', 'Health', 'Education', 'Environment', 'Community Service'];

interface GalleryItem {
  image: string;
  title: string;
  category: string;
  filterCategory: string;
  year: string;
  large?: boolean;
}

const galleryItems: GalleryItem[] = [
  // Health
  { image: health_2009_camp, title: 'Mega Diabetes & Cardiac Health Camp', category: 'Health Camp – 2009', filterCategory: 'Health', year: '2009', large: true },
  { image: health_2009_ecg, title: 'ECG Testing at Free Health Camp', category: 'Health Camp – 2009', filterCategory: 'Health', year: '2009' },
  { image: health_2010_dental, title: 'Free Dental & Oral Health Camp', category: 'Dental Camp – 2010', filterCategory: 'Health', year: '2010' },
  { image: health_2010_dental2, title: 'Dental Treatment in Progress', category: 'Dental Camp – 2010', filterCategory: 'Health', year: '2010' },
  { image: health_2010_dental3, title: 'Patient Care at Dental Camp', category: 'Dental Camp – 2010', filterCategory: 'Health', year: '2010' },
  { image: health_2011_ortho, title: 'Orthopedic Camp with Sancheti Hospital', category: 'Orthopedic Camp – 2011', filterCategory: 'Health', year: '2011', large: true },
  { image: health_2011_ortho2, title: 'Bone Density Screening', category: 'Orthopedic Camp – 2011', filterCategory: 'Health', year: '2011' },
  { image: health_2013_hb, title: 'Haemoglobin Screening for Girl Students', category: 'Haemoglobin Camp – 2013', filterCategory: 'Health', year: '2013' },
  { image: health_2013_hb2, title: 'Health Awareness at B.D. Kale College', category: 'Haemoglobin Camp – 2013', filterCategory: 'Health', year: '2013' },
  { image: health_2014_camp, title: 'Multi-Focus Health Camp at Dimbhe', category: 'Health Camp – 2014', filterCategory: 'Health', year: '2014' },
  { image: health_2014_camp2, title: 'Ruby Hall Clinic Medical Team', category: 'Health Camp – 2014', filterCategory: 'Health', year: '2014' },
  { image: health_2020_umed, title: 'Umed Pariwar – Electricity Infrastructure', category: 'Infrastructure – 2020', filterCategory: 'Health', year: '2020' },
  { image: health_2020_transformer, title: '200 KVA Transformer Installation', category: 'Infrastructure – 2020', filterCategory: 'Health', year: '2020' },
  { image: health_2021_vaccine, title: 'COVID-19 Vaccination Drive', category: 'Vaccination – 2021', filterCategory: 'Health', year: '2021', large: true },
  { image: health_2021_vaccine2, title: 'Second Dose Vaccination at Umed Pariwar', category: 'Vaccination – 2021', filterCategory: 'Health', year: '2021' },
  { image: health_2020_pmcares, title: 'PM CARES Fund Contribution', category: 'COVID Relief – 2020', filterCategory: 'Health', year: '2020' },

  // Education
  { image: edu_2008_chairs, title: 'Chair Donation to School Library', category: 'Education Support – 2008', filterCategory: 'Education', year: '2008' },
  { image: edu_2009_watercooler, title: 'Water Cooler for B.D. Kale College', category: 'Campus Health – 2009', filterCategory: 'Education', year: '2009' },
  { image: edu_2010_bench1, title: 'Bench Donation for B.C.S. Program', category: 'Education Infra – 2010', filterCategory: 'Education', year: '2010' },
  { image: edu_2010_bench2, title: 'Supporting College Infrastructure', category: 'Education Infra – 2010', filterCategory: 'Education', year: '2010' },
  { image: edu_2011_science, title: 'Science Projects Exhibition', category: 'Education – 2011', filterCategory: 'Education', year: '2011', large: true },
  { image: edu_2011_science2, title: 'Hands-on Science Learning', category: 'Education – 2011', filterCategory: 'Education', year: '2011' },
  { image: edu_2013_scholarship, title: 'Scholarship Award Ceremony', category: 'Scholarships – 2013', filterCategory: 'Education', year: '2013' },
  { image: edu_2013_scholarship2, title: 'Empowering Dreams Through Education', category: 'Scholarships – 2013', filterCategory: 'Education', year: '2013' },
  { image: edu_2023_elearning, title: 'Digital E-Learning Kit Installation', category: 'Digital Learning – 2023', filterCategory: 'Education', year: '2023', large: true },
  { image: edu_2023_elearning2, title: 'Students Engaging with Digital Content', category: 'Digital Learning – 2023', filterCategory: 'Education', year: '2023' },

  // Environment
  { image: env_2012_cfl, title: 'CFL Distribution at Dhakale Village', category: 'Energy Conservation – 2012', filterCategory: 'Environment', year: '2012' },
  { image: env_2012_cfl2, title: 'Lighting Up Lives – Village Drive', category: 'Energy Conservation – 2012', filterCategory: 'Environment', year: '2012' },
  { image: env_2013_cfl, title: 'CFL Drive at Talekarwadi', category: 'Energy Conservation – 2013', filterCategory: 'Environment', year: '2013' },
  { image: env_2013_cfl2, title: 'Adarsh Gram Panchayat – Talekarwadi', category: 'Energy Conservation – 2013', filterCategory: 'Environment', year: '2013' },
  { image: env_2016_shettale, title: 'Shet Tale – Farm Pond Construction', category: 'Water Conservation – 2016', filterCategory: 'Environment', year: '2016', large: true },
  { image: env_2016_shettale2, title: '88 Lakh Litres Water Storage', category: 'Water Conservation – 2016', filterCategory: 'Environment', year: '2016' },
  { image: env_2018_solar, title: 'Solar Power System Inauguration', category: 'Solar Energy – 2018', filterCategory: 'Environment', year: '2018', large: true },
  { image: env_2018_solar2, title: '3.25 Kw Solar Power at Ghodegaon School', category: 'Solar Energy – 2018', filterCategory: 'Environment', year: '2018' },
  { image: env_2025_tree, title: 'Tree Plantation Drive at Vetale', category: 'Reforestation – 2025', filterCategory: 'Environment', year: '2025' },
  { image: env_2025_tree2, title: 'Family Participation in Plantation', category: 'Reforestation – 2025', filterCategory: 'Environment', year: '2025' },
  { image: env_2025_tree3, title: 'Hands-on Tree Planting', category: 'Reforestation – 2025', filterCategory: 'Environment', year: '2025' },

  // Community Service
  { image: community_2008_food, title: 'Food Grain Donation', category: 'Community Service – 2008', filterCategory: 'Community Service', year: '2008', large: true },
  { image: community_2020_family, title: 'Khinvasara Parivar – Family Together', category: 'Family Unity', filterCategory: 'Community Service', year: '2020' },
  { image: community_2020_team, title: 'Members with Umed Pariwar Team', category: 'Collaboration – 2020', filterCategory: 'Community Service', year: '2020' },
  { image: community_2025_group, title: 'Community Coming Together', category: 'Together We Serve – 2025', filterCategory: 'Community Service', year: '2025' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.filterCategory === activeFilter);

  // Category counts
  const categoryCounts: Record<string, number> = {
    'All': galleryItems.length,
    'Health': galleryItems.filter(i => i.filterCategory === 'Health').length,
    'Education': galleryItems.filter(i => i.filterCategory === 'Education').length,
    'Environment': galleryItems.filter(i => i.filterCategory === 'Environment').length,
    'Community Service': galleryItems.filter(i => i.filterCategory === 'Community Service').length,
  };

  const filterIcons: Record<string, string> = {
    'All': 'fas fa-th',
    'Health': 'fas fa-heartbeat',
    'Education': 'fas fa-graduation-cap',
    'Environment': 'fas fa-leaf',
    'Community Service': 'fas fa-hands-helping',
  };

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
              <i className={filterIcons[filter]}></i>
              {filter}
              <span className="filter-count">{categoryCounts[filter]}</span>
            </div>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              className={`gallery-item ${item.large ? 'large' : ''}`}
              key={index}
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
                <h4>{item.title}</h4>
                <p>{item.category}</p>
                <span className="gallery-year-badge">{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="gallery-no-results">
            <i className="fas fa-images"></i>
            <p>No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="image-modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="modal-info">
              <h4>{selectedImage.title}</h4>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .gallery-filter {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          border: 2px solid var(--border);
          background: white;
          color: var(--text);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .gallery-filter:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .gallery-filter.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        .gallery-filter i {
          font-size: 0.8rem;
        }

        .filter-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 1.4rem;
          height: 1.4rem;
          padding: 0 0.3rem;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.08);
          font-size: 0.7rem;
          font-weight: 700;
        }

        .gallery-filter.active .filter-count {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
          grid-auto-flow: dense;
        }

        .gallery-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
          background: var(--border);
        }

        .gallery-item.large {
          grid-column: span 2;
          grid-row: span 1;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 60%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 1.25rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.8rem;
          color: white;
          opacity: 0.9;
        }

        .gallery-overlay h4 {
          color: white;
          font-size: 0.95rem;
          text-align: center;
          margin: 0 0 0.25rem;
          line-height: 1.3;
        }

        .gallery-overlay p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.8rem;
          text-align: center;
          margin: 0;
        }

        .gallery-year-badge {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 0.2rem 0.6rem;
          background: var(--primary);
          color: white;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .gallery-no-results {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text);
          opacity: 0.5;
        }

        .gallery-no-results i {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.75rem;
        }

        /* Modal */
        .image-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .image-modal-content img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .modal-close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .modal-info {
          text-align: center;
          margin-top: 1rem;
        }

        .modal-info h4 {
          color: white;
          font-size: 1.1rem;
          margin: 0 0 0.3rem;
        }

        .modal-info p {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.9rem;
          margin: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }

          .gallery-item.large {
            grid-column: span 1;
          }

          .gallery-filters {
            gap: 0.4rem;
          }

          .gallery-filter {
            padding: 0.4rem 0.75rem;
            font-size: 0.8rem;
          }

          .modal-close-btn {
            top: 10px;
            right: 10px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
          }

          .gallery-overlay h4 {
            font-size: 0.8rem;
          }

          .gallery-overlay p {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;