import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Next writes RSC payload dumps beside every page: full content
      // duplicates of the HTML, published under Allow: /.
      disallow: ['/*__next*', '/*index.txt$'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
