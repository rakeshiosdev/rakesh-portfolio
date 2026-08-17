import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Detect bottom of page
      const isAtBottom = scrollY + viewportHeight >= documentHeight - 10;

      if (isAtBottom) {
        const lastId = sectionIds[sectionIds.length - 1];

        setActiveId(lastId);

        window.history.replaceState(null, "", `#${lastId}`);

        return;
      }

      // Position at which a section becomes active
      const activationPoint = scrollY + 200;

      let currentId = sectionIds[0];
      console.log("Current section:", currentId);

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) {
          continue;
        }

        const elementTop = element.getBoundingClientRect().top + scrollY;

        if (elementTop <= activationPoint) {
          currentId = id;
        }
      }

      setActiveId((previousId) => {
        if (previousId !== currentId) {
          window.history.replaceState(null, "", `#${currentId}`);
        }

        return currentId;
      });
    };

    // Run once when page loads
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}
