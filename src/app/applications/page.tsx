'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  PhoneCall, 
  Layers
} from 'lucide-react';
import { applications } from '@/data/applications';
import QuoteModal from '@/components/QuoteModal';

export default function ApplicationsPage() {
  const [selectedApp, setSelectedApp] = useState<string>('residential');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');

  const currentApp = applications.find(a => a.id === selectedApp) || applications[0];

  const handleOpenQuote = (prodName: string) => {
    setQuoteProduct(prodName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/30">
      
      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left reveal">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4" />
            Surface Chemistry & Application Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Applications
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Our tile adhesives are engineered to perform across a wide range of spaces and surfaces — from cozy residential apartments to massive airport terminals and exterior high-rise facades.
          </p>
        </div>
      </section>

      {/* QUICK CATEGORY SELECTOR TABS */}
      <section className="bg-white border-b border-stone-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelectedApp(app.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedApp === app.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {app.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED APPLICATION FOCUS DETAIL */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Visual Left */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-900 reveal-left">
            <Image
              src={currentApp.image}
              alt={currentApp.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 bg-amber-500 text-stone-950 text-xs font-black uppercase tracking-wider rounded-md mb-2">
                Specialized Solution
              </span>
              <h2 className="text-2xl font-bold leading-tight">{currentApp.title}</h2>
              <p className="text-xs text-amber-200 mt-1">{currentApp.subtitle}</p>
            </div>
          </div>

          {/* Details Right */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 reveal-right delay-100">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                Engineering Specification
              </span>
              <h3 className="text-2xl font-black text-stone-900 mb-3">
                {currentApp.title} Bonding Standards
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {currentApp.detailedDesc}
              </p>

              {/* Key Benefits */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Critical Advantages:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {currentApp.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Vajra Bond Products */}
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                  Recommended Vajra Bond Adhesives:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentApp.recommendedProducts.map((rec) => (
                    <div
                      key={rec.code}
                      className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col justify-between hover:bg-amber-50 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-black text-stone-900 text-xs">{rec.name}</span>
                          <span className="text-[10px] bg-amber-200 text-amber-900 font-bold px-1.5 py-0.5 rounded">
                            {rec.code}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-600 mt-1.5">{rec.reason}</p>
                      </div>

                      <div className="pt-3 mt-2 border-t border-amber-200/60 flex items-center justify-between">
                        <Link
                          href={`/products/${rec.slug}`}
                          className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
                        >
                          <span>Specs</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleOpenQuote(rec.name)}
                          className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold rounded-md shadow-xs cursor-pointer"
                        >
                          Quote
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Need on-site technical inspection for your project?</span>
              </div>
              <button
                type="button"
                onClick={() => handleOpenQuote(`${currentApp.title} Project`)}
                className="px-6 py-2.5 bg-stone-900 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Request Application Guidance
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6 APPLICATIONS GRID (Matching template bottom row) */}
      <section className="py-12 bg-stone-100/70 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 reveal">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              All Application Categories
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Select any category above or explore individual use cases below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => (
              <div
                key={app.id}
                id={app.id}
                className={`bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between reveal ${
                  idx % 3 === 0 ? 'delay-100' : idx % 3 === 1 ? 'delay-200' : 'delay-300'
                }`}
              >
                <div>
                  <div className="relative h-44 w-full bg-stone-200">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-base font-bold leading-tight">{app.title}</h3>
                      <p className="text-[11px] text-amber-300">{app.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {app.shortDesc}
                    </p>
                    <div className="space-y-1 text-[11px] text-stone-500 pt-1 border-t border-stone-100">
                      <strong className="text-stone-800">Best Practices:</strong>
                      <p className="italic">{app.bestPractices[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedApp(app.id)}
                    className="w-full py-2 bg-stone-100 hover:bg-amber-50 hover:text-amber-800 text-stone-800 font-bold text-xs rounded-lg transition-colors border border-stone-200 cursor-pointer"
                  >
                    View Recommended Products & Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct={quoteProduct}
      />
    </div>
  );
}
