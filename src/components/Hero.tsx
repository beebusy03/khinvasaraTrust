const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center text-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 76, 117, 0.97) 0%, rgba(50, 130, 184, 0.95) 100%), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='white' opacity='0.1'/%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-[900px] px-8 z-10">
        <span className="inline-flex items-center gap-2 bg-white/15 px-6 py-2.5 rounded-full text-sm mb-8 backdrop-blur-lg border border-white/20 animate-fade-in-down font-medium">
          <i className="fas fa-certificate"></i>
          Registered Public Charitable Trust Since 2007
        </span>
        
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Khinvasara Family Welfare Nidhi
        </h1>
        
        <p className="text-lg opacity-90 mb-8 font-normal animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Empowering Communities Through Education, Health & Social Service
        </p>
        
        <p className="text-xl md:text-2xl mb-3 italic opacity-95 max-w-[800px] mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          "I know of no great men except those who have rendered great service to the human race."
        </p>
        
        <p className="text-base opacity-80 mb-12 font-medium animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          — Voltaire
        </p>
        
        <div className="flex gap-5 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#donate" onClick={(e) => handleScroll(e, '#donate')} className="btn btn-primary">
            <i className="fas fa-hand-holding-heart"></i>
            Make a Donation
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="btn btn-outline">
            <i className="fas fa-arrow-right"></i>
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-custom z-10">
        <i className="fas fa-chevron-down text-3xl text-white opacity-60"></i>
      </div>
    </section>
  )
}

export default Hero