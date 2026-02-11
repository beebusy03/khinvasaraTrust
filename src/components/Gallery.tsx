import { useState } from 'react'

const filters = ['All', 'Health', 'Education', 'Community Service', 'Events']

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
]

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <section id="gallery" className="py-28 px-[5%] bg-gray-50">
      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20">
        <span className="section-badge">
          <i className="fas fa-images"></i> Gallery
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5 leading-tight tracking-tight">
          Our Work in Pictures
        </h2>
        <p className="text-text-light text-lg leading-relaxed">
          Visual stories of impact and transformation across communities
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filters.map((filter) => (
            <div
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-3 px-7 bg-white border-2 rounded-full cursor-pointer font-semibold transition-all duration-300 text-base ${
                activeFilter === filter
                  ? 'bg-primary text-white border-primary'
                  : 'text-text-primary border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {filter}
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer aspect-square bg-gray-200 group ${
                item.large ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-light/85 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 p-8 text-center group-hover:opacity-100">
                <i className="fas fa-search-plus text-4xl text-white mb-4"></i>
                <h4 className="text-white text-lg mb-2 font-semibold">{item.title}</h4>
                <p className="text-white/90 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery