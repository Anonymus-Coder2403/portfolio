import { profile } from '@/content/profile'
import { SectionHeader } from '@/components/section-header'
import { MotionFade } from '@/components/motion-fade'

const skillCategories = [
  { label: 'Languages', skills: profile.skills.languages },
  { label: 'AI / ML', skills: profile.skills.aiMl },
  { label: 'Backend', skills: profile.skills.backend },
  { label: 'Data', skills: profile.skills.data },
  { label: 'Infrastructure', skills: profile.skills.infra },
]

export function SkillsGrid() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeader title="Skills" />

      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <MotionFade key={category.label} delay={i * 0.07}>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[--color-text-muted]">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[--color-border-subtle] bg-[--color-surface] px-3 py-1.5 text-sm text-[--color-text-secondary] transition-colors hover:border-[--color-border] hover:text-[--color-text-primary]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </MotionFade>
        ))}
      </div>
    </section>
  )
}
