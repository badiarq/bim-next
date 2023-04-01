import React, { ReactElement } from "react";
import Head from "next/head"

import { Navbar } from '@/components/navbar'

type layoutType = {
    title: string;
    description: string;
    keywords: string;
    children: ReactElement;
}

export const BasicLayout = ({title, description, keywords, children}:layoutType) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="author" content="Badr OUAHBI" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" href="./asset/img/logo-wippi.jpg" />
        </Head>
      
      <main className="main">
        <Navbar />
        <div className="description">

            {children}

        </div>
      </main>
    </>
  )
}