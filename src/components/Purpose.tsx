const purposes = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Student Scholarships',
    description: 'Helping students by way of donations or scholarships in cash or kind after a thorough evaluation process',
  },
  {
    icon: 'fas fa-hands-helping',
    title: 'Disaster Relief',
    description: 'Making help and assistance available to victims of natural calamities',
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Medical Treatment',
    description: 'Striving to make quality medical treatment available to the rural and urban poor',
  },
  {
    icon: 'fas fa-users',
    title: 'Community Support',
    description: 'Reaching out to the weaker section of the community, like widows and the aged and providing assistance in various forms',
  },
  {
    icon: 'fas fa-school',
    title: 'Education Infrastructure',
    description: 'Boosting the cause of education by helping schools and educational institutions create adequate infrastructure',
  },
]

const Purpose = () => {
  return (
    <section className="py-28 px-[5%] bg-white">
      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20">
        <span className="section-badge">
          <i className="fas fa-bullseye"></i> Our Mission
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5 leading-tight tracking-tight">
          Purpose of the Trust
        </h2>
        <p className="text-text-light text-lg leading-relaxed">
          Dedicated to serving society through comprehensive welfare initiatives
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {purposes.map((purpose, index) => (
            <div
              key={index}
              className="bg-gray-50 p-10 rounded-xl flex gap-7 transition-all duration-300 border border-gray-200 hover:-translate-y-2 hover:shadow-custom-lg hover:border-primary-light"
            >
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center text-2xl text-white flex-shrink-0">
                <i className={purpose.icon}></i>
              </div>
              <div>
                <h4 className="text-xl text-dark mb-3 font-semibold">{purpose.title}</h4>
                <p className="text-text-light text-base leading-relaxed">{purpose.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Purpose