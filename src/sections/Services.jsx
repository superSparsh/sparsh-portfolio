import { services } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Services() {
  return (
    <section id="services" className="border-b border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="How I can help."
          description="Focused delivery across applications, commerce, integrations, and infrastructure."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.05 * index}>
              <article className="h-full rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 transition-colors hover:border-accent/35">
                <p className="text-xs font-medium tracking-[0.16em] uppercase text-accent mb-4">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-ink tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
