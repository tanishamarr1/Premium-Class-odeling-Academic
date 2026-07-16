import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/images/group-hero.jpg"
          alt="Alumnas de Premium Class Modeling Academy"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      <div className="absolute inset-0 bg-ink/25" />

      <motion.div style={{ opacity }} className="container-lux relative flex h-full flex-col justify-end pb-24 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="eyebrow mb-6"
        >
          Santo Domingo, República Dominicana
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,10vw,8.5rem)] font-normal leading-[0.92] text-paper"
          >
            Premium Class
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,10vw,8.5rem)] font-normal italic leading-[0.92] text-paper/90"
          >
            Modeling Academy
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md font-body text-base font-light leading-relaxed text-paper/75">
            Formación integral en pasarela, imagen y desarrollo personal.
            Una transformación de 360° para quienes están listas para
            ocupar su lugar en la industria.
          </p>
          <a
            href="#contacto"
            className="group flex shrink-0 items-center gap-3 border border-paper/50 px-7 py-3.5 font-body text-[11px] uppercase tracking-widest2 text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Reserva tu cupo
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="eyebrow">Desplázate</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="h-8 w-px bg-paper/50"
        />
      </motion.div>
    </section>
  )
}
