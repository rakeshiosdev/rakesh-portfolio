import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    // Don't use reveal animation on mobile
    if (window.innerWidth < 900) {
      if (ref.current) {
        ref.current.classList.add("is-visible");
      }
      return;
    }

    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
