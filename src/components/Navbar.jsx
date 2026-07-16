import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#programa', label: 'Programa' },
  { href: '#galeria', label: 'Galería' },
  { href: '#inversion', label: 'Inversión' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="container-lux flex items-center justify-between py-5">
          <a href="#top" className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Premium Class" className="h-9 w-9 rounded-full object-cover" />
            <span className="font-display text-sm tracking-[0.2em] text-paper">
              PREMIUM CLASS
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="eyebrow text-paper/70 transition-colors hover:text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="hidden border border-paper/40 px-5 py-2 font-body text-[11px] uppercase tracking-widest2 text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink md:block"
          >
            Inscríbete
          </a>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-px w-7 bg-paper" />
            <span className="h-px w-7 bg-paper" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink"
          >
            <div className="container-lux flex items-center justify-between py-5">
              <span className="font-display text-sm tracking-[0.2em] text-paper">
                PREMIUM CLASS
              </span>
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)} className="text-paper">
                <span className="font-display text-2xl">&times;</span>
              </button>
            </div>
            <div className="container-lux flex flex-1 flex-col items-start justify-center gap-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-4xl text-paper"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
