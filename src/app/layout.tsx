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
    default: 'Vajra Bond | Premium Polymer Tile Adhesives (IS 15477:2019)',
    template: '%s | Vajra Bond',
  },
  description:
    'Vajra Bond delivers high-performance polymer-modified tile adhesives, tile-on-tile bonding mortars, and stone chemicals conforming to IS 15477:2019 across Tier 1 and Tier 2 cities in India with fast 24–48 hour direct site delivery.',
  keywords: [
    'tile adhesive',
    'vitrified tile adhesive',
    'vajra bond',
    'tile on tile adhesive',
    'IS 15477 tile adhesive',
    'tile adhesive manufacturer India',
    'tile adhesive Delhi NCR',
    'tile adhesive Mumbai',
    'tile adhesive Bengaluru',
    'tile adhesive Hyderabad',
    'tile adhesive Lucknow',
    'tile adhesive Jaipur',
    'tile adhesive Chandigarh',
    'tile adhesive Pune',
    'tile adhesive Ahmedabad',
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
        { '@type': 'City', name: 'Delhi NCR' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Kolkata' },
        { '@type': 'City', name: 'Pune' },
        { '@type': 'City', name: 'Ahmedabad' },
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'City', name: 'Lucknow' },
        { '@type': 'City', name: 'Chandigarh' },
        { '@type': 'City', name: 'Surat' },
        { '@type': 'City', name: 'Indore' },
        { '@type': 'City', name: 'Kochi' },
        { '@type': 'City', name: 'Coimbatore' },
        { '@type': 'City', name: 'Nagpur' },
        { '@type': 'City', name: 'Patna' },
        { '@type': 'City', name: 'Bhopal' },
        { '@type': 'City', name: 'Vadodara' },
        { '@type': 'City', name: 'Ludhiana' },
        { '@type': 'City', name: 'Agra' },
        { '@type': 'City', name: 'Varanasi' },
        { '@type': 'City', name: 'Bhubaneswar' },
        { '@type': 'City', name: 'Dehradun' },
        { '@type': 'City', name: 'Visakhapatnam' },
        { '@type': 'City', name: 'Raipur' },
        { '@type': 'City', name: 'Kanpur' },
        { '@type': 'City', name: 'Ranchi' },
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
