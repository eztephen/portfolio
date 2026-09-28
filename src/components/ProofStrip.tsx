import { PROOF } from "@/data/content";
import CountUp from "./CountUp";

export default function ProofStrip() {
  return (
    <section aria-label="At a glance" className="border-y border-line">
      <dl className="site-wrap grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {PROOF.map((p, i) => (
          <div
            key={p.label}
            data-reveal
            style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            className="flex flex-col-reverse gap-1.5 bg-canvas px-1 py-8 sm:px-6 lg:first:pl-0"
          >
            <dt className="text-[0.92rem] leading-snug text-ink-soft">
              {p.label}
              <span className="block font-mono text-[0.72rem] text-ink-faint">{p.note}</span>
            </dt>
            <dd className="display-wide font-display text-[clamp(2.6rem,6vw,4.2rem)] leading-none font-extrabold tracking-[-0.04em] tabular-nums">
              <CountUp value={p.value} suffix={p.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
