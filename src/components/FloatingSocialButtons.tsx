'use client';

import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import InstagramIcon from './InstagramIcon';

export default function FloatingSocialButtons() {
  const whatsappUrl = 'https://wa.me/916395014392?text=Hello%20Vajra%20Bond%2C%20I%20would%20like%20to%20enquire%20about%20tile%20adhesives.';
  const instagramUrl = 'https://www.instagram.com/vajra.bond';

  return (
    <aside
      aria-label="Social and messaging channels"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Instagram Floating Icon - Circular Old Theme */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Vajra Bond on Instagram @vajra.bond"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <InstagramIcon className="w-8 h-8 fill-current transition-transform group-hover:rotate-6" variant="glyph" />

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-md bg-stone-900/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Instagram @vajra.bond
        </span>
      </a>

      {/* WhatsApp Floating Icon - Circular Old Theme with Official Logo */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vajra Bond on WhatsApp (+91 63950 14392)"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

        <WhatsAppIcon className="w-8 h-8 relative z-10 transition-transform group-hover:scale-105" variant="monochrome" />

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-md bg-stone-900/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Chat on WhatsApp: +91 63950 14392
        </span>
      </a>
    </aside>
  );
}
