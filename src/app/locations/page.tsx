import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { citiesData } from '@/data/cities';
import { MapPin, Truck, ShieldCheck, ArrowRight, Building2, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tile Adhesive Supply & Distribution Network in India | Vajra Bond',
  description: 'Explore Vajra Bond nationwide tile adhesive supply footprint across Tier 1 and Tier 2 Indian cities. Fast 24-48 hr site dispatch, IS 15477 standards compliance, and authorized dealer network.',
  keywords: 'tile adhesive cities India, tile adhesive supplier Delhi Mumbai Bangalore, tile adhesive manufacturers Tier 1 Tier 2 India, IS 15477 distributor network',
  alternates: {
    canonical: 'https://vajrabond.com/locations',
  },
};

export default function LocationsHubPage() {
  const tier1Cities = citiesData.filter((c) => c.tier === 'Tier 1');
  const tier2Cities = citiesData.filter((c) => c.tier === 'Tier 2');

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/40">
      
      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            alt="National tile adhesive supply network"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left reveal">
          <h1 className="text-3xl sm:text-5xl font-black font-serif-heading tracking-tight text-white max-w-3xl">
            Pan-India Supply & Distribution Network
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            From our high-capacity automated manufacturing plant in NCR to key Tier 1 and Tier 2 hubs across India, Vajra Bond delivers architect-grade tile adhesives, tile-on-tile mortars, and stone chemicals directly to construction sites.
          </p>
        </div>
      </section>

      {/* 3 VALUE PILLARS */}
      <section className="bg-white border-b border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">24–48 Hour Site Dispatch</h4>
                <p className="text-xs text-stone-500">Fast delivery directly to builder and contractor sites across India.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">IS:15477:2019 Certified</h4>
                <p className="text-xs text-stone-500">Batch-tested Type 1T, 2T, 3T and 4S polymer formulations.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Direct Factory Support</h4>
                <p className="text-xs text-stone-500">Technical pull-off test assistance and dealer pricing support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES DIRECTORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full space-y-14 flex-1">
        
        {/* TIER 1 METROPOLITAN CITIES */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-2xl font-black text-stone-900 font-serif-heading">
              Tier 1 Metropolitan Hubs
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Serving premier skyscraper projects, commercial IT corridors, and luxury residential infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tier1Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full uppercase">
                      {city.state}
                    </span>
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-amber-600" />
                      {city.dispatchTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {city.name}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {city.constructionFocus}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 mt-4">
                  <span>Explore {city.name} Supply</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TIER 2 HIGH-GROWTH CITIES */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-2xl font-black text-stone-900 font-serif-heading">
              Tier 2 High-Growth Industrial & Urban Hubs
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Rapid direct dispatch to expanding real estate corridors, state capitals, and industrial belts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tier2Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-stone-700 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-full uppercase">
                      {city.state}
                    </span>
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-amber-600" />
                      {city.dispatchTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {city.name}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {city.constructionFocus}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 mt-4">
                  <span>Explore {city.name} Supply</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}
