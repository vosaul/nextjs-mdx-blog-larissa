'use client'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
export function PostCard(post: Post) {
  return (
    <div>
      {!post.image ? (
        <article className="flex flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6">
              <Link className="link" href={post.url}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6">
              {post.description}
            </p>
          </div>
        </article>) : (
        <article className="flex flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </div>
          <div className="group relative flex flex-col md:flex-row gap-8">
            <Image 
              src={post.image}
              alt='image'
              width={200}
              height={300}
            />
            <div className="withImage">
              <h3 className="mt-3 text-lg font-semibold leading-6">
                <Link className="link" href={post.url}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6">
                {post.description}
              </p>
            </div>
          </div>
        </article>
      )}
    </div>
  )
}
