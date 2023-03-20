// import '@/styles/globals.css'
import '../public/tw-styles.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
