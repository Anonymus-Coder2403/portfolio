import { ImageResponse } from 'next/og'
import { profile } from '@/content/profile'
import { SITE_HOST } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0c0c0e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: '#6d6dff',
          }}
        />

        <p
          style={{
            color: '#6d6dff',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          {profile.role}
        </p>

        <h1
          style={{
            color: '#f0f0f2',
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {profile.name}
        </h1>

        <p
          style={{
            color: '#8e8e9a',
            fontSize: 28,
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          {profile.tagline}
        </p>

        {/* Bottom row */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 100,
            display: 'flex',
            gap: 32,
            color: '#55555f',
            fontSize: 16,
          }}
        >
          <span>{profile.education.institution}</span>
          <span>·</span>
          <span>{SITE_HOST}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
