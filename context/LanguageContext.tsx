// import { createContext, FC} from 'react';
// import { useState } from "react";

// const LanguageContext = createContext;

// const translations : object = {
//   home: "Home",
//   login: "Login",
// }

// interface Props {
//   children: HTMLElement
// }

// const initialLanguage : string = "en-US"

// const LanguageProvider: FC<Props>= ({ children }) => {
//   const [language, setLanguage] = useState(initialLanguage);
//   const [texts, setTexts] = useState(translations[language]);
  
//   const handleLanguage = (e) => {
//   }
//   const data = { texts, handleLanguage };

//   return (
//     <>
//         <LanguageContext.Provider value={data}> {children} </LanguageContext.Provider>
//     </>
//   )
// }

// export { LanguageProvider };

// export default LanguageContext;
