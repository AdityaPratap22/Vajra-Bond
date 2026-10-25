import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vajra Bond | Majboot Jod. Lambi Umar. - High Performance Tile Adhesives',
  description: 'Vajra Bond delivers high-performance polymer-modified tile adhesives, stone bonding solutions, and grouts conforming to IS: 15477:2019 and EN 12004 standards.',
  keywords: 'tile adhesive, vitrified tile adhesive, vajra bond, tile on tile, IS 15477, ceramic tile adhesive, marble adhesive, faridabad tile chemical, polymer tile mortar',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-stone-900 antialiased selection:bg-amber-100 selection:text-amber-900">
        <Suspense fallback={<div className="h-20 bg-white" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
