'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Download, 
  ChevronRight, 
  Home, 
  Sparkles, 
  Layers, 
  FileText, 
  Wrench, 
  Calculator,
  Building,
  CheckCircle2
} from 'lucide-react';
import { Product } from '@/data/products';
import QuoteModal from '@/components/QuoteModal';
import CoverageCalculator from '@/components/CoverageCalculator';
import ResourceViewerModal from '@/components/ResourceViewerModal';

interface ProductDetailViewProps {
  product: Product;
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'technical' | 'howToUse' | 'calculator'>('details');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isTdsModalOpen, setIsTdsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/30">
      
      {/* BREADCRUMB STRIP */}
      <div className="bg-stone-100/80 border-b border-stone-200/80 py-3 px-4 sm:px-6 lg:px-8 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-amber-700 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/products" className="hover:text-amber-700">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-semibold text-stone-900 truncate">
            {product.name}
          </span>
        </div>
      </div>

      {/* TOP SHOWCASE SECTION */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Product Imagery */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md h-[420px] sm:h-[480px] bg-gradient-to-b from-stone-100 to-white rounded-3xl border border-stone-200 p-8 flex items-center justify-center shadow-lg">
              <span className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                {product.badge}
              </span>
              <span className="absolute top-5 right-5 text-xs font-semibold text-stone-500 bg-white px-2.5 py-1 rounded-md border border-stone-200 shadow-xs">
                Net Wt: {product.packSize}
              </span>

              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Thumbnail Showcase / Certifications */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-4">
              <div className="p-2.5 rounded-xl border border-stone-200 bg-white text-center shadow-xs">
                <span className="text-[10px] text-stone-500 uppercase block font-semibold">Standard</span>
                <span className="text-xs font-black text-amber-700">{product.code}</span>
              </div>
              <div className="p-2.5 rounded-xl border border-stone-200 bg-white text-center shadow-xs">
                <span className="text-[10px] text-stone-500 uppercase block font-semibold">Classification</span>
                <span className="text-xs font-black text-stone-800">{product.enCode}</span>
              </div>
              <div className="p-2.5 rounded-xl border border-stone-200 bg-white text-center shadow-xs">
                <span className="text-[10px] text-stone-500 uppercase block font-semibold">Fibre Matrix</span>
                <span className="text-xs font-black text-emerald-600">Reinforced</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                {product.category} Series • Conforms to {product.standardType}
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-amber-800 font-semibold mt-1">
                {product.subtitle}
              </p>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Feature Checklist matching template */}
            <div className="bg-amber-50/50 rounded-2xl border border-amber-200/70 p-5 space-y-2.5">
              <h3 className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-2">
                Key Performance Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm cursor-pointer"
              >
                Get a Quote
              </button>

              <button
                type="button"
                onClick={() => setIsTdsModalOpen(true)}
                className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold rounded-xl text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>Download Brochure / TDS</span>
              </button>
            </div>

