import { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' }
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isInitializing = useRef(false);

  useEffect(() => {
    // Get current language from cookie on mount
    const getCookieLang = () => {
      const match = document.cookie.match(/googtrans=\/[a-z]{2}\/([a-z]{2})/);
      return match ? match[1] : 'en';
    };
    setCurrentLang(getCookieLang());

    // Check if script already exists
    if (document.getElementById('google-translate-script')) {
      return;
    }

    if (isInitializing.current) return;
    isInitializing.current = true;

    // Create hidden element for Google Translate
    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';
    translateDiv.style.display = 'none';
    document.body.appendChild(translateDiv);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,mr',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Load Google Translate script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = () => {
      console.error('Failed to load Google Translate');
      isInitializing.current = false;
    };
    document.body.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.getElementById('google-translate-script');
      const existingDiv = document.getElementById('google_translate_element');
      if (existingScript) existingScript.remove();
      if (existingDiv) existingDiv.remove();
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    // Close dropdown first
    setIsOpen(false);
    
    // If same language, just return
    if (langCode === currentLang) {
      return;
    }

    // Clear all existing Google Translate cookies
    const domain = window.location.hostname;
    const paths = ['/', ''];
    const domains = ['', domain, `.${domain}`];
    
    // Clear cookies with all combinations
    domains.forEach(d => {
      paths.forEach(p => {
        const cookieString = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p || '/'}${d ? `; domain=${d}` : ''}`;
        document.cookie = cookieString;
      });
    });

    // Set new language preference
    localStorage.setItem('preferredLanguage', langCode);

    if (langCode === 'en') {
      // For English, clear cookies and reload
      // Force reload with cache bypass
      window.location.href = window.location.pathname;
    } else {
      // For other languages, set the translation cookie
      const newValue = `/en/${langCode}`;
      
      // Set cookie for current domain
      document.cookie = `googtrans=${newValue}; path=/`;
      
      // Also set for parent domain if on subdomain
      if (domain.includes('.')) {
        document.cookie = `googtrans=${newValue}; path=/; domain=.${domain.split('.').slice(-2).join('.')}`;
      }
      
      // Force hard reload to apply translation
      setTimeout(() => {
        window.location.reload();
      }, 100); // Small delay to ensure cookie is set
    }
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="custom-lang-switcher" ref={dropdownRef}>
      <button 
        className="lang-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className="lang-icon">🌐</span>
        <span className="lang-name">{currentLanguage.nativeName}</span>
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