import Sidebar from "./components/Sidebar";
import "./globals.css";
import { Poppins } from "@next/font/google";
import React from "react";
import SidebarProvider from "./context/GlobalContext";
import Script from "next/script";
import Head from "next/head";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
  display: "swap",
});

export const metadata = {
  title: "Games4Free | Jogos Steam, Epic Games, Playstation e Xbox Grátis",
  description:
    "Os melhores jogos gratuitos da Steam, Epic, PS4 e Xbox estão aqui. Resgate as chaves por tempo limitado.",
  keywords: "games, jogos, gratis, free, dlcs, dlc, epic, steam, ubisoft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      {/* <Script src="//pl20344643.highcpmrevenuegate.com/fb/da/97/fbda97efc0d4604f5a6468e9f15c63fb.js"></Script>
      <Script src="//pl20344809.highcpmrevenuegate.com/17/06/3a/17063ae5bbebe7bf8e887428f431181d.js"></Script> */}

      {/* <Script
        src={`atOptions = {
            'key' : 'bfecd93799d03ae0e3da3309d315194b',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
          };
	      document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/bfecd93799d03ae0e3da3309d315194b/invoke.js"></scr' + 'ipt>');`}
      /> */}

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
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
