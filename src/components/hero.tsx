import Link from 'next/link'
import { Mail, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from '@/components/brand-icons'
import { profile } from '@/content/profile'
import { MotionFade } from '@/components/motion-fade'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <MotionFade delay={0}>
        <p className="mb-4 text-sm font-medium tracking-widest text-[--color-accent] uppercase">
          {profile.role} · {profile.education.institution}
        </p>
      </MotionFade>

      <MotionFade delay={0.1}>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-[--color-text-primary] sm:text-7xl">
          {profile.name}
        </h1>
      </MotionFade>

      <MotionFade delay={0.2}>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[--color-text-secondary]">
          {profile.tagline}
        </p>
      </MotionFade>

      <MotionFade delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[--color-border] px-4 py-2 text-sm text-[--color-text-secondary] transition-all hover:border-[--color-accent] hover:text-[--color-text-primary]"
          >
            <GithubIcon size={16} />
            GitHub
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[--color-border] px-4 py-2 text-sm text-[--color-text-secondary] transition-all hover:border-[--color-accent] hover:text-[--color-text-primary]"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-[--color-accent] px-4 py-2 text-sm text-white transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            Email
          </Link>
        </div>
      </MotionFade>

      <MotionFade delay={0.5} className="absolute bottom-10">
        <Link
          href="#experience"
          className="flex flex-col items-center gap-2 text-xs text-[--color-text-muted] transition-colors hover:text-[--color-text-secondary]"
          aria-label="Scroll down"
        >
          <ArrowDown size={16} className="animate-bounce" />
        </Link>
      </MotionFade>
    </section>
  )
}
