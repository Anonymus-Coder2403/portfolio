'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react'
import { cn } from '@/lib/cn'
import { profile } from '@/content/profile'

type NavLink = { label: string; href: string }

const SECTIONS: NavLink[] = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects',   href: '/#projects'   },
  { label: 'Skills',     href: '/#skills'     },
]

const CONTACT_HREF = '/#contact'

const EASE = [0.22, 1, 0.36, 1] as const

const menuListVariants: Variants = {
  hidden:  { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

const menuItemVariants: Variants = {
  hidden:  { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE } },
}

export function Nav() {
  const [scrolled, setScrolled]         = useState(false)
  const [open, setOpen]                 = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()
  const headerRef    = useRef<HTMLElement>(null)
  const pathname     = usePathname()
  const isHome       = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) { setActiveSection(null); return }

    const ids      = SECTIONS.map((s) => s.href.replace('/#', ''))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        setActiveSection(ids.find((id) => visible.has(id)) ?? null)
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node | null
      if (target && headerRef.current && !headerRef.current.contains(target)) setOpen(false)
    }
    const mq   = window.matchMedia('(min-width: 768px)')
    const onMq = () => { if (mq.matches) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  const morphTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: 'easeOut' as const }

  const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false)
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const initials = profile.name.split(' ').map((w) => w[0]).join('').toLowerCase()

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-40 flex flex-col items-center px-4 pt-4"
    >
      <motion.nav
        aria-label="Primary"
        initial={false}
        animate={{
          paddingTop:    scrolled ? 8  : 12,
          paddingBottom: scrolled ? 8  : 12,
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 220, damping: 28 }
        }
        className={cn(
          'flex items-center gap-6 rounded-full border border-border bg-bg-elevated/70 px-3 backdrop-blur-xl',
          'transition-shadow duration-300 ease-out',
          scrolled && 'shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]',
        )}
      >
        <Link
          href="/"
          onClick={onLogoClick}
          aria-label={`${profile.name}, back to top`}
          className="cursor-pointer px-3 font-mono text-sm font-medium tracking-tight text-fg transition-opacity hover:opacity-80"
        >
          {initials}.
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((link) => {
            const sectionId = link.href.replace('/#', '')
            const isActive  = activeSection === sectionId
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative block rounded-full px-3 py-1.5 text-sm transition-colors',
                    isActive ? 'text-fg' : 'text-fg-muted hover:text-fg',
                  )}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.span
                    aria-hidden="true"
                    layoutId={reduceMotion ? undefined : 'nav-active-dot'}
                    className="pointer-events-none absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-fg"
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: EASE }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <Link
          href={CONTACT_HREF}
          className="hidden rounded-full bg-fg px-5 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent md:inline-flex"
        >
          Get in touch
        </Link>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            'relative inline-flex size-9 items-center justify-center rounded-full text-fg',
            'transition-colors hover:bg-fg/5',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/40',
            'md:hidden',
          )}
        >
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-[12px] h-[1.5px] w-4 origin-center -translate-x-1/2 rounded-full bg-fg"
            initial={false}
            animate={{ y: open ? 6 : 0, rotate: open ? 45 : 0 }}
            transition={morphTransition}
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-[18px] h-[1.5px] w-4 -translate-x-1/2 rounded-full bg-fg"
            initial={false}
            animate={{ opacity: open ? 0 : 1 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.18 }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-[24px] h-[1.5px] w-4 origin-center -translate-x-1/2 rounded-full bg-fg"
            initial={false}
            animate={{ y: open ? -6 : 0, rotate: open ? -45 : 0 }}
            transition={morphTransition}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: EASE }}
            className={cn(
              'mt-2 w-[min(calc(100vw-2rem),22rem)] overflow-hidden rounded-2xl',
              'border border-border bg-bg-elevated/85 backdrop-blur-xl',
              'shadow-[0_18px_50px_-20px_rgba(0,0,0,0.6)]',
              'md:hidden',
            )}
          >
            <motion.ul
              variants={reduceMotion ? undefined : menuListVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col gap-1 p-2"
            >
              {SECTIONS.map((link) => {
                const sectionId = link.href.replace('/#', '')
                const isActive  = activeSection === sectionId
                return (
                  <motion.li key={link.href} variants={reduceMotion ? undefined : menuItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-3 text-base transition-colors hover:bg-fg/5',
                        isActive ? 'text-fg' : 'text-fg-muted hover:text-fg',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'size-1 shrink-0 rounded-full bg-fg transition-opacity duration-200 ease-out',
                          isActive ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                      {link.label}
                    </Link>
                  </motion.li>
                )
              })}
              <motion.li
                variants={reduceMotion ? undefined : menuItemVariants}
                className="mt-1 px-2 pb-1"
              >
                <Link
                  href={CONTACT_HREF}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition-colors hover:bg-accent"
                >
                  Get in touch
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
