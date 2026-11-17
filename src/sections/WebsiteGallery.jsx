import { ArrowUpRight } from 'lucide-react'
import { websiteGallery } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function WebsiteGallery() {
  return (
    <section id="gallery" className="border-b border-border bg-canvas py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Website Gallery"
          title="Ten live websites."
          description="A broader look across client and product sites."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {websiteGallery.map((siteItem, index) => {
            const wide = index === 0 || index === 5
            return (
              <Reveal
                key={siteItem.id + siteItem.url}
                delay={0.04 * (index % 6)}
                className={wide ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <a
                  href={siteItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`relative overflow-hidden bg-surface ${
                      wide ? 'aspect-[21/10]' : 'aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={siteItem.image}
                      alt={`${siteItem.title} preview`}
                      className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none'
                        event.currentTarget.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    <div className="hidden absolute inset-0 bg-[linear-gradient(145deg,#e8edff,#ebe7e0)]" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/35 to-transparent opacity-80" />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4 md:p-5">
                    <div className="min-w-0">
                      <p className="text-xs font-medium tracking-[0.14em] uppercase text-ink-subtle mb-1">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="truncate text-lg md:text-xl font-semibold text-ink">
                        {siteItem.title}
                      </h3>
                      <p className="mt-1 truncate text-sm text-ink-muted">{siteItem.url.replace(/^https?:\/\//, '')}</p>
                    </div>
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-ink transition-colors group-hover:border-accent group-hover:text-accent">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
