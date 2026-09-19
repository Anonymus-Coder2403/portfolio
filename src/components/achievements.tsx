import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/content/profile'
import { MotionFade } from '@/components/motion-fade'

export function Achievements() {
  return (
    <section
      id="achievements"
      className="px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <MotionFade>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-muted">
            Achievements
          </p>
          <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.01em] text-fg">
            What I&apos;ve won and spoken at.
          </h2>
        </MotionFade>

        <ul className="mt-8 divide-y divide-border md:mt-12">
          {profile.achievements.map((a, i) => (
            <MotionFade key={a.event} delay={i * 0.07}>
              <li className="flex flex-col gap-2 py-6 md:flex-row md:gap-10 md:py-7">
                <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted md:w-48 md:pt-1 md:text-sm md:normal-case md:tracking-[0.12em]">
                  {a.placing}
                </p>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-fg md:text-lg">{a.event}</h3>
                  {a.detail && (
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">{a.detail}</p>
                  )}
                  {a.href && (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-3 inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      View post
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </li>
            </MotionFade>
          ))}
        </ul>
      </div>
    </section>
  )
}
