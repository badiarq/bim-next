import React, { FC, ReactElement } from "react";
import Head from "next/head"

import { Navbar } from '@/components/navbar'
import { useLanguageContext } from "@/middleware";
import { BasicLayoutType, Dictionary } from "@/interfaces";

export const SideBarLayout:FC<BasicLayoutType> = ({title, description, keywords, children}) => {

  const setCurrentLanguage = useLanguageContext()[0]
  const t:Dictionary = useLanguageContext()[1];

  setCurrentLanguage();

  return (
    <>
        <Head>
            <title>{title || t.appName}</title>
            <meta name="author" content="Badr OUAHBI" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
          {children}
          <Navbar />
    </>
  )
}