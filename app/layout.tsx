import type { Metadata } from "next";
import Script from "next/script";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dutch Comedy Channel",
  description: "De beste Nederlandse comedians en hun shows op één plek.",
  icons: { icon: "/DCC.png", apple: "/DCC.png" },
  openGraph: {
    title: "Dutch Comedy Channel",
    description: "De beste Nederlandse comedians en hun shows op één plek.",
    url: "https://dutchcomedychannel.nl",
    siteName: "Dutch Comedy Channel",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3366446717708247"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
