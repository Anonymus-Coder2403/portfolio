import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/content/profile'
import { MotionFade } from '@/components/motion-fade'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center px-4 pt-28 pb-20 sm:px-6 md:px-10 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <MotionFade>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-fg-muted">
            {profile.name} · {profile.role}
          </p>
        </MotionFade>

        <MotionFade delay={0.1}>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-fg">
            {profile.heroHeadline}
          </h1>
        </MotionFade>

        <MotionFade delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {profile.tagline}
          </p>
        </MotionFade>

        <MotionFade delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              View work
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 px-2 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 px-2 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              LinkedIn
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </MotionFade>

        <MotionFade delay={0.5}>
          <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-fg-muted">
            {profile.heroMetrics.map((metric, i) => (
              <li key={metric} className="flex items-center gap-3 whitespace-nowrap">
                {i > 0 && (
                  <span aria-hidden="true" className="text-fg-subtle">
                    ·
                  </span>
                )}
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </MotionFade>
      </div>
    </section>
  )
}
