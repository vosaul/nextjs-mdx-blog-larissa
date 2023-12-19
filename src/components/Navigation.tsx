'use client'
import Link from 'next/link'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navigation from '@/_data/navigation.json'

export function Navigation() {
  const [nav, setNav] = useState(false);
  return (
    <div className='navBar'>
      <ul className="hidden md:flex">
        {navigation.map(({ title, link }) => (
          <li
            key={title}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-slate-700 dark:text-slate-100 hover:scale-105 hover:bg-slate-100 dark:hover:bg-slate-700 duration-200 link-underline"
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-slate-700 dark:text-slate-100 md:hidden"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {nav && (<nav
        onClick={() => setNav(!nav)}
        className='flex gap-2 flex-col md:flex-row absolute top-20 md:relative md:top-0 bg-white dark:bg-black w-full left-0 right-0 pb-10'
      >
        {navigation.map(({ title, link }, index) => {
          return (
            <Link href={link} className="nav-link" key={index}>
              {title}
            </Link>
          )
        })
        }
      </nav>)}
    </div>
  )
}
