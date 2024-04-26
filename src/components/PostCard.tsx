import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
export function PostCard(post: Post) {
  return (
    <>
      {post.image ? (
        <article className="flex flex-col justify-start border border-solid rounded-lg hover:border-gray-300 hover:shadow-md shadow-gray-400 w-[300px] hover:bg-orange-50 ">
          <Link className="link" href={post.url}>
            <div className="max-h-[200px] overflow-y-hidden">
              <Image
                className='block self-start '
                src={post.image}
                alt='image'
                width={300}
                height={200}
              />
            </div>
            <div className="p-4 self-end">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date}>
                  {format(parseISO(post.date), 'dd.MM.yyyy')}
                </time>
              </div>
              <h2 className="mt-3 text-lg font-semibold leading-6">
                {post.title}
              </h2>
              <p className="mt-5 line-clamp-3 text-sm leading-6">
                {post.description}
              </p>
            </div>
          </Link>

        </article>
      ) : (
        <article className="flex flex-col items-start justify-between">
          <Link className="link" href={post.url}>
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date}>
                {format(parseISO(post.date), 'dd.MM.yyyy')}
              </time>
            </div>
            <div className="group relative">
              <h2 className="mt-3 text-lg font-semibold leading-6">
                <span className="absolute inset-0" />
                {post.title}
              </h2>
              <p className="mt-5 line-clamp-3 text-sm leading-6">
                {post.description}
              </p>
            </div>
          </Link>
        </article>
      )}
    </>
  )
}
