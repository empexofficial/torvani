import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const colbiac = localFont({
  src: "./fonts/colbiac-colbiac-regular-400.otf",
  variable: "--font-colbiac",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Torvani — Premium Automotive Detailing & Ceramic Coating",
    template: "%s | Torvani",
  },
  description:
    "Torvani delivers ultra-premium automotive detailing and ceramic coating services for discerning vehicle owners. Your car, our canvas.",
  keywords: [
    "auto detailing",
    "ceramic coating",
    "premium detailing",
    "luxury car care",
    "paint correction",
    "automotive detailing",
    "Torvani",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    // PLACEHOLDER: Replace with real URL
    url: "https://torvani.com",
    siteName: "Torvani Detailing",
    title: "Torvani — Premium Automotive Detailing & Ceramic Coating",
    description:
      "Ultra-premium automotive detailing and ceramic coating. Your car, our canvas.",
    images: [
      {
        // PLACEHOLDER: Replace with real OG image
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Torvani Premium Automotive Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Torvani — Premium Automotive Detailing",
    description:
      "Ultra-premium automotive detailing and ceramic coating. Your car, our canvas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${colbiac.variable}`}>
      <head>
        {/* Typekit font for display headings */}
        <link rel="stylesheet" href="https://use.typekit.net/cmz1ykq.css" />
      </head>
      <body className="font-body bg-obsidian text-ivory antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
