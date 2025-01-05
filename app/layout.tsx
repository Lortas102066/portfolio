import Script from 'next/script';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./navigation";

const impact = localFont({
  src: "./fonts/impact.ttf",
  weight: "400",
  variable: "--font-impact",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mitsuki Morinaga {Full Stack Developer}",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${impact.variable}`}>
        {/* Using Script component for Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2QD2XYHJ5S"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2QD2XYHJ5S');
          `}
        </Script>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
