import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0c0c0e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
        }}
      >
        <span
          style={{
            color: '#6d6dff',
            fontSize: 96,
            fontWeight: 700,
            fontFamily: 'sans-serif',
          }}
        >
          Y
        </span>
      </div>
    ),
    { ...size }
  )
}
