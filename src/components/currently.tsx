import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { profile } from '@/content/profile'
import { MotionFade } from '@/components/motion-fade'

type Card = {
  eyebrow: string
  role: string
  description: string
  tags: readonly string[]
  href?: string
  repo?: string
}

const CARDS: readonly Card[] = [profile.currently.building, profile.currently.shipping]

export function Currently() {
  return (
    <section
      id="currently"
      className="relative px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="sr-only">Currently</h2>
        <MotionFade
          as="p"
          className="font-mono text-xs uppercase tracking-[0.25em] text-fg-muted"
        >
          Currently
        </MotionFade>

        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {CARDS.map((card, i) => (
            <MotionFade key={card.eyebrow} delay={0.1 + i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-2xl bg-bg-elevated p-8 shadow-[0_1px_0_0_rgba(245,243,238,0.04)_inset] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.6),0_1px_0_0_rgba(245,243,238,0.06)_inset]">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                  {card.eyebrow}
                </p>
                <h3 className="mt-4 text-xl font-medium text-fg">{card.role}</h3>
                <p className="mt-3 text-base leading-relaxed text-fg-muted">
                  {card.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] tracking-tight text-fg-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {(card.href || card.repo) && (
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    {card.href && (
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-fg transition-colors hover:text-fg/80"
                      >
                        Live
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                    {card.repo && (
                      <a
                        href={card.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
                      >
                        <GithubIcon size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  )
}
