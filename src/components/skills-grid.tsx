import { profile } from '@/content/profile'
import { SectionHeader } from '@/components/section-header'
import { MotionFade } from '@/components/motion-fade'

const skillCategories = [
  { label: 'Languages',      skills: profile.skills.languages },
  { label: 'AI / ML',        skills: profile.skills.aiMl      },
  { label: 'Backend',        skills: profile.skills.backend    },
  { label: 'Databases',      skills: profile.skills.data       },
  { label: 'Infrastructure', skills: profile.skills.infra      },
]

export function SkillsGrid() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeader title="Skills" heading="Tools I work with." />

      <ul className="mt-8 divide-y divide-border md:mt-12">
        {skillCategories.map((category, i) => (
          <MotionFade key={category.label} delay={i * 0.07}>
            <li className="flex flex-col gap-4 py-6 md:flex-row md:gap-10 md:py-7">
              <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted md:w-40 md:pt-1.5 md:text-sm md:normal-case md:tracking-[0.12em]">
                {category.label}
              </p>
              <ul className="flex flex-1 flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-bg-elevated px-3 py-1.5 text-sm text-fg transition-colors hover:bg-fg/[0.08]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          </MotionFade>
        ))}
      </ul>

    </section>
  )
}
