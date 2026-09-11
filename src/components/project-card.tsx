import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-bg-elevated p-7 shadow-[0_1px_0_0_rgba(245,243,238,0.04)_inset] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65),0_0_0_1px_rgba(245,243,238,0.06)_inset]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-xl font-medium tracking-[-0.01em] text-fg transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        {project.repo && (
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full p-1.5 text-fg-muted transition-colors hover:text-fg"
            aria-label={`${project.title} on GitHub`}
          >
            <GithubIcon size={16} />
          </Link>
        )}
      </div>

      <p className="mb-5 flex-1 text-base leading-relaxed text-fg-muted">
        {project.tagline}
      </p>

      <ul className="mb-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-bg px-2.5 py-1 font-mono text-[11px] tracking-tight text-fg-muted transition-colors duration-300 group-hover:bg-fg/[0.06]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-xs text-fg-muted transition-colors hover:text-fg"
      >
        Read more
        <ArrowRight size={12} />
      </Link>
    </article>
  )
}
