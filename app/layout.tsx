import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./navigation";

const impact = localFont({
  src: "./fonts/impact.ttf",
  variable: "--font-impact",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${impact.variable}`}
      >
        {children}
        <Navigation />
      </body>
    </html>
  );
}
