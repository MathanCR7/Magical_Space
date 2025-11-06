import type { Metadata } from "next";
// 1. IMPORT THE NEW FONT HERE
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ClientLogger } from "./components/ClientLogger";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";
// IMPORT THE NEW COOKIE CONSENT COMPONENT
import { CookieConsent } from "./components/CookieConsent";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '600', '700', '800']
});

// 2. INITIALIZE THE NEW FONT
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-cormorant', // This makes it available as a CSS variable
});

// SEO UPDATE: Comprehensive metadata for the entire site.
// REPLACE 'https://www.yourwebsite.com' with your actual domain.
const siteUrl = 'https://www.yourwebsite.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Magical Space',
    default: 'Top Interior Designers | Magical Space',
  },
  description: "Magical Space offers bespoke interior design services. From modern modular kitchens to luxury living rooms, our expert designers transform your space. Get a free quote today!",
  keywords: ["interior design", "home interior design", "modular kitchen", "office interior designer", "luxury interior designers", "interior designer near me", "turnkey interior solutions"],
  
  // SEO UPDATE: Open Graph for social media sharing
  openGraph: {
    title: 'Magical Space - Ready to Transform Your Space?',
    description: 'Bespoke interior design services for homes and offices. Get a free, personalized quotation.',
    url: siteUrl,
    siteName: 'Magical Space',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // Create and add an image named 'og-image.jpg' to your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // SEO UPDATE: For Twitter card
  twitter: {
    card: 'summary_large_image',
    title: 'Magical Space - Ready to Transform Your Space?',
    description: 'Bespoke interior design services for homes and offices. Get a free, personalized quotation.',
    images: [`${siteUrl}/og-image.jpg`], // Use the same image as Open Graph
  },

  // SEO UPDATE: Instructs search engines
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
  
  // SEO UPDATE: Canonical URL to avoid duplicate content issues
  alternates: {
    canonical: '/',
  }
};

// SEO UPDATE: JSON-LD Schema for Local Business.
// This helps Google understand your business details and can show them in search results.
// **IMPORTANT**: Replace placeholder details with your actual business information.
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
  openingHours: 'Mo-Sa 09:00-19:00', // Monday to Saturday, 9 AM to 7 PM
  image: `${siteUrl}/og-image.jpg`,
  priceRange: '$$$', // Optional: Represents the price range
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} scroll-smooth`}>
      <body className={`${poppins.className} bg-white text-gray-800`}>
        {/* SEO UPDATE: Injecting JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLogger />
        <Header />
        <main id="home"> {/* Added ID for header link */}
          {children}
        </main>
        <Footer />
         <WhatsAppButton /> 
        <ScrollToTop />
        {/* ADD THE COOKIE CONSENT BANNER HERE */}
        <CookieConsent />
      </body>
    </html>
  );
}