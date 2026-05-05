"use client";

import { useEffect, useRef, useCallback } from "react";
import { useNavigationStore } from "@/store/navigation";
import type { SectionId } from "@/lib/constants";

interface UseSectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useSectionObserver(
  sectionId: SectionId,
  options: UseSectionObserverOptions = {}
) {
  const ref = useRef<HTMLElement>(null);
  const { setActiveSection, isNavigating } = useNavigationStore();
  const { threshold = 0.5, rootMargin = "-10% 0px -10% 0px" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isNavigating) {
          setActiveSection(sectionId);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionId, setActiveSection, isNavigating, threshold, rootMargin]);

  return ref;
}

export function useScrollToSection() {
  const { setIsNavigating, setSidebarOpen } = useNavigationStore();

  const scrollToSection = useCallback(
    (sectionId: SectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      setIsNavigating(true);
      setSidebarOpen(false);

      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Reset navigating state after scroll completes
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    },
    [setIsNavigating, setSidebarOpen]
  );

  return scrollToSection;
}
