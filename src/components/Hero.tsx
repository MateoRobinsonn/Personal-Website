import { profile } from '../data/resume'
import { ArrowDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-20 sm:pt-28">
      {/* Soft, static gradient glow — no animation loop, cheap to render. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl"
      >
        <div className="h-72 w-[42rem] rounded-full bg-gradient-to-tr from-brand-400/30 via-brand-500/20 to-purple-400/20 dark:from-brand-500/20 dark:via-brand-600/15 dark:to-purple-500/15" />
      </div>

      <div className="mx-auto max-w-5xl">
        <p className="animate-fade-up font-mono text-sm text-brand-600 opacity-0 dark:text-brand-400">
          Hi, I&apos;m {profile.name.split(' ')[0]} — {profile.role}
        </p>

        <h1
          className="animate-fade-up mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 opacity-0 sm:text-5xl dark:text-white"
          style={{ animationDelay: '80ms' }}
        >
          I build reliable full-stack software and I&apos;m looking for my next SWE role.
        </h1>

        <p
          className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 opacity-0 dark:text-slate-400"
          style={{ animationDelay: '160ms' }}
        >
          {profile.tagline} I care about clean architecture, dependable systems, and shipping things
          real users actually use.
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 opacity-0"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition-colors hover:bg-brand-700"
          >
            View Projects
            <ArrowDownIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-400"
          >
            <DownloadIcon className="h-4 w-4" />
            Resume
          </a>

          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
