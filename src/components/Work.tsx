import { CLIENT_WORK, ENTERPRISE, FEATURED, SAMPLES, type WorkCard } from "@/data/content";
import { toneBg } from "@/lib/tone";
import SectionHeading from "./SectionHeading";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";

function ProjectLink({ href, label }: { href: string | null; label: string }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost px-4 py-2.5 text-[0.88rem]">
      {label} <span className="arrow" aria-hidden="true">↗</span>
    </a>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li key={tech} className="chip">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function SampleCard({ card, index }: { card: WorkCard; index: number }) {
  return (
    <article
      data-reveal
      style={{ "--d": `${index * 110}ms` } as React.CSSProperties}
      className="pan-host group flex min-w-0 flex-col gap-5"
    >
      <BrowserFrame
        src={card.image}
        alt={`Full-page screenshot of the ${card.title} website`}
        label={card.title.toLowerCase().replace(/\s+/g, "") + " — " + card.subtitle.toLowerCase()}
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        aspect="aspect-[4/3]"
      />
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[0.7rem] tracking-[0.12em] text-ink-faint uppercase">{card.kind}</span>
        <h4 className="display-wide font-display text-[1.3rem] font-bold tracking-[-0.02em]">{card.title}</h4>
        <p className="text-[0.95rem] text-ink-soft">{card.body}</p>
        <ProjectLink href={card.href} label="Visit site" />
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24 sm:py-32">
      <div className="site-wrap">
        <SectionHeading
          eyebrow="Selected work"
          tone="pink"
          title="Things I've built, and *the problems they solve*."
          lede="A product, a client site, and three design samples that show what I'd build for a business like yours. Then the enterprise work, which lives behind employers' NDAs."
          className="mb-6"
        />
        <p className="mb-14 hidden items-center gap-2 font-mono text-[0.74rem] text-ink-faint [@media(hover:hover)]:flex">
          <span aria-hidden="true">↕</span> Hover a screenshot to scroll through the whole page
        </p>

        {/* ── Featured product ───────────────────────────────────────── */}
        <article data-reveal className="pan-host grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="relative min-w-0 pr-[12%] pb-10 sm:pb-14">
            <BrowserFrame
              src={FEATURED.images.report}
              alt="Walkthrough's generated owner report: condition summary, room-by-room notes and a maintenance schedule"
              label="walkthrough — owner report"
              sizes="(min-width: 1024px) 620px, 100vw"
            />
            <PhoneFrame
              src={FEATURED.images.mobile}
              alt="Walkthrough on a phone: a room card with condition buttons, notes and photos"
              className="absolute right-0 bottom-0 w-[30%] min-w-[118px]"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-6">
            <span className="font-mono text-[0.72rem] tracking-[0.14em] text-pink uppercase">{FEATURED.kind}</span>
            <div>
              <h3 className="display-wide font-display text-[clamp(2.2rem,4.6vw,3.4rem)] leading-none font-extrabold tracking-[-0.03em]">
                {FEATURED.title}
              </h3>
              <p className="mt-2 text-[1.1rem] text-ink-soft">{FEATURED.subtitle}</p>
            </div>
            <dl className="flex flex-col gap-4 text-[0.98rem]">
              <div>
                <dt className="font-mono text-[0.72rem] tracking-[0.12em] text-ink-faint uppercase">The problem</dt>
                <dd className="mt-1 text-ink-soft">{FEATURED.problem}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] tracking-[0.12em] text-ink-faint uppercase">What it does</dt>
                <dd className="mt-1 text-ink-soft">{FEATURED.solution}</dd>
              </div>
            </dl>
            <ul className="flex flex-col gap-2 text-[0.95rem]">
              {FEATURED.shows.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-[0.7em] h-[3px] w-3 shrink-0 rounded-full bg-pink" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Stack items={FEATURED.stack} />
            {FEATURED.href ? (
              <div>
                <ProjectLink href={FEATURED.href} label="Try the live demo" />
              </div>
            ) : (
              <p className="font-mono text-[0.78rem] text-ink-faint">Live demo available on request.</p>
            )}
          </div>
        </article>

        {/* ── Client work ────────────────────────────────────────────── */}
        <article
          data-reveal
          className="pan-host mt-28 grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16"
        >
          <div className="order-2 flex min-w-0 flex-col gap-5 lg:order-1">
            <span className="font-mono text-[0.72rem] tracking-[0.14em] text-lime uppercase">{CLIENT_WORK.kind}</span>
            <div>
              <h3 className="display-wide font-display text-[clamp(1.9rem,3.8vw,2.8rem)] leading-none font-extrabold tracking-[-0.03em]">
                {CLIENT_WORK.title}
              </h3>
              <p className="mt-2 text-ink-soft">{CLIENT_WORK.subtitle}</p>
            </div>
            <p className="text-ink-soft">{CLIENT_WORK.body}</p>
            <Stack items={CLIENT_WORK.stack} />
            <ProjectLink href={CLIENT_WORK.href} label="Visit site" />
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <BrowserFrame
              src={CLIENT_WORK.image}
              alt="Full-page screenshot of the PZaide Letrato photography website"
              label="pzaideletrato — photography & videography"
              sizes="(min-width: 1024px) 620px, 100vw"
            />
          </div>
        </article>

        {/* ── Design samples ─────────────────────────────────────────── */}
        <div className="mt-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <h3 className="display-wide font-display text-[1.6rem] font-bold tracking-[-0.02em]">Design samples</h3>
            <p className="max-w-[46ch] text-[0.95rem] text-ink-soft">
              Fictional businesses, real code — each built around the one action that business needs from a visitor.
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {SAMPLES.map((card, i) => (
              <SampleCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* ── Enterprise work (NDA) ──────────────────────────────────── */}
        <div className="mt-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <h3 className="display-wide font-display text-[1.6rem] font-bold tracking-[-0.02em]">Enterprise work</h3>
            <p className="max-w-[46ch] text-[0.95rem] text-ink-soft">
              Built for employers, so the code stays under NDA. Happy to walk through the engineering on a call.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
            {ENTERPRISE.map((item, i) => (
              <li
                key={item.title}
                data-reveal
                style={{ "--d": `${(i % 2) * 100}ms` } as React.CSSProperties}
                className="flex flex-col gap-3 bg-canvas p-7"
              >
                <span className={`h-[3px] w-8 rounded-full ${toneBg[item.tone]}`} aria-hidden="true" />
                <h4 className="text-[1.12rem] font-semibold">{item.title}</h4>
                <span className="font-mono text-[0.74rem] text-ink-faint">{item.where}</span>
                <p className="text-[0.95rem] text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
