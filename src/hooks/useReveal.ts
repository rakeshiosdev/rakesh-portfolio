import { useEffect, useRef } from 'react';

/**
 * Adds `.is-visible` to the element once it scrolls into view.
 * Pairs with the `.reveal` base class defined in global.css.
 * Respects prefers-reduced-motion by relying on the CSS override there.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
