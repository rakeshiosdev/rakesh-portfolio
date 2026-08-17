import { useEffect, useRef, useState, type ReactNode } from "react";
import { Suspense } from "react";
import SectionFallback from "./SectionFallback";

interface LazySectionProps {
  children: ReactNode;
}

export default function LazySection({ children }: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={<SectionFallback />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight: "300px" }} />
      )}
    </div>
  );
}