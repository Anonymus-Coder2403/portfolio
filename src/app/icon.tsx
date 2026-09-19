import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0c0c0e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          border: '1px solid #6d6dff',
        }}
      >
        <span
          style={{
            color: '#6d6dff',
            fontSize: 18,
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
