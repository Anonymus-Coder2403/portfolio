'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/content/profile'

export function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl border-t border-border pt-8">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="font-mono text-xs text-fg-subtle">
            {profile.name} · {year ?? ''}
          </p>
          <p className="font-mono text-xs text-fg-subtle">
            {profile.education.degree}, {profile.education.institution}
          </p>
        </div>
      </div>
    </footer>
  )
}
