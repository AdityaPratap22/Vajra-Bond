import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Vajra Bond | Majboot Jod. Lambi Umar. — Polymer Tile Adhesives',
  description:
    'Vajra Bond is a premier manufacturer of high-performance polymer-modified tile adhesives conforming to IS 15477:2019 and EN 12004 standards. Fast 24-hr direct site delivery across Delhi NCR, Haryana, Punjab, and Rajasthan.',
  keywords: 'tile adhesive, vitrified tile adhesive, vajra bond, tile on tile, IS 15477, ceramic tile adhesive, marble adhesive, faridabad tile chemical, polymer tile mortar',
  alternates: {
    canonical: 'https://vajrabond.com',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
