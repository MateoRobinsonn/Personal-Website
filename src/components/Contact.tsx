import { profile } from '../data/resume'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-16">
      <Reveal>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-brand-50/60 p-8 text-center sm:p-12 dark:border-slate-800 dark:from-slate-900/60 dark:to-brand-500/5">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Contact
          </p>
          <h2 className="mx-auto mt-2 max-w-xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Open to internships and early-career software engineering roles.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            The fastest way to reach me is email — I try to reply within a day or two.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition-colors hover:bg-brand-700"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-400"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Résumé
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400">
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
