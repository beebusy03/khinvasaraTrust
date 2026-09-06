import { useEffect, useState } from 'react';

/**
 * Returns the active language code.
 * Source-of-truth order:
 *   1. localStorage.preferredLanguage (set explicitly by LanguageSwitcher)
 *   2. googtrans cookie (any source-language segment, e.g. /en/mr or /auto/mr)
 *   3. fallback "en"
 */
const getActiveLang = (): string => {
  if (typeof document === 'undefined') return 'en';

  // 1. Explicit user choice — most reliable
  try {
    const stored = window.localStorage.getItem('preferredLanguage');
    if (stored) return stored;
  } catch {
    /* localStorage may be blocked in private mode */
  }

  // 2. Google Translate cookie — accept any source-lang segment
  const match = document.cookie.match(/googtrans=\/[^/]+\/([a-z]{2})/i);
  return match ? match[1].toLowerCase() : 'en';
};

export const useActiveLang = (): string => {
  const [lang, setLang] = useState<string>(getActiveLang);

  useEffect(() => {
    setLang(getActiveLang());
    const id = window.setInterval(() => {
      const next = getActiveLang();
      setLang((prev) => (prev === next ? prev : next));
    }, 1000);

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'preferredLanguage') setLang(getActiveLang());
    };
    window.addEventListener('storage', onStorage);

    return () => {
      window.clearInterval(id);
      window.removeEventListener('storage', onStorage);
    };
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
 * Renders the correct language variant.
 *
 * NOTE: Marathi translations are temporarily disabled. We keep English as the
 * only active language for now and leave the Marathi-specific logic commented
 * here so it can be restored quickly when needed.
 */
const I18nText = ({ en, mr, as: Tag = 'span', className }: I18nTextProps) => {
  // const lang = useActiveLang();
  // const hasCurated = !!mr;
  // const content = lang === 'mr' && hasCurated ? mr : en;

  // if (hasCurated) {
  //   return (
  //     <Tag className={`notranslate ${className ?? ''}`} translate="no">
  //       {content}
  //     </Tag>
  //   );
  // }

  return <Tag className={className}>{en}</Tag>;
};

export default I18nText;
