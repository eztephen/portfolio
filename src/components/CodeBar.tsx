import { toneBg, type Tone } from "@/lib/tone";

// The résumé's signature mark: a short neutral bar followed by a coloured one.
export default function CodeBar({ tone, className = "" }: { tone: Tone; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[3px] ${className}`} aria-hidden="true">
      <span className="h-[3px] w-2 rounded-full bg-bar/60" />
      <span className={`h-[3px] w-5 rounded-full ${toneBg[tone]}`} />
    </span>
  );
}
