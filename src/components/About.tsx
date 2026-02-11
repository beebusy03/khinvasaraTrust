const About = () => {
  return (
    <section id="about" className="py-28 px-[5%] bg-gray-50">
      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20">
        <span className="section-badge">
          <i className="fas fa-info-circle"></i> About Us
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5 leading-tight tracking-tight">
          Background of the Trust
        </h2>
        <p className="text-text-light text-lg leading-relaxed">
          Serving humanity through education, health, and community welfare since 2007
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Image */}
        <div className="lg:sticky lg:top-[120px]">
          <div className="relative rounded-2xl overflow-hidden shadow-custom-xl">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Khinvasara Trust"
              className="w-full block rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
            <div className="absolute bottom-8 right-8 gradient-secondary text-white py-7 px-9 rounded-xl text-center shadow-[0_15px_40px_rgba(212,119,14,0.4)] z-20">
              <span className="text-5xl font-bold block leading-none mb-1">2007</span>
              <span className="text-sm opacity-95 font-medium">Established</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-4">
          <h3 className="font-serif text-3xl md:text-4xl mb-6 text-dark leading-snug">
            Khinvasara Family (Ghodegaonkar) Welfare Nidhi
          </h3>
          
          <p className="text-text-light mb-6 text-lg leading-relaxed">
            Khinvasara Family (Ghodegaonkar) Welfare Nidhi (hereinafter called "Khinvasara Trust") is located at "Aastha", Plot no 8, Madhukunj Hsg Society, Panchawati, Pashan Road, Pune -08.
          </p>

          <div className="bg-white p-8 rounded-xl my-10 border-l-4 border-primary shadow-custom-sm">
            <h4 className="text-primary mb-4 text-lg flex items-center gap-2.5 font-semibold">
              <i className="fas fa-file-contract"></i> Official Registration Details
            </h4>
            <p className="mb-3 text-base text-text-primary">
              <strong className="text-dark font-semibold">Public Charitable Trust:</strong> Registration No. F-21722/Pune
            </p>
            <p className="mb-3 text-base text-text-primary">
              <strong className="text-dark font-semibold">Societies Registration Act, 1860:</strong> Registration No. 241/2007/Pune dated 12.02.07
            </p>
          </div>

          <p className="text-text-light mb-6 text-lg leading-relaxed">
            The board of the Khinvasara Trust constitutes seven members which include one chairman, secretary, treasurers, and three other members.
          </p>

          <div className="bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] p-8 rounded-xl my-10 border-l-4 border-gold shadow-custom-sm">
            <h4 className="text-secondary mb-4 flex items-center gap-2.5 text-lg font-semibold">
              <i className="fas fa-certificate"></i> Income Tax Exemption Certificate
            </h4>
            <p className="mb-3 text-base text-text-primary">
              The Trust has obtained an 80G certificate from the Income Tax department. This gives donors the opportunity to claim tax exemption as per rules of section 80G.
            </p>
            <p className="mb-3 text-base text-text-primary">
              <strong className="text-dark font-semibold">Order No:</strong> Pn/CIT-I/80G/255/2011-12/3542 <strong className="text-dark font-semibold">dated</strong> 20.12.2011
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About