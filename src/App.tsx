import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leaders from './components/Leaders';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import DonateModal from './components/DonateModal';
import DonateIntroModal from './components/DonateIntroModal';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

// Lazy-load heavy below-the-fold sections so they don't block initial paint
const Events       = lazy(() => import('./components/Events'));
const Media        = lazy(() => import('./components/Media'));
const Gallery      = lazy(() => import('./components/Gallery'));
const VideoSection = lazy(() => import('./components/VideoSection'));

// Shimmer skeleton shown while a lazy section's bundle loads
const SectionSkeleton = ({ label }: { label: string }) => (
  <section
    aria-busy="true"
    aria-label={`Loading ${label}`}
    className="section-skeleton"
  >
    <div className="skeleton-header">
      <div className="skeleton-bar skeleton-bar--badge"></div>
      <div className="skeleton-bar skeleton-bar--title"></div>
      <div className="skeleton-bar skeleton-bar--sub"></div>
    </div>
    <div className="skeleton-grid">
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
    </div>
    <span className="visually-hidden">Loading {label}…</span>
  </section>
);

// Recognised top-level routes/hashes for this single-page app.
// Anything else triggers the 404 view.
const KNOWN_HASHES = new Set([
  '', '#', '#home', '#about', '#events', '#media',
  '#gallery', '#leaders', '#contact', '#donate',
]);

const isKnownLocation = (): boolean => {
  // Treat any sub-path beyond "/" as unknown (no router in use)
  if (window.location.pathname !== '/' && window.location.pathname !== '') {
    return false;
  }
  return KNOWN_HASHES.has(window.location.hash);
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false);
  const [notFound, setNotFound] = useState<boolean>(() => !isKnownLocation());
  const [attemptedPath] = useState<string>(
    () => window.location.pathname + window.location.hash
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Show the donation intro pop-up after the preloader finishes (every load)
  useEffect(() => {
    if (loading) return;

    const t = setTimeout(() => {
      setIsIntroModalOpen(true);
    }, 600);
    return () => clearTimeout(t);
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.purpose-card, .membership-card, .leader-card, .media-card, .gallery-item');
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [loading]);

  const openDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const closeDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  return (
    <>
      <Preloader isLoading={loading} />
      {notFound ? (
        <ErrorBoundary>
          <NotFound attempted={attemptedPath} />
        </ErrorBoundary>
      ) : (
        <ErrorBoundary>
          <Navbar onDonateClick={openDonateModal} />
          <Hero onDonateClick={openDonateModal} />
          <About />

          <Suspense fallback={<SectionSkeleton label="Events" />}>
            <Events />
          </Suspense>

          <Suspense fallback={<SectionSkeleton label="Media" />}>
            <Media />
          </Suspense>

          <Suspense fallback={<SectionSkeleton label="Gallery" />}>
            <Gallery />
          </Suspense>

          <Leaders />

          <Suspense fallback={<SectionSkeleton label="Video" />}>
            <VideoSection />
          </Suspense>

          <CTA onDonateClick={openDonateModal} />
          <Contact />
          <Footer />
          <BackToTop />

          <DonateModal
            isOpen={isDonateModalOpen}
            onClose={closeDonateModal}
          />
          <DonateIntroModal
            isOpen={isIntroModalOpen}
            onClose={() => setIsIntroModalOpen(false)}
            onDonate={openDonateModal}
          />
        </ErrorBoundary>
      )}
      {/* Mark notFound state used so re-render triggers if hash changes */}
      <NotFoundHashListener
        onChange={(missing) => setNotFound(missing)}
      />
    </>
  );
}

/**
 * Listens for hash/popstate changes and re-evaluates whether
 * the current location is a recognised section.
 */
function NotFoundHashListener({
  onChange,
}: {
  onChange: (notFound: boolean) => void;
}) {
  useEffect(() => {
    const handler = () => onChange(!isKnownLocation());
    window.addEventListener('hashchange', handler);
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('hashchange', handler);
      window.removeEventListener('popstate', handler);
    };
  }, [onChange]);
  return null;
}

export default App;