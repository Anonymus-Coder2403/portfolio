'use client'

import { ReactLenis } from 'lenis/react'
import { useReducedMotion } from 'motion/react'
import { type ReactNode } from 'react'

// The site this one is modelled on runs Lenis; native scroll reads noticeably
// stiffer beside it. Pairs with scroll-behavior being left at auto in
// globals.css, since Lenis and CSS smooth scrolling both claim anchor jumps.
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  // Interpolated scrolling is the thing reduced motion is asking us not to do,
  // so skip Lenis entirely rather than tuning it down.
  if (reduceMotion) return <>{children}</>

  // anchors defaults to false, so without it nav links jump instantly once
  // scroll-behavior: smooth is gone.
  return (
    <ReactLenis root options={{ anchors: true }}>
      {children}
    </ReactLenis>
  )
}
