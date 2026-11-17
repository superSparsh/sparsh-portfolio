import { ArrowUpRight } from 'lucide-react'
import { navLinks, site } from '../data/content'

const COPYRIGHT_YEAR = 2026

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-canvas">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl md:text-4xl tracking-tight">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm md:text-base text-white/65 leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-4">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-4">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                >
                  {site.email}
                  <ArrowUpRight className="size-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="size-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                >
                  WhatsApp
                  <ArrowUpRight className="size-3.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {COPYRIGHT_YEAR} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/45">{site.title}</p>
        </div>
      </div>
    </footer>
  )
}
