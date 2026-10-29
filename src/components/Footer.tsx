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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80 text-xs sm:text-sm reveal">
          
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
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link href="/resources" className="hover:text-amber-400 transition-colors">
                  Technical Data
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-amber-400 transition-colors">
                  Brochures
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-amber-400 transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-amber-400 transition-colors">
                  FAQS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
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

        {/* Tier 1 & Tier 2 Cities Supply Network SEO strip */}
        <div className="py-6 border-b border-stone-800/80 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="font-bold text-stone-300 uppercase tracking-wider text-[11px]">
              Pan-India Tile Adhesive Supply & Delivery Hubs
            </span>
            <Link
              href="/locations"
              className="text-amber-500 hover:text-amber-400 font-semibold transition-colors"
            >
              View All 30+ City Locations →
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-stone-400 text-[11px] leading-relaxed">
            <Link href="/locations/delhi-ncr" className="hover:text-amber-400 transition-colors">Delhi NCR</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/mumbai" className="hover:text-amber-400 transition-colors">Mumbai</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/bengaluru" className="hover:text-amber-400 transition-colors">Bengaluru</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/hyderabad" className="hover:text-amber-400 transition-colors">Hyderabad</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/chennai" className="hover:text-amber-400 transition-colors">Chennai</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/kolkata" className="hover:text-amber-400 transition-colors">Kolkata</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/pune" className="hover:text-amber-400 transition-colors">Pune</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/ahmedabad" className="hover:text-amber-400 transition-colors">Ahmedabad</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/jaipur" className="hover:text-amber-400 transition-colors">Jaipur</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/lucknow" className="hover:text-amber-400 transition-colors">Lucknow</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/chandigarh" className="hover:text-amber-400 transition-colors">Chandigarh</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/surat" className="hover:text-amber-400 transition-colors">Surat</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/indore" className="hover:text-amber-400 transition-colors">Indore</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/kochi" className="hover:text-amber-400 transition-colors">Kochi</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/coimbatore" className="hover:text-amber-400 transition-colors">Coimbatore</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/patna" className="hover:text-amber-400 transition-colors">Patna</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/bhopal" className="hover:text-amber-400 transition-colors">Bhopal</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/vadodara" className="hover:text-amber-400 transition-colors">Vadodara</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/ludhiana" className="hover:text-amber-400 transition-colors">Ludhiana</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/agra" className="hover:text-amber-400 transition-colors">Agra</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/varanasi" className="hover:text-amber-400 transition-colors">Varanasi</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/bhubaneswar" className="hover:text-amber-400 transition-colors">Bhubaneswar</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/dehradun" className="hover:text-amber-400 transition-colors">Dehradun</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/visakhapatnam" className="hover:text-amber-400 transition-colors">Visakhapatnam</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/raipur" className="hover:text-amber-400 transition-colors">Raipur</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/kanpur" className="hover:text-amber-400 transition-colors">Kanpur</Link>
            <span className="text-stone-700">•</span>
            <Link href="/locations/ranchi" className="hover:text-amber-400 transition-colors">Ranchi</Link>
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
            <Link href="/resources" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-stone-700">|</span>
            <Link href="/resources" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
