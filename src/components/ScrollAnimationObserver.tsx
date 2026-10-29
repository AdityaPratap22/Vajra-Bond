'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkElementsInView = () => {
      const elements = document.querySelectorAll(
        '.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-zoom:not(.revealed)'
      );
      
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const triggerBottom = windowHeight * 0.90;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerBottom && rect.bottom >= 0) {
          el.classList.add('revealed');
        }
      });
    };

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08,
        }
      );

      const elements = document.querySelectorAll(
        '.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-zoom:not(.revealed)'
      );
      elements.forEach((el) => observer?.observe(el));
    }

    // Trigger checks on load and after initial rendering
    checkElementsInView();
    const rafId = requestAnimationFrame(checkElementsInView);
    const timerId = setTimeout(checkElementsInView, 120);

    // Fallback scroll and resize listeners for rock-solid reliability
    window.addEventListener('scroll', checkElementsInView, { passive: true });
    window.addEventListener('resize', checkElementsInView, { passive: true });

    const mutationObserver = new MutationObserver(() => {
      checkElementsInView();
      if (observer) {
        const elements = document.querySelectorAll(
          '.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-zoom:not(.revealed)'
        );
        elements.forEach((el) => observer?.observe(el));
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      observer?.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', checkElementsInView);
      window.removeEventListener('resize', checkElementsInView);
    };
  }, [pathname]);

  return null;
}
