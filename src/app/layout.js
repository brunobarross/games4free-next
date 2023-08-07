"use client";

import Sidebar from "./components/Sidebar";
import "./globals.css";
import {Poppins} from "@next/font/google";
import React from "react";
import SidebarProvider from "./context/GlobalContext";
import Script from "next/script";


export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
  display: "swap",
});

export const metadata = {
  title: "Games4Free | Jogos e DLCS grátis",
  description:
    "Os melhores jogos gratuitos estão aqui. Resgate as chaves por tempo limitado.",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GTM}');
        `}
      </Script>
      <body>
        <SidebarProvider>
          <Sidebar />
          <div className="mx-auto w-full sm:pl-[300px] relative min-h-screen overflow-hidden flex flex-col">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
