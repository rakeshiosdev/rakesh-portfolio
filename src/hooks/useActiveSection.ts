import { useEffect } from "react";

const sectionIds = ["about", "skills", "projects", "experience", "resume"];

export function useActiveSection() {
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id;

          window.history.replaceState(null, "", `#${id}`);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
