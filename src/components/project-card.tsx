import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-[--color-border-subtle] bg-[--color-surface] p-6 transition-all hover:border-[--color-border] hover:bg-[--color-surface-alt]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="font-semibold text-[--color-text-primary] group-hover:text-[--color-accent] transition-colors">
          {project.title}
        </h3>
        {project.repo && (
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md p-1.5 text-[--color-text-muted] transition-colors hover:text-[--color-text-primary]"
            aria-label={`${project.title} on GitHub`}
          >
            <GithubIcon size={16} />
          </Link>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-[--color-text-secondary]">
        {project.tagline}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[--color-accent-muted] px-2.5 py-0.5 text-xs text-[--color-accent]"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-xs text-[--color-text-muted] transition-colors hover:text-[--color-accent]"
      >
        Read more
        <ArrowRight size={12} />
      </Link>
    </article>
  )
}
