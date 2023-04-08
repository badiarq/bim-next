import { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";

import en from '../public/locales/en/common.json'
import es from '../public/locales/es/common.json'
import fr from '../public/locales/fr/common.json'

const languageContext = createContext()

export function useLanguageContext() {
  return useContext(languageContext);
}

export function LanguageProvider({children}) {

  const router = useRouter();
  const [translation, setTranslation] = useState(en);

  function setCurrentLanguage () {
    const locale = router.locale;
    if (locale === 'fr') {
      setTranslation(fr);
    } else if (locale === 'es') {
      setTranslation(es);
    } else {
      setTranslation(en)
    }
  }

  return (
    <languageContext.Provider value={[setCurrentLanguage, translation]}>
        {children}
    </languageContext.Provider>
  );
}
