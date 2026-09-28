"use client";

import { useEffect } from "react";

// One observer for every [data-reveal] element on the page. Elements that start
// below the fold are hidden, then revealed as they scroll in; anything already on
// screen is left alone, so nothing blinks on load.
export default function RevealRoot() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!seen.has(el)) {
            seen.add(el);
            if (!entry.isIntersecting) {
              el.dataset.revealState = "pending";
              continue;
            }
          }
          if (entry.isIntersecting) {
            el.dataset.revealState = "shown";
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
