import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121214] text-stone-300 pt-14 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80 text-xs sm:text-sm">
          
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
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:Support@vajrabond.com" className="hover:text-white transition-colors">
                  Support@vajrabond.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Follow Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex items-center gap-3.5 text-stone-400">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/vajra.bond" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-400 transition-colors" 
                aria-label="Instagram @vajra.bond"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="pt-2 text-xs text-stone-400">
              <a 
                href="https://www.instagram.com/vajra.bond" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                Instagram: <span className="font-semibold text-amber-500">@vajra.bond</span>
              </a>
            </div>
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
