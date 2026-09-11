import { profile } from '@/content/profile'
import { SectionHeader } from '@/components/section-header'
import { MotionFade } from '@/components/motion-fade'

const skillCategories = [
  { label: 'Languages',      skills: profile.skills.languages },
  { label: 'AI / ML',        skills: profile.skills.aiMl      },
  { label: 'Backend',        skills: profile.skills.backend    },
  { label: 'Data',           skills: profile.skills.data       },
  { label: 'Infrastructure', skills: profile.skills.infra      },
]

export function SkillsGrid() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeader title="Skills" />

      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <MotionFade key={category.label} delay={i * 0.07}>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-bg-elevated px-3 py-1.5 font-mono text-sm text-fg-muted transition-colors hover:text-fg"
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
