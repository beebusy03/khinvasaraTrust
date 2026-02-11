const leaders = [
  { name: 'Mr. Shantilal Khinvasara', role: 'Founder & Trustee', icon: 'fas fa-user' },
  { name: 'Dr. Anil Khinvasara', role: 'Trustee', icon: 'fas fa-user-md' },
]

const Leaders = () => {
  return (
    <section className="py-28 px-[5%] bg-gray-50">
      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20">
        <span className="section-badge">
          <i className="fas fa-user-tie"></i> Leadership
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5 leading-tight tracking-tight">
          Trust Leaders
        </h2>
        <p className="text-text-light text-lg leading-relaxed">
          Visionaries dedicated to making a difference in society
        </p>
      </div>

      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-white p-12 rounded-2xl text-center transition-all duration-300 shadow-custom-md border border-gray-200 hover:-translate-y-2.5 hover:shadow-custom-xl"
          >
            <div className="w-[130px] h-[130px] gradient-primary rounded-full flex items-center justify-center mx-auto mb-7 text-6xl text-white shadow-[0_10px_30px_rgba(15,76,117,0.3)]">
              <i className={leader.icon}></i>
            </div>
            <h3 className="text-2xl mb-2 text-dark font-semibold">{leader.name}</h3>
            <p className="text-primary font-medium text-lg">{leader.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leaders