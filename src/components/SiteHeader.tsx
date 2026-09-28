"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/config/site";
import { MINIMAP, NAV } from "@/data/content";
import { toneBg } from "@/lib/tone";

const toneFor = (href: string) => MINIMAP.find((s) => `#${s.id}` === href)?.tone ?? "bar";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    // Close if the window grows past the breakpoint where the full nav returns.
    const wide = window.matchMedia("(min-width: 768px)");
    const onWide = () => wide.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        solid ? "border-line bg-canvas/90 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="site-wrap flex items-center justify-between gap-4 py-3.5 sm:gap-6 sm:py-4">
        <a href="#top" onClick={close} className="display-wide -my-2 py-2 font-display text-[1.02rem] font-bold tracking-[-0.02em]">
          {SITE.nameLines[0]}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 font-mono text-[0.78rem] tracking-[0.08em] text-ink-soft uppercase transition-colors after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a href="#contact" onClick={close} className="btn btn-primary px-4 py-2.5 text-[0.88rem] max-[399px]:hidden">
            Start a project
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative grid size-11 place-items-center rounded-[4px] border border-line md:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ${menuOpen ? "rotate-45" : "-translate-y-[4px]"}`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ${menuOpen ? "-rotate-45" : "translate-y-[4px]"}`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Sections"
        hidden={!menuOpen}
        className="border-t border-line bg-canvas md:hidden"
      >
        <ul className="site-wrap flex flex-col py-3">
          {NAV.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="display-wide flex items-center gap-4 border-b border-line py-4 font-display text-[1.6rem] font-bold tracking-[-0.02em]"
              >
                <span aria-hidden="true" className={`h-1 w-6 rounded-full ${toneBg[toneFor(link.href)]}`} />
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5 pb-3">
            <a href="#contact" onClick={close} className="btn btn-primary w-full justify-center">
              Start a project <span className="arrow" aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
