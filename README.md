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

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Config file: [`wrangler.toml`](wrangler.toml)

SPA fallback is provided via `public/_redirects`.
