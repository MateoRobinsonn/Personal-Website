import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and Tailwind CSS.
        </p>
        <a
          href="https://github.com/MateoRobinsonn/Personal-Website"
          target="_blank"
          rel="noreferrer"
          className="font-mono transition-colors hover:text-brand-600 dark:hover:text-brand-400"
        >
          View source
        </a>
      </div>
    </footer>
  )
}
