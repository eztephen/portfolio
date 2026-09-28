import { SITE } from "@/config/site";
import CopyEmail from "./CopyEmail";
import CodeBar from "./CodeBar";

export default function Contact() {
  const links = [
    { label: "LinkedIn", href: SITE.linkedin },
    { label: "GitHub", href: SITE.github },
    ...(SITE.phone ? [{ label: SITE.phone.display, href: SITE.phone.href }] : []),
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28 sm:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_22%,transparent),transparent)] blur-2xl"
      />
      <div className="site-wrap relative">
        <span className="mb-8 flex items-center gap-3 font-mono text-[0.72rem] font-medium tracking-[0.16em] text-ink-faint uppercase">
          <CodeBar tone="pink" />
          Contact
        </span>
        <h2
          data-reveal
          className="display-wide max-w-[16ch] font-display text-[clamp(2.6rem,7.6vw,6.4rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance"
        >
          Got something slow, broken or repetitive? <span className="text-accent">Let&rsquo;s fix it.</span>
        </h2>
        <p data-reveal className="mt-8 max-w-[56ch] text-[1.1rem] text-ink-soft" style={{ "--d": "120ms" } as React.CSSProperties}>
          Tell me what&rsquo;s getting in the way. I reply within one working day — with a straight answer on whether I&rsquo;m
          the right person for it.
        </p>

        <div data-reveal className="mt-12 flex flex-col gap-6" style={{ "--d": "220ms" } as React.CSSProperties}>
          <a
            href={`mailto:${SITE.email}`}
            className="group w-fit max-w-full font-display text-[clamp(1.1rem,5.2vw,2.6rem)] font-bold tracking-[-0.02em] [overflow-wrap:anywhere]"
          >
            <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_2px] bg-bottom-left bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
              {SITE.email}
            </span>
            <span className="ml-3 inline-block text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
              ↗
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Project enquiry")}`} className="btn btn-primary">
              Email me <span className="arrow" aria-hidden="true">→</span>
            </a>
            <CopyEmail email={SITE.email} />
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.82rem]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block py-2 text-ink-soft transition-colors hover:text-accent"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
            <li className="py-2 text-ink-faint">{SITE.location}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
