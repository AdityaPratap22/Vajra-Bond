'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';
import QuoteModal from './QuoteModal';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Applications', href: '/applications' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between relative">
          
          {/* Logo Emblem - Positioned so the dots on the left & right of the logo align with the navbar border line */}
          <Link href="/" className="relative flex items-center h-full">
            
            {/* Wrapper maintaining width in navbar flow */}
            <div className="relative flex items-center justify-center w-[128px] h-full">
              
              {/* Circular Emblem mathematically centered at the navbar bottom border line */}
              <div className="absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 w-[96px] h-[96px] shrink-0 z-20 drop-shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Vajra Bond"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Semicircular Border Cradle concentric with the logo (R = 56px, uniform 8px gap) */}
              <div className="absolute top-full -translate-y-[1px] left-1/2 -translate-x-1/2 w-[128px] h-[58px] pointer-events-none z-10">
                <svg
                  className="w-[128px] h-[58px] overflow-visible"
                  viewBox="0 0 128 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* White background extension that covers straight border and extends navbar white area */}
                  <path
                    d="M 0 0
                       L 8 0
                       A 56 56 0 0 0 120 0
                       L 128 0
                       L 128 -8
                       L 0 -8 Z"
                    fill="white"
                  />
                  {/* Continuous 1px curved border contour matching navbar border-stone-200 */}
                  <path
                    d="M 0 0.5
                       L 8 0.5
                       A 56 56 0 0 0 120 0.5
                       L 128 0.5"
                    stroke="#e7e5e4"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
              </div>

            </div>

          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 ml-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#c5832b] font-bold'
                      : 'text-stone-700 hover:text-[#c5832b]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Get a Quote button */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-2.5 rounded-lg bg-[#c5832b] hover:bg-[#b07220] text-white text-sm font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="px-3.5 py-2 rounded-lg bg-[#c5832b] text-white text-xs font-bold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive ? 'text-[#c5832b] font-bold bg-amber-50/60' : 'text-stone-700'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full py-2.5 bg-[#c5832b] text-white text-sm font-bold rounded-lg shadow-xs"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </header>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
