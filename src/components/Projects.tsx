import { projects } from '../data/resume'
import { ExternalLinkIcon } from './icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-16">
      <Reveal>
        <SectionHeading kicker="Projects" title="Things I've built" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delayMs={index * 80} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                {project.links?.[0] && (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="text-slate-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="mt-0.5 font-mono text-xs text-slate-400 dark:text-slate-500">{project.period}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                  >
                    {tech}
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
