import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Our Products | High-Performance Tile & Stone Adhesives | Vajra Bond',
  description:
    'Browse the full range of Vajra Bond polymer-modified tile adhesives: VB-1001 (Type 1T), VB-2002 (Type 2T Vitrified), VB-2004 (Tile-on-Tile), and VB-3003 (Type 3T Large Format).',
  keywords: 'tile adhesive products, VB 1001, VB 2002, VB 2004, VB 3003, vitrified tile adhesive, large format stone adhesive, IS 15477 adhesive',
  alternates: {
    canonical: 'https://vajrabond.com/products',
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
