import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { VideoGrid } from '@/components/VideoGrid'

const meta = {
  title: 'Відео',
  description: 'Трохи відео з YouTube',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function Video() {
  return (
    <div className="space-y-7">
      <VideoGrid />
    </div>
  )
}
