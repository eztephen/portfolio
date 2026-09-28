"use client";

import { useEffect, useRef } from "react";

// Resting and fully-bent values for Anybody's width and weight axes.
const REST = { wd: 112, wg: 800 };
const BENT = { wd: 150, wg: 220 };
const RADIUS = 240; // px of cursor influence

// The name sets itself letter by letter on load (pure CSS, see .kinetic-letter),
// then bends toward the cursor: nearby letters stretch wide and go hairline-thin.
export default function KineticName({ lines, label }: { lines: string[]; label: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const offsets = lines.map((_, i) => lines.slice(0, i).join("").length);

  useEffect(() => {
    const heading = ref.current;
    if (!heading) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const letters = Array.from(heading.querySelectorAll<HTMLElement>("[data-letter]"));
    const zone = heading.closest("section") ?? heading;
    let frame = 0;
    let x = 0;
    let y = 0;
    let active = false;

    const render = () => {
      frame = 0;
      // Read every position first, then write — avoids forcing a layout per letter.
      const centres = letters.map((el) => {
        const r = el.getBoundingClientRect();
        return [r.left + r.width / 2, r.top + r.height / 2];
      });
      letters.forEach((el, i) => {
        const distance = Math.hypot(x - centres[i][0], y - centres[i][1]);
        const t = active ? Math.max(0, 1 - distance / RADIUS) : 0;
        const eased = t * t * (3 - 2 * t);
        el.style.setProperty("--wd", (REST.wd + (BENT.wd - REST.wd) * eased).toFixed(1));
        el.style.setProperty("--wg", (REST.wg + (BENT.wg - REST.wg) * eased).toFixed(0));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onMove = (e: Event) => {
      const p = e as PointerEvent;
      x = p.clientX;
      y = p.clientY;
      active = true;
      schedule();
    };
    const onLeave = () => {
      active = false;
      schedule();
    };

    zone.addEventListener("pointermove", onMove);
    zone.addEventListener("pointerleave", onLeave);
    return () => {
      zone.removeEventListener("pointermove", onMove);
      zone.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <h1
      ref={ref}
      aria-label={label}
      className="font-display text-[clamp(2.4rem,12.4vw,12.5rem)] leading-[0.86] tracking-[-0.035em] uppercase select-none"
    >
      {lines.map((line, li) => (
        <span key={line} aria-hidden="true" className={`block whitespace-nowrap ${li === 1 ? "text-accent" : ""}`}>
          {Array.from(line).map((char, ci) => (
            <span key={ci} data-letter className="kinetic-letter" style={{ "--i": offsets[li] + ci } as React.CSSProperties}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
