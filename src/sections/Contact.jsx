import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { contact, site } from '../data/content'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <section id="contact" className="bg-[linear-gradient(180deg,#ebe7e0_0%,#e4e0d8_100%)] py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-ink text-canvas px-6 py-12 sm:px-10 md:px-14 md:py-16 relative">
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute right-10 bottom-0 size-40 rounded-full border border-white/10" />

            <p className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase text-white/55">
              {contact.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance max-w-3xl">
              {contact.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg text-white/65 leading-relaxed">
              {contact.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-[#163fe0] transition-colors"
              >
                <Mail className="size-4" />
                Email Me
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                LinkedIn
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:gap-8">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <Mail className="size-4" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <MessageCircle className="size-4" />
                WhatsApp · {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
