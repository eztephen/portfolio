"use client";

import { useEffect, useRef, useState } from "react";
import { MINIMAP } from "@/data/content";
import { toneBg } from "@/lib/tone";

type Box = { id: string; top: number; height: number };

// Line widths (in % of the rail) cycled through to fake code, like an editor minimap.
const WIDTHS = [62, 38, 84, 27, 70, 52, 90, 44, 58, 33, 76, 48];
const INDENTS = [0, 0, 12, 12, 24, 12, 0, 12, 24, 24, 12, 0];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// A VS Code–style minimap of this page, pinned to the right edge on wide screens.
// Each section is drawn to scale in its colour; the slider shows what's on screen.
export default function Minimap() {
  const railRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [active, setActive] = useState(MINIMAP[0].id);

  useEffect(() => {
    const rail = railRef.current;
    const slider = sliderRef.current;
    if (!rail || !slider) return;

    let scale = 0;
    let frame = 0;
    const docTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

    const update = () => {
      frame = 0;
      slider.style.transform = `translateY(${window.scrollY * scale}px)`;
      slider.style.height = `${Math.max(14, window.innerHeight * scale)}px`;
      const probe = window.scrollY + window.innerHeight * 0.4;
      let current = MINIMAP[0].id;
      for (const { id } of MINIMAP) {
        const el = document.getElementById(id);
        if (el && docTop(el) <= probe) current = id;
      }
      setActive(current);
    };

    const measure = () => {
      scale = rail.clientHeight / document.documentElement.scrollHeight;
      setBoxes(
        MINIMAP.map(({ id }) => {
          const el = document.getElementById(id);
          return el ? { id, top: docTop(el) * scale, height: el.offsetHeight * scale } : { id, top: 0, height: 0 };
        }),
      );
      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const resize = new ResizeObserver(measure);
    resize.observe(document.body);
    resize.observe(rail);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      resize.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Clicking empty rail jumps proportionally, the way an editor minimap does.
  const jumpTo = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientY - rect.top) / rect.height;
    window.scrollTo({
      top: ratio * document.documentElement.scrollHeight - window.innerHeight / 2,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const activeLabel = MINIMAP.find((s) => s.id === active)?.label;

  return (
    <nav aria-label="Page minimap" className="fixed top-1/2 right-5 z-40 hidden h-[60vh] w-[52px] -translate-y-1/2 min-[1360px]:block">
      <div ref={railRef} onClick={jumpTo} className="relative h-full w-full cursor-pointer">
        {boxes.map((box, gi) => {
          const section = MINIMAP[gi];
          const lines = Math.max(2, Math.floor(box.height / 5));
          const isActive = active === box.id;
          return (
            <button
              key={box.id}
              type="button"
              aria-label={`Jump to ${section.label}`}
              aria-current={isActive ? "location" : undefined}
              onClick={(e) => {
                e.stopPropagation();
                document.getElementById(box.id)?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
              }}
              className={`absolute inset-x-0 flex flex-col gap-[2px] overflow-hidden pt-[2px] transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-35 hover:opacity-75"
              }`}
              style={{ top: box.top, height: box.height }}
            >
              {Array.from({ length: lines }, (_, li) => {
                const k = (li + gi * 5) % WIDTHS.length;
                const width = WIDTHS[k];
                return (
                  <span key={li} className="flex h-[3px] shrink-0 gap-[2px]" style={{ paddingLeft: `${INDENTS[k]}%` }}>
                    <span className="h-full rounded-[1px] bg-bar/60" style={{ width: `${Math.round(width * 0.28)}%` }} />
                    <span className={`h-full rounded-[1px] ${toneBg[section.tone]}`} style={{ width: `${Math.round(width * 0.62)}%` }} />
                  </span>
                );
              })}
            </button>
          );
        })}

        <div
          ref={sliderRef}
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-1.5 top-0 rounded-[3px] border border-ink/25 bg-ink/[0.07]"
        >
          <span className="absolute top-1/2 right-full mr-3 -translate-y-1/2 font-mono text-[0.62rem] tracking-[0.12em] whitespace-nowrap text-ink-faint uppercase">
            {activeLabel}
          </span>
        </div>
      </div>
    </nav>
  );
}