            {/* Quick delivery helpline notice */}
            <div className="pt-2 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
              <span>Wholesale direct-to-site delivery available across India.</span>
              <a href="tel:+918130099534" className="text-amber-700 font-bold hover:underline">
                Call: +91 81300 99534
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* TABS SECTION */}
      <section className="bg-white border-y border-stone-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation matching template */}
          <div className="flex border-b border-stone-200 overflow-x-auto gap-2 sm:gap-6 pb-px scrollbar-none">
            {[
              { id: 'details', label: 'Product Details', icon: FileText },
              { id: 'technical', label: 'Technical Data', icon: Layers },
              { id: 'howToUse', label: 'How to Use', icon: Wrench },
              { id: 'calculator', label: 'Coverage Calculator', icon: Calculator },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'border-amber-600 text-amber-700'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB CONTENTS */}
          <div className="pt-8">
            
            {/* 1. PRODUCT DETAILS TAB */}
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Details Table */}
                <div className="lg:col-span-8 bg-stone-50/50 rounded-2xl border border-stone-200 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-stone-900 mb-4">
                    Product Specifications
                  </h3>
                  <div className="divide-y divide-stone-200 text-xs sm:text-sm">
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Product Type</span>
                      <span className="sm:col-span-2 font-medium text-stone-900">{product.technicalData.productType}</span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Indian Standard</span>
                      <span className="sm:col-span-2 font-bold text-amber-700">{product.standardType}</span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">European Norms</span>
                      <span className="sm:col-span-2 font-medium text-stone-900">{product.enCode}</span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Suitable For</span>
                      <span className="sm:col-span-2 font-medium text-stone-900">
                        {product.suitableFor.join(', ')}
                      </span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Application Areas</span>
                      <span className="sm:col-span-2 font-medium text-stone-900">
                        {product.applicationAreas.join(', ')}
                      </span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Coverage</span>
                      <span className="sm:col-span-2 font-medium text-stone-900">{product.technicalData.coverage}</span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Bed Thickness</span>
                      <span className="sm:col-span-2 font-medium text-stone-900">{product.technicalData.bedThickness}</span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Pot Life</span>
                      <span className="sm:col-span-2 font-medium text-stone-900">{product.technicalData.potLife}</span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Open Time</span>
                      <span className="sm:col-span-2 font-medium text-stone-900">{product.technicalData.openTime}</span>
                    </div>
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-semibold text-stone-500">Pack Size</span>
                      <span className="sm:col-span-2 font-bold text-stone-900">{product.packSize}</span>
                    </div>
                  </div>
                </div>

                {/* Applications Side Box matching template */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
                    <h4 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                      <Building className="w-4 h-4 text-amber-700" />
                      Recommended Applications
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                        <div className="relative h-20 w-full">
                          <Image
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop"
                            alt="Floors"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="p-2 text-[11px] font-bold text-stone-800 text-center">Floors</p>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                        <div className="relative h-20 w-full">
                          <Image
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop"
                            alt="Walls"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="p-2 text-[11px] font-bold text-stone-800 text-center">Walls</p>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                        <div className="relative h-20 w-full">
                          <Image
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop"
                            alt="Residential"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="p-2 text-[11px] font-bold text-stone-800 text-center">Residential</p>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                        <div className="relative h-20 w-full">
                          <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop"
                            alt="Commercial"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="p-2 text-[11px] font-bold text-stone-800 text-center">Commercial</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-stone-200 text-center">
                      <button
                        type="button"
                        onClick={() => setIsQuoteOpen(true)}
                        className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
                      >
                        Enquire for Wholesale Bulk
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. TECHNICAL DATA TAB */}
            {activeTab === 'technical' && (
              <div className="bg-stone-50/50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Technical Data Sheet (TDS) Metrics
                    </h3>
                    <p className="text-xs text-stone-500">
                      Standard Laboratory Test Values measured at 27°C and 65% Relative Humidity.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsTdsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full TDS (PDF)</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <tbody className="divide-y divide-stone-200">
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Tensile Adhesion Strength</td>
                        <td className="py-3 px-4 font-bold text-amber-900">{product.technicalData.tensileAdhesion}</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Shear Adhesion Strength</td>
                        <td className="py-3 px-4 font-bold text-amber-900">{product.technicalData.shearStrength}</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Water Demand</td>
                        <td className="py-3 px-4 font-medium text-stone-800">{product.technicalData.waterDemand}</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Pot Life of Mixed Adhesive</td>
                        <td className="py-3 px-4 font-medium text-stone-800">{product.technicalData.potLife}</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Open Time</td>
                        <td className="py-3 px-4 font-medium text-stone-800">{product.technicalData.openTime}</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Adjustability Time</td>
                        <td className="py-3 px-4 font-medium text-stone-800">{product.technicalData.adjustabilityTime}</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Curing / Traffic Ready</td>
                        <td className="py-3 px-4 font-medium text-stone-800">{product.technicalData.curingTime}</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Service Temperature Range</td>
                        <td className="py-3 px-4 font-medium text-stone-800">{product.technicalData.temperatureRange}</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-semibold text-stone-600">Shelf Life & Storage</td>
                        <td className="py-3 px-4 font-medium text-stone-800">{product.technicalData.shelfLife}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. HOW TO USE TAB */}
            {activeTab === 'howToUse' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.howToUse.map((step) => (
                    <div
                      key={step.step}
                      className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-3xl font-black text-amber-600 block mb-2">
                          {step.step}
                        </span>
                        <h4 className="text-base font-bold text-stone-900 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {step.instruction}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-xs text-amber-950 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm mb-1">Contractor Best Practice Note</h5>
                    <p className="leading-relaxed">
                      For large format vitrified tiles (e.g. 2x4 ft or larger), always practice <strong>double spreading (back-buttering)</strong> — apply adhesive to both the substrate using a notched trowel and a thin layer to the back of the tile with the flat edge. This ensures 100% full coverage and eliminates hollow spots under the tile surface.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. COVERAGE CALCULATOR TAB */}
            {activeTab === 'calculator' && (
              <CoverageCalculator
                defaultProduct={product.name}
                onOpenQuoteModal={() => {
                  setIsQuoteOpen(true);
                }}
              />
            )}

          </div>

        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct={product.name}
      />

      {/* TDS Viewer Modal */}
      <ResourceViewerModal
        isOpen={isTdsModalOpen}
        onClose={() => setIsTdsModalOpen(false)}
        resourceTitle={`${product.name} - Technical Data Sheet`}
        resourceCategory={product.standardType}
        resourceSize="890 KB"
      />
    </div>
  );
}
