import { useEffect, useState } from 'react';

/**
 * Returns the active Google-Translate language code from cookie.
 * Falls back to "en".
 */
const getActiveLang = (): string => {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/googtrans=\/[a-z]{2}\/([a-z]{2})/);
  return match ? match[1] : 'en';
};

export const useActiveLang = (): string => {
  const [lang, setLang] = useState<string>(getActiveLang);

  useEffect(() => {
    // Re-check on mount + watch for cookie changes (e.g., language switch reload)
    setLang(getActiveLang());
    const id = window.setInterval(() => {
      const next = getActiveLang();
      setLang((prev) => (prev === next ? prev : next));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return lang;
};

interface I18nTextProps {
  en: React.ReactNode;
  mr?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

/**
 * Renders the correct language variant with `translate="no"` so
 * Google Translate leaves our hand-curated text untouched.
 */
const I18nText = ({ en, mr, as: Tag = 'span', className }: I18nTextProps) => {
  const lang = useActiveLang();
  const content = lang === 'mr' && mr ? mr : en;

  return (
    <Tag className={`notranslate ${className ?? ''}`} translate="no">
      {content}
    </Tag>
  );
};

export default I18nText;
