import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { profile } from '@/content/profile'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
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
  metadataBase: new URL('https://yashkumar.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yashkumar.dev',
    title: `${profile.name} — AI Engineer`,
    description: 'Applied AI engineer specialising in production agentic systems with Google ADK, Gemini, and RAG.',
    siteName: profile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — AI Engineer`,
    description: 'Applied AI engineer specialising in production agentic systems with Google ADK, Gemini, and RAG.',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
