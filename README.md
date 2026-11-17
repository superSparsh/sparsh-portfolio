# Sparsh Thakur Portfolio

Premium personal portfolio for Sparsh Thakur - Full-Stack Developer & Software Engineer.

## Stack

- React 19
- Vite
- JavaScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

## Content edits

All personal copy, projects, tech stack, experience, and services live in:

[`src/data/content.js`](src/data/content.js)

Replace `public/resume.pdf` with your real resume.  
Optional: add `public/portrait.jpg` for the hero portrait.

## Screenshots

Website previews are stored in `public/screenshots/`.

Refresh them with:

```bash
npm run screenshots
```

## Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Cloudflare deploy

[`wrangler.toml`](wrangler.toml) serves the Vite `dist/` folder as static assets (SPA mode).

**Cloudflare dashboard settings:**
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: project root

Or deploy locally:

```bash
npm run deploy
```

SPA fallback is also provided via `public/_redirects` for Pages-style hosting.
