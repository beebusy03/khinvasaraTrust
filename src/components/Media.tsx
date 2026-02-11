import { useState } from 'react'

const tabs = [
  { icon: 'fas fa-newspaper', label: 'All Media' },
  { icon: 'fas fa-video', label: 'Videos' },
  { icon: 'fas fa-image', label: 'Photos' },
  { icon: 'fas fa-file-alt', label: 'Press Releases' },
]

const mediaItems = [
  {
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'October 23, 2021',
    title: 'Umed Pariwar COVID-19 Vaccination Drive',
    description: 'Successfully conducted second dose vaccination drive in partnership with PMC for intellectually disabled individuals.',
    views: '1.2K',
    likes: '245',
    hasVideo: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'March 15, 2021',
    title: 'Scholarship Distribution Ceremony',
    description: 'Annual scholarship program benefiting underprivileged students across Pune district.',
    views: '890',
    likes: '178',
    hasVideo: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'January 28, 2020',
    title: 'Free Medical Health Camp',
    description: 'Organized comprehensive health check-up camp providing free medical services to rural communities.',
    views: '654',
    likes: '142',
    hasVideo: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'November 12, 2019',
    title: 'School Infrastructure Project Inauguration',
    description: 'Inauguration of newly constructed library and computer lab at Government School.',
    views: '1.5K',
    likes: '312',
    hasVideo: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'August 5, 2019',
    title: 'Food Grain Distribution Drive',
    description: 'Distribution of essential food grains to families affected by monsoon floods.',
    views: '720',
    likes: '156',
    hasVideo: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80',
    date: 'February 18, 2018',
    title: 'Science Projects Exhibition',
    description: 'Annual science exhibition showcasing innovative projects by students from various schools.',
    views: '985',
    likes: '203',
    hasVideo: false,
  },
]

const Media = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="media" className="py-28 px-[5%] bg-white">
      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20">
        <span className="section-badge">
          <i className="fas fa-photo-video"></i> Media
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5 leading-tight tracking-tight">
          News & Updates
        </h2>
        <p className="text-text-light text-lg leading-relaxed">
          Latest coverage of our activities and impact stories
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-4 px-8 bg-gray-50 border-2 rounded-lg cursor-pointer font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-primary text-white border-primary'
                  : 'text-text-primary border-transparent hover:border-primary hover:text-primary'
              }`}
            >
              <i className={tab.icon}></i> {tab.label}
            </div>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-custom-md transition-all duration-300 border border-gray-200 hover:-translate-y-2 hover:shadow-custom-xl"
            >
              <div className="relative w-full pb-[60%] overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {item.hasVideo && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-15 h-15 bg-white/95 rounded-full flex items-center justify-center text-primary text-2xl shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white">
                    <i className="fas fa-play"></i>
                  </div>
                )}
              </div>
              <div className="p-7">
                <div className="text-primary text-sm font-semibold mb-2 flex items-center gap-1.5">
                  <i className="far fa-calendar"></i> {item.date}
                </div>
                <h4 className="text-lg text-dark mb-3 leading-snug font-semibold">{item.title}</h4>
                <p className="text-text-light text-base leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center gap-6 pt-4 border-t border-gray-200 text-sm text-text-light">
                  <span className="flex items-center gap-1.5">
                    <i className="fas fa-eye"></i> {item.views} views
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="fas fa-heart"></i> {item.likes} likes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Media