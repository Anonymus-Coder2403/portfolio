import type { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()

  // Google ignores changefreq and priority. lastmod is omitted rather than
  // stamped with build time, which Google discounts as unverifiable.
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}/`,
  }))

  return [
    { url: `${SITE_URL}/` },
    ...projectRoutes,
  ]
}
