import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
// 1. IMPORT Suspense FROM REACT
import { Suspense } from 'react';
import { ClientLogger } from "./components/ClientLogger";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";
import dynamic from 'next/dynamic';

const CookieConsent = dynamic(
  () => import('./components/CookieConsent').then((mod) => mod.CookieConsent),
  { ssr: false }
);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '600', '700', '800']
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-cormorant',
});

// UPDATED: Use the environment variable for the site URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Magical Space',
    default: 'Top Interior Designers | Magical Space',
  },
  description: "Magical Space offers bespoke interior design services. From modern modular kitchens to luxury living rooms, our expert designers transform your space. Get a free quote today!",
  keywords: ["interior design", "home interior design", "modular kitchen", "office interior designer", "luxury interior designers", "interior designer near me", "turnkey interior solutions"],
  openGraph: {
    title: 'Magical Space - Ready to Transform Your Space?',
    description: 'Bespoke interior design services for homes and offices. Get a free, personalized quotation.',
    url: siteUrl,
    siteName: 'Magical Space',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magical Space - Ready to Transform Your Space?',
    description: 'Bespoke interior design services for homes and offices. Get a free, personalized quotation.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Magical Space',
  description: 'Top-rated interior design firm specializing in residential and commercial spaces.',
  url: siteUrl,
  telephone: '+91 7406000795',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sy.no.9/13, Kannamangala Main Road, Goravigere',
    addressLocality: 'Bangalore',
    postalCode: '560067',
    addressRegion: 'KA',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Sa 09:00-19:00',
  image: `${siteUrl}/og-image.jpg`,
  priceRange: '$$$',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} scroll-smooth`}>
      <body className={`${poppins.className} bg-white text-gray-800`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* 2. WRAP the ClientLogger (the "GPS") in the Suspense wrapper */}
        <Suspense fallback={null}>
          <ClientLogger />
        </Suspense>

        <Header />
        <main id="home">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}