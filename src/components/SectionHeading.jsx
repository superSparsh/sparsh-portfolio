import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`mb-10 md:mb-14 flex flex-col gap-3 max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-ink text-balance">
        {title}
      </h2>
      {description ? (
        <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
