import Head from 'next/head'
import { Inter } from 'next/font/google'
import { BasicLayout } from '@/components/layouts/basic-layout'
import { FC } from "react";
import { useAppContext } from "../middleware/context-provider";
import { LoginTab } from "@/components/user/login-tab";
import Link from "next/link";

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

  const [state] = useAppContext();

  if (state.user) {
    return <Link href="/map"></Link>
  } else {
    return (
      <>
        <LoginTab />
      </>
    )
  }
}
