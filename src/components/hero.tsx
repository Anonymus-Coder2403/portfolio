import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/content/profile'
import { MotionFade } from '@/components/motion-fade'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center px-6 pt-28 pb-20 md:px-10 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:items-center md:gap-16">
        <div>
        <MotionFade>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-fg">
            {profile.name} · {profile.role}
          </p>
        </MotionFade>

        <MotionFade delay={0.1}>
          <h1 className="mt-6 text-balance text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-fg">
            {profile.heroHeadline}
          </h1>
        </MotionFade>

        <MotionFade delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl">
            {profile.tagline}
          </p>
        </MotionFade>

        <MotionFade delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-fg"
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

        <MotionFade delay={0.5} className="order-first md:order-last">
          <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl bg-bg-elevated md:max-w-none">
            <img
              src="/yash.jpg"
              alt={`${profile.name}, speaking at the Airtribe x Render Ship Room hackathon`}
              width={1400}
              height={933}
              className="size-full object-cover object-center"
            />
          </div>
        </MotionFade>
      </div>
    </section>
  )
}
