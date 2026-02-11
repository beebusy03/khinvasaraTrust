const memberships = [
  { icon: 'fas fa-infinity', title: 'Life Member', hindi: 'Ajeevan Sabhasad' },
  { icon: 'fas fa-star', title: 'Founder Member', hindi: 'Sansthapak Sabhasad' },
  { icon: 'fas fa-handshake', title: 'Associate Member', hindi: 'Sahayogi Sabhasad' },
]

const Membership = () => {
  return (
    <section className="py-28 px-[5%] gradient-primary text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-1/2 -right-1/5 w-[600px] h-[600px] bg-white/5 rounded-full"></div>
      <div className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] bg-white/5 rounded-full"></div>

      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20 relative z-10">
        <span className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5 tracking-wide uppercase">
          <i className="fas fa-users"></i> Join Us
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-5 leading-tight tracking-tight">
          Membership Categories
        </h2>
        <p className="text-white/90 text-lg leading-relaxed">
          Become a part of our mission to serve humanity and create lasting impact
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl p-12 rounded-2xl text-center transition-all duration-300 border border-white/15 hover:bg-white/[0.18] hover:-translate-y-2.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            <div className="w-[85px] h-[85px] bg-white rounded-full flex items-center justify-center mx-auto mb-7 text-4xl text-primary shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <i className={membership.icon}></i>
            </div>
            <h3 className="text-2xl mb-2 font-semibold">{membership.title}</h3>
            <p className="text-base opacity-85 italic font-normal">{membership.hindi}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Membership