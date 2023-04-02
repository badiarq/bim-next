// import { createContext, useContext } from 'react';

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { useTranslation } from 'next-i18next'

// const LanguageContext = createContext(null);

// export const LanguageProvider = () => {
//     const [state] = useLanguageContext();
//     const router = useRouter();
//     const { t } = useTranslation('common')
//     console.log(router.state)
//     console.log(t)
  
//     return (
//         <LanguageContext.Provider value="language context test">
//             {children}
//         </LanguageContext.Provider>
//     )
// };
  
// export const getStaticProps = async ({ locale }) => ({
//     props: {
//         // @ts-ignore
//         ...(await serverSideTranslations(locale, ['common'])),
//     },
// });

// export const useLanguageContext = () => {
// return useContext(LanguageContext);
// };