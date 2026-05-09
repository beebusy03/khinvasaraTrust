import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useScrollLock } from '../hooks/useScrollLock';

// Media/Recognition Images
const lokmat2009 = '/2009MedicalCamp/Lokmat_B.gif';
const sakal2010_25apr = '/2010Dental/Sakal 25th April 2010.jpg';
const sakal2010_3may = '/2010Dental/Sakal 3rd May 2010.jpg';
const lokmat2010_27apr = '/2010Dental/Lokmat 27th April 2010.jpg';
const lokmat2010_3may = '/2010Dental/Lokmat 3rd May 2010.jpg';
const prabhat2011 = '/2011Ortho/Prabhat_B.jpg';
const dhakale2012_sakal = '/2012CFL/dhakale_cfl_Sakal_B.jpg';
const lokmat2013_hb = '/2013Hb/LokmatHb_B.jpg';
const kesari2018 = '/2018/Kesari Media news.jpg';
const pudhari2018 = '/2018/Media Pudhari Coverage.jpg';

const tabs = [
  { icon: 'fas fa-award', label: 'All Recognitions', filter: 'all' },
  { icon: 'fas fa-newspaper', label: 'Newspaper Coverage', filter: 'newspaper' },
];

const recognitionItems = [
  {
    image: kesari2018,
    date: 'August 2018',
    title: 'Kesari – Solar Power Project Coverage',
    description: 'Kesari newspaper covered the inauguration of the 3.25 Kw Solar Power Generation system donated to Jeevan Vidya Mandir School, Ghodegaon — the first solar project in the area for a social institute.',
    source: 'Kesari',
    category: 'newspaper',
    year: '2018',
  },
  {
    image: pudhari2018,
    date: 'August 2018',
    title: 'Pudhari – Solar Initiative for Rural School',
    description: 'Pudhari newspaper highlighted the Trust\'s solar energy initiative at Ghodegaon, recognizing the effort to bring clean energy and cost savings to a rural educational institution.',
    source: 'Pudhari',
    category: 'newspaper',
    year: '2018',
  },
  {
    image: lokmat2013_hb,
    date: 'January 2013',
    title: 'Lokmat – Haemoglobin Health Camp for Girl Students',
    description: 'Lokmat covered the Haemoglobin check-up camp conducted for nearly 300 girl students at B.D. Kale College, Ghodegaon in association with Premraj Munot Trust, Ahmednagar.',
    source: 'Lokmat',
    category: 'newspaper',
    year: '2013',
  },
  {
    image: dhakale2012_sakal,
    date: 'May 2012',
    title: 'Sakal – CFL Bulb Distribution at Dhakale Village',
    description: 'Sakal newspaper recognized the Trust\'s initiative of replacing over 200 incandescent bulbs with energy-efficient CFLs in Dhakale village, promoting rural energy conservation.',
    source: 'Sakal',
    category: 'newspaper',
    year: '2012',
  },
  {
    image: prabhat2011,
    date: 'May 2011',
    title: 'Prabhat – Orthopedic Health Camp with Sancheti Hospital',
    description: 'Prabhat newspaper covered the Orthopedic Health Camp organized in association with Sancheti Hospital at B.D. Kale College, Ghodegaon, where 262 patients received expert consultations.',
    source: 'Prabhat',
    category: 'newspaper',
    year: '2011',
  },
  {
    image: sakal2010_25apr,
    date: '25th April 2010',
    title: 'Sakal – Pre-Camp Announcement for Dental Health Camp',
    description: 'Sakal published a pre-event announcement for the upcoming Free Dental and Oral Health Camp at Ghodegaon, creating awareness and encouraging community participation.',
    source: 'Sakal',
    category: 'newspaper',
    year: '2010',
  },
  {
    image: sakal2010_3may,
    date: '3rd May 2010',
    title: 'Sakal – Dental Camp Post-Event Coverage',
    description: 'Sakal covered the successful completion of the Dental Health Camp where over 315 patients were examined and 40+ extractions were performed on the spot.',
    source: 'Sakal',
    category: 'newspaper',
    year: '2010',
  },
  {
    image: lokmat2010_27apr,
    date: '27th April 2010',
    title: 'Lokmat – Dental Camp Announcement',
    description: 'Lokmat newspaper carried the announcement of the upcoming Free Dental and Oral Health Camp to be held at Ghodegaon, helping reach rural communities.',
    source: 'Lokmat',
    category: 'newspaper',
    year: '2010',
  },
  {
    image: lokmat2010_3may,
    date: '3rd May 2010',
    title: 'Lokmat – Dental Camp Success Story',
    description: 'Lokmat reported on the overwhelming success of the Dental Health Camp, highlighting the 180 referrals for advanced treatment and the community\'s appreciation.',
    source: 'Lokmat',
    category: 'newspaper',
    year: '2010',
  },
  {
    image: lokmat2009,
    date: 'May 2009',
    title: 'Lokmat – Mega Diabetes & Cardiac Health Camp',
    description: 'Lokmat extensively covered the Free Diabetes and Heart Disease Health Camp at Ghodegaon where over 360 patients were examined by a team of 25 medical professionals from Anandrishiji Hospital.',
    source: 'Lokmat',
    category: 'newspaper',
    year: '2009',
  },
];

