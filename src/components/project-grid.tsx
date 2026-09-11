import { getAllProjects } from '@/lib/projects'
import { SectionHeader } from '@/components/section-header'
import { ProjectCard } from '@/components/project-card'
import { MotionFade } from '@/components/motion-fade'

export function ProjectGrid() {
  const projects = getAllProjects()

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeader
        title="Projects"
        subtitle="Production and personal projects"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <MotionFade key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </MotionFade>
        ))}
      </div>
    </section>
  )
}
