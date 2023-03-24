import Head from "next/head"
import React, { ReactElement } from "react";

type layoutType = {
    title: string;
    description: string;
    children: ReactElement;
}

export const BasicLayout = ({title, description, children}:layoutType) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="./asset/img/logo-wippi.jpg" />
        </Head>
      
      <main className="main">
        <div className="description">

            {children}

        </div>
      </main>
    </>
  )
}