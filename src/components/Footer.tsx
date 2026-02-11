const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-8 px-[5%]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* About Column */}
        <div>
          <a href="#" className="flex items-center gap-3 no-underline mb-7">
            <div className="w-[52px] h-[52px] gradient-primary rounded-xl flex items-center justify-center text-white text-2xl">
              <i className="fas fa-hands-holding-heart"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-white leading-tight">
                Khinvasara Trust
              </span>
              <span className="text-[0.65rem] text-white font-medium tracking-wider uppercase">
                Serving Since 2007
              </span>
            </div>
          </a>
          <p className="text-white/70 mb-7 text-base leading-relaxed">
            Khinvasara Family (Ghodegaonkar) Welfare Nidhi - A registered public charitable trust dedicated to serving humanity through comprehensive welfare initiatives in education, health, and community development.
          </p>
          <div className="flex gap-4">
            {['facebook-f', 'twitter', 'instagram', 'linkedin-in', 'youtube'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-1"
              >
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl mb-7 relative pb-3 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[3px] after:bg-secondary after:rounded">
            Quick Links
          </h4>
          <ul className="list-none">
            {['Home', 'About Us', 'Events', 'Media', 'Gallery', 'Contact'].map((link) => (
              <li key={link} className="mb-3.5">
                <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/70 no-underline transition-colors duration-300 flex items-center gap-2 text-base hover:text-secondary">
                  <i className="fas fa-chevron-right text-xs"></i> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Work */}
        <div>
          <h4 className="text-xl mb-7 relative pb-3 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[3px] after:bg-secondary after:rounded">
            Our Work
          </h4>
          <ul className="list-none">
            {['Student Scholarships', 'Medical Camps', 'Disaster Relief', 'School Infrastructure', 'Community Support'].map((work) => (
              <li key={work} className="mb-3.5">
                <a href="#" className="text-white/70 no-underline transition-colors duration-300 flex items-center gap-2 text-base hover:text-secondary">
                  <i className="fas fa-chevron-right text-xs"></i> {work}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl mb-7 relative pb-3 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[3px] after:bg-secondary after:rounded">
            Contact Info
          </h4>
          <p className="text-white/70 mb-4 flex items-start gap-3 text-base leading-relaxed">
            <i className="fas fa-map-marker-alt text-secondary mt-1"></i>
            'Aastha', Madhukunj Hsg Society, Panchavati, Pune-08
          </p>
          <p className="text-white/70 mb-4 flex items-start gap-3 text-base leading-relaxed">
            <i className="fas fa-phone-alt text-secondary mt-1"></i>
            +91 20-2589 8536 | +91 94226 46691
          </p>
          <p className="text-white/70 mb-4 flex items-start gap-3 text-base leading-relaxed">
            <i className="fas fa-envelope text-secondary mt-1"></i>
            info@khinvasaratrust.org
          </p>
          <p className="text-white/70 mb-4 flex items-start gap-3 text-base leading-relaxed">
            <i className="fas fa-globe text-secondary mt-1"></i>
            www.khinvasaratrust.org
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1300px] mx-auto mt-16 pt-10 border-t border-white/10 text-center text-white/70">
        <div className="bg-white/[0.08] py-5 px-8 rounded-xl text-sm mb-6 inline-block border border-white/10">
          <i className="fas fa-certificate text-gold mr-2.5"></i>
          Income Tax Exemption u/sec. 80G | Order No: Pn/CIT-I/80G/255/2011-12/3542
        </div>
        <p className="text-sm mb-4 opacity-80">
          Registered under Public Charitable Trust (F-21722/Pune) & Societies Registration Act, 1860 (241/2007/Pune)
        </p>
        <p className="text-sm">© Copyright 2007 - 2024 Khinvasara Trust. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer