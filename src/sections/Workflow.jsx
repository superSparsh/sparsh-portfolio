import { workflow } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Workflow() {
  return (
    <section id="workflow" className="border-b border-border bg-canvas py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Development Workflow"
          title="A clear path from idea to production."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item, index) => (
            <Reveal key={item.step} delay={0.05 * index}>
              <article className="relative h-full rounded-2xl border border-border bg-surface-elevated p-5 md:p-6">
                <p className="font-display text-4xl text-accent/80">{item.step}</p>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{item.detail}</p>
                {index < workflow.length - 1 ? (
                  <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-border-strong lg:block" />
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
