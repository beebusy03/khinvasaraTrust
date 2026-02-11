import { useState, useEffect, useRef } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Purpose from './components/Purpose';
import Membership from './components/Membership';
import Events from './components/Events';
import Media from './components/Media';
import Gallery from './components/Gallery';
import Board from './components/Board';
import Leaders from './components/Leaders';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.purpose-card, .membership-card, .leader-card, .media-card, .gallery-item');
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading]);

  return (
    <>
      <Preloader isLoading={loading} />
      <Navbar />
      <Hero />
      <About />
      <Purpose />
      <Membership />
      <Events />
      <Media />
      <Gallery />
      <Board />
      <Leaders />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;