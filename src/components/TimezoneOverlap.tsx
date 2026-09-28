"use client";

import { useSyncExternalStore } from "react";
import { SITE } from "@/config/site";

type Overlap = { city: string; range: string; startHour: number; same: boolean };

let cached: Overlap | null | undefined;

// Converts my Manila working hours into the visitor's own time zone. Computed once
// and cached, so the snapshot stays stable between renders.
function readOverlap(): Overlap | null {
  if (cached !== undefined) return cached;
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const today = new Date();
    const start = new Date(
      Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), SITE.workingHours.start - SITE.utcOffset),
    );
    const end = new Date(start.getTime() + (SITE.workingHours.end - SITE.workingHours.start) * 3_600_000);
    const time = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit", timeZone: zone });
    const hour = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hourCycle: "h23", timeZone: zone });
    cached = {
      city: (zone.split("/").pop() ?? zone).replace(/_/g, " "),
      range: `${time.format(start)} – ${time.format(end)}`,
      startHour: Number(hour.format(start)),
      same: zone === SITE.timezone,
    };
  } catch {
    cached = null;
  }
  return cached;
}

const subscribe = () => () => {};

export default function TimezoneOverlap() {
  const overlap = useSyncExternalStore(subscribe, readOverlap, () => null);
  const length = SITE.workingHours.end - SITE.workingHours.start;
  const startHour = overlap?.startHour ?? SITE.workingHours.start;
  const isWorking = (h: number) => (h - startHour + 24) % 24 < length;

  return (
    <div className="rounded-md border border-line bg-canvas p-6 sm:p-7">
      <p className="font-mono text-[0.72rem] tracking-[0.14em] text-ink-faint uppercase">When I&rsquo;m online, in your time</p>
      <p className="mt-3 text-[1.05rem]" aria-live="polite">
        {overlap === null && (
          <>
            <b className="font-semibold">9:00 am – 6:00 pm</b> Philippine time (UTC+{SITE.utcOffset}).
          </>
        )}
        {overlap?.same && <>You&rsquo;re in my time zone — we&rsquo;d share the whole working day.</>}
        {overlap && !overlap.same && (
          <>
            That&rsquo;s <b className="font-semibold text-accent">{overlap.range}</b> for you in {overlap.city}.
          </>
        )}
      </p>
      <div className="mt-5" aria-hidden="true">
        <div className="grid grid-cols-24 gap-[3px]">
          {Array.from({ length: 24 }, (_, h) => (
            <span key={h} className={`h-7 rounded-[2px] transition-colors duration-500 ${isWorking(h) ? "bg-accent" : "bg-line"}`} />
          ))}
        </div>
        <div className="mt-2 flex justify-between font-mono text-[0.66rem] text-ink-faint">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>
    </div>
  );
}
