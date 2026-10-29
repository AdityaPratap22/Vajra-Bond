import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { 
  getCityBySlug, 
  getAllCitySlugs, 
  citiesData 
} from '@/data/cities';
import { products } from '@/data/products';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Truck, 
  Building2, 
  Award,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    city: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: 'City Location Not Found | Vajra Bond',
    };
  }

  const title = `Tile Adhesive Manufacturer & Supplier in ${city.name} | Vajra Bond (IS 15477)`;
  const description = `Buy premium polymer tile adhesives, tile-on-tile mortar, and stone bonding chemicals in ${city.name}. Fast ${city.dispatchTime} direct site delivery. Conforms to IS 15477:2019.`;

  return {
    title,
    description,
    keywords: [
      `tile adhesive in ${city.name}`,
      `tile adhesive manufacturer ${city.name}`,
      `tile adhesive supplier ${city.name}`,
      `vitrified tile adhesive ${city.name}`,
      `tile on tile adhesive ${city.name}`,
      `IS 15477 tile chemical ${city.name}`,
      `Vajra Bond ${city.name} dealer`,
      `epoxy grout ${city.name}`,
      `marble adhesive ${city.name}`
    ].join(', '),
    alternates: {
      canonical: `https://vajrabond.com/locations/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://vajrabond.com/locations/${city.slug}`,
      siteName: 'Vajra Bond',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
          width: 1200,
          height: 630,
          alt: `Vajra Bond Tile Adhesive in ${city.name}`,
        },
      ],
    },
  };
}

export default async function CityLocationPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  // Filter recommended products
  const recommendedProds = products.filter((p) =>
    city.recommendedProducts.includes(p.id)
  );

  // Other cities in the same tier
  const siblingCities = citiesData
    .filter((c) => c.slug !== city.slug)
    .slice(0, 8);

  const whatsappInquiryUrl = `https://wa.me/916395014392?text=${encodeURIComponent(
    `Hello Vajra Bond, I am inquiring about tile adhesive supply / dealership in ${city.name}.`
  )}`;

  // Structured Data Schema for LocalBusiness + Breadcrumb + FAQ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://vajrabond.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://vajrabond.com/locations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: city.name,
            item: `https://vajrabond.com/locations/${city.slug}`,
          },
        ],
      },
      {
        '@type': ['LocalBusiness', 'Manufacturer'],
        name: `Vajra Bond Tile Adhesives - ${city.name}`,
        image: 'https://vajrabond.com/images/logo.png',
        url: `https://vajrabond.com/locations/${city.slug}`,
        telephone: '+91 63950 14392',
        priceRange: '₹₹',
        description: city.heroDescription,
        address: {
          '@type': 'PostalAddress',
          addressRegion: city.state,
          addressCountry: 'IN',
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedIn: {
            '@type': 'Country',
            name: 'India',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: city.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/40">
      {/* Schema.org Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt={`Tile adhesive supply in ${city.name}`}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left reveal">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-stone-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
            <Link href="/locations" className="hover:text-amber-400 transition-colors">
              Locations
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
            <span className="text-amber-400 font-semibold">{city.name}</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black font-serif-heading tracking-tight text-white max-w-4xl leading-tight">
            {city.heroTitle}
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed">
            {city.heroDescription}
          </p>

          {/* Quick CTA & Dispatch Badge */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#c5832b] hover:bg-[#b07220] text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2.5"
            >
              <WhatsAppIcon className="w-5 h-5" variant="official" />
              <span>Get Site Quote in {city.name}</span>
            </a>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800/80 border border-stone-700/60 text-stone-200 text-xs font-semibold">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Dispatch to {city.name}: <strong>{city.dispatchTime}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 HIGHLIGHT METRICS BAR */}
      <section className="bg-white border-b border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <Truck className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-semibold">
                  Delivery Speed
                </span>
                <span className="text-sm font-black text-stone-900">
                  {city.dispatchTime}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-semibold">
                  Standard Compliance
                </span>
                <span className="text-sm font-black text-stone-900">
                  IS 15477:2019 / EN 12004
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <Building2 className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-semibold">
                  Coverage Tier
                </span>
                <span className="text-sm font-black text-stone-900">
                  {city.tier} City Hub ({city.state})
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <Award className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-semibold">
                  Contractor Warranty
                </span>
                <span className="text-sm font-black text-stone-900">
                  Zero Debond Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITY LOCAL ENGINEERING & CLIMATE SECTION */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-heading">
                Engineered for Construction Demands in {city.name}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
                Whether executing high-traffic commercial projects or residential renovations, tiling installations in {city.name} require specialized polymer adhesives to guarantee long-term durability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-700" />
                  <span>Construction Landscape in {city.name}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {city.constructionFocus}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 shadow-xs">
                <h3 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Climate Engineering Solution</span>
                </h3>
                <p className="text-stone-700 text-xs sm:text-sm mt-2 leading-relaxed">
                  {city.climateChallenge}
                </p>
              </div>
            </div>

            {/* Popular Localities Covered */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                Key Localities & Project Areas Served in {city.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.keyLocalities.map((loc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 text-xs font-medium shadow-2xs"
                  >
                    <MapPin className="w-3 h-3 text-amber-600" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Direct Supply & Helpline Card */}
          <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Direct Manufacturer Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Supplying {city.name} Construction Sites
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our engineering sales team for wholesale dealer discounts, full truckload dispatches, and free IS:15477 test certifications for projects in {city.name}.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard 20 kg Moisture-Proof HDPE Packaging</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Factory Fresh Batches with QR Authenticity</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-Site Pull-Off Adhesion Testing Support</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#c5832b] hover:bg-[#b07220] text-white text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" variant="official" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="tel:+916395014392"
                className="py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-bold text-center border border-stone-700 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call +91 63950 14392</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* RECOMMENDED PRODUCTS SECTION */}
      <section className="py-12 bg-stone-100/60 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-heading">
              Recommended Tile Adhesives for {city.name}
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Tested and approved polymer adhesive formulations for {city.name} substrates and architectural specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProds.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 bg-stone-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block uppercase">
                      {product.standardType}
                    </span>
                    <h3 className="text-base font-bold text-stone-900 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-stone-600 text-xs line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full mt-3 py-2 px-3 rounded-lg bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY SPECIFIC FAQS */}
      <section className="py-14 sm:py-18 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-heading">
            Frequently Asked Questions in {city.name}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">
            Common questions from architects, contractors, and home builders in {city.name}.
          </p>
        </div>

        <div className="space-y-4">
          {city.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-2"
            >
              <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm pl-7 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OTHER TIER 1 & TIER 2 CITIES STRIP */}
      <section className="bg-white border-t border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                Pan-India Supply & Delivery Network
              </h3>
              <p className="text-stone-500 text-xs mt-0.5">
                Explore our tile adhesive manufacturing and supply footprint in other Indian cities.
              </p>
            </div>
            <Link
              href="/locations"
              className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
            >
              <span>View All 30+ Cities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {siblingCities.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="px-3 py-2 rounded-xl bg-stone-50 hover:bg-amber-50 hover:text-amber-800 border border-stone-200 text-center text-xs font-medium text-stone-700 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
