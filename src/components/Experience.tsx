import { experience } from '../data/resume'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-16">
      <Reveal>
        <SectionHeading kicker="Experience" title="Where I've worked" />
      </Reveal>

      <div className="space-y-6">
        {experience.map((job, index) => (
          <Reveal key={job.role + job.org} delayMs={index * 60}>
            <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-500">{job.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                {job.org} · {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
