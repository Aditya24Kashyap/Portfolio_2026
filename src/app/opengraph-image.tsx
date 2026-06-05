import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Aditya Kashyap — Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  try {
    const imageData = await readFile(join(process.cwd(), 'public/og-image.png'))
    return new Response(imageData, {
      headers: { 'Content-Type': 'image/png' },
    })
  } catch {
    return new ImageResponse(
      (
        <div
          style={{
            background: '#fdfff4',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '80px',
            fontFamily: 'system-ui',
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 600, color: '#111', marginBottom: 16 }}>
            Aditya Kashyap
          </div>
          <div style={{ fontSize: 28, color: '#555', marginBottom: 24 }}>
            Software Engineer · C++ · Full Stack · MSIT Delhi &apos;26
          </div>
          <div style={{ fontSize: 22, color: '#888' }}>
            300+ LeetCode · Contest Rating 1800+ · Open to SWE Fresher Roles
          </div>
        </div>
      ),
      { ...size }
    )
  }
}
