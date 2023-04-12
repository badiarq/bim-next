import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";

import { appWithTranslation } from 'next-i18next'
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import '../public/tw-styles.css'
import { ContextProvider } from "@/middleware/context-provider";
import { LanguageProvider } from '@/middleware';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_API_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
       <NextUIProvider>
        <LanguageProvider>
          <ThemeProvider attribute="class">
              <ContextProvider>
                <Component {...pageProps} />
                <ToastContainer theme="colored" />
              </ContextProvider>
          </ThemeProvider>
        </LanguageProvider>
      </NextUIProvider>
    </>
  )
}

export default appWithTranslation(App)