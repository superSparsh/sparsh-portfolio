import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { heroTags, site } from '../data/content'

const focusAreas = [
  { label: 'Web Applications', detail: 'Laravel · React · APIs' },
  { label: 'Mobile Apps', detail: 'Android · Mobile APIs' },
  { label: 'E-commerce', detail: 'WordPress · Shopify' },
  { label: 'Infrastructure', detail: 'Servers · Deployments' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const fade = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
        }

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-[radial-gradient(ellipse_at_top_right,_#e8edff_0%,_transparent_45%),linear-gradient(180deg,#f6f3ee_0%,#f1ede6_100%)]"
    >
      <div className="pointer-events-none absolute -right-24 top-24 size-[28rem] rounded-full border border-border/70 opacity-60" />
      <div className="pointer-events-none absolute right-10 top-40 size-[18rem] rounded-full border border-accent/20 opacity-70" />

      <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 pt-28 pb-16 md:pt-36 md:pb-24 items-center">
        <div>
          <motion.p
            className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase text-accent mb-5"
            {...fade(0)}
          >
            {site.availability}
          </motion.p>

          <motion.p
            className="font-display text-2xl md:text-3xl text-ink mb-4"
            {...fade(0.04)}
          >
            {site.name}
          </motion.p>

          <motion.h1
            className="font-display text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.15rem] leading-[1.05] tracking-tight text-ink text-balance max-w-3xl"
            {...fade(0.08)}
          >
            {site.heroHeadline}
          </motion.h1>

          <motion.p
            className="mt-5 text-base md:text-lg text-ink-muted"
            {...fade(0.16)}
          >
            {site.title}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-base md:text-lg text-ink-muted leading-relaxed"
            {...fade(0.22)}
          >
            {site.tagline}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" {...fade(0.3)}>
            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgb(31_75_255/0.25)] hover:bg-[#163fe0] transition-colors"
            >
              View My Work
              <ArrowDownRight className="size-4" />
            </a>
          </motion.div>
        </div>

        <motion.div className="relative mx-auto w-full max-w-md lg:max-w-none" {...fade(0.18)}>
          <div className="absolute -inset-3 rounded-[2rem] bg-accent/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-[linear-gradient(160deg,#dfe6ff_0%,#ebe7e0_48%,#f6f3ee_100%)] shadow-soft aspect-[4/5]">
            <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full border border-accent/15" />
            <div className="pointer-events-none absolute -bottom-16 -left-8 size-56 rounded-full border border-border" />
            <div className="pointer-events-none absolute right-8 top-1/3 size-20 rounded-full bg-accent/10" />

            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/95 px-3 py-1.5 text-xs font-medium text-ink shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative size-2 rounded-full bg-emerald-500" />
              </span>
              Available for projects
            </div>

            <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-accent mb-4">
                What I build
              </p>
              <ul className="space-y-3">
                {focusAreas.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl border border-border/80 bg-surface-elevated/85 backdrop-blur-sm px-4 py-3"
                  >
                    <p className="text-sm md:text-base font-semibold text-ink">{item.label}</p>
                    <p className="mt-0.5 text-xs md:text-sm text-ink-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="absolute -left-2 bottom-10 flex flex-col gap-2 sm:-left-6 hidden md:flex">
            {heroTags.slice(0, 2).map((tag, index) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-ink shadow-soft"
                style={{ transform: `translateX(${index * 12}px)` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute -right-2 top-[72px] flex flex-col gap-2 sm:-right-4 hidden md:flex">
            {heroTags.slice(2).map((tag, index) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-ink shadow-soft"
                style={{ transform: `translateX(${index * -10}px)` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
