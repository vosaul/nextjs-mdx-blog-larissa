import Link from 'next/link'

export function Navigation() {
  return (
    <nav>
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
      <Link href="/notes" className="nav-link">
        Notes
      </Link>
      <Link href="/video" className="nav-link">
        Videos
      </Link>
    </nav>
  )
}
