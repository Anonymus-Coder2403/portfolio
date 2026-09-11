import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/content/profile'
import { MotionFade } from '@/components/motion-fade'

export function ExperienceTimeline() {
  const entries = profile.experience

  return (
    <section id="experience" className="px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <MotionFade>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-muted">
            Experience
          </p>
          <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.01em] text-fg">
            Where I&apos;ve worked.
          </h2>
        </MotionFade>

        <ol className="relative mt-8 md:mt-12">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-2 top-2 w-px bg-border md:left-[10rem]"
          />

          {entries.map((entry, i) => (
            <MotionFade key={entry.company} delay={0.1 * (i + 1)}>
              <li className={i === entries.length - 1 ? 'pb-0' : 'pb-14 md:pb-16'}>
                <div className="md:grid md:grid-cols-[10rem_1fr] md:gap-12">
                  <p className="pl-10 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted md:pl-0 md:pt-1 md:text-right md:text-sm md:normal-case md:tracking-[0.1em]">
                    {entry.dateRange}
                  </p>

                  <div className="relative mt-3 pl-10 md:mt-0 md:pl-8">
                    <span
                      aria-hidden="true"
                      className="absolute left-[3px] top-1.5 size-2.5 rounded-full bg-fg ring-4 ring-bg md:-left-[1.05rem]"
                    />

                    <h3 className="text-xl font-medium tracking-tight text-fg md:text-2xl">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm text-fg-muted md:text-base">{entry.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted md:text-base">
                      {entry.tagline}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm leading-snug text-fg-muted md:text-base">
                      {entry.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2">
                          <span aria-hidden="true" className="shrink-0 text-fg-subtle">
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {entry.caseStudies.length > 0 && (
                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                        {entry.caseStudies.map((study) => (
                          <Link
                            key={study.href}
                            href={study.href}
                            className="group inline-flex items-center gap-1 text-fg transition-colors hover:text-fg/80"
                          >
                            {study.label}
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </MotionFade>
          ))}
        </ol>
      </div>
    </section>
  )
}
