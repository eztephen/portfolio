import { Fragment } from "react";
import type { Tone } from "@/lib/tone";
import CodeBar from "./CodeBar";

interface SectionHeadingProps {
  eyebrow: string;
  tone: Tone;
  title: string;
  lede?: string;
  className?: string;
}

// Splits the title into masked words so they rise in one after another.
// Words wrapped in *asterisks* are set in the accent colour.
function words(title: string) {
  let emphasis = false;
  return title.split(" ").map((raw) => {
    const opens = raw.startsWith("*");
    const closes = raw.replace(/[.,;:!?]+$/, "").endsWith("*");
    if (opens) emphasis = true;
    const word = { text: raw.replace(/\*/g, ""), emphasis };
    if (closes) emphasis = false;
    return word;
  });
}

export default function SectionHeading({ eyebrow, tone, title, lede, className = "" }: SectionHeadingProps) {
  const list = words(title);
  return (
    <header className={`mb-12 flex max-w-[52rem] flex-col gap-5 ${className}`}>
      <span className="flex items-center gap-3 font-mono text-[0.72rem] font-medium tracking-[0.16em] text-ink-faint uppercase">
        <CodeBar tone={tone} />
        {eyebrow}
      </span>
      <h2
        data-reveal="words"
        className="display-wide font-display text-[clamp(2.1rem,5.4vw,4rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance"
      >
        {list.map((w, i) => (
          <Fragment key={i}>
            <span className="word-mask">
              <span style={{ "--i": i } as React.CSSProperties} className={w.emphasis ? "text-accent" : undefined}>
                {w.text}
              </span>
            </span>{" "}
          </Fragment>
        ))}
      </h2>
      {lede && (
        <p data-reveal className="max-w-[60ch] text-[1.08rem] text-ink-soft" style={{ "--d": "120ms" } as React.CSSProperties}>
          {lede}
        </p>
      )}
    </header>
  );
}
