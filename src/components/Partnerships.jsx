import Reveal from './Reveal'
import { partnerships } from '../data/content'

export default function Partnerships() {
  return (
    <section className="border-y border-paper/10 bg-ink py-20">
      <div className="container-lux">
        <Reveal>
          <p className="eyebrow mb-12 text-center">
            Con la confianza de la industria
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partnerships.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <span className="whitespace-nowrap font-display text-xl italic text-paper/50 transition-colors hover:text-paper sm:text-2xl">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
