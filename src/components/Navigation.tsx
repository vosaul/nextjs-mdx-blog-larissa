import Link from 'next/link'
import navigation from '@/_data/navigation.json'

export function Navigation() {
  return (
    <nav className='flex gap-6 flex-col md:flex-row'>
      {navigation.map(({title, link}, index) => {
      return (
      <Link href={link} className="nav-link" key={index}>
        {title}
      </Link>
      )
     })
    }
    </nav>
  )
}
