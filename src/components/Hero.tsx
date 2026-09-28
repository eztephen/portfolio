import { SITE } from "@/config/site";
import { HERO } from "@/data/content";
import KineticName from "./KineticName";
import HeroCode from "./HeroCode";

// Each tagline line starts typing once the previous one has finished.
const TYPE_MS = 30;
const typeDelays = SITE.tagline.map(
  (_, i) => 800 + SITE.tagline.slice(0, i).join("").length * TYPE_MS + i * 140,
);

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-28">
      {/* Faint editor grid behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)] bg-[size:64px_64px] opacity-40"
      />

      <div className="site-wrap relative">
        <p
          className="rise mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-raised/70 px-3.5 py-1.5 font-mono text-[0.74rem] text-ink-soft"
          style={{ "--d": "60ms" } as React.CSSProperties}
        >
          <span className="pulse-dot size-2 rounded-full bg-lime" />
          {SITE.availability}
          <span className="hidden sm:inline">· {SITE.location.split(",")[0]}, PH · UTC+{SITE.utcOffset}</span>
        </p>

        <KineticName lines={SITE.nameLines} label={SITE.name} />

        <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex min-w-0 flex-col gap-7">
            <p className="rise font-mono text-[0.8rem] tracking-[0.14em] text-ink-faint uppercase" style={{ "--d": "700ms" } as React.CSSProperties}>
              {SITE.role}
            </p>

            <p className="font-mono text-[clamp(1rem,2.1vw,1.25rem)] leading-[1.7] text-ink" aria-label={SITE.tagline.join(" ")}>
              {SITE.tagline.map((line, i) => {
                const last = i === SITE.tagline.length - 1;
                return (
                  <span key={line} aria-hidden="true" className="block">
                    <span className="text-ink-faint">{">"} </span>
                    <span className="type-line" style={{ "--n": line.length, "--d": `${typeDelays[i]}ms` } as React.CSSProperties}>
                      {line}
                    </span>
                    {last && <span className="caret" />}
                  </span>
                );
              })}
            </p>

            <div className="rise flex max-w-[58ch] flex-col gap-4" style={{ "--d": "1500ms" } as React.CSSProperties}>
              <p className="text-[1.15rem] leading-relaxed text-ink">{HERO.value}</p>
              <p className="text-ink-soft">{HERO.detail}</p>
            </div>

            <div className="rise flex flex-wrap gap-3" style={{ "--d": "1650ms" } as React.CSSProperties}>
              <a href="#contact" className="btn btn-primary">
                How can I help? <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="#work" className="btn btn-ghost">
                See my work
              </a>
            </div>
          </div>

          <div className="rise min-w-0 lg:mt-2" style={{ "--d": "300ms" } as React.CSSProperties}>
            <HeroCode />
          </div>
        </div>
      </div>
    </section>
  );
}
