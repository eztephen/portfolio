// Everything the page says lives here, so the site can be updated without touching components.
// Headings: wrap words in *asterisks* to set them in the accent colour.
import { SITE } from "@/config/site";
import type { Tone } from "@/lib/tone";

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;
export const YEARS = Math.round((Date.now() - SITE.careerStart.getTime()) / YEAR_MS);

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// Sections the right-hand minimap tracks, in page order.
export const MINIMAP: { id: string; label: string; tone: Tone }[] = [
  { id: "top", label: "Intro", tone: "bar" },
  { id: "services", label: "Services", tone: "teal" },
  { id: "work", label: "Work", tone: "pink" },
  { id: "experience", label: "Experience", tone: "violet" },
  { id: "stack", label: "Stack", tone: "lime" },
  { id: "process", label: "Process", tone: "teal" },
  { id: "contact", label: "Contact", tone: "pink" },
];

export const HERO = {
  value:
    "I build the systems businesses quietly depend on — backend platforms, automation that takes repetitive work off people's desks, and websites that turn visitors into enquiries.",
  detail: `${YEARS} years in, Java-first: sportsbooks and game servers, OTP and payment flows, and enterprise delivery at Accenture.`,
};

// ─── Experience ────────────────────────────────────────────────────────────
// Newest first, exactly as on the résumé. Counts in the proof strip are derived from this.
export type Role = {
  from: string;
  to: string;
  role: string;
  company: string;
  summary: string;
  projects: string[];
  tag?: string;
  lead?: boolean;
};

export const EXPERIENCE: Role[] = [
  {
    from: "Mar 2025",
    to: "Present",
    role: "Senior Java Developer",
    company: "GlobalNet Solutions Group Inc.",
    tag: "Returned",
    summary:
      "Working across teams to deliver scalable, secure and efficient systems, and contributing to system design and technical decisions.",
    projects: ["PWPWebsite", "Sportsbook CLIs", "KAGA Server", "T000Tester", "SMS Sender", "Game Provider System", "GT Platform", "NVenue"],
  },
  {
    from: "Apr 2024",
    to: "Mar 2025",
    role: "Advanced App Engineering Assoc. Manager",
    company: "Accenture Inc.",
    lead: true,
    summary:
      "Solved complex technical problems that needed a deep understanding of the system architecture, migrations and business requirements.",
    projects: ["Connectivity & Products – Etrade", "E-Valuator", "SGSOnSite", "Japan Hub – Prudential of Japan"],
  },
  {
    from: "Jul 2023",
    to: "Mar 2024",
    role: "Spring Application Framework — Application Developer",
    company: "Collabera Digital",
    summary: "Designed, built and configured Spring applications to meet business process and application requirements, delivered for Accenture.",
    projects: ["Connectivity & Products – Etrade"],
  },
  {
    from: "Jul 2022",
    to: "Apr 2023",
    role: "Software Developer (Java)",
    company: "Shang Software Solutions",
    summary: "Built automation that met and exceeded the company's needs — one-time passwords, payments and data scraping.",
    projects: ["Manibus Scraper", "SmartOTP", "MobileOTP", "SmartPay"],
  },
  {
    from: "Aug 2021",
    to: "Jun 2022",
    role: "Java Developer",
    company: "DKP Services Inc.",
    summary: "Developed and maintained game servers holding game logic, replays, math definitions and everything else a game needs to play.",
    projects: ["JellyMania XtraStreak Server", "JadeBlade XtraSplit Server", "AlohaSpirit XtraLock Game Replay"],
  },
  {
    from: "Jun 2020",
    to: "Aug 2021",
    role: "Senior Java Developer",
    company: "GlobalNet Solutions Group Inc.",
    summary: "First stint at GlobalNet: cross-functional delivery of scalable, secure systems. The project list on the 2025 entry covers both stints.",
    projects: [],
  },
  {
    from: "May 2019",
    to: "Jun 2020",
    role: "Application Development Team Lead",
    company: "Accenture Inc.",
    lead: true,
    summary: "Led application development — designing, building and maintaining technology for Macquarie's platform management.",
    projects: ["Macquarie (Platform Management)"],
  },
  {
    from: "Dec 2015",
    to: "May 2019",
    role: "Java Developer",
    company: "Pacifica Software Group",
    summary: "Web applications built for high availability and performance.",
    projects: ["Client Management Systems", "Game Launcher App", "Sportsbook Websites", "Game API"],
  },
  {
    from: "Oct 2014",
    to: "Nov 2015",
    role: "Junior Software Engineer",
    company: "Yondu IT Solutions",
    summary: "Web, point-of-sale and mobile development.",
    projects: ["GMovies Theater Enablement"],
  },
];

