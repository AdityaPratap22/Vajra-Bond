import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-[#121214] text-stone-300 pt-14 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-800/80 text-xs sm:text-sm reveal">
          
          {/* Col 1: Logo & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-13 h-13 sm:w-14 sm:h-14 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Vajra Bond"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-black text-white tracking-tight leading-none">
                  VAJRA BOND
                </span>
                <span className="text-[10px] font-bold text-amber-500 tracking-[0.16em] uppercase mt-1.5 leading-none">
                  MAJBOOT JOD. LAMBI UMAR.
                </span>
              </div>
            </Link>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              High-performance polymer-modified tile adhesives and stone chemicals conforming to IS:15477:2019 and EN 12004 standards.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-amber-400 transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-amber-400 transition-colors">
                  Blogs & Guides
                </Link>
              </li>
              <li>
                <Link href="/become-a-dealer" className="hover:text-amber-400 transition-colors">
                  Become a Dealer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>67, Tirkha Colony, Sector 2, Faridabad, Haryana 121004</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+918130099534" className="hover:text-white transition-colors">
                    +91 81300 99534
                  </a>
                  <a href="tel:+916395014392" className="hover:text-white transition-colors">
                    +91 63950 14392
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+916395014392" className="hover:text-white transition-colors">
                  +91 63950 14392
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/916395014392?text=Hello%20Vajra%20Bond%2C%20I%20would%20like%20to%20enquire%20about%20tile%20adhesives."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#c5832b] hover:bg-[#b07220] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-5 h-5" variant="official" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regional Supply Network SEO strip: Delhi NCR, Haryana, Punjab & Rajasthan */}
        <div className="py-6 border-b border-stone-800/80 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="font-bold text-stone-300 uppercase tracking-wider text-[11px]">
              Direct Site Supply Hubs
            </span>
            <Link
              href="/locations"
              className="text-amber-500 hover:text-amber-400 font-semibold transition-colors"
            >
              View All Regional Locations →
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-stone-400 text-[11px] leading-relaxed">
            <Link href="/locations/delhi-ncr" className="hover:text-amber-400 transition-colors">Delhi NCR</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/gurgaon" className="hover:text-amber-400 transition-colors">Gurgaon</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/faridabad" className="hover:text-amber-400 transition-colors">Faridabad</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/noida" className="hover:text-amber-400 transition-colors">Noida</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/panipat" className="hover:text-amber-400 transition-colors">Panipat</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/karnal" className="hover:text-amber-400 transition-colors">Karnal</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/sonipat" className="hover:text-amber-400 transition-colors">Sonipat</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/rohtak" className="hover:text-amber-400 transition-colors">Rohtak</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/hisar" className="hover:text-amber-400 transition-colors">Hisar</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/ambala" className="hover:text-amber-400 transition-colors">Ambala</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/chandigarh" className="hover:text-amber-400 transition-colors">Chandigarh Tricity</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/ludhiana" className="hover:text-amber-400 transition-colors">Ludhiana</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/amritsar" className="hover:text-amber-400 transition-colors">Amritsar</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/jalandhar" className="hover:text-amber-400 transition-colors">Jalandhar</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/bathinda" className="hover:text-amber-400 transition-colors">Bathinda</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/jaipur" className="hover:text-amber-400 transition-colors">Jaipur</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/alwar" className="hover:text-amber-400 transition-colors">Alwar & Bhiwadi</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/jodhpur" className="hover:text-amber-400 transition-colors">Jodhpur</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/kota" className="hover:text-amber-400 transition-colors">Kota</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/udaipur" className="hover:text-amber-400 transition-colors">Udaipur</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/ajmer" className="hover:text-amber-400 transition-colors">Ajmer & Pushkar</Link>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © 2026{' '}
            <a
              href="https://businessvolunteers.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors font-medium underline underline-offset-2"
            >
              Business Volunteers
            </a>
            . All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="text-stone-400">IS:15477:2019 Certified</span>
            <span className="text-stone-700">|</span>
            <span className="text-stone-400">EN 12004 Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
