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
    <div className="space-y-7 ">
      <h1>Привіт, я Лариса Дем'янишина, художниця</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <Image src={avatar} alt='author' width={800} height={600} />
        <div className="p-7 prose dark:text-slate-100">
          <p>Народилася 09.07.1965, село Селище Сокирянського району Чернівецької області.</p>
          <ul>
            <li>живописець і графік. Закінчила Одеський педінститут (1991; викл. Чл. твор. об’єдн. «Новація» (м. Южне Одес. обл., 2005). </li>
            <li>Працювала 1991–2000 у міській школі мист-в. Відтоді – на твор. роботі. </li>
            <li>Від 2004 – голова відділ. т-ва «Просііта» у м. Южне. </li>
            <li>Учасниця мист. виставок, вітчизн. та закордон. пленерів від 1997. Персон. – в Одесі (2000, 2003–06), Фленсбурзі (Німеччина, 2004), Львові (2008). </li>
          </ul>
        <cite className='pl-5 border-l-red-300 border-solid border-l-4 block '>"У пейзажах і натюрмортах Лариса Дем'янишина створює феєрію поєднань гол. складових пд.-укр. Космосу: Сонця, Степу, Моря і Небокраю. 
          <br/>
          У вишуканих композиціях на шовку досягла маляр. невимушеності та імпровізаційності. Виконала серію вираз. худож.-графіч. оформлень книжок. Для творчої манери Лариси Семенівни характерна пружно-барокова система ліній, що природно поєднує багатозначність і символістичність класич. вільної графіки з емоц. «кучерявістю» нар. малювань."
          </cite>
        </div>
      </div>
      <div className="prose">
      </div>
    </div>
  )
}
