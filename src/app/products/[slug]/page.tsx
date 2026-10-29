import React from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductDetailView from '@/components/ProductDetailView';
import type { Metadata } from 'next';

export function generateStaticParams() {
  if (products.length === 0) {
    return [{ slug: 'catalog-updating' }];
  }
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found | Vajra Bond',
    };
  }

  return {
    title: `${product.name} | Vajra Bond Tile Adhesive`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