const Media = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  // Lock background scroll while the lightbox is open
  useScrollLock(!!selectedImage);

  const activeFilter = tabs[activeTab].filter;
  const filteredItems = recognitionItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSource = !activeSource || item.source === activeSource;
    return matchesCategory && matchesSource;
  });

  const uniqueSources = [...new Set(recognitionItems.map(i => i.source))];
  const yearSpan = {
    from: Math.min(...recognitionItems.map(i => parseInt(i.year))),
    to: Math.max(...recognitionItems.map(i => parseInt(i.year))),
  };

  const sourceCounts = uniqueSources.reduce<Record<string, number>>((acc, src) => {
    acc[src] = recognitionItems.filter(i => i.source === src).length;
    return acc;
  }, {});

  return (
    <section className="media-section" id="media">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-award"></i> Media</span>
        <h2>Recognition of the Trust</h2>
        <p>Our initiatives recognized and covered by leading newspapers and publications</p>
      </div>
      <div className="media-container">

        <div className="recognition-stats">
          <div className="recognition-stat-item">
            <i className="fas fa-newspaper"></i>
            <h4>{recognitionItems.length}</h4>
            <p>Newspaper Features</p>
          </div>
          <div className="recognition-stat-item">
            <i className="fas fa-building"></i>
            <h4>{uniqueSources.length}</h4>
            <p>Publications</p>
          </div>
          <div className="recognition-stat-item">
            <i className="fas fa-calendar-alt"></i>
            <h4>{yearSpan.from}–{yearSpan.to}</h4>
            <p>Coverage Span</p>
          </div>
          <div className="recognition-stat-item">
            <i className="fas fa-bullhorn"></i>
            <h4>{recognitionItems.length}+</h4>
            <p>Total Recognitions</p>
          </div>
        </div>

        <div className="source-badges">
          <span className="source-badge-label">Featured in:</span>
          <button
            type="button"
            className={`source-badge source-badge--all ${activeSource === null ? 'active' : ''}`}
            onClick={() => setActiveSource(null)}
          >
            <i className="fas fa-globe"></i> All
            <span className="source-badge-count">{recognitionItems.length}</span>
          </button>
          {uniqueSources.map((source, index) => (
            <button
              type="button"
              key={index}
              className={`source-badge ${activeSource === source ? 'active' : ''}`}
              onClick={() =>
                setActiveSource(prev => (prev === source ? null : source))
              }
            >
              <i className="fas fa-check-circle"></i> {source}
              <span className="source-badge-count">{sourceCounts[source]}</span>
            </button>
          ))}
        </div>

        <div className="media-tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`media-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <i className={tab.icon}></i> {tab.label}
            </div>
          ))}
        </div>

        <div className="media-grid">
          {filteredItems.map((item, index) => (
            <div className="media-card" key={index}>
              <div className="media-thumbnail">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => setSelectedImage({
                    src: item.image,
                    alt: item.title,
                    caption: `${item.title} — ${item.source}, ${item.date}`
                  })}
                  style={{ cursor: 'pointer' }}
                />
                <div className="media-source-tag">
                  <i className="fas fa-newspaper"></i>
                  {item.source}
                </div>
              </div>
              <div className="media-content">
                <div className="media-date">
                  <i className="far fa-calendar"></i> {item.date}
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <p>No recognitions found in this category.</p>
          </div>
        )}
      </div>

      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div
          className="image-modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="image-modal-content">
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="image-caption">{selectedImage.caption}</p>
          </div>
        </div>,
        document.body,
      )}

      <style>{`
        .recognition-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .recognition-stat-item {
          text-align: center;
          padding: 1.25rem 1rem;
          background: linear-gradient(135deg, #f0f9ff 0%, #e8f5e9 100%);
          border-radius: 12px;
          border: 1px solid rgba(0, 128, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .recognition-stat-item:hover {
          transform: translateY(-3px);
        }

        .recognition-stat-item i {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .recognition-stat-item h4 {
          font-size: 1.3rem;
          color: var(--dark);
          margin: 0.25rem 0;
        }

        .recognition-stat-item p {
          font-size: 0.8rem;
          color: var(--text);
          margin: 0;
          opacity: 0.8;
        }

        .source-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
          padding: 1rem 1.25rem;
          background: var(--light);
          border-radius: 10px;
        }

        .source-badge-label {
          font-weight: 600;
          color: var(--dark);
          font-size: 0.9rem;
          margin-right: 0.25rem;
        }

        .source-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.55rem 0.4rem 0.8rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 0.82rem;
          color: var(--dark);
          font-weight: 600;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          font-family: inherit;
          line-height: 1;
        }

        .source-badge:hover {
          background: rgba(15, 76, 117, 0.08);
          border-color: rgba(15, 76, 117, 0.4);
          color: var(--primary);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(15, 76, 117, 0.12);
        }

        .source-badge.active {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light, #3282b8) 100%);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 6px 18px rgba(15, 76, 117, 0.3);
        }

        .source-badge.active i { color: white; }

        .source-badge.active .source-badge-count {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }

        .source-badge i {
          font-size: 0.72rem;
          color: var(--secondary);
        }

        .source-badge:hover i {
          color: var(--primary);
        }

        .source-badge-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 22px;
          height: 22px;
          padding: 0 6px;
          border-radius: 999px;
          background: rgba(15, 76, 117, 0.1);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          font-variant-numeric: tabular-nums;
        }

        .source-badge--all {
          background: linear-gradient(135deg, rgba(15, 76, 117, 0.06) 0%, rgba(50, 130, 184, 0.06) 100%);
        }

        .media-source-tag {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: rgba(0, 0, 0, 0.75);
          color: white;
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .media-source-tag i {
          font-size: 0.65rem;
        }

        .media-thumbnail {
          position: relative;
          overflow: hidden;
          border-radius: 8px 8px 0 0;
          aspect-ratio: 16/10;
          background: var(--border);
        }

        .media-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .media-card:hover .media-thumbnail img {
          transform: scale(1.05);
        }

        .no-results {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text);
          opacity: 0.6;
        }

        .no-results i {
          font-size: 2rem;
          margin-bottom: 0.75rem;
          display: block;
        }

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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: min(92vw, 1100px);
          max-height: 92vh;
          margin: auto;
        }

        .image-modal-content img {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 88vh;
          object-fit: contain;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
        }

        .modal-close-btn {
          position: fixed;
          top: 18px;
          right: 18px;
          background: rgba(0, 0, 0, 0.6);
          border: 2px solid rgba(255, 255, 255, 0.85);
          color: white;
          font-size: 1.2rem;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, transform 0.3s ease;
          z-index: 10;
        }

        .modal-close-btn:hover {
          background: rgba(0, 0, 0, 0.85);
          transform: rotate(90deg);
        }

        .image-caption {
          color: white;
          text-align: center;
          margin-top: 1rem;
          font-size: 1rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .recognition-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .source-badges {
            padding: 0.75rem;
          }

          .image-modal-overlay { padding: 0.75rem; }
          .image-modal-content { max-width: 100%; max-height: 100vh; }
          .image-modal-content img { max-height: 78vh; }
          .modal-close-btn {
            top: 12px;
            right: 12px;
            width: 44px;
            height: 44px;
            font-size: 1.15rem;
          }
        }

        @media (max-width: 480px) {
          .recognition-stats {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }

          .recognition-stat-item {
            padding: 1rem 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Media;