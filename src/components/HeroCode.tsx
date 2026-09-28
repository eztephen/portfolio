import { toneBg, type Tone } from "@/lib/tone";

// The code-line graphic from the top of the résumé, drawn in line by line.
// [indent in ch, segments of [width in ch, tone]]
const LINES: [number, [number, Tone][]][] = [
  [0, [[9, "teal"], [2, "bar"], [9, "teal"]]],
  [0, [[9, "bar"], [9, "lime"], [5, "teal"]]],
  [0, [[3, "pink"], [9, "lime"], [19, "bar"]]],
  [5, [[3, "pink"], [15, "bar"]]],
  [5, [[14, "bar"]]],
  [5, [[9, "teal"], [2, "pink"], [3, "violet"]]],
  [0, []],
  [0, [[6, "violet"], [11, "bar"], [4, "lime"]]],
  [5, [[4, "pink"], [12, "teal"]]],
  [5, [[8, "bar"], [6, "lime"], [3, "violet"]]],
  [0, [[2, "bar"]]],
];

// Running segment index for each line, so bars draw in reading order.
const lineStarts = LINES.map((_, i) => LINES.slice(0, i).reduce((n, [, segs]) => n + segs.length, 0));

export default function HeroCode() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-md border border-line bg-raised/70 p-5 font-mono text-[0.72rem] shadow-[var(--shadow)] sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between text-ink-faint">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="tracking-[0.12em] uppercase">solutions.java</span>
      </div>
      <ol className="flex flex-col gap-[0.62rem]">
        {LINES.map(([indent, segments], line) => (
          <li key={line} className="flex h-[0.6rem] items-center gap-4">
            <span className="w-4 shrink-0 text-right text-[0.62rem] leading-none text-ink-faint/60 tabular-nums">{line + 1}</span>
            <span className="flex items-center gap-[0.55ch]" style={{ paddingLeft: `${indent}ch` }}>
              {segments.map(([width, tone], s) => {
                const delay = 380 + (lineStarts[line] + s) * 55;
                return (
                  <span
                    key={s}
                    className={`code-bar h-[0.55rem] rounded-full ${toneBg[tone]}`}
                    style={{ width: `${width}ch`, "--d": `${delay}ms` } as React.CSSProperties}
                  />
                );
              })}
              {line === LINES.length - 1 && <span className="caret" />}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
