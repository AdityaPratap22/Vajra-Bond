'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layers, ArrowRight, Check, Search, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products';
import QuoteModal from '@/components/QuoteModal';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const categories = [
    'All Products',
    'Standard',
    'Flexible',
    'Large Format',
    'Stone & Marble',
    'Exterior'
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.suitableFor.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOpenQuote = (productName: string) => {
    setSelectedProduct(productName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/30">
      
      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4" />
            Vajra Bond Product Portfolio
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Products
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            A wide range of high-performance tile adhesives designed for every application and surface type. Conforms to IS: 15477:2019 and EN 12004 standards.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH STRIP */}
      <section className="bg-white border-b border-stone-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills matching template */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by code, tile type..."
                className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
              />
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {products.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-stone-200 p-8 max-w-lg mx-auto shadow-xs">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <Layers className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900">Products Coming Soon</h3>
            <p className="text-stone-500 text-sm mt-2 leading-relaxed">
              We are updating our official product range. Please check back soon or contact us directly for product enquiries.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              Contact Us for Enquiries
            </Link>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8">
            <Layers className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800">No adhesives found matching your criteria</h3>
            <p className="text-stone-500 text-xs mt-1">Try resetting your filter or searching with different keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Products');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-amber-600 text-white text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group w-full"
              >
                {/* Full-bleed Uncropped Visual Packaging Top (3:2 Aspect Ratio) */}
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-stone-100 border-b border-stone-200/80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details & Specs Bottom */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Title & Classification */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs font-black text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-md border border-amber-300">
                        {product.code}
                      </span>
                      <span className="text-[11px] font-bold text-stone-600 tracking-wider uppercase">
                        {product.standardType} • {product.enCode}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 text-xs text-stone-600 pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">{product.keyFeatures[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="line-clamp-1">Bed Thickness: {product.technicalData.bedThickness}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="line-clamp-1">Open Time: {product.technicalData.openTime}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 grid grid-cols-2 gap-3 border-t border-stone-100">
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleOpenQuote(product.name)}
                      className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl text-center shadow-xs transition-colors cursor-pointer"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct={selectedProduct}
      />
    </div>
  );
}
