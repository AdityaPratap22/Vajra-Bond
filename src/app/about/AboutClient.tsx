'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Users, 
  CheckCircle2, 
  Award, 
  Factory, 
  FlaskConical, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';

export default function AboutClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/30">
      
      {/* HERO BANNER */}
      <section className="relative bg-stone-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
            alt="Modern architectural building"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-950/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-3xl leading-tight">
            Building Stronger Spaces for a Better Tomorrow
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            At Vajra Bond, we are committed to providing high-quality tile bonding solutions that ensure strength, durability and long-lasting beauty in every space.
          </p>

          <div className="pt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl text-sm transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 font-bold rounded-xl text-sm transition-all cursor-pointer"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 reveal-left">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider block mb-2">
                Our Genesis & Evolution
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                Our Story
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Vajra Bond was founded with a singular, resolute vision: to eliminate the age-old failures of traditional sand-cement mortar — such as hollow sounds, debonded tiles, water seepages, and cracking — by introducing international-grade polymer adhesive technology to the Indian construction industry.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Today, marketed by <strong>Shivantra Chemtech LLP</strong> and manufactured by <strong>Faslen Industries Pvt. Ltd.</strong>, Vajra Bond is a trusted, household name among builders, architects, interior designers, and tile contractors across India. Our manufacturing facilities utilize cutting-edge German blending automation, calibrated sand screening, and premium imported polymers.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-stone-800 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Certified Conformance to IS: 15477:2019 Type 1T, 2T, 3T & 4</span>
              </div>
              <div className="flex items-center gap-3 text-stone-800 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>State-of-the-Art Quality Control Testing Lab in Faridabad, Haryana</span>
              </div>
              <div className="flex items-center gap-3 text-stone-800 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Zero-slump, fibre-reinforced matrix tailored for large format slabs</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 group"
              >
                <span>View Our Landmark Projects Across India</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Branded Office Image */}
          <div className="lg:col-span-6 relative reveal-right delay-150">
            <div className="relative h-[360px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Vajra Bond Corporate Headquarters"
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30"></div>

              {/* Office Branding Overlay Graphic matching template */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-amber-300 max-w-sm text-stone-900">
                  <div className="relative w-16 h-16 mx-auto mb-3">
                    <Image
                      src="/images/logo.png"
                      alt="Vajra Bond Seal"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-stone-900">VAJRA BOND</h3>
                  <p className="text-xs font-bold text-amber-700 tracking-widest uppercase mt-0.5">
                    MAJBOOT JOD. LAMBI UMAR.
                  </p>
                  <p className="text-[11px] text-stone-500 mt-2 border-t border-stone-100 pt-2">
                    Corporate Headquarters • Faridabad, Haryana
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="py-12 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-amber-50/60 border border-amber-200/80 relative overflow-hidden group hover:shadow-lg transition-shadow reveal delay-100">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-5 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Our Vision</h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                To be the most trusted and pioneering brand in tile bonding solutions across India, recognized for uncompromising chemical quality, technological innovation, and lifetime structural safety.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200/80 relative overflow-hidden group hover:shadow-lg transition-shadow reveal delay-200">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center mb-5 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Our Mission</h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                To manufacture and provide reliable, high-performance bonding formulations that create stronger, safer, and more magnificent spaces for homeowners, architects, and structural engineers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE VAJRA BOND PILLARS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-wider block mb-2">
            The Vajra Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Why Choose Vajra Bond?
          </h2>
          <p className="text-stone-500 text-sm mt-2">
            Engineered with high polymer retention, crack-bridging fibres, and unyielding adhesion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all text-center sm:text-left reveal delay-100">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 mx-auto sm:mx-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Premium Quality</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every batch undergoes strict compressive, shear, and tensile pull-off tests before leaving our manufacturing lines.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all text-center sm:text-left reveal delay-150">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 mx-auto sm:mx-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Innovative Solutions</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Engineered with micro-fibres and elastomeric polymers to resist seismic tremors, thermal shocks, and monsoon dampness.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all text-center sm:text-left reveal delay-200">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 mx-auto sm:mx-0">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Customer Focus</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We empower contractors with training workshops, on-site coverage calculations, and 24/7 technical hotline support.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all text-center sm:text-left reveal delay-250">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 mx-auto sm:mx-0">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Sustainable Growth</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Environmentally conscious formulation with zero toxic off-gassing, complying with IGBC Green Building guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* COMMITMENT BANNER */}
      <section className="relative py-16 bg-stone-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            The Vajra Bond Guarantee
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            MAJBOOT JOD. LAMBI UMAR.
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
            More than a promise, it&apos;s our commitment to every structure.
          </p>

          <div className="pt-8 flex justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl text-sm shadow-xl transition-all cursor-pointer"
            >
              Get in Touch with Us
            </button>
          </div>
        </div>
      </section>

      {/* Global Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
