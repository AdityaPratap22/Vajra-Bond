import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Vajra Bond Tile Adhesives & Chemical Mortars',
  description:
    'Learn about Vajra Bond manufacturing excellence, our automated production plant in Faridabad, R&D innovations, and BIS IS 15477 standards compliance.',
  keywords: 'about vajra bond, tile adhesive manufacturer, faridabad factory, tile chemicals India, BIS 15477 tile company',
  alternates: {
    canonical: 'https://vajrabond.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
