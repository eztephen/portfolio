import { SERVICES } from "@/data/content";
import { toneBg, toneText } from "@/lib/tone";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="site-wrap">
        <SectionHeading
          eyebrow="What I build"
          tone="teal"
          title="Four kinds of work, *one engineer* who owns it end to end."
          lede="Most projects touch more than one of these. You get one person who understands the whole thing — from the database to the button your customer taps."
        />
        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              data-reveal
              style={{ "--d": `${(i % 2) * 110}ms` } as React.CSSProperties}
              className="group flex flex-col gap-5 bg-canvas p-7 transition-colors duration-300 hover:bg-raised sm:p-9"
            >
              <span className={`service-bar block h-1 w-full rounded-full ${toneBg[service.tone]}`} aria-hidden="true" />
              <h3 className="display-wide font-display text-[1.6rem] leading-tight font-bold tracking-[-0.02em]">{service.title}</h3>
              <p className="text-ink-soft">{service.body}</p>
              <p className="mt-auto font-mono text-[0.76rem] leading-relaxed">
                <span className={toneText[service.tone]}>built before</span>
                <span className="text-ink-faint"> → </span>
                <span className="text-ink-soft">{service.proof}</span>
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {service.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
