import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { gallery } from '../data/content'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="galeria" className="bg-ink py-28 sm:py-36">
      <div className="container-lux">
        <SectionHeading eyebrow="Galería" title={<>Momentos detrás de escena.</>} />

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={(i % 6) * 0.06} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden bg-graphite"
                aria-label={`Ampliar: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                    img.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="eyebrow p-4 text-paper">{img.alt}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Cerrar"
              className="absolute right-6 top-6 font-display text-3xl text-paper"
              onClick={() => setActive(null)}
            >
              &times;
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              src={gallery[active].src}
              alt={gallery[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[92vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
