// src/app/layout.tsx

import type { Metadata } from "next";
// --- NEW: Import Poppins and Roboto_Mono from next/font/google ---
import { Poppins, Roboto_Mono } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/main.scss";
import { BackToTopButton } from '@/components/BackToTopButton';
import GoogleAnalytics from "@/components/GoogleAnalytics";


// --- NEW: Configure the fonts ---
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-poppins', // Create a CSS variable for the main font
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono', // Create a CSS variable for the clock font
});

const siteUrl = "https://www.coderon.co.za";

export const metadata: Metadata = {
  // Your metadata remains the same...
  title: {
    template: "%s | Coderon",
    default: "Coderon - Building Africa's Future with Code & Purpose",
  },
  description: "A leading South African software company transforming Africa's digital landscape with Next.js web development, AI solutions, and purpose-driven technology.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  keywords: ["software development South Africa", "Next.js development Africa", "AI solutions Africa", "digital transformation", "custom software", "tech in Africa", "Coderon"],
  authors: [{ name: 'Coderon', url: siteUrl }],
  creator: 'Coderon',
  publisher: 'Coderon',
  openGraph: {
    title: "Coderon - Building Africa's Future with Code & Purpose",
    description: "Transforming Africa's digital landscape with innovative software solutions.",
    url: siteUrl,
    siteName: 'Coderon',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Coderon logo against a background representing African innovation.',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Coderon - Building Africa's Future with Code & Purpose",
    description: "Transforming Africa's digital landscape with innovative software solutions.",
    creator: '@CoderonZA', 
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // --- NEW: Add the font variables to the <html> tag ---
    <html lang="en" className={`${poppins.variable} ${roboto_mono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
        <GoogleAnalytics />
      </body>
    </html>
  );
}