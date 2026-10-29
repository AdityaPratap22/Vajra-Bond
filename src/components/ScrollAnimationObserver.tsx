'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let observer: IntersectionObserver | null = null;

    // Defer observation until after React hydration is completely finished
    const timer = setTimeout(() => {
      const selector =
        '.reveal:not([data-revealed="true"]), .reveal-left:not([data-revealed="true"]), .reveal-right:not([data-revealed="true"]), .reveal-zoom:not([data-revealed="true"])';

      if (!('IntersectionObserver' in window)) {
        document.querySelectorAll(selector).forEach((el) => {
          el.setAttribute('data-revealed', 'true');
          el.classList.add('revealed');
        });
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute('data-revealed', 'true');
              entry.target.classList.add('revealed');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -30px 0px',
          threshold: 0.05,
        }
      );

      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => observer?.observe(el));
    }, 60);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
