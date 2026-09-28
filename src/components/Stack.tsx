import { STACK } from "@/data/content";
import { toneText } from "@/lib/tone";
import SectionHeading from "./SectionHeading";
import CodeBar from "./CodeBar";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line bg-raised/40 py-24 sm:py-32">
      <div className="site-wrap">
        <SectionHeading
          eyebrow="Stack"
          tone="lime"
          title="Java is home. The rest are *tools I pick up* when the job needs them."
          lede="Proficiency is labelled the way my résumé labels it — honestly. I'd rather you hire me for what I'm genuinely strong at."
        />
        <div className="flex flex-col">
          {STACK.map((group, i) => (
            <div
              key={group.title}
              data-reveal
              style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
              className="grid gap-4 border-t border-line py-7 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <h3 className={`flex items-center gap-3 font-mono text-[0.78rem] tracking-[0.12em] uppercase ${toneText[group.tone]}`}>
                <CodeBar tone={group.tone} />
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-x-2 gap-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={
                      group.title === "Proficient"
                        ? "display-wide font-display text-[clamp(1.25rem,2.4vw,1.7rem)] font-bold tracking-[-0.02em] after:ml-2 after:text-ink-faint/50 after:content-['/'] last:after:content-none"
                        : "chip px-2.5 py-1 text-[0.8rem] text-ink transition-colors hover:border-ink-faint"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
