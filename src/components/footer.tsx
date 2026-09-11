import { profile } from '@/content/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[--color-border-subtle] px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xs text-[--color-text-muted]">
          {profile.name} · {year}
        </p>
        <p className="text-xs text-[--color-text-muted]">
          {profile.education.degree}, {profile.education.institution} ·{' '}
          {profile.education.classOf}
        </p>
      </div>
    </footer>
  )
}
