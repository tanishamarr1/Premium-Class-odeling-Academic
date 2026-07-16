import { motion } from 'framer-motion'

/**
 * FilmFrame — el elemento firma del sitio.
 * Envuelve fotografías reales en un marco tipo contact-sheet /
 * negativo de 35mm: perforaciones, número de cuadro y una
 * pequeña leyenda. Referencia directa al material fotográfico
 * original de la marca (hojas de contacto numeradas).
 */
export default function FilmFrame({
  src,
  alt,
  frameNo = '01',
  className = '',
  aspect = 'aspect-[4/5]',
  delay = 0,
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative select-none ${className}`}
    >
      <div className="relative overflow-hidden bg-graphite">
        <div className={`relative ${aspect} overflow-hidden`}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        {/* sprocket rail */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex w-3 flex-col justify-between bg-ink/80 py-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-auto h-1.5 w-1.5 rounded-[1px] bg-paper/25" />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex w-3 flex-col justify-between bg-ink/80 py-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-auto h-1.5 w-1.5 rounded-[1px] bg-paper/25" />
          ))}
        </div>
      </div>
      <figcaption className="mt-3 flex items-center justify-between font-body text-[10px] uppercase tracking-widest2 text-stone">
        <span>PC · Nº{frameNo}</span>
        <span className="hidden xs:inline">{alt}</span>
      </figcaption>
    </motion.figure>
  )
}
