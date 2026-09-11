'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet } from '@/components/ui/sheet'
import { cn } from '@/lib/cn'
import { profile } from '@/content/profile'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-30 w-full transition-all duration-300',
          scrolled
            ? 'border-b border-[--color-border-subtle] bg-[--color-background]/90 backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold text-[--color-text-primary] transition-opacity hover:opacity-70"
          >
            {profile.name}
          </Link>

          {/* Desktop */}
          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-md p-1.5 text-[--color-text-secondary] hover:text-[--color-text-primary] sm:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <Sheet open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <nav className="mt-10 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-[--color-text-secondary] transition-colors hover:bg-[--color-surface-alt] hover:text-[--color-text-primary]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Sheet>
    </>
  )
}
