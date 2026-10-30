import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimationObserver from '@/components/ScrollAnimationObserver';
import FloatingSocialButtons from '@/components/FloatingSocialButtons';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vajrabond.com'),
  title: {
    default: 'Vajra Bond | Majboot Jod. Lambi Umar. — Polymer Tile Adhesives',
    template: '%s',
  },
  description:
    'Vajra Bond manufactures high-performance polymer-modified tile adhesives, tile-on-tile bonding mortars, and stone chemicals conforming to IS 15477:2019. Direct factory supply within 500-600km of Delhi NCR across Haryana, Punjab, and Rajasthan.',
  keywords: [
    'tile adhesive',
    'vitrified tile adhesive',
    'vajra bond',
    'tile on tile adhesive',
    'IS 15477 tile adhesive',
    'tile adhesive manufacturer Delhi NCR',
    'tile adhesive Faridabad',
    'tile adhesive Gurgaon',
    'tile adhesive Noida',
    'tile adhesive Haryana',
    'tile adhesive Punjab',
    'tile adhesive Rajasthan',
    'tile adhesive Jaipur',
    'tile adhesive Chandigarh',
    'tile adhesive Ludhiana',
    'tile adhesive Panipat',
    'tile adhesive Karnal',
    'polymer tile mortar',
    'ceramic tile glue',
    'marble stone adhesive',
    'epoxy grout manufacturer'
  ],
  alternates: {
    canonical: 'https://vajrabond.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vajrabond.com',
    siteName: 'Vajra Bond',
    title: 'Vajra Bond | Majboot Jod. Lambi Umar. - High Performance Tile Adhesives',
    description:
      'High-performance polymer-modified tile adhesives conforming to IS:15477:2019. Rapid 24-48 hr direct site delivery across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and all major Indian cities.',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 800,
        alt: 'Vajra Bond Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vajra Bond | Premium Polymer Tile Adhesives (IS 15477)',
    description:
      'High-performance polymer-modified tile adhesives conforming to IS:15477:2019 across Tier 1 and Tier 2 cities in India.',
    images: ['/images/logo.png'],
  },
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Faridabad, Delhi NCR, India',
    'geo.position': '28.4089;77.3178',
    ICBM: '28.4089, 77.3178',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'Manufacturer'],
      '@id': 'https://vajrabond.com/#organization',
      name: 'Vajra Bond Pvt. Ltd.',
      url: 'https://vajrabond.com',
      logo: 'https://vajrabond.com/images/logo.png',
      description:
        'Manufacturer of high-performance polymer-modified tile adhesives, stone bonding mortars, and epoxy grouts conforming to IS 15477:2019 standards.',
      telephone: '+91 63950 14392',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '67, Tirkha Colony, Sector 2',
        addressLocality: 'Faridabad',
        addressRegion: 'Haryana',
        postalCode: '121004',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://instagram.com/vajra.bond',
        'https://wa.me/916395014392',
      ],
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        { '@type': 'AdministrativeArea', name: 'Haryana' },
        { '@type': 'AdministrativeArea', name: 'Punjab' },
        { '@type': 'AdministrativeArea', name: 'Rajasthan' },
        { '@type': 'City', name: 'Delhi NCR' },
        { '@type': 'City', name: 'Faridabad' },
        { '@type': 'City', name: 'Gurgaon' },
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Panipat' },
        { '@type': 'City', name: 'Karnal' },
        { '@type': 'City', name: 'Sonipat' },
        { '@type': 'City', name: 'Rohtak' },
        { '@type': 'City', name: 'Hisar' },
        { '@type': 'City', name: 'Ambala' },
        { '@type': 'City', name: 'Chandigarh' },
        { '@type': 'City', name: 'Ludhiana' },
        { '@type': 'City', name: 'Amritsar' },
        { '@type': 'City', name: 'Jalandhar' },
        { '@type': 'City', name: 'Bathinda' },
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'City', name: 'Alwar' },
        { '@type': 'City', name: 'Bhiwadi' },
        { '@type': 'City', name: 'Jodhpur' },
        { '@type': 'City', name: 'Kota' },
        { '@type': 'City', name: 'Udaipur' },
        { '@type': 'City', name: 'Ajmer' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://vajrabond.com/#website',
      url: 'https://vajrabond.com',
      name: 'Vajra Bond',
      description:
        'High-Performance Polymer Tile Adhesives conforming to IS 15477:2019',
      publisher: {
        '@id': 'https://vajrabond.com/#organization',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-stone-900 antialiased selection:bg-amber-100 selection:text-amber-900">
        <Suspense fallback={<div className="h-20 bg-white" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingSocialButtons />
        <ScrollAnimationObserver />
      </body>
    </html>
  );
}
