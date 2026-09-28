import type { Metadata, Viewport } from "next";
import { Anybody, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config/site";
import SiteHeader from "@/components/SiteHeader";
import Minimap from "@/components/Minimap";
import RevealRoot from "@/components/RevealRoot";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  axes: ["wdth"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

// On Vercel the production URL is provided automatically; set SITE_URL for any other host.
const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE.name} — ${SITE.role}`,
  description: SITE.description,
  openGraph: {
    type: "website",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1726" },
    { media: "(prefers-color-scheme: light)", color: "#f2f4f8" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  email: `mailto:${SITE.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Carmona", addressRegion: "Cavite", addressCountry: "PH" },
  sameAs: [SITE.linkedin, SITE.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anybody.variable} ${instrument.variable} ${jetbrains.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only z-[100] rounded bg-accent px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <div className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[2px] bg-[linear-gradient(90deg,var(--teal),var(--lime),var(--pink),var(--violet))]" />
        <SiteHeader />
        {children}
        <Minimap />
        <RevealRoot />
        <script
          type="application/ld+json"
          // Static, server-built JSON — no user input involved.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
