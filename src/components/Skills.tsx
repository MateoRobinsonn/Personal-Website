import { coursework, skills } from '../data/resume'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-16">
      <Reveal>
        <SectionHeading kicker="Skills" title="Tools I reach for" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.category} delayMs={index * 50}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-200 px-2.5 py-1 font-mono text-xs text-slate-600 dark:border-slate-700 dark:text-slate-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={250} className="mt-6">
        <div className="rounded-2xl border border-dashed border-slate-300 p-6 dark:border-slate-700">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Relevant Coursework</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {coursework.join(' · ')}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
