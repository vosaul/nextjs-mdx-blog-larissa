import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { PictureGrid } from '@/components/PfGrid'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-7">
        <h1>Moї роботи</h1>

        <Button asChild>
          <a href="https://github.com/ChangoMan/nextjs-mdx-blog">
            <Github className="mr-1" /> Get the source code!
          </a>
        </Button>
        <hr/>
        <PictureGrid />
      </div>

      <div className="mt-16">
        <h2>From the blog</h2>
        <p className="mt-2 leading-8">
          Blog posts are written with MDX and processed through Contentlayer.
        </p>
      </div>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
