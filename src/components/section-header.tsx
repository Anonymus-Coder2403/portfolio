import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', className)}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
        {title}
      </p>
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.01em] text-fg">
        {title}.
      </h2>
      {subtitle && (
        <p className="mt-3 text-fg-muted">{subtitle}</p>
      )}
    </div>
  )
}
