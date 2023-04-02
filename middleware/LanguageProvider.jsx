import { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";

const languageContext = createContext()
const languageSelectorContext = createContext();

export function useLanguageContext() {
  return useContext(languageContext);
}

export function useLanguageSelectorContext() {
  return useContext(languageSelectorContext);
}

export function LanguageProvider(props) {

  const router = useRouter();
  const currentLanguage = router.locale;
  const [language, setLanguage] = useState(currentLanguage);
  console.log(language);

  const setCurrentLanguage = () => {
    console.log(router.locale)
    if(language === null || language === undefined) {
      setLanguage(router.defaultLocale);
    } else if (language === 'en') {
    } else {
      setLanguage(router.locale)
    }
  }

  return (
    <languageContext.Provider value={language}>
      <languageSelectorContext.Provider value={setCurrentLanguage}>
        {props.children}
      </languageSelectorContext.Provider>
    </languageContext.Provider>
  );
}
