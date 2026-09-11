import { profile } from '@/content/profile'
import { SectionHeader } from '@/components/section-header'
import { MotionFade } from '@/components/motion-fade'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeader title="Experience" />

      <div className="relative space-y-0">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 left-[7px] top-2 hidden w-px bg-border sm:block"
        />

        {profile.experience.map((entry, i) => (
          <MotionFade key={entry.company} delay={i * 0.1}>
            <div className="relative sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 hidden size-3.5 rounded-full bg-fg ring-4 ring-bg sm:block"
              />

              <div className="mb-10 rounded-2xl bg-bg-elevated p-7 shadow-[0_1px_0_0_rgba(245,243,238,0.04)_inset] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65),0_0_0_1px_rgba(245,243,238,0.06)_inset]">
                <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-medium text-fg">{entry.title}</h3>
                    <p className="mt-0.5 font-mono text-sm text-fg-muted">{entry.company}</p>
                  </div>
                  {entry.period && (
                    <span className="font-mono text-xs text-fg-subtle">{entry.period}</span>
                  )}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {entry.highlights.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                      <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-fg-subtle" />
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
