import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { programs, schedule } from '../data/content'

export default function Programs() {
  return (
    <section id="programa" className="relative bg-ink py-28 sm:py-36">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Programa · Un año, tres niveles"
            title={
              <>
                De los fundamentos
                <br />
                a la industria profesional.
              </>
            }
          />
          <Reveal delay={0.2} className="max-w-xs shrink-0">
            <p className="font-body text-sm font-light leading-relaxed text-paper/60">
              {schedule.level} — {schedule.time}. {schedule.note}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.level} delay={i * 0.1} y={36}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex h-full flex-col justify-between overflow-hidden border p-8 backdrop-blur-sm sm:p-10 ${
                  p.featured
                    ? 'border-paper/40 bg-paper/[0.06]'
                    : 'border-paper/10 bg-white/[0.02]'
                }`}
              >
                {p.featured && (
                  <span className="eyebrow absolute right-8 top-8 text-paper/50">
                    Más popular
                  </span>
                )}
                <div>
                  <span className="eyebrow">{p.months}</span>
                  <h3 className="mt-5 font-display text-4xl italic text-paper">
                    {p.level}
                  </h3>
                  <p className="mt-5 font-body text-sm font-light leading-relaxed text-paper/60">
                    {p.desc}
                  </p>
                </div>

                <ul className="mt-10 space-y-3 border-t border-paper/10 pt-6">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 font-body text-sm font-light text-paper/70"
                    >
                      <span className="h-px w-4 bg-stone" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