export const EDUCATION = {
  year: "2014",
  title: "BS Information Technology",
  school: "Informatics International College — Northgate",
  note: "Senior thesis: Man vs Alien, an educational game",
};

const uniqueProjects = new Set(EXPERIENCE.flatMap((r) => r.projects));
const uniqueCompanies = new Set(EXPERIENCE.map((r) => r.company));

export const PROOF = [
  { value: YEARS, suffix: "", label: "years building software", note: "since 2014" },
  { value: uniqueCompanies.size, suffix: "", label: "companies", note: "including Accenture, twice" },
  { value: uniqueProjects.size, suffix: "+", label: "named projects", note: "on the record" },
  { value: EXPERIENCE.filter((r) => r.lead).length, suffix: "", label: "leadership roles", note: "at Accenture" },
];

// ─── Services ──────────────────────────────────────────────────────────────
export const SERVICES: { tone: Tone; title: string; body: string; proof: string; stack: string[] }[] = [
  {
    tone: "teal",
    title: "Backend systems & APIs",
    body: "Java and Spring Boot services that stay up: platforms, payment and OTP flows, third-party integrations, and the APIs the rest of your product plugs into.",
    proof: "Game provider systems · sportsbook APIs · SmartPay · trading connectivity",
    stack: ["Java", "Spring Boot", "MySQL", "Kafka"],
  },
  {
    tone: "lime",
    title: "Automation & internal tools",
    body: "The work your team repeats by hand every week, done by software instead — scrapers, scheduled jobs, messaging, reports, and the small internal tools nobody has time to build.",
    proof: "Manibus Scraper · SmartOTP · MobileOTP · SMS Sender",
    stack: ["Java", "Python", "Selenium", "NATS"],
  },
  {
    tone: "pink",
    title: "Websites & web apps",
    body: "Fast, mobile-first sites built to bring in bookings, quotes and enquiries — not just to look good. Content lives in one file, so updates don't need me.",
    proof: "PZaide Letrato · the design samples below",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    tone: "violet",
    title: "Modernisation & delivery",
    body: "Moving older applications onto containers and proper pipelines without breaking what already works — with the tests and quality checks that keep it that way.",
    proof: "Migrations at Accenture · Docker, Kubernetes, Jenkins, Azure DevOps",
    stack: ["Docker", "Kubernetes", "Jenkins", "SonarQube"],
  },
];

// ─── Work ──────────────────────────────────────────────────────────────────
// `href: null` hides the link; a URL shows a "Visit site" / "Try the live demo" button.
export const FEATURED = {
  kind: "Product · 2026",
  title: "Walkthrough",
  subtitle: "Inspection reports that write themselves",
  problem:
    "A routine rental inspection ends with an evening at a laptop: cropping phone photos, typing notes into a template, and chasing tradespeople for quotes.",
  solution:
    "Walk the property on your phone, tap a condition for each room and photograph as you go. The owner report, maintenance schedule and quote requests are ready before you're back at the car.",
  shows: [
    "Mobile-first flow built around the phone's rear camera",
    "Typed domain model with a single reducer for all inspection state",
    "An owner report that prints cleanly to PDF",
  ],
  stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
  href: "https://walkthrough-demo.vercel.app" as string | null,
  images: {
    report: "/work/walkthrough-report.jpg",
    mobile: "/work/walkthrough-mobile.jpg",
  },
};

export type WorkCard = {
  kind: string;
  title: string;
  subtitle: string;
  body: string;
  stack: string[];
  image: string;
  href: string | null;
};

export const CLIENT_WORK: WorkCard = {
  kind: "Client website",
  title: "PZaide Letrato",
  subtitle: "Photography & videography studio, Laguna",
  body: "A five-page site for a photography and videography studio: a slideshow hero, a filterable gallery with lightbox, service pages, and an enquiry form that emails the studio directly. Contact details live in one config file the owner can change.",
  stack: ["Next.js", "React", "Tailwind CSS", "Nodemailer"],
  image: "/work/pzaideletrato-desktop.jpg",
  href: "https://pzaideletrato.vercel.app",
};

