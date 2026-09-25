import { education } from '../data/resume'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-16">
      <Reveal>
        <SectionHeading kicker="Education" title="Academic background" />
      </Reveal>

      <div className="space-y-4">
        {education.map((entry, index) => (
          <Reveal key={entry.school} delayMs={index * 60}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{entry.school}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{entry.degree}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-slate-500 dark:text-slate-500">{entry.period}</p>
                <p className="text-xs text-slate-400 dark:text-slate-600">{entry.location}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
