# Rakesh Kumar — Portfolio

A premium, dark-mode-first developer portfolio built with **React 18, TypeScript, and Vite**, positioning
Rakesh Kumar as a Software Engineer across **iOS, React Native, and React.js**.

---

## Design system

- **Identity**: a git-log / terminal aesthetic — commit-style hash labels, terminal window chrome, a literal
  `iOS → React Native → React.js` command-log visual in the hero. It's a direct expression of "software
  engineer who thinks in commits," not a generic gradient hero.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels, badges, code-flavored UI).
- **Color**: dark ink background (`#0a0c10`) with a muted terminal-mint accent (`#7dd3c0`) and a secondary
  warm amber (`#e8a25c`, iOS-adjacent) — deliberately avoiding default purple/violet AI-app palettes.
- **Motion**: IntersectionObserver-driven `.reveal` fades, all gated behind `prefers-reduced-motion`.

All tokens live in `src/styles/tokens.css` (dark values on `:root`, light values under `[data-theme='light']`).

---

## Project structure

```
src/
├── components/
│   ├── Navbar/        Sticky nav, scroll-spy, mobile menu, theme toggle
│   ├── Hero/           Headline, badges, CTAs, terminal signature visual
│   ├── About/          Narrative + stats
│   ├── Journey/         Interactive iOS → RN → React stage explorer
│   ├── Skills/          Grouped technology cards
│   ├── Projects/        Filterable project showcase with case-study structure
│   ├── ReactShowcase/   Live demos: hooks/state, API integration, a11y, error boundaries
│   ├── Architecture/    Tabbed architecture diagrams per platform
│   ├── Experience/      Git-log-styled career timeline
│   ├── Philosophy/      Engineering principles
│   ├── Resume/          Resume CTA
│   ├── Contact/         Validated contact form (frontend-only)
│   ├── Footer/
│   └── UI/              Shared scroll progress + back-to-top
│
├── data/                All content — projects.ts, skills.ts, experience.ts, etc.
├── hooks/               useTheme, useReveal, useScrollSpy, useScrollProgress
├── styles/              tokens.css (design tokens) + global.css (reset & shared classes)
├── App.tsx              Composes sections; below-fold sections are code-split via React.lazy
└── main.tsx
```

Content is intentionally separated from UI — editing bios, projects or experience means editing a file in
`src/data/`, never touching a component.

---

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build locally
```

Requires Node.js 18+.

---

## Architectural decisions

- **No backend, on purpose.** The contact form validates client-side and shows a toast, but does not send
  email. Wire it to a form service (e.g. Formspree, Resend, a serverless function) before relying on it.
- **Code-split by section.** Every section below the hero is lazy-loaded (`React.lazy` + `Suspense`), so the
  initial bundle stays small. Confirmed in the production build: each section ships as its own chunk.
- **Data-driven rendering.** Skills, projects, experience and journey stages are arrays mapped to components
  — adding a project means adding an object to `src/data/projects.ts`, not writing new JSX.
- **No component library.** Every UI element (badges, cards, tabs, toggle) is hand-built and themed via CSS
  variables, to avoid the site looking like a template.
- **Accessibility is structural, not bolted on.** Semantic headings, a skip link, visible focus rings, ARIA
  only where native semantics fall short (tabs, switch, live regions), and full `prefers-reduced-motion`
  support.

---

## Placeholders to replace

Search the codebase for `[ADD ...]` — everything below needs real content before this goes live:

| Location | Placeholder |
|---|---|
| `src/data/siteConfig.ts` | `location`, `email`, `links.github`, `links.linkedin` |
| `public/resume.pdf` | Add your real resume PDF here (referenced by the Resume buttons) |
| `src/data/projects.ts` | `solution` text and `githubUrl` for each of the 4 projects |
| `src/data/experience.ts` | `responsibilities` and any `[ADD PROJECT DETAILS]` entries per role |

No companies, metrics, clients, or accomplishments were invented — the career timeline uses the roles you
provided, with placeholders anywhere specific detail wasn't given.

---

## Deployment

Any static host works since this is a Vite SPA that builds to `dist/`:

- **Vercel**: import the repo, framework preset "Vite" is auto-detected, zero config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build`, deploy the `dist/` folder (set `base` in `vite.config.ts` if hosted
  under a subpath, e.g. `username.github.io/repo-name`).
- **Cloudflare Pages**: build command `npm run build`, output directory `dist`.
