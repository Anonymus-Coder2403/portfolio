'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { GithubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/projects'

const MAX_TAGS = 6

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, tagline, year, role, cardRole, tags, highlights, hasDeepDive, github, linkedin } =
    project

  const [chipsExpanded, setChipsExpanded] = useState(false)
  const reduceMotion = useReducedMotion()

  const roleLabel = cardRole ?? role
  const overflow = Math.max(tags.length - MAX_TAGS, 0)
  const visibleTags = chipsExpanded ? tags : tags.slice(0, MAX_TAGS)
  const deepDiveHref = `/projects/${slug}`

  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-bg-elevated p-7 shadow-[0_1px_0_0_rgba(245,243,238,0.04)_inset] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65),0_0_0_1px_rgba(245,243,238,0.06)_inset]">
      {(year || roleLabel) && (
        <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-fg-muted">
          {year && <span className="shrink-0">{year}</span>}
          {year && roleLabel && (
            <span aria-hidden="true" className="shrink-0 text-fg-subtle">
              ·
            </span>
          )}
          {roleLabel && <span className="line-clamp-1 break-words">{roleLabel}</span>}
        </div>
      )}

      <h3 className="mt-5 text-xl font-medium tracking-[-0.01em] text-fg transition-colors group-hover:text-accent">
        {hasDeepDive ? (
          <Link
            href={deepDiveHref}
            className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-fg/40"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>

      <p className="mt-3 flex-1 text-base leading-relaxed text-fg-muted">{tagline}</p>

      {highlights && highlights.length > 0 && (
        <ul className="mt-5 space-y-2 text-sm leading-snug text-fg-muted">
          {highlights.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden="true" className="shrink-0 text-fg-subtle">
                •
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-6 flex flex-wrap gap-2">
        {visibleTags.map((tag, i) => {
          const isReveal = i >= MAX_TAGS
          return (
            <motion.li
              key={tag}
              initial={isReveal ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.18, ease: 'easeOut' }
              }
              className="rounded-full bg-bg px-2.5 py-1 font-mono text-[11px] tracking-tight text-fg-muted transition-colors duration-300 group-hover:bg-fg/[0.06]"
            >
              {tag}
            </motion.li>
          )
        })}
        {!chipsExpanded && overflow > 0 && (
          <li className="relative z-10">
            <button
              type="button"
              aria-label={`Show ${overflow} more stack items`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setChipsExpanded(true)
              }}
              className="cursor-pointer rounded-full bg-bg px-2.5 py-1 font-mono text-[11px] tracking-tight text-fg-muted transition-colors hover:bg-fg/[0.08] hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated"
            >
              +{overflow} more
            </button>
          </li>
        )}
      </ul>

      {(hasDeepDive || github || linkedin) && (
        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {hasDeepDive && (
            <Link
              href={deepDiveHref}
              className="inline-flex items-center gap-1 text-fg transition-colors hover:text-fg/80"
            >
              Case study
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
            >
              View project
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}
