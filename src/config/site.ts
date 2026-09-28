// Central personal config — update here and it reflects across the entire site
export const SITE = {
  name: "Eztephen Bacuño",
  nameLines: ["Eztephen", "Bacuño"],
  role: "Team Lead / Senior Software Engineer",
  tagline: ["Solving problems.", "Building solutions.", "Automating success."],
  description:
    "Senior software engineer and team lead in the Philippines. Backend systems, automation and websites for businesses — twelve years, Java-first.",
  location: "Carmona, Cavite, Philippines",
  timezone: "Asia/Manila",
  utcOffset: 8, // Manila has no daylight saving, so this never changes
  workingHours: { start: 9, end: 18 }, // local Manila time, 24h
  availability: "Available for new projects",
  email: "eztephenbacuo@gmail.com",
  linkedin: "https://www.linkedin.com/in/eztephen/",
  github: "https://github.com/eztephen",
  // A personal mobile number on a public page attracts spam. Add one here only if you want it shown:
  // phone: { display: "+63 …", href: "tel:+63…" },
  phone: null as { display: string; href: string } | null,
  careerStart: new Date(2014, 9, 1), // October 2014, first role at Yondu
};
