"use client";

import { useEffect, useRef } from "react";

// Counts up once, when the number first scrolls into view. The server-rendered HTML
// always holds the real value, so crawlers and no-JS visitors see the right figure.
export default function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let first = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (first) {
          first = false;
          // Already visible on load: leave it alone rather than flash it back to zero.
          if (entry.isIntersecting) return observer.disconnect();
          el.textContent = `0${suffix}`;
          return;
        }
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1400);
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = `${Math.round(value * eased)}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, suffix]);

  return <span ref={ref}>{`${value}${suffix}`}</span>;
}
