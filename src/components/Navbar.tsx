'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';
import QuoteModal from './QuoteModal';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const isHomePage = pathname === '/';

  // Scroll progress from 0 (top) to 1 (fully scrolled past threshold)
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const SCROLL_THRESHOLD = 80; // pixels to complete the animation

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / SCROLL_THRESHOLD, 1);
      setScrollProgress(progress);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      setScrollProgress(1); // Non-homepage: always "collapsed"
      return;
    }

    // Set initial scroll position (handles page refresh mid-scroll)
    const initialProgress = Math.min(window.scrollY / SCROLL_THRESHOLD, 1);
    setScrollProgress(initialProgress);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHomePage, handleScroll]);

  // Derived animation values (0 = expanded cradle, 1 = flat/collapsed)
  const p = scrollProgress;

  // Logo size slightly decreases from 96px to 74px when moving up into the navbar
  const logoSize = 96 - 22 * p;
  // Logo vertical position: top goes from 100% (centered on border) to 50% (centered in navbar)
  const logoTop = 100 - 50 * p;
  // SVG cradle height: 58px → 0px
  const cradleHeight = 58 * (1 - p);
  // SVG arc radius: 56 → 500 (large = flat)
  const arcRadius = 56 + 444 * p;
  // Cradle opacity
  const cradleOpacity = 1 - p;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Applications', href: '/applications' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  // When fully collapsed (p=1), the logo sits inside the navbar
  // When expanded (p=0), the logo hangs below on the border

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between relative">
          
          {/* Logo - Clean centered without circular cradle on small/medium screens, animated cradle on desktop */}
          <Link href="/" className="relative flex items-center h-full">
            
            {/* Small & Medium Screens: No circular cradle border, clean centered logo within navbar */}
            <div className="flex lg:hidden items-center h-full">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-xs">
                <Image
                  src="/images/logo.png"
                  alt="Vajra Bond"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Large/Desktop Screens: Animated emblem and semicircular border cradle */}
            <div 
              className="hidden lg:flex relative items-center justify-center h-full"
              style={{ width: '128px' }}
            >
              {/* Circular Emblem - shifts from border-centered to navbar-centered */}
              <div
                className="absolute left-1/2 shrink-0 z-20 drop-shadow-md"
                style={{
                  width: `${logoSize}px`,
                  height: `${logoSize}px`,
                  top: `${logoTop}%`,
                  transform: 'translateX(-50%) translateY(-50%)',
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Vajra Bond"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Semicircular Border Cradle - desktop only (fades and flattens on scroll) */}
              {p < 1 && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10"
                  style={{
                    top: 'calc(100% - 1px)',
                    width: '128px',
                    height: `${Math.max(cradleHeight, 2)}px`,
                    opacity: cradleOpacity,
                  }}
                >
                  <svg
                    className="overflow-visible"
                    style={{ width: '128px', height: `${Math.max(cradleHeight, 2)}px` }}
                    viewBox={`0 0 128 ${Math.max(cradleHeight, 2)}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    {/* White background extension that covers straight border */}
                    <path
                      d={`M 0 0
                         L 8 0
                         A ${arcRadius} ${arcRadius} 0 0 0 120 0
                         L 128 0
                         L 128 -8
                         L 0 -8 Z`}
                      fill="white"
                    />
                    {/* Curved border contour */}
                    <path
                      d={`M 0 0.5
                         L 8 0.5
                         A ${arcRadius} ${arcRadius} 0 0 0 120 0.5
                         L 128 0.5`}
                      stroke="#e7e5e4"
                      strokeWidth="1.2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
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
