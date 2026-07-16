import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
import { contact } from '../data/content'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const LEVELS = ['Nivel Básico', 'Nivel Medio', 'Nivel Profesional', 'Aún no sé']

export default function CTA() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // honeypot anti-spam: si este campo viene lleno, es un bot
    if (formRef.current.company.value) return

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      setErrorMsg(
        'El envío de correo no está configurado todavía. Agrega tus llaves de EmailJS en el archivo .env (ver README).'
      )
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      setStatus('sent')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg('No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por Instagram.')
    }
  }

  return (
    <section id="contacto" className="relative bg-ink py-28 sm:py-36">
      <div className="container-lux">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">Conviértete en</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] italic leading-[1.02] text-paper">
                La próxima
                <br />
                Premium Class.
              </h2>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 space-y-5 border-t border-paper/10 pt-8">
              <ContactLine label="Dirección" value={contact.address} />
              <ContactLine label="Teléfono" value={contact.phone} href={`tel:${contact.phoneHref}`} />
              <ContactLine label="Email" value={contact.email} href={`mailto:${contact.email}`} />
              <ContactLine
                label="Instagram"
                value={contact.instagram}
                href={contact.instagramUrl}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Nombre completo" name="user_name" required />
                  <Field label="Teléfono" name="user_phone" type="tel" required />
                </div>

                <Field label="Correo electrónico" name="user_email" type="email" required />

                <div>
                  <label className="eyebrow mb-3 block">Nivel de interés</label>
                  <select
                    name="interest_level"
                    defaultValue=""
                    required
                    className="w-full border-b border-paper/25 bg-transparent py-3 font-body text-paper outline-none transition-colors focus:border-paper"
                  >
                    <option value="" disabled className="bg-ink">
                      Selecciona una opción
                    </option>
                    {LEVELS.map((l) => (
                      <option key={l} value={l} className="bg-ink">
                        {l}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="eyebrow mb-3 block">Mensaje</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Cuéntanos un poco sobre ti…"
                    className="w-full resize-none border-b border-paper/25 bg-transparent py-3 font-body text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-paper"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group mt-4 flex w-full items-center justify-center gap-3 border border-paper/50 px-7 py-4 font-body text-[11px] uppercase tracking-widest2 text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink disabled:opacity-50 sm:w-auto"
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
                  {status !== 'sending' && (
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  )}
                </button>

                {status === 'sent' && (
                  <p className="font-body text-sm text-paper/70">
                    Gracias — recibimos tu solicitud. Te contactaremos muy pronto.
                  </p>
                )}
                {status === 'error' && (
                  <p className="font-body text-sm text-red-300/80">{errorMsg}</p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', required }) {
  return (
    <div>
      <label className="eyebrow mb-3 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-paper/25 bg-transparent py-3 font-body text-paper outline-none transition-colors focus:border-paper"
      />
    </div>
  )
}

function ContactLine({ label, value, href }) {
  const content = href ? (
    <a href={href} className="transition-colors hover:text-paper">
      {value}
    </a>
  ) : (
    value
  )
  return (
    <div className="flex flex-col gap-1 font-body text-sm font-light text-paper/70 sm:flex-row sm:gap-4">
      <span className="eyebrow w-28 shrink-0">{label}</span>
      <span>{content}</span>
    </div>
  )
}
