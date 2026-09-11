import Link from 'next/link'
import { Mail, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from '@/components/brand-icons'
import { profile } from '@/content/profile'
import { MotionFade } from '@/components/motion-fade'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <MotionFade delay={0}>
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.25em] text-fg-muted">
          {profile.role} · {profile.education.institution}
        </p>
      </MotionFade>

      <MotionFade delay={0.1}>
        <h1 className="mb-6 text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-[-0.02em] text-fg">
          {profile.name}
        </h1>
      </MotionFade>

      <MotionFade delay={0.2}>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-fg-muted">
          {profile.tagline}
        </p>
      </MotionFade>

      <MotionFade delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-fg-muted transition-all hover:border-fg/20 hover:text-fg"
          >
            <GithubIcon size={16} />
            GitHub
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-fg-muted transition-all hover:border-fg/20 hover:text-fg"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent"
          >
            <Mail size={16} />
            Email
          </Link>
        </div>
      </MotionFade>

      <MotionFade delay={0.5} className="absolute bottom-10">
        <Link
          href="#experience"
          className="flex flex-col items-center gap-2 text-xs text-fg-subtle transition-colors hover:text-fg-muted"
          aria-label="Scroll down"
        >
          <ArrowDown size={16} className="animate-bounce" />
        </Link>
      </MotionFade>
    </section>
  )
}
