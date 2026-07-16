import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  light = false,
  className = '',
}) {
  return (
    <div
      className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow mb-4 ${light ? 'text-ink/50' : ''}`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`font-display text-balance text-[clamp(2.2rem,5.5vw,4.5rem)] font-normal leading-[1.02] ${
            light ? 'text-ink' : 'text-paper'
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