export const SAMPLES: WorkCard[] = [
  {
    kind: "Design sample · Clinic",
    title: "Fernbrook Dental Studio",
    subtitle: "Booking-led, fees up front",
    body: "Published fees, a first-visit walkthrough for nervous patients, and opening hours that highlight today.",
    stack: ["Next.js", "Tailwind"],
    image: "/work/fernbrook-desktop.jpg",
    href: "https://fernbrookdental.vercel.app",
  },
  {
    kind: "Design sample · Restaurant",
    title: "Ember Lane",
    subtitle: "Dark, appetite-led",
    body: "A tabbed menu the owner edits in one file, table reservations, and tonight's special pinned under the hero.",
    stack: ["Next.js", "Tailwind"],
    image: "/work/emberlane-desktop.jpg",
    href: "https://emberlane-restaurant.vercel.app",
  },
  {
    kind: "Design sample · Trades",
    title: "Coldfront",
    subtitle: "Built to make the phone ring",
    body: "A quote form above the fold, a live suburb checker, and tap-to-call — turning a panicked search into a phone call.",
    stack: ["Next.js", "Tailwind"],
    image: "/work/coldfront-desktop.jpg",
    href: "https://coldfront.vercel.app",
  },
];

// Employer work: internals and code stay under NDA. Names below are as listed on the résumé.
export const ENTERPRISE = [
  {
    tone: "teal" as Tone,
    title: "Sportsbook & game-provider platforms",
    where: "GlobalNet Solutions Group · Pacifica Software Group",
    body: "Game provider system, GT Platform, sportsbook CLIs, websites and game APIs, client management systems and an SMS sender.",
  },
  {
    tone: "violet" as Tone,
    title: "Casino-game servers",
    where: "DKP Services",
    body: "Servers holding game logic, replays and math definitions for titles including JellyMania XtraStreak, JadeBlade XtraSplit and AlohaSpirit XtraLock.",
  },
  {
    tone: "lime" as Tone,
    title: "OTP, payments & scraping",
    where: "Shang Software Solutions",
    body: "SmartOTP, MobileOTP and SmartPay, plus the Manibus scraper — automation that replaced manual work.",
  },
  {
    tone: "pink" as Tone,
    title: "Enterprise delivery",
    where: "Accenture · Collabera Digital",
    body: "Connectivity & Products – Etrade, E-Valuator, SGSOnSite, Japan Hub for Prudential of Japan, and platform management for Macquarie.",
  },
];

// ─── Stack ─────────────────────────────────────────────────────────────────
// Proficiency labels follow the résumé: Java is "proficient", the rest "familiar".
export const STACK = [
  { title: "Proficient", tone: "teal" as Tone, items: ["Java", "Spring Boot", "Spring MVC", "Maven", "Gradle", "JPQL"] },
  {
    title: "Also build with",
    tone: "pink" as Tone,
    items: ["Python", "FastAPI", "Flask", "TypeScript", "JavaScript", "React", "Next.js", "Vue", "AngularJS", "Vaadin", "Sass", "PHP", "C++", "VB.NET", "Android"],
  },
  { title: "Data", tone: "violet" as Tone, items: ["MariaDB", "MySQL", "SQL Server"] },
  {
    title: "Delivery & infrastructure",
    tone: "lime" as Tone,
    items: ["Docker", "Kubernetes", "Jenkins", "Azure DevOps", "AWS", "Apache Kafka", "NATS", "SonarQube", "Selenium", "Git", "Linux"],
  },
  { title: "Where I work", tone: "bar" as Tone, items: ["IntelliJ IDEA", "VS Code", "Cursor", "Eclipse", "NetBeans", "Android Studio"] },
];

// ─── Process ───────────────────────────────────────────────────────────────
export const PROCESS = [
  { title: "A 30-minute call", body: "You tell me what's slow, broken or repetitive. I tell you honestly whether software is the fix — sometimes it isn't." },
  { title: "A fixed quote", body: "Scope, timeline and price in writing before any work starts. No hourly meter running in the background." },
  { title: "Weekly demos", body: "You see working software every week, on your own phone and laptop — not a big reveal at the end." },
  { title: "Launch, then look after it", body: "I deploy it, document it, hand over the keys, and stay on for fixes and the next round of changes." },
];
