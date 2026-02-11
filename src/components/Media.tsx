import { useState } from 'react';

const tabs = [
  { icon: 'fas fa-newspaper', label: 'All Media' },
  { icon: 'fas fa-video', label: 'Videos' },
  { icon: 'fas fa-image', label: 'Photos' },
  { icon: 'fas fa-file-alt', label: 'Press Releases' },
];

const mediaItems = [
  { image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', date: 'October 23, 2021', title: 'Umed Pariwar COVID-19 Vaccination Drive', description: 'Successfully conducted second dose vaccination drive in partnership with PMC for intellectually disabled individuals.', views: '1.2K views', likes: '245 likes', hasVideo: true },
  { image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', date: 'March 15, 2021', title: 'Scholarship Distribution Ceremony', description: 'Annual scholarship program benefiting underprivileged students across Pune district.', views: '890 views', likes: '178 likes', hasVideo: false },
  { image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', date: 'January 28, 2020', title: 'Free Medical Health Camp', description: 'Organized comprehensive health check-up camp providing free medical services to rural communities.', views: '654 views', likes: '142 likes', hasVideo: false },
  { image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', date: 'November 12, 2019', title: 'School Infrastructure Project Inauguration', description: 'Inauguration of newly constructed library and computer lab at Government School.', views: '1.5K views', likes: '312 likes', hasVideo: true },
  { image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', date: 'August 5, 2019', title: 'Food Grain Distribution Drive', description: 'Distribution of essential food grains to families affected by monsoon floods.', views: '720 views', likes: '156 likes', hasVideo: false },
  { image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80', date: 'February 18, 2018', title: 'Science Projects Exhibition', description: 'Annual science exhibition showcasing innovative projects by students from various schools.', views: '985 views', likes: '203 likes', hasVideo: false },
];

const Media = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="media-section" id="media">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-photo-video"></i> Media</span>
        <h2>News & Updates</h2>
        <p>Latest coverage of our activities and impact stories</p>
      </div>
      <div className="media-container">
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
          {mediaItems.map((item, index) => (
            <div className="media-card" key={index}>
              <div className="media-thumbnail">
                <img src={item.image} alt={item.title} />
                {item.hasVideo && (
                  <div className="media-play-btn">
                    <i className="fas fa-play"></i>
                  </div>
                )}
              </div>
              <div className="media-content">
                <div className="media-date">
                  <i className="far fa-calendar"></i> {item.date}
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="media-meta">
                  <span><i className="fas fa-eye"></i> {item.views}</span>
                  <span><i className="fas fa-heart"></i> {item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;