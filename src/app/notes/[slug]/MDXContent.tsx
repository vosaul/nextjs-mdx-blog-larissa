'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'
import Link from 'next/link'

type Props = {
  code: string
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link href={href as string}>{children}</Link>
  ),
  Image: (props) => (
    <NextImage className="rounded-lg" {...props} />
  ),
}

export default function MDXContent({ code }: Props) {
  const Component = useMDXComponent(code)
  return <Component components={mdxComponents} />
}