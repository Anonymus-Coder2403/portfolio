import { profile } from '@/content/profile'
import { SectionHeader } from '@/components/section-header'
import { MotionFade } from '@/components/motion-fade'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeader title="Experience" />

      <div className="relative space-y-0">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-8 w-px bg-[--color-border-subtle] hidden sm:block" />

        {profile.experience.map((entry, i) => (
          <MotionFade key={entry.company} delay={i * 0.1}>
            <div className="relative sm:pl-10">
              {/* Dot */}
              <div className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-[--color-accent] bg-[--color-background] sm:block" />

              <div className="mb-12 rounded-xl border border-[--color-border-subtle] bg-[--color-surface] p-6 hover:border-[--color-border] transition-colors">
                <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-[--color-text-primary]">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-[--color-accent]">{entry.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[--color-text-muted]">
                      {entry.period}
                    </span>
                    {entry.location && (
                      <p className="text-xs text-[--color-text-muted]">
                        {entry.location}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {entry.highlights.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-[--color-text-secondary]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--color-text-muted]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionFade>
        ))}
      </div>
    </section>
  )
}
