import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { ConceptNotice } from "@/components/ConceptNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ware Dental Care | Family & specialist dentistry in Ware",
    template: "%s | Ware Dental Care (concept)",
  },
  description:
    "Concept website for Ware Dental Care — family practice at 3 West Street, Ware. Call 01920 462208 to make an appointment.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
        <ConceptNotice />
      </body>
    </html>
  );
}
