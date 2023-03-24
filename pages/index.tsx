import Head from 'next/head'
import { Inter } from 'next/font/google'
import { BasicLayout } from '@/components/layouts/basic-layout'
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
      <BasicLayout 
        title='BIM-NEXT Platform'
        description='OPEN BIM Platform - Plateforme BIM - Created by Badr OUAHBI'
      >
        <div>
            <h1 className="font-bold text-4xl text-center mt-10 text-primary-dark">
              BIM-NEXT Platform
            </h1>
        </div>
      </BasicLayout>
    </>
  )
}
