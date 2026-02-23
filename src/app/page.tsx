import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Image from 'next/image'
import avatar from '/public/images/author/01.jpg'

const meta = {
  title: 'Про мене',
  description: 'Лариса Демянишина, художниця',
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
      <h1>Привіт, я Лариса Демянишина, художниця</h1>
      <div className="grid gap-9 lg:grid-cols-2">
        <Image src={avatar} alt='author' width={800} height={600} className='my-6' loading='eager'/>
        <div className="prose dark:text-slate-100">
          <p>Народилася 09.07.1965, село Селище Сокирянського району Чернівецької області.</p>
          <ul>
            <li>живописець і графік. В 1991 році закінчила Одеський педагогічний інститут ім. Ушинського за фахом — образотворче мистецтво та креслення. </li>
            <li>Членкиня творчого об’єднання «Новація» (м. Южне Одеської області, 2005). </li>
            <li>Працювала 1991–2000 у міській школі мистецтв. Відтоді – на твор. роботі. </li>
            <li>Від 2004 – голова відділення т-ва «Просііта» у м. Южне. </li>
            <li>З 2012 членкиня одеської організації Національної спілки художників України</li>
            <li>Учасниця мистецьких виставок, вітчизняних та закордонних пленерів від 1997 року. Персональні виставки – в Одесі (2000, 2003–06), Фленсбурзі (Німеччина, 2004), Львові (2008). </li>
          </ul>
        <cite className='pl-5 border-l-red-300 border-solid border-l-4 block '>&quot;У пейзажах і натюрмортах Лариса Демянишина створює феєрію поєднань головних складових українського Космосу: Сонця, Степу, Моря і Небокраю. 
          <br/>
          У вишуканих композиціях на шовку досягла малярської невимушеності та імпровізаційності. Виконала серію виразних художньо-графічних оформлень книжок. Для творчої манери Лариси Семенівни характерна пружно-барокова система ліній, що природно поєднує багатозначність і символістичність класичної вільної графіки з емоційною «кучерявістю» нар. малювань.&quot;
          <br/><br/>
          <b>Володимир Островський, мистецтвознавець</b>
        </cite>
        </div>
      </div>
      <div className="prose">
      </div>
    </div>
  )
}
