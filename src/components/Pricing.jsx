import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { pricing } from '../data/content'

export default function Pricing() {
  return (
    <section id="inversion" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="absolute inset-0 opacity-[0.06]">
        <img src="/images/runway-black.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-ink/70" />

      <div className="container-lux relative">
        <SectionHeading eyebrow="Inversión" title={<>Formación de este nivel, con este acceso.</>} align="center" />

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 divide-y divide-paper/10 border border-paper/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {pricing.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-4 px-8 py-12 text-center">
                <span className="eyebrow">{p.label}</span>
                <span className="font-display text-4xl text-paper sm:text-5xl">{p.amount}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-10 max-w-md text-center">
          <p className="font-body text-sm font-light text-paper/50">
            Cupos limitados por generación. Escríbenos para conocer disponibilidad
            y fechas de la próxima cohorte.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
