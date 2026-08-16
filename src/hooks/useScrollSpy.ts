import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently most visible in the viewport,
 * used to highlight the active nav link.
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0] ?? '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
