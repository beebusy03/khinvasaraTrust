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
  const [isLoaded, setIsLoaded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script already exists
    if (document.getElementById('google-translate-script')) {
      setIsLoaded(true);
      return;
    }

    // Create hidden element for Google Translate
    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';
    translateDiv.style.display = 'none';
    document.body.appendChild(translateDiv);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,mr',
          autoDisplay: false,
          multilanguagePage: true,
        },
        'google_translate_element'
      );
      setIsLoaded(true);
    };

    // Load Google Translate script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.getElementById('google-translate-script');
      if (existingScript) {
        existingScript.remove();
      }
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

  // Get current language from cookie
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      setCurrentLang(match[1]);
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    if (langCode === 'en') {
      // Reset to English
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
      window.location.reload();
    } else {
      // Change language
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
      
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
      } else {
        window.location.reload();
      }
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