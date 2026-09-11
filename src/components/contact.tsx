import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from '@/components/brand-icons'
import { profile } from '@/content/profile'
import { SectionHeader } from '@/components/section-header'
import { MotionFade } from '@/components/motion-fade'

const links = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'yashcoder2403',
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Anonymus-Coder2403',
    href: profile.github,
    icon: GithubIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <MotionFade>
        <SectionHeader
          title="Contact"
          subtitle="Open to opportunities in applied AI and software engineering."
        />
      </MotionFade>

      <div className="grid gap-3 sm:grid-cols-3">
        {links.map((link, i) => {
          const Icon = link.icon
          return (
            <MotionFade key={link.label} delay={i * 0.08}>
              <Link
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-4 rounded-2xl bg-bg-elevated p-5 shadow-[0_1px_0_0_rgba(245,243,238,0.04)_inset] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65),0_0_0_1px_rgba(245,243,238,0.06)_inset]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg">
                  <Icon size={18} className="text-fg-muted" />
                </div>
                <div>
                  <p className="font-mono text-xs text-fg-subtle">{link.label}</p>
                  <p className="text-sm font-medium text-fg">{link.value}</p>
                </div>
              </Link>
            </MotionFade>
          )
        })}
      </div>
    </section>
  )
}
