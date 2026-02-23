import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import MDXContent from './MDXContent'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | undefined> {
  const { slug } = await params

  const post = allPosts.find(
    (post) => post._raw.flattenedPath === slug
  )

  if (!post) return

  const { title, description, date, url } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `${WEBSITE_HOST_URL}/posts/${url}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/posts/${url}`,
    },
  }
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link href={href as string}>{children}</Link>
  ),
  Image: (props) => (
    <NextImage className="rounded-lg" {...props} />
  ),
}

export default async function PostLayout({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = allPosts.find(
    (post) => post._raw.flattenedPath === slug
  )

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <time
        className="my-4 block text-sm text-zinc-400"
        dateTime={post.date}
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <article className="prose dark:prose-invert lg:prose-xl mx-auto">
        <MDXContent code={post.body.code} />
      </article>    </div>
  )
}