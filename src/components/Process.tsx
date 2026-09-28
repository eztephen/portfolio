import { PROCESS } from "@/data/content";
import SectionHeading from "./SectionHeading";
import TimezoneOverlap from "./TimezoneOverlap";

export default function Process() {
  return (
    <section id="process" className="border-t border-line py-24 sm:py-32">
      <div className="site-wrap">
        <SectionHeading
          eyebrow="How we'd work"
          tone="teal"
          title="No surprises, *from first call to launch*."
          lede="Working with someone in another country only works when you always know where things stand. This is how I keep it that way."
        />
        <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <li key={step.title} data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className="flex flex-col gap-3 bg-canvas p-7">
              <span className="display-wide font-display text-[2.6rem] leading-none font-extrabold text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.1rem] font-semibold">{step.title}</h3>
              <p className="text-[0.95rem] text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
        <div data-reveal className="mt-8">
          <TimezoneOverlap />
        </div>
      </div>
    </section>
  );
}
