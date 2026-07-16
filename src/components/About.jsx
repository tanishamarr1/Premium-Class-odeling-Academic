import Reveal from './Reveal'
import FilmFrame from './FilmFrame'
import { mission, director } from '../data/content'

export default function About() {
  return (
    <section id="nosotros" className="relative bg-ink py-28 sm:py-36">
      <div className="container-lux">
        {/* Mission — asymmetric editorial block */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">Quiénes somos</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] text-paper">
                Una transformación,
                <br />
                no una clase.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.15}>
              <p className="font-body text-xl font-light leading-relaxed text-paper/80 sm:text-2xl">
                {mission}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Director — overlapping editorial composition */}
        <div className="relative mt-32 grid grid-cols-1 gap-16 sm:mt-44 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="relative lg:col-span-5">
            <FilmFrame
              src={director.photo}
              alt={director.name}
              frameNo="04"
              aspect="aspect-[3/4]"
            />
          </div>

          <div className="relative lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow mb-4">{director.role}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="mb-8 font-display text-[clamp(2rem,4vw,3rem)] italic leading-tight text-paper">
                {director.name}
              </h3>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="space-y-4">
                {director.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-4 border-t border-paper/10 pt-4 font-body text-sm font-light leading-relaxed text-paper/70"
                  >
                    <span className="mt-0.5 font-display text-xs text-stone">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
