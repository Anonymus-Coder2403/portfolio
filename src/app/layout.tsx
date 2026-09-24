import type { Metadata } from 'next'
import { Outfit, Geist_Mono } from 'next/font/google'
import { profile } from '@/content/profile'
import 'lenis/dist/lenis.css'
import './globals.css'
import { SITE_ORIGIN, SITE_URL } from '@/lib/site'
import { SmoothScroll } from '@/components/smooth-scroll'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — AI Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: 'Applied AI engineer specialising in production agentic systems with Google ADK, Gemini, and RAG. Currently at PayNearby, Bengaluru.',
  keywords: ['AI Engineer', 'Google ADK', 'Agentic AI', 'RAG', 'Gemini', 'LangChain', 'FastAPI', 'Python'],
  authors: [{ name: profile.name }],
  creator: profile.name,
  metadataBase: SITE_ORIGIN,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: `${profile.name} — AI Engineer`,
    description: 'Applied AI engineer specialising in production agentic systems with Google ADK, Gemini, and RAG.',
    siteName: profile.name,
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${profile.name} — AI Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — AI Engineer`,
    description: 'Applied AI engineer specialising in production agentic systems with Google ADK, Gemini, and RAG.',
    images: [`${SITE_URL}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
