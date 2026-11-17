import { about } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-canvas py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
          <SectionHeading eyebrow={about.eyebrow} title={about.headline} />
          <div className="space-y-5 pt-2">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.08 * index}>
                <p className="text-lg md:text-xl leading-relaxed text-ink-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
