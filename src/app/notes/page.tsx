import { PostCard } from '@/components/PostCard'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <>
      <div className="space-y-7">
        <h1>Нотатки</h1>
        <p>
          Про все потрошки
        </p>
      </div>

      <div 
        className="mt-10 
        flex gap-5 flex-wrap
        justify-center pt-10">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  )
}
