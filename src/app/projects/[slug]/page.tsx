import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { getAllProjects, getProjectBySlug } from '@/lib/projects'

import SaathiAIMDX from '@/content/projects/saathi-ai.mdx'
import CricVisionMDX from '@/content/projects/cricvision.mdx'
import AegisMDX from '@/content/projects/aegis.mdx'
import ObservabilityMDX from '@/content/projects/observability-tooling.mdx'

const contentMap: Record<string, React.ComponentType> = {
  'saathi-ai': SaathiAIMDX,
  cricvision: CricVisionMDX,
  aegis: AegisMDX,
  'observability-tooling': ObservabilityMDX,
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const Content = contentMap[slug]
  if (!Content) notFound()

  return (
    <div className="min-h-svh bg-bg">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        <header className="mb-10">
          <h1 className="mb-3 text-3xl font-medium tracking-[-0.02em] text-fg sm:text-4xl">
            {project.title}
          </h1>
          <p className="mb-5 text-lg text-fg-muted">{project.tagline}</p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-elevated px-2.5 py-1 font-mono text-[11px] tracking-tight text-fg-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-fg-muted transition-all hover:border-fg/20 hover:text-fg"
              >
                <GithubIcon size={12} />
                View on GitHub
              </Link>
            )}
          </div>
        </header>

        <div className="prose max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-fg prose-p:text-lg prose-p:leading-relaxed prose-p:text-fg-muted prose-li:text-lg prose-li:text-fg-muted prose-strong:text-fg prose-a:text-fg prose-a:no-underline hover:prose-a:underline prose-code:text-fg-muted prose-hr:border-border">
          <Content />
        </div>
      </div>
    </div>
  )
}
