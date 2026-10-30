import type { Metadata } from 'next';
import BlogsClient from './BlogsClient';

export const metadata: Metadata = {
  title: 'Tile Adhesives Knowledge Hub & Engineering Guides | Vajra Bond',
  description:
    'Comprehensive technical library with 500+ guides covering IS 15477:2019 standards, tile-on-tile renovation, notch trowel sizing, substrate preparation, and zero-defect installation.',
  keywords: 'tile adhesive blogs, IS 15477 guide, tile installation tips, tile on tile method, porcelain slab fixing guide, how to use tile adhesive',
  alternates: {
    canonical: 'https://vajrabond.com/blogs',
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
