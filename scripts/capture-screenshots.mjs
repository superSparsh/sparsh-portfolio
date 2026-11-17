import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.resolve(__dirname, '../public/screenshots')

const sites = [
  { id: 'venture-up-north', url: 'https://ventureupnorth.com.au' },
  { id: 'venture-down-south', url: 'https://venturedownsouth.com.au' },
  { id: 'thedogline', url: 'https://thedogline.com.au' },
  { id: 'sobroome', url: 'https://sobroome.com.au' },
  { id: 'farmer-near-me', url: 'https://farmernear.me' },
  { id: 'wapapp', url: 'https://wapapp.tittu.in' },
  { id: 'cine-samugam', url: 'https://cinesamugam.com' },
  { id: 'samugam-live', url: 'https://samugamlive.com' },
  { id: 'yourekko', url: 'https://yourekko.com' },
  { id: 'petlufu', url: 'https://petlufu.com' },
]

function placeholderSvg(title, url) {
  const safeTitle = title.replace(/[<>&]/g, '')
  const safeUrl = url.replace(/[<>&]/g, '')
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#dfe6ff"/>
      <stop offset="55%" stop-color="#ebe7e0"/>
      <stop offset="100%" stop-color="#f6f3ee"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#g)"/>
  <rect x="64" y="64" width="1472" height="872" rx="28" fill="#ffffff" stroke="#d6d0c6" stroke-width="2"/>
  <circle cx="120" cy="120" r="10" fill="#ff5f57"/>
  <circle cx="152" cy="120" r="10" fill="#febc2e"/>
  <circle cx="184" cy="120" r="10" fill="#28c840"/>
  <text x="800" y="470" text-anchor="middle" font-family="Georgia, serif" font-size="64" fill="#1c1c1c">${safeTitle}</text>
  <text x="800" y="530" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#5a5a5a">${safeUrl}</text>
</svg>`
}

async function captureWithPlaywright() {
  const { chromium } = await import('playwright')
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  })

  for (const site of sites) {
    const outPath = path.join(outDir, `${site.id}.jpg`)
    try {
      console.log(`Capturing ${site.url}`)
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 45000 })
      await page.waitForTimeout(2500)
      await page.screenshot({ path: outPath, type: 'jpeg', quality: 82, fullPage: false })
      console.log(`Saved ${outPath}`)
    } catch (error) {
      console.warn(`Failed ${site.id}: ${error.message}`)
      const title = site.id
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')
      await writeFile(outPath.replace(/\.jpg$/, '.svg'), placeholderSvg(title, site.url))
      console.log(`Wrote placeholder SVG for ${site.id}`)
    }
  }

  await browser.close()
}

async function writeAllPlaceholders() {
  for (const site of sites) {
    const title = site.id
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
    const svgPath = path.join(outDir, `${site.id}.svg`)
    await writeFile(svgPath, placeholderSvg(title, site.url))
    console.log(`Placeholder ${svgPath}`)
  }
}

await mkdir(outDir, { recursive: true })

try {
  await captureWithPlaywright()
} catch (error) {
  console.warn('Playwright capture unavailable:', error.message)
  await writeAllPlaceholders()
}
