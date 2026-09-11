import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-6xl font-bold text-[--color-text-muted]">404</p>
      <p className="text-[--color-text-secondary]">Page not found.</p>
      <Link
        href="/"
        className="text-sm text-[--color-accent] underline underline-offset-4 hover:opacity-80"
      >
        Back home
      </Link>
    </div>
  )
}
