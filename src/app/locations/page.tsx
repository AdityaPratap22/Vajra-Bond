import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { citiesData } from '@/data/cities';
import { MapPin, Truck, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tile Adhesive Supply Network: Delhi NCR, Haryana, Punjab & Rajasthan | Vajra Bond',
  description: 'Direct factory supply of polymer tile adhesives within 500-600km of Delhi NCR across Haryana, Punjab, and Rajasthan. Fast same-day and 24-hr site dispatch, IS 15477 certified.',
  keywords: 'tile adhesive Delhi NCR, tile adhesive Haryana, tile adhesive Punjab, tile adhesive Rajasthan, tile adhesive Faridabad Gurgaon Noida Jaipur Chandigarh, IS 15477 manufacturer',
  alternates: {
    canonical: 'https://vajrabond.com/locations',
  },
};

export default function LocationsHubPage() {
  const states = ['Delhi NCR', 'Haryana', 'Punjab', 'Rajasthan'] as const;

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/40">
      
      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            alt="Regional tile adhesive supply network"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left reveal" suppressHydrationWarning>
          <h1 className="text-3xl sm:text-5xl font-black font-serif-heading tracking-tight text-white max-w-4xl">
            Regional Supply Network: Delhi NCR, Haryana, Punjab & Rajasthan
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed">
            Manufactured at our automated plant in Faridabad (Delhi NCR) and dispatched directly to job sites within a 500–600 km radius. Same-day, 12-hour, and 24-hour deliveries across Tier 1 and Tier 2 hubs in Haryana, Punjab, and Rajasthan.
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
                <h4 className="text-sm font-bold text-stone-900">500–600 km Direct Corridor</h4>
                <p className="text-xs text-stone-500">Same-day and 24-hour direct site deliveries from Faridabad plant.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">IS:15477:2019 Certified</h4>
                <p className="text-xs text-stone-500">Type 1T, 2T, 3T and 4S formulations with batch lab test certificates.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Direct Factory Support</h4>
                <p className="text-xs text-stone-500">Pull-off test verification, contractor support, and dealer wholesale rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES DIRECTORY ORGANIZED BY REGIONAL STATE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full space-y-14 flex-1">
        
        {states.map((state) => {
          const citiesInState = citiesData.filter((c) => c.state === state);
          return (
            <section key={state} className="space-y-6">
              <div className="border-b border-stone-200 pb-3 flex items-baseline justify-between">
                <div>
                  <h2 className="text-2xl font-black text-stone-900 font-serif-heading">
                    {state} Hubs
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Tier 1 and Tier 2 cities with direct dispatch from NCR plant
                  </p>
                </div>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  {citiesInState.length} Cities
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {citiesInState.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}`}
                    className="group bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md uppercase">
                          {city.tier}
                        </span>
                        <span className="text-xs text-stone-500 flex items-center gap-1 font-semibold">
                          <Truck className="w-3.5 h-3.5 text-amber-600" />
                          {city.dispatchTime}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                          {city.name}
                        </h3>
                        <span className="text-[11px] text-stone-400 block mt-0.5">
                          {city.distanceFromNCR}
                        </span>
                      </div>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {city.constructionFocus}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 mt-4">
                      <span>Explore Supply</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

      </div>

    </div>
  );
}
