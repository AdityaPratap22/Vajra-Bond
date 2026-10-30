import type { Metadata } from 'next';
import ApplicationsClient from './ApplicationsClient';

export const metadata: Metadata = {
  title: 'Tile Adhesive Applications: Residential, Commercial & Facades | Vajra Bond',
  description:
    'Explore high-performance tile adhesive solutions engineered for swimming pools, exterior facades, tile-on-tile renovation, bathrooms, and heavy commercial flooring.',
  keywords: 'tile adhesive applications, tile on tile renovation, swimming pool tile adhesive, exterior wall cladding, bathroom tile adhesive, commercial floor adhesive',
  alternates: {
    canonical: 'https://vajrabond.com/applications',
  },
};

export default function ApplicationsPage() {
  return <ApplicationsClient />;
}
