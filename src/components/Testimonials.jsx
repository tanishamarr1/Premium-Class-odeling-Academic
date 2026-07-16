import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]

  const next = () => setI((v) => (v + 1) % testimonials.length)
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-paper py-28 text-ink sm:py-36">
      <div className="container-lux">
        <Reveal>
          <p className="eyebrow mb-16 text-center">Voces de la academia</p>
        </Reveal>

        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] italic leading-tight text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-8 font-body text-sm uppercase tracking-widest2 text-ink/50">
                {t.name} — {t.role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-14 flex items-center justify-center gap-8">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="font-display text-2xl text-ink/40 transition-colors hover:text-ink"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    idx === i ? 'bg-ink' : 'bg-ink/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="font-display text-2xl text-ink/40 transition-colors hover:text-ink"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
