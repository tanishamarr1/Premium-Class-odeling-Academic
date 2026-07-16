import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { whyUs } from '../data/content'

export default function WhyUs() {
  return (
    <section className="bg-paper py-28 text-ink sm:py-36">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Por qué Premium Class"
          title={
            <>
              Lo que nos distingue
              <br />
              de una academia común.
            </>
          }
          light
        />

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group border-t border-ink/15 pt-8 transition-colors">
                <span className="font-display text-sm text-ink/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-3xl leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm font-body text-base font-light leading-relaxed text-ink/60">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
