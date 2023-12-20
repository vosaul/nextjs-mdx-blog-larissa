import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
export function PostCard(post: Post) {
  return (
    <>
      {post.image ? (
        <article className="flex flex-col justify-between border border-solid rounded-lg w-[300px] ">
            <Image
              className='block self-start'
              src={post.image}
              alt='image'
              width={300}
              height={200}
            />
            <div className="p-4 self-end">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date}>
                  {format(parseISO(post.date), 'dd.MM.yyyy')}
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6">
                <Link className="link" href={post.url}>
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6">
                {post.description}
              </p>
            </div>
        </article>
      ) : (
        <article className="flex flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'dd.MM.yyyy')}
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
        </article>
      )}
    </>
  )
}
