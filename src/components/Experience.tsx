import { EDUCATION, EXPERIENCE, YEARS } from "@/data/content";
import SectionHeading from "./SectionHeading";

const RETURNING = "GlobalNet Solutions Group Inc.";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="site-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Experience"
            tone="violet"
            title={`${YEARS} years, read like a *git log*.`}
            lede="Newest first. Two leadership roles at Accenture, and one company good enough to go back to."
            className="mb-8"
          />
          <ul aria-label="Legend" className="flex flex-col gap-2.5 font-mono text-[0.74rem] text-ink-faint">
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="size-3 rounded-full bg-accent" />
              current role
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="size-3 rounded-full bg-violet" />
              GlobalNet — two stints
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="size-3 rounded-full border-2 border-ink-faint" />
              other roles
            </li>
          </ul>
        </div>

        <ol className="relative">
          {/* The branch line fills in as you read down it */}
          <div aria-hidden="true" className="absolute top-3 bottom-3 left-[calc(0.875rem-1px)] w-[2px] overflow-hidden rounded-full bg-line">
            <div className="gitlog-fill h-full w-full bg-[linear-gradient(to_bottom,var(--accent),var(--violet)_45%,var(--teal))]" />
          </div>

          {EXPERIENCE.map((job, i) => {
            const current = job.to === "Present";
            const returning = job.company === RETURNING;
            const node = current
              ? "border-accent bg-accent pulse-dot"
              : returning
                ? "border-violet bg-violet"
                : "border-ink-faint bg-canvas";
            return (
              <li key={`${job.company}-${job.from}`} data-reveal className="relative grid grid-cols-[1.75rem_1fr] gap-x-5 pb-12">
                <span aria-hidden="true" className={`relative z-10 mt-[0.4rem] size-3.5 justify-self-center rounded-full border-2 ${node}`} />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="font-mono text-[0.78rem] text-ink-faint tabular-nums">
                      {job.from} — {job.to}
                    </span>
                    {i === 0 && <span className="chip border-accent text-accent">HEAD</span>}
                    {job.tag && <span className="chip border-violet text-violet">↺ {job.tag}</span>}
                    {job.lead && <span className="chip">Leadership</span>}
                  </div>
                  <h3 className="display-wide font-display text-[1.35rem] leading-snug font-bold tracking-[-0.02em]">{job.role}</h3>
                  <p className="text-[0.95rem] font-medium text-ink-soft">{job.company}</p>
                  <p className="max-w-[62ch] text-[0.97rem] text-ink-soft">{job.summary}</p>
                  {job.projects.length > 0 && (
                    <ul className="mt-1 flex flex-wrap gap-1.5" aria-label="Projects">
                      {job.projects.map((project) => (
                        <li key={project} className="chip">
                          {project}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}

          <li data-reveal className="relative grid grid-cols-[1.75rem_1fr] gap-x-5">
            <span aria-hidden="true" className="relative z-10 mt-[0.4rem] size-3.5 justify-self-center rounded-full border-2 border-dashed border-ink-faint bg-canvas" />
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[0.78rem] text-ink-faint">{EDUCATION.year} · initial commit</span>
              <h3 className="display-wide font-display text-[1.35rem] leading-snug font-bold tracking-[-0.02em]">{EDUCATION.title}</h3>
              <p className="text-[0.95rem] font-medium text-ink-soft">{EDUCATION.school}</p>
              <p className="text-[0.97rem] text-ink-soft">{EDUCATION.note}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
