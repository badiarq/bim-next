import '../public/tw-styles.css'
import type { AppProps } from 'next/app'
import { Navbar } from '@/components/navbar'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { ContextProvider } from "@/middleware/context-provider";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_API_MEASUREMENT_ID

  apiKey: "AIzaSyCPIKUO2ZmtwLLs12kvZV8UId0ypN4DFN4",
  authDomain: "next-bim.firebaseapp.com",
  projectId: "next-bim",
  storageBucket: "next-bim.appspot.com",
  messagingSenderId: "685120385713",
  appId: "1:685120385713:web:f6a8e24795dc36e9b5e890",
  measurementId: "G-3WXXKJV2JQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <ContextProvider>
          <Navbar />
          <Component {...pageProps} />
          <ToastContainer theme="colored" />
        </ContextProvider>
      </ThemeProvider>
    </>
  )
}
