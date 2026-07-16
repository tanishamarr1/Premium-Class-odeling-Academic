import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { curriculum } from '../data/content'

export default function Curriculum() {
  return (
    <section className="bg-paper py-28 text-ink sm:py-36">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Plan de estudios"
          title={<>Todo lo que vas a dominar.</>}
          light
        />

        <div className="mt-20 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
          {curriculum.map((c, i) => (
            <Reveal key={c.n} delay={(i % 5) * 0.06}>
              <div
                className={`group relative flex h-full flex-col justify-between border-b border-ink/15 p-6 transition-colors hover:bg-ink hover:text-paper sm:p-7 ${
                  i % 5 !== 4 ? 'lg:border-r' : ''
                } ${i % 2 === 0 ? 'sm:border-r' : ''} lg:border-ink/15`}
                style={{ minHeight: '220px' }}
              >
                <span className="font-display text-2xl text-ink/30 transition-colors group-hover:text-paper/40">
                  {c.n}
                </span>
                <div>
                  <h3 className="font-display text-xl leading-tight">{c.title}</h3>
                  <p className="mt-3 font-body text-xs font-light leading-relaxed text-ink/55 transition-colors group-hover:text-paper/60">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
