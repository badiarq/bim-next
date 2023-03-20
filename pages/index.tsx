import Head from 'next/head'
import { Inter } from 'next/font/google'
// import { Router } from 'next/router'
// import { BuildingViewer } from "./components/building-viewer";
// import { MapViewer } from "./components/map-viewer";
// import { initializeApp } from "firebase/app";
// import { ContextProvider } from "./middleware/context-provider";
// import { ThemeProvider } from "next-themes";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BIM-NEXT - Home</title>
        <meta name="description" content="OPEN BIM Platform - Plateforme BIM - Created by Badr OUAHBI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-wippi.jpg" />
      </Head>
      <main className="main">
        <div className="description">

          <div>
            <h1 className="title">
              Ir a <a className='bg-red-500' href="/about">About Page</a>
            </h1>
          </div>


          {/* <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                "className=vercelLogo"
                width={100}
                height={24}
                priority
              />
            </a>
          </div> */}
        </div>
      </main>
    </>
  )
}
