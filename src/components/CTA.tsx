const CTA = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="donate"
      className="py-28 px-[5%] text-center text-white relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(212, 119, 14, 0.96) 0%, rgba(184, 100, 8, 0.94) 100%), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='white' opacity='0.1'/%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Be the Change You Want to See
        </h2>
        <p className="text-xl max-w-[650px] mx-auto mb-12 opacity-95 leading-relaxed">
          Your contribution can transform lives and create lasting impact in communities that need it most. Join us in our mission to serve humanity.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="btn border-2 border-white text-white bg-transparent hover:bg-white hover:text-secondary"
          >
            <i className="fas fa-heart"></i>
            Make a Donation
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="btn border-2 border-white text-white bg-transparent hover:bg-white hover:text-secondary"
          >
            <i className="fas fa-handshake"></i>
            Become a Member
          </a>
        </div>
        <div className="bg-white/15 py-5 px-10 rounded-xl inline-block mt-12 text-base backdrop-blur-lg border border-white/20">
          <i className="fas fa-certificate mr-2.5 text-gold"></i>
          Income Tax Exemption u/sec. 80G vide Order No: Pn/CIT-I/80G/255/2011-12/3542 dated 20.12.2011
        </div>
      </div>
    </section>
  )
}

export default CTA