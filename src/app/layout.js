import Sidebar from "./components/Sidebar";
import "./globals.css";
import { Poppins as PoppinsFont } from "@next/font/google";
import React from "react";
import SidebarProvider from "./context/GlobalContext";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";


export const poppins = PoppinsFont({
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
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <html lang="en" className={poppins.className}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
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
