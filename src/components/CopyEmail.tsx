"use client";

import { useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard blocked (insecure context or permissions) — fall back to the mail app.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" onClick={copy} className="btn btn-ghost" aria-live="polite">
      {copied ? (
        <>
          <span className="text-lime" aria-hidden="true">✓</span> Copied to clipboard
        </>
      ) : (
        "Copy email address"
      )}
    </button>
  );
}
