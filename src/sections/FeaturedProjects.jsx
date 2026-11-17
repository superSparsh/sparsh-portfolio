import { ArrowUpRight } from 'lucide-react'
import { featuredProjects } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function ProjectImage({ project }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface aspect-[16/10] shadow-soft">
      <img
        src={project.image}
        alt={`${project.title} website screenshot`}
        className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none'
          event.currentTarget.nextElementSibling?.classList.remove('hidden')
        }}
      />
      <div className="hidden absolute inset-0 flex flex-col items-start justify-end bg-[linear-gradient(160deg,#dfe6ff,#ebe7e0)] p-6">
        <p className="font-display text-2xl text-ink">{project.title}</p>
        <p className="mt-1 text-sm text-ink-muted truncate max-w-full">{project.url}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-60" />
    </div>
  )
}

function ProjectMeta({ project }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-accent mb-2">
            Project {project.number}
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
            {project.title}
          </h3>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-ink transition-colors hover:border-accent hover:text-accent"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight className="size-5" />
        </a>
      </div>

      {project.description ? (
        <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-xl">
          {project.description}
        </p>
      ) : (
        <p className="text-sm text-ink-subtle italic">
          Project description editable in content.js
        </p>
      )}

      {project.technologies?.length ? (
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-ink-subtle">Technology tags editable in content.js</p>
      )}

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
      >
        Visit site
        <ArrowUpRight className="size-4" />
      </a>
    </div>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="featured" className="border-b border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work, presented editorially."
          description="Large case-study layouts for Venture Down South, The Dog Line, and Petlufu."
        />

        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map((project, index) => {
            const reverse = index % 2 === 1
            return (
              <Reveal key={project.id} delay={0.05 * index}>
                <article
                  className={`group grid gap-8 lg:gap-12 items-center ${
                    reverse ? 'lg:grid-cols-[0.95fr_1.05fr]' : 'lg:grid-cols-[1.05fr_0.95fr]'
                  }`}
                >
                  <div className={reverse ? 'lg:order-2' : ''}>
                    <a href={project.url} target="_blank" rel="noreferrer" className="block">
                      <ProjectImage project={project} />
                    </a>
                  </div>
                  <div className={reverse ? 'lg:order-1' : ''}>
                    <ProjectMeta project={project} />
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
