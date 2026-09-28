import Image from "next/image";

interface BrowserFrameProps {
  src: string;
  alt: string;
  label: string;
  sizes: string;
  aspect?: string;
  priority?: boolean;
}

// A minimal browser window. Tall full-page screenshots sit inside and scroll top to
// bottom when the surrounding `.pan-host` card is hovered or focused.
export default function BrowserFrame({ src, alt, label, sizes, aspect = "aspect-[16/10]", priority = false }: BrowserFrameProps) {
  return (
    <div className="min-w-0 overflow-hidden rounded-md border border-line bg-panel shadow-[var(--shadow)]">
      <div className="flex items-center gap-3 border-b border-line px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-pink/70" />
          <span className="size-2.5 rounded-full bg-lime/70" />
          <span className="size-2.5 rounded-full bg-teal/70" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-[3px] bg-canvas/70 px-2.5 py-1 font-mono text-[0.7rem] text-ink-faint">
          {label}
        </span>
      </div>
      <div className={`pan relative ${aspect}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </div>
  );
}
