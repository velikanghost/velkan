import type { Metadata } from "next";
import { Protest_Strike, Syne } from "next/font/google";
import "./globals.css";

const protestStrike = Protest_Strike({
  variable: "--font-protest-strike",
  subsets: ["latin"],
  weight: "400",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velkan | Portfolio",
  description: "Fullstack & Blockchain Developer Portfolio of Velkan",
};

import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${protestStrike.variable} ${syne.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
