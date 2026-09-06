import { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  // { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
];

/**
 * LanguageSwitcher
 * ─────────────────
 * Uses Google Translate cookie-based approach.
 * Rendered TWICE in Navbar (desktop + mobile wrappers)
 * but we guard against double-initialisation with a
 * module-level flag so the script is only injected once.
 */

// Module-level init guard — survives re-renders across both instances
let gtInitialised = false;

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen]         = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Read current lang from Google Translate cookie ── */
  const getActiveLang = (): string => {
    const match = document.cookie.match(/googtrans=\/[a-z]{2}\/([a-z]{2})/);
    return match ? match[1] : 'en';
  };

  /* ── Inject Google Translate script once ── */
  useEffect(() => {
    setCurrentLang(getActiveLang());

    if (gtInitialised) return;
    gtInitialised = true;

    // Hidden div required by Google Translate widget
    if (!document.getElementById('google_translate_element')) {
      const div = document.createElement('div');
      div.id = 'google_translate_element';
      div.style.display = 'none';
      document.body.appendChild(div);
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            // includedLanguages: 'en,mr',
            includedLanguages: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element',
        );
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id  = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* ── Switch language ── */
  const changeLanguage = (code: string) => {
    setIsOpen(false);
    if (code === currentLang) return;

    // Clear all existing googtrans cookies
    const domain = window.location.hostname;
    [['/', ''], ['/', domain], ['/', `.${domain}`]].forEach(([path, d]) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}${d ? `; domain=${d}` : ''}`;
    });

    localStorage.setItem('preferredLanguage', code);

    if (code === 'en') {
      window.location.href = window.location.pathname;
    } else {
      // Marathi translation is temporarily disabled.
      // const value = `/en/${code}`;
      // document.cookie = `googtrans=${value}; path=/`;
      // if (domain.includes('.')) {
      //   document.cookie = `googtrans=${value}; path=/; domain=.${domain.split('.').slice(-2).join('.')}`;
      // }
      // setTimeout(() => window.location.reload(), 100);
      return;
    }
  };

  const current = languages.find((l) => l.code === currentLang) ?? languages[0];

  return (
    <div className="custom-lang-switcher" ref={dropdownRef}>
      <button
        className="lang-btn"
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="lang-icon">🌐</span>
        {/* lang-name hidden on mobile via CSS, shown on desktop */}
        <span className="lang-name">{current.nativeName}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>

      {isOpen && (
        <div className="lang-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="lang-native">{lang.nativeName}</span>
              <span className="lang-english">{lang.name}</span>
              {currentLang === lang.code && <i className="fas fa-check"></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
