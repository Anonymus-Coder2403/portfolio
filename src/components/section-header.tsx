import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-[--color-text-primary]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-[--color-text-secondary]">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-12 bg-[--color-accent]" />
    </div>
  )
}
