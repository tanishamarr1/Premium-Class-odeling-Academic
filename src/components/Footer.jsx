import { contact, brand } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink pb-10 pt-20">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-12 border-b border-paper/10 pb-16 sm:flex-row sm:items-end">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.jpg"
              alt="Premium Class"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-2xl tracking-wide text-paper">
                {brand.name.toUpperCase()}
              </p>
              <p className="eyebrow">{brand.sub}</p>
            </div>
          </div>

          <a
            href="#contacto"
            className="font-display text-3xl italic text-paper/80 transition-colors hover:text-paper sm:text-4xl"
          >
            Hablemos →
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 font-body text-xs font-light text-paper/50 sm:flex-row sm:gap-8">
            <span>{contact.address}</span>
            <span>{contact.phone}</span>
            <a href={`mailto:${contact.email}`} className="hover:text-paper/80">
              {contact.email}
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="eyebrow hover:text-paper"
            >
              Instagram
            </a>
            <span className="font-body text-xs font-light text-paper/40">
              © {new Date().getFullYear()} Premium Class Modeling Academy
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
