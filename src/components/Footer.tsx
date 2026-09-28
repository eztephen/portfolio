import { SITE } from "@/config/site";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 font-mono text-[0.74rem] text-ink-faint">
      <div className="site-wrap flex flex-wrap items-center justify-between gap-4">
        <span>
          © {YEAR} {SITE.name} · Designed and built by me, with Next.js
        </span>
        <a href="#top" className="inline-block py-2 transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
