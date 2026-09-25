import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-16">
      <Reveal>
        <SectionHeading kicker="About" title="A bit about how I work" />
        <div className="grid gap-6 text-slate-600 sm:grid-cols-2 dark:text-slate-400">
          <p className="leading-relaxed">
            I&apos;m a Computer Science student at the University of Washington who likes taking
            software from a rough idea to something people actually rely on. Recent work spans
            ingestion pipelines for a nonprofit&apos;s internal tooling, a production e-commerce
            storefront, and full-stack apps built from the ground up.
          </p>
          <p className="leading-relaxed">
            I&apos;m most comfortable across the stack — React and Next.js on the front end,
            Node.js/NestJS APIs on the back end, and cloud infrastructure (Cloudflare, Firebase,
            Azure) to tie it together. I&apos;m currently looking for an internship or early-career
            SWE role where I can keep shipping and keep learning.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
