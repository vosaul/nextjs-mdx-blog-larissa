import { PictureGrid } from '@/components/PortfolioGrid'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-7">
        <h1>Moї роботи</h1>
        <PictureGrid />
      </div>

    </div>
  )
}
