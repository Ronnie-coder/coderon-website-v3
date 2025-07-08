// src/app/layout.tsx

import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from 'next/font/google';
import { Suspense } from 'react'; // Keep Suspense
import Footer from "@/components/Footer";
import "@/styles/main.scss";
import { ClientLayoutComponents } from '@/components/layout/ClientLayoutComponents'; // <-- 1. IMPORT THE NEW COMPONENT

// --- Font configuration remains the same ---
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

// --- Metadata remains the same ---
const siteUrl = "https://www.coderon.co.za";
export const metadata: Metadata = {
  title: {
    template: "%s | Coderon",
    default: "Coderon - Building Africa's Future with Code & Purpose",
  },
  description: "A leading South African software company transforming Africa's digital landscape with Next.js web development, AI solutions, and purpose-driven technology.",
  metadataBase: new URL(siteUrl),
  // ... your other metadata is perfect, no changes needed ...
  alternates: { canonical: '/' },
  keywords: ["software development South Africa", "Next.js development Africa", "AI solutions Africa", "digital transformation", "custom software", "tech in Africa", "Coderon"],
  authors: [{ name: 'Coderon', url: siteUrl }],
  creator: 'Coderon',
  publisher: 'Coderon',
  openGraph: {
    title: "Coderon - Building Africa's Future with Code & Purpose",
    description: "Transforming Africa's digital landscape with innovative software solutions.",
    url: siteUrl,
    siteName: 'Coderon',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Coderon logo against a background representing African innovation.' }],
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
    <html lang="en" className={`${poppins.variable} ${roboto_mono.variable}`}>
      <body>
        {/* --- 2. THE FIX --- */}
        {/* We wrap our new client-only component in Suspense. */}
        {/* The fallback can be null if you don't want a loading state. */}
        <Suspense fallback={null}>
          <ClientLayoutComponents />
        </Suspense>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}