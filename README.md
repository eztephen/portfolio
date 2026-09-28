# Eztephen Bacuño — Portfolio

Personal portfolio for finding clients: services, selected work, a career timeline, and contact. Built around the code-line bars from my résumé — the page has a live editor-style minimap, a name that sets itself in a variable font, and a `git log` of my career.

Next.js 16, React 19, Tailwind CSS v4, TypeScript. No animation library — everything is CSS plus a few small hooks.

## Getting started

Requires Node.js >= 20.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Updating the content

Nothing on the page needs a component edit:

- **`src/config/site.ts`** — name, role, tagline, location, email, LinkedIn, GitHub, working hours. `phone` is deliberately `null`; add one only if you want it public.
- **`src/data/content.ts`** — services, work, experience, stack and process. The proof-strip numbers (years, companies, projects, leadership roles) are **calculated from `EXPERIENCE`**, so adding a role updates them automatically. Wrap words in `*asterisks*` in a heading to set them in the accent colour.

### Linking live projects

Every work item has `href: null`, which hides its link. After deploying a project, paste its URL into the matching `href` in `content.ts` and a "Visit site" / "Try the live demo" button appears.

### Replacing screenshots

Screenshots live in `public/work/`. They're full-page captures (1200px wide JPEGs), so they can scroll inside their browser frame on hover. Keep the same file names, or update the paths in `content.ts`.

## Deploy

Push to a Git host and import the repo on [Vercel](https://vercel.com/new). On Vercel, the site URL used for link previews is detected automatically. On any other host, set `SITE_URL=https://your-domain` so LinkedIn and Messenger previews resolve correctly.

## Before going public

- **Client names.** The enterprise section names Macquarie and Prudential of Japan, exactly as on the résumé. Check that your Accenture and Collabera agreements allow naming clients on a public website — they're all in `ENTERPRISE` and `EXPERIENCE` in `content.ts` if you need to remove them.
- **Contact details.** Only email, LinkedIn and GitHub are shown. The street address and phone number from the résumé are intentionally left off a public page.
- **Real numbers.** Clients respond to measurable outcomes ("cut report time from two hours to ten minutes"). Add them to the case studies as you collect them.

## Responsive and accessible

Tested at 13 widths from 320px to 2560px with no horizontal scrolling. On very large screens (1800px+) the whole layout scales up proportionally. Every animation has a `prefers-reduced-motion` path, and scroll reveals only hide content that starts below the fold, so nothing is lost without JavaScript.
