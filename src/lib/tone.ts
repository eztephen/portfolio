// The four code-bar colours from the résumé header. Each service owns one, and it
// stays that colour everywhere it appears. Full class strings so Tailwind can see them.
export type Tone = "teal" | "lime" | "pink" | "violet" | "bar";

export const toneText: Record<Tone, string> = {
  teal: "text-teal",
  lime: "text-lime",
  pink: "text-pink",
  violet: "text-violet",
  bar: "text-bar",
};

export const toneBg: Record<Tone, string> = {
  teal: "bg-teal",
  lime: "bg-lime",
  pink: "bg-pink",
  violet: "bg-violet",
  bar: "bg-bar",
};

export const toneBorder: Record<Tone, string> = {
  teal: "border-teal",
  lime: "border-lime",
  pink: "border-pink",
  violet: "border-violet",
  bar: "border-bar",
};
