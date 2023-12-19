import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import './global.css'

const meta = {
  title: 'Лариса Демянишина - мисткиня',
  description:
    'Лариса Демянишина, мисткиня, художниця, викладачка',
  image: `${WEBSITE_HOST_URL}/images/author/01.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Larissa',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'uk',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-4">
            <Container>
              <div className="flex items-center justify-between py-6">
                <Link href={'/'}>
                  <Image
                    src={'/images/logo4.png'}
                    alt='Logo'
                    width={150}
                    height={30}
                  />
                </Link>
                <Navigation />
                <ThemeSwitch />
              </div>
            </Container>
          </header>
          <main>
            <Container>{children}</Container>
          </main>
          <footer className="py-16">
            <Container>
              <p className='text-center'>
                Built by NextJS and Tailwind.css
              </p>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
