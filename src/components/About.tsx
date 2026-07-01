import { useState, useEffect, useRef } from 'react';
import I18nText from './I18nText';

// Family snaps for the carousel
const carouselImages = [
  { src: '/2025/Photos-461.jpg', alt: 'Khinvasara Family Members' },
  { src: '/2020/007 Family Memebers 2.jpg', alt: 'Khinvasara Family Members' },
  { src: '/2010Dental/022.jpg', alt: 'Family Members with Umed Team' },
  { src: '/2010Dental/023.jpg', alt: 'Family Members with Umed Team' },
  { src: '/2010Dental/024.jpg', alt: 'Family Members with Umed Team' },
  { src: '/2010Dental/027.jpg', alt: 'Family Members with Umed Team' },
  { src: '/2025/001.jpg', alt: 'Family at Umed Pariwar' },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  // Auto-play every 5 seconds; pause on hover
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const pauseAutoPlay = () => setIsPaused(true);
  const resumeAutoPlay = () => setIsPaused(false);

  const handleFocusAreaClick = (e: React.MouseEvent<HTMLAnchorElement>, filter: string) => {
    e.preventDefault();

    const gallerySection = document.querySelector('#gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      const filters = document.querySelectorAll('.gallery-filter');
      filters.forEach((el) => {
        if (el.textContent?.trim().toLowerCase().startsWith(filter.toLowerCase())) {
          (el as HTMLElement).click();
        }
      });
    }, 700);
  };

  return (
    <section className="about" id="about">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-info-circle"></i> About Us</span>
        <h2 className="notranslate" translate="no">Together We Care,<br/>Together We Serve</h2>
        <p className="sanskrit-quote notranslate" translate="no">"सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामया"</p>
      </div>
      <div className="about-container">
        {/* === CAROUSEL === */}
        <div className="about-image">
          <div
            className="about-carousel-wrapper"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            {/* Slides */}
            <div className="carousel-track">
              {carouselImages.map((img, i) => (
                <div
                  key={i}
                  className={`carousel-slide ${i === currentSlide ? 'active' : ''}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>

            {/* Prev / Next */}
            <button className="carousel-btn carousel-prev" onClick={prevSlide} aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-btn carousel-next" onClick={nextSlide} aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Dots */}
            <div className="carousel-dots">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Established badge */}
            <div className="established-badge">
              <span className="year">2007</span>
              <span className="label">Established</span>
            </div>
          </div>
        </div>

        {/* === CONTENT === */}
        <div className="about-content">
          <h3>
            <I18nText
              en="Khinvasara Family (Ghodegaonkar) Welfare Nidhi"
              mr="खिंवासरा फॅमिली (घोडेगांवकर) वेलफेअर निधी"
            />
          </h3>

          <I18nText
            as="p"
            en={
              <>
                <strong>Khinvasara Family (Ghodegaonkar) Welfare Nidhi</strong>,
                popularly known as <strong>Khinvasara Trust</strong>, was founded
                with a simple belief — to give back to society with sincerity,
                compassion, and collective family commitment.
              </>
            }
            mr={
              <>
                <strong>खिंवासरा फॅमिली (घोडेगांवकर) वेलफेअर निधी</strong>, जो{' '}
                <strong>खिंवासरा ट्रस्ट</strong> या नावाने ओळखला जातो, त्याची
                स्थापना एका साध्या श्रद्धेतून झाली — प्रामाणिकपणा, करुणा आणि
                सामूहिक कौटुंबिक बांधिलकीच्या भावनेने समाजाचे ऋण फेडावे, हीच ती
                श्रद्धा.
              </>
            }
          />

          <I18nText
            as="p"
            en="Rooted in strong family values, the Trust reflects our belief that meaningful change begins when families come together to serve the community. Our mission is to nurture a culture of togetherness, responsibility, and compassion, while extending a helping hand to deserving individuals and communities for a better tomorrow."
            mr="भक्कम कौटुंबिक मूल्यांमध्ये रुजलेला हा ट्रस्ट आमच्या एका विश्वासाचे प्रतिबिंब आहे — जेव्हा कुटुंबे समाजसेवेसाठी एकत्र येतात, तेव्हाच खऱ्या अर्थाने सकारात्मक बदलाची सुरुवात होते. एकोपा, जबाबदारी आणि करुणा या मूल्यांची संस्कृती जोपासणे, तसेच उज्ज्वल भविष्यासाठी गरजू व्यक्ती आणि समाजघटकांना मदतीचा हात देणे, हेच आमचे ध्येय आहे."
          />

          <div className="focus-areas-box">
            <h4><i className="fas fa-bullseye"></i> Our Focus Areas</h4>
            <p>The Trust focuses on key areas that contribute to a stronger and more inclusive society:</p>
            <ul className="focus-areas-list">
              <li>
                <a href="#gallery" onClick={(e) => handleFocusAreaClick(e, 'Education')}>
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <strong>Education</strong>
                    <span>Supporting students through scholarships and helping educational institutions to strengthen infrastructure.</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleFocusAreaClick(e, 'Health')}>
                  <i className="fas fa-heartbeat"></i>
                  <div>
                    <strong>Healthcare</strong>
                    <span>Organizing medical camps and facilitating access to quality healthcare for rural and underserved communities.</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleFocusAreaClick(e, 'Environment')}>
                  <i className="fas fa-leaf"></i>
                  <div>
                    <strong>Environmental Care</strong>
                    <span>Promoting initiatives that encourage environmental sustainability.</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleFocusAreaClick(e, 'Community Service')}>
                  <i className="fas fa-hands-helping"></i>
                  <div>
                    <strong>Social Welfare</strong>
                    <span>Extending support to vulnerable sections of society including the underprivileged.</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleFocusAreaClick(e, 'Community Service')}>
                  <i className="fas fa-home"></i>
                  <div>
                    <strong>Natural Calamity Relief</strong>
                    <span>Providing assistance and relief to victims of natural disasters.</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="registration-info">
            <h4><i className="fas fa-file-contract"></i> Official Registration Details</h4>
            <p>Established as a <strong>Public Charitable Trust</strong> (Registration No. F-21722/Pune) under the <strong>Societies Registration Act, 1860</strong> (Registration No. 241/2007/Pune dated 12 February 2007), the Trust operates from Flat No 302, Fortune House, Baner Pashan Link Road, Baner, Pune - 411045.</p>
          </div>

          <p>The Trust is guided by a <strong>seven-member board</strong> comprising the Chairman, Secretary, Treasurer, and committee members who oversee and drive its initiatives.</p>

          <div className="tax-exemption-box">
            <h4><i className="fas fa-certificate"></i> Income Tax Exemption (80G)</h4>
            <p>The Trust has received <strong>80G certification</strong> from the Income Tax Department, enabling donors to claim tax benefits for their contributions and encouraging wider participation in its mission.</p>
            <p><strong>Order No:</strong> Pn/CIT-I/80G/255/2011-12/3542 <strong>dated</strong> 20.12.2011</p>
          </div>

          <div className="membership-box">
            <h4><i className="fas fa-users"></i> Membership Categories</h4>
            <div className="membership-cards">
              <div className="membership-card">
                <i className="fas fa-gem"></i>
                <strong>Ajeevan Sabhasad</strong>
                <span>Life Member</span>
              </div>
              <div className="membership-card">
                <i className="fas fa-star"></i>
                <strong>Sansthapak Sabhasad</strong>
                <span>Founder Member</span>
              </div>
              <div className="membership-card">
                <i className="fas fa-handshake"></i>
                <strong>Sahayogi Sabhasad</strong>
                <span>Associate Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── CAROUSEL ── */
        .about-carousel-wrapper {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          /*
           * FIX: Removed aspect-ratio: 4/3 — this was the root cause of distortion.
           * The wrapper now sizes to the active image's natural height instead of
           * forcing every image into a fixed box.
           * Background is dark so letterboxing (if any) looks intentional.
           */
          background: #1a1a1a;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          /* Height is set by the active (in-flow) slide */
        }

        /*
         * FIX: Only the active slide is position: relative so it contributes
         * to the wrapper's height. All other slides are position: absolute
         * and sit on top without affecting layout.
         */
        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }

        .carousel-slide.active {
          position: relative;   /* drives the wrapper height */
          opacity: 1;
          pointer-events: auto;
        }

        /*
         * FIX: object-fit: contain preserves each image's natural aspect ratio.
         * width: 100% + height: auto means no stretching ever occurs.
         * max-height caps very tall images so they don't overwhelm the layout.
         */
        .carousel-slide img {
          width: 100%;
          height: auto;
          max-height: 480px;
          object-fit: contain;
          display: block;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255,255,255,0.85);
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.9rem;
          color: var(--dark);
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .carousel-btn:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-prev { left: 10px; }
        .carousel-next { right: 10px; }

        .carousel-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
          z-index: 10;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.55);
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          padding: 0;
        }

        .carousel-dot.active {
          background: white;
          transform: scale(1.35);
        }

        /* ── ESTABLISHED BADGE (keep existing style) ── */
        .established-badge {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: var(--primary, #0f4c75);
          color: white;
          border-radius: 10px;
          padding: 0.5rem 0.9rem;
          text-align: center;
          z-index: 10;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25);
        }

        .established-badge .year {
          display: block;
          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1;
        }

        .established-badge .label {
          display: block;
          font-size: 0.7rem;
          opacity: 0.85;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ── SANSKRIT QUOTE ── */
        .sanskrit-quote {
          font-size: 1.3rem;
          font-style: italic;
          color: var(--primary);
          font-weight: 600;
          margin-top: 0.5rem;
        }

        /* ── FOCUS AREAS ── */
        .focus-areas-box {
          background: linear-gradient(135deg, #f0f9ff 0%, #e8f5e9 100%);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border: 1px solid rgba(0, 128, 0, 0.1);
        }

        .focus-areas-box h4 {
          color: var(--dark);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
        }

        .focus-areas-box > p {
          margin-bottom: 1rem;
          color: var(--text);
        }

        .focus-areas-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .focus-areas-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 8px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .focus-areas-list li:hover {
          transform: translateX(4px);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }

        .focus-areas-list li > i {
          font-size: 1.3rem;
          color: var(--primary);
          margin-top: 0.15rem;
          min-width: 1.5rem;
          text-align: center;
        }

        .focus-areas-list li div {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .focus-areas-list li strong {
          color: var(--dark);
          font-size: 0.95rem;
        }

        .focus-areas-list li span {
          color: var(--text);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* ── MEMBERSHIP ── */
        .membership-box {
          background: linear-gradient(135deg, #fff8e1 0%, #fff3e0 100%);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border: 1px solid rgba(255, 152, 0, 0.15);
        }

        .membership-box h4 {
          color: var(--dark);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
        }

        .membership-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .membership-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.25rem 0.75rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          gap: 0.5rem;
        }

        .membership-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .membership-card i {
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }

        .membership-card strong {
          color: var(--dark);
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .membership-card span {
          color: var(--text);
          font-size: 0.82rem;
          opacity: 0.8;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .membership-cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .sanskrit-quote { font-size: 1.1rem; }

          .membership-cards {
            grid-template-columns: 1fr;
          }

          .focus-areas-list li { padding: 0.6rem 0.75rem; }

          .carousel-btn { width: 32px; height: 32px; font-size: 0.8rem; }

          .carousel-slide img {
            max-height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;