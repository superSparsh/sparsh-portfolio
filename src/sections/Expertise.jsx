import { techStack } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TechIcon from '../components/TechIcon'

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="A practical technology ecosystem."
          description="Tools and platforms I work with across backend, frontend, commerce, mobile, data, APIs, and infrastructure."
        />

        <div className="space-y-10 md:space-y-12">
          {techStack.map((group, groupIndex) => (
            <Reveal key={group.category} delay={0.04 * groupIndex}>
              <div>
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-border pb-3">
                  <h3 className="text-sm md:text-base font-semibold tracking-wide text-ink">
                    {group.category}
                  </h3>
                  <span className="text-xs text-ink-subtle tabular-nums">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <div className="group flex h-full min-h-[4.5rem] flex-col justify-between gap-3 rounded-2xl border border-border bg-surface-elevated p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-soft">
                        <span className="inline-flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                          <TechIcon name={item} className="size-4" />
                        </span>
                        <span className="text-sm font-medium leading-snug text-ink">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
