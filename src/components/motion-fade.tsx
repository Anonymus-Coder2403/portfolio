'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import { type ReactNode } from 'react'

// Rendering as the real tag rather than always wrapping in a div keeps the
// markup semantic, and lets divide-y and similar sibling selectors work.
type MotionTag =
  | 'div'
  | 'section'
  | 'article'
  | 'header'
  | 'footer'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p'
  | 'span'
  | 'ul'
  | 'ol'
  | 'li'

interface MotionFadeProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: MotionTag
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function MotionFade({
  children,
  className,
  delay = 0,
  as = 'div',
}: MotionFadeProps) {
  const Tag = motion[as]
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <Tag className={className} initial={false} animate="visible" variants={variants}>
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      variants={variants}
    >
      {children}
    </Tag>
  )
}
