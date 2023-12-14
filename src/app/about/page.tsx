import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Image from 'next/image'
import avatar from '/public/images/author/01.jpg'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <div className="space-y-7">
      <h1>Про мене</h1>
      <Image src={avatar} alt='author' width={900} height={600} />
      <p>(09. 07. 1965, село Селище Сокирянського району Чернівецької області.) – живописець і графік. Закінчила Одеський педшнститут (1991; викл. Чл. твор. об’єдн. «Новація» (м. Южне Одес. обл., 2005). Працювала 1991–2000 у міській школі мист-в. Відтоді – на твор. роботі. Від 2004 – голова відділ. т-ва «Просвіта» у м. Южне. Учасниця мист. виставок, вітчизн. та закордон. пленерів від 1997. Персон. – в Одесі (2000, 2003–06), Фленсбурзі (Німеччина, 2004), Львові (2008). У пейзажах і натюрмортах створює феєрію поєднань гол. складових пд.-укр. Космосу: Сонця, Степу, Моря і Небокраю. У вишуканих композиціях на шовку досягла маляр. невимушеності та імпровізаційності. Виконала серію вираз. худож.-графіч. оформлень книжок. Для твор. манери Д. характерна пружно-барокова система ліній, що природно поєднує багатозначність і символістичність класич. вільної графіки з емоц. «кучерявістю» нар. малювань.
      </p>
    </div>
  )
}
