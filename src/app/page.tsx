'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Calculator,
  Shield,
  Droplet,
  Layers,
  Home,
  Users,
  Sparkles,
  Leaf,
  CheckCircle,
  Star,
  Calendar,
  Clock,
  BookOpen
} from 'lucide-react';
import { blogPosts } from '@/data/blogs';
import QuoteModal from '@/components/QuoteModal';

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('General Enquiry');

  // Calculator State
  const [tileSize, setTileSize] = useState('600 x 600 mm');
  const [area, setArea] = useState<number>(100);
  const [application, setApplication] = useState('Floor');
  const [calculatedBags, setCalculatedBags] = useState<number | null>(null);

  // Testimonial slide index
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    // 1 bag (20kg) covers ~50 sq ft
    const bags = Math.max(1, Math.ceil((area / 50) * 1.08));
    setCalculatedBags(bags);
  };

  const openQuote = (prodName: string = 'General Enquiry') => {
    setSelectedProductForQuote(prodName);
    setIsQuoteOpen(true);
  };

  const testimonials = [
    {
      id: 1,
      quote: "Excellent product quality and strong bonding. Vajra Bond has been our go-to choice for all our projects.",
      name: "Rohit Sharma",
      role: "Contractor, New Delhi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      quote: "Great performance even in challenging conditions. Highly recommended for large format tiles.",
      name: "Amit Verma",
      role: "Architect, Gurgaon",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      quote: "Reliable, easy to use and gives excellent finishing. Our clients are always satisfied.",
      name: "Sandeep Kumar",
      role: "Builder, Noida",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden">
        {/* Background luxury living room */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury modern architectural living space"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle overlay gradient from left white/beige to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-100/95 via-stone-100/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-5 reveal-left">
              <span className="text-[#c5832b] text-xs font-black tracking-widest uppercase block">
                PREMIUM TILE ADHESIVES
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.08] font-serif-heading">
                STRONG BONDS <br />
                FOR <span className="text-[#c5832b] italic font-serif-heading">BEAUTIFUL</span> <br />
                SPACES
              </h1>

              <p className="text-stone-700 text-sm sm:text-base max-w-lg leading-relaxed">
                High-performance tile bonding solutions for modern homes, commercial spaces and infrastructure projects.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/products"
                  className="px-6 py-3 bg-[#c5832b] hover:bg-[#b07220] text-white font-bold rounded-lg text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => openQuote('General Enquiry')}
                  className="px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 font-bold rounded-lg text-xs sm:text-sm border border-stone-300 shadow-xs transition-colors cursor-pointer"
                >
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right Card Overlay matching template */}
            <div className="lg:col-span-5 flex justify-end reveal-right delay-200">
              <div className="bg-stone-950/70 backdrop-blur-xs p-6 rounded-xl border border-stone-800/80 max-w-xs text-white relative">
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#c5832b] rounded-r"></div>
                <div className="pl-4">
                  <h3 className="text-base sm:text-lg font-black tracking-wider uppercase font-serif-heading leading-tight">
                    SPACES <br />
                    THAT <br />
                    STAY <br />
                    BEAUTIFUL <br />
                    FOR YEARS
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 5 BADGES BAR */}
      <section className="bg-white border-y border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            <div className="flex items-center gap-3 reveal delay-100">
              <div className="w-10 h-10 rounded-lg border border-[#c5832b]/60 flex items-center justify-center shrink-0 text-[#c5832b]">
                <Shield className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">High Bond Strength</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Long-lasting durability</p>
              </div>
            </div>

            <div className="flex items-center gap-3 reveal delay-150">
              <div className="w-10 h-10 rounded-lg border border-[#c5832b]/60 flex items-center justify-center shrink-0 text-[#c5832b]">
                <Droplet className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">Water & Weather Resistant</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">For all conditions</p>
              </div>
            </div>

            <div className="flex items-center gap-3 reveal delay-200">
              <div className="w-10 h-10 rounded-lg border border-[#c5832b]/60 flex items-center justify-center shrink-0 text-[#c5832b]">
                <Layers className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">For All Tile Types</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Ceramic, vitrified, stone & more</p>
              </div>
            </div>

            <div className="flex items-center gap-3 reveal delay-250">
              <div className="w-10 h-10 rounded-lg border border-[#c5832b]/60 flex items-center justify-center shrink-0 text-[#c5832b]">
                <Home className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">Interior & Exterior Use</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Versatile applications</p>
              </div>
            </div>

            <div className="flex items-center gap-3 reveal delay-300">
              <div className="w-10 h-10 rounded-lg border border-[#c5832b]/60 flex items-center justify-center shrink-0 text-[#c5832b]">
                <Users className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">Trusted by Builders & Contractors</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Across India</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCT RANGE */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 reveal">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-heading">
              Our Product Range
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Specially formulated for different tile types, surfaces and project needs.
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-bold text-[#c5832b] hover:text-[#b07220] flex items-center gap-1 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Real Front Profile Product Sacks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* 1. VB-1001 Standard Tile Adhesive */}
          <div className="flex flex-col items-center text-center group reveal delay-100">
            <Link href="/products/vb-1001-floor-wall-tile-adhesive" className="w-full flex justify-center">
              <div className="relative w-44 h-60 sm:w-52 sm:h-72 rounded-2xl overflow-hidden bg-stone-100/80 border border-stone-200/80 shadow-md group-hover:shadow-2xl group-hover:border-[#c5832b]/50 group-hover:-translate-y-1.5 transition-all duration-300">
                <Image
                  src="/images/products/vb-1001-front.jpg"
                  alt="Tile Adhesive for Floor and Wall Tiles"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 backdrop-blur-xs text-stone-800 border border-stone-200/80 shadow-xs">
                  Type 1T • C1TE
                </div>
              </div>
            </Link>
            <div className="mt-3.5 w-full px-1">
              <span className="text-[11px] font-bold text-[#c5832b] uppercase tracking-wider block">
                VB-1001
              </span>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mt-0.5 leading-snug">
                Tile Adhesive for Floor & Wall Tiles
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 min-h-[32px] line-clamp-2">
                For ceramic & clay tiles (indoor floors & walls)
              </p>
            </div>
            <Link
              href="/products/vb-1001-floor-wall-tile-adhesive"
              className="mt-2.5 text-xs font-bold text-[#c5832b] hover:text-[#b07220] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2. VB-2002 Ceramic and Vitrified Tile Adhesive */}
          <div className="flex flex-col items-center text-center group reveal delay-200">
            <Link href="/products/vb-2002-ceramic-vitrified-tile-adhesive" className="w-full flex justify-center">
              <div className="relative w-44 h-60 sm:w-52 sm:h-72 rounded-2xl overflow-hidden bg-stone-100/80 border border-stone-200/80 shadow-md group-hover:shadow-2xl group-hover:border-[#c5832b]/50 group-hover:-translate-y-1.5 transition-all duration-300">
                <Image
                  src="/images/products/vb-2002-front.jpg"
                  alt="Tile Adhesive for Ceramic and Vitrified Tiles"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 backdrop-blur-xs text-stone-800 border border-stone-200/80 shadow-xs">
                  Type 2T • C1TE
                </div>
              </div>
            </Link>
            <div className="mt-3.5 w-full px-1">
              <span className="text-[11px] font-bold text-[#c5832b] uppercase tracking-wider block">
                VB-2002
              </span>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mt-0.5 leading-snug">
                Tile Adhesive for Ceramic & Vitrified
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 min-h-[32px] line-clamp-2">
                Ideal for 2×4 vitrified tiles up to 10 feet height
              </p>
            </div>
            <Link
              href="/products/vb-2002-ceramic-vitrified-tile-adhesive"
              className="mt-2.5 text-xs font-bold text-[#c5832b] hover:text-[#b07220] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3. VB-2004 Ultra Tile-on-Tile Adhesive */}
          <div className="flex flex-col items-center text-center group reveal delay-300">
            <Link href="/products/vb-2004-floor-wall-tile-on-tile-adhesive" className="w-full flex justify-center">
              <div className="relative w-44 h-60 sm:w-52 sm:h-72 rounded-2xl overflow-hidden bg-stone-100/80 border border-stone-200/80 shadow-md group-hover:shadow-2xl group-hover:border-[#c5832b]/50 group-hover:-translate-y-1.5 transition-all duration-300">
                <Image
                  src="/images/products/vb-2004-front.jpg"
                  alt="Tile Adhesive for Floor, Wall & Tile on Tile"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 backdrop-blur-xs text-stone-800 border border-stone-200/80 shadow-xs">
                  Type 2T • C2TE
                </div>
              </div>
            </Link>
            <div className="mt-3.5 w-full px-1">
              <span className="text-[11px] font-bold text-[#c5832b] uppercase tracking-wider block">
                VB-2004
              </span>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mt-0.5 leading-snug">
                Tile Adhesive for Floor, Wall & Tile on Tile
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 min-h-[32px] line-clamp-2">
                Floor, wall & tile-on-tile renovation without demolition
              </p>
            </div>
            <Link
              href="/products/vb-2004-floor-wall-tile-on-tile-adhesive"
              className="mt-2.5 text-xs font-bold text-[#c5832b] hover:text-[#b07220] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. VB-3003 Large Format Tile & Stone Adhesive */}
          <div className="flex flex-col items-center text-center group reveal delay-400">
            <Link href="/products/vb-3003-large-format-tile-stone-adhesive" className="w-full flex justify-center">
              <div className="relative w-44 h-60 sm:w-52 sm:h-72 rounded-2xl overflow-hidden bg-stone-100/80 border border-stone-200/80 shadow-md group-hover:shadow-2xl group-hover:border-[#c5832b]/50 group-hover:-translate-y-1.5 transition-all duration-300">
                <Image
                  src="/images/products/vb-3003-front.jpg"
                  alt="Tile Adhesive for Large Format Tile & Stone"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 backdrop-blur-xs text-stone-800 border border-stone-200/80 shadow-xs">
                  Type 3T • C2TES2
                </div>
              </div>
            </Link>
            <div className="mt-3.5 w-full px-1">
              <span className="text-[11px] font-bold text-[#c5832b] uppercase tracking-wider block">
                VB-3003
              </span>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mt-0.5 leading-snug">
                Large Format Tile & Stone
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 min-h-[32px] line-clamp-2">
                For tiles & natural stone slabs &gt; 600×600mm
              </p>
            </div>
            <Link
              href="/products/vb-3003-large-format-tile-stone-adhesive"
              className="mt-2.5 text-xs font-bold text-[#c5832b] hover:text-[#b07220] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. APPLICATIONS SECTION */}
      <section className="py-14 bg-stone-50/50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 reveal">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-heading">
                Applications
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">
                Our tile adhesives are designed to perform across a wide range of spaces.
              </p>
            </div>
            <Link
              href="/applications"
              className="text-xs sm:text-sm font-bold text-[#c5832b] hover:text-[#b07220] flex items-center gap-1 group"
            >
              <span>View All Applications</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 5 Application Cards matching template */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            <Link href="/applications" className="group reveal delay-100">
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-stone-200 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
                  alt="Residential"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs font-bold text-stone-900 mt-2.5">
                Residential
              </h3>
            </Link>

            <Link href="/applications" className="group reveal delay-150">
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-stone-200 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
                  alt="Commercial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs font-bold text-stone-900 mt-2.5">
                Commercial
              </h3>
            </Link>

            <Link href="/applications" className="group reveal delay-200">
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-stone-200 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
                  alt="Industrial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs font-bold text-stone-900 mt-2.5">
                Industrial
              </h3>
            </Link>

            <Link href="/applications" className="group reveal delay-250">
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-stone-200 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
                  alt="Wet Areas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs font-bold text-stone-900 mt-2.5">
                Wet Areas
              </h3>
            </Link>

            <Link href="/applications" className="group reveal delay-300">
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-stone-200 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop"
                  alt="Exterior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs font-bold text-stone-900 mt-2.5">
                Exterior
              </h3>
            </Link>

          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE VAJRA BOND (Dark section with notched trowel masonry background) */}
      <section className="relative py-16 lg:py-20 bg-stone-950 text-white overflow-hidden">
        {/* Mason / Tiler notched trowel background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
            alt="Tile adhesive application with notched trowel"
            fill
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Why Choose Vajra Bond & 6 Hexagonal Icons */}
            <div className="lg:col-span-8 space-y-8 reveal-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black font-serif-heading text-white tracking-tight">
                  Why Choose Vajra Bond?
                </h2>
                <div className="w-16 h-1 bg-[#c5832b] mt-2"></div>
              </div>

              {/* 6 Icons Grid matching template */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2">
                
                <div className="flex flex-col items-start gap-2">
                  <div className="w-12 h-12 rounded-xl border border-[#c5832b]/80 flex items-center justify-center text-[#c5832b]">
                    <Shield className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-200">
                    Superior Bond Strength
                  </h4>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="w-12 h-12 rounded-xl border border-[#c5832b]/80 flex items-center justify-center text-[#c5832b]">
                    <Sparkles className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-200">
                    Excellent Flexibility
                  </h4>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="w-12 h-12 rounded-xl border border-[#c5832b]/80 flex items-center justify-center text-[#c5832b]">
                    <Layers className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-200">
                    Slip Resistance
                  </h4>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="w-12 h-12 rounded-xl border border-[#c5832b]/80 flex items-center justify-center text-[#c5832b]">
                    <Droplet className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-200">
                    Water & Weather Resistant
                  </h4>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="w-12 h-12 rounded-xl border border-[#c5832b]/80 flex items-center justify-center text-[#c5832b]">
                    <Home className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-200">
                    For All Tile Types
                  </h4>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="w-12 h-12 rounded-xl border border-[#c5832b]/80 flex items-center justify-center text-[#c5832b]">
                    <Leaf className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-200">
                    Eco-Friendly Formulation
                  </h4>
                </div>

              </div>
            </div>

            {/* Right: MAJBOOT JOD. LAMBI UMAR. */}
            <div className="lg:col-span-4 text-left lg:text-right border-l lg:border-l-0 lg:border-r-0 border-stone-800 pl-6 lg:pl-0 reveal-right delay-200">
              <h3 className="text-2xl sm:text-3xl font-black text-[#c5832b] font-serif-heading tracking-wider leading-tight">
                MAJBOOT JOD. <br />
                LAMBI UMAR.
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-xs lg:ml-auto leading-relaxed">
                More than a promise, it&apos;s our commitment to every structure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. STATS / COUNTERS BAR */}
      <section className="bg-white border-b border-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
            
            <div className="pt-2 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-stone-900 font-serif-heading">15+</p>
              <p className="text-xs font-semibold text-stone-500 mt-1">Years of Expertise</p>
            </div>

            <div className="pt-2 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-stone-900 font-serif-heading">500+</p>
              <p className="text-xs font-semibold text-stone-500 mt-1">Projects Completed</p>
            </div>

            <div className="pt-2 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-stone-900 font-serif-heading">250+</p>
              <p className="text-xs font-semibold text-stone-500 mt-1">Channel Partners</p>
            </div>

            <div className="pt-2 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-stone-900 font-serif-heading">99%</p>
              <p className="text-xs font-semibold text-stone-500 mt-1">Customer Satisfaction</p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TILE ADHESIVE CONSUMPTION CALCULATOR */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Architectural Photo with pool & sliding glass patio */}
          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md reveal-left">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
              alt="Tile adhesive estimation for luxury villa patio"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Calculator Form matching template */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs relative reveal-right delay-150">
            {/* Top Right Calculator Outline Icon matching template */}
            <div className="absolute top-6 right-6 text-[#c5832b]/50">
              <Calculator className="w-10 h-10 stroke-[1.25]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-heading">
              Tile Adhesive <br />
              Consumption Calculator
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1 max-w-md">
              Get the estimated quantity based on your area and tile size.
            </p>

            <form onSubmit={handleCalculate} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                
                {/* Tile Size */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">
                    Tile Size
                  </label>
                  <select
                    value={tileSize}
                    onChange={(e) => setTileSize(e.target.value)}
                    className="w-full px-3 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs font-semibold text-stone-800 focus:outline-hidden focus:border-[#c5832b]"
                  >
                    <option value="300 x 300 mm">300 x 300 mm</option>
                    <option value="600 x 600 mm">600 x 600 mm</option>
                    <option value="600 x 1200 mm">600 x 1200 mm (2x4 ft)</option>
                    <option value="800 x 1600 mm">800 x 1600 mm</option>
                    <option value="1200 x 2400 mm">1200 x 2400 mm Slab</option>
                  </select>
                </div>

                {/* Area */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">
                    Area
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full px-3 py-2.5 bg-stone-50 border border-stone-300 rounded-l-lg text-xs font-semibold text-stone-900 focus:outline-hidden focus:border-[#c5832b]"
                    />
                    <span className="px-2.5 py-2.5 bg-stone-100 border border-l-0 border-stone-300 rounded-r-lg text-xs text-stone-500 font-semibold whitespace-nowrap">
                      sq. ft.
                    </span>
                  </div>
                </div>

                {/* Application */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">
                    Application
                  </label>
                  <select
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    className="w-full px-3 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs font-semibold text-stone-800 focus:outline-hidden focus:border-[#c5832b]"
                  >
                    <option value="Floor">Floor</option>
                    <option value="Wall">Wall</option>
                    <option value="Exterior">Exterior</option>
                    <option value="Tile on Tile">Tile on Tile</option>
                  </select>
                </div>

                {/* Calculate Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#c5832b] hover:bg-[#b07220] text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Calculate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </form>

            {/* Calculated Output Banner */}
            {calculatedBags !== null && (
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in">
                <div>
                  <p className="text-xs text-stone-600">
                    Estimated Requirement for <strong>{area} sq. ft.</strong> ({tileSize}):
                  </p>
                  <p className="text-xl font-black text-[#c5832b]">
                    {calculatedBags} Bags <span className="text-xs font-semibold text-stone-700">(20 kg each) ~ {calculatedBags * 20} kg</span>
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Recommended Grade: <strong>{tileSize.includes('1200') || tileSize.includes('1600') ? 'VB-2004 Ultra' : 'VB-2002 Flexi'}</strong>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openQuote(`${calculatedBags} Bags Tile Adhesive for ${area} sq. ft.`)}
                  className="px-4 py-2 bg-[#c5832b] hover:bg-[#b07220] text-white font-bold rounded-lg text-xs shadow-xs"
                >
                  Get Project Pricing
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* LATEST ARTICLES & KNOWLEDGE HUB */}
      <section className="py-14 sm:py-18 bg-stone-100/60 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 reveal">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#c5832b] text-xs font-bold uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge & Standards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-heading">
                Latest Articles & Guides
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">
                Technical insights, IS 15477 standards, and expert tiling advice from our engineering team.
              </p>
            </div>
            <Link
              href="/blogs"
              className="text-xs sm:text-sm font-bold text-[#c5832b] hover:text-[#b07220] flex items-center gap-1 group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className={`group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between reveal ${
                  idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : 'delay-300'
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-stone-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 group-hover:text-[#c5832b] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden bg-stone-200">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-semibold text-stone-800 truncate max-w-[120px]">
                        {post.author.name}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-[#c5832b] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 9. WHAT OUR CUSTOMERS SAY */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header row with Carousel Arrows matching template */}
        <div className="flex items-end justify-between mb-8 reveal">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-heading">
              What Our Customers Say
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Trusted by builders, architects and contractors across India.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTestimonialIdx((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-[#c5832b] hover:text-[#c5832b] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setTestimonialIdx((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-[#c5832b] hover:text-[#c5832b] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Testimonials in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-5 reveal ${
                idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : 'delay-300'
              }`}
            >
              <div className="space-y-3">
                {/* Gold Quote Mark matching template */}
                <span className="text-4xl font-serif text-[#c5832b] leading-none block">
                  “
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-stone-200 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{t.name}</h4>
                  <p className="text-[11px] text-stone-500">{t.role}</p>
                  <div className="flex text-amber-500 text-xs mt-0.5">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct={selectedProductForQuote}
      />

    </div>
  );
}
