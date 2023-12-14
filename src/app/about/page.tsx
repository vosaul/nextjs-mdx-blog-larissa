import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Image from 'next/image'
import avatar from '/public/images/author/01.png'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
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

export default function About() {
  return (
    <div className="space-y-7">
      <h1>About</h1>
      <p>Welcome to the about page</p>
      <Image src={avatar} alt='author' width={900} height={600} />
    </div>
  )
}
