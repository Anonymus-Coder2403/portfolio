// Injected at build time. No default on purpose: a fallback domain ships
// silently wrong, a missing one fails the build loudly.
const raw = process.env.NEXT_PUBLIC_SITE_URL

if (!raw) {
  throw new Error(
    'NEXT_PUBLIC_SITE_URL is not set. Set it in .env.local for local builds, ' +
      'or as a workflow env value in CI.'
  )
}

export const SITE_URL = raw.replace(/\/$/, '')
export const SITE_ORIGIN = new URL(SITE_URL)
export const SITE_HOST = SITE_ORIGIN.hostname
