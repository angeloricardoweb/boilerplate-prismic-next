'use client'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'

type DropdownHoverProps = {
  title: string
  links: {
    label: string
    href: string
  }[]
  mainRoute: string
}

export function DropdownHover({
  title = 'insira um título',
  links = [
    {
      label: 'link 1',
      href: '/',
    },
    {
      label: 'link 2',
      href: '/',
    },
  ],
  mainRoute,
}: DropdownHoverProps) {
  const pathName = usePathname()

  return (
    <div className="cursor-pointer relative inline-block group">
      <button className={`${pathName.split("/")[1] === mainRoute.split("/")[1] ? "font-bold" : "font-normal"} hover:opacity-70 text-white cursor-pointer translate-y-[6px]`}>
        {title}
      </button>
      <div className=" pt-3">
        <svg
          viewBox="0 0 137 63"
          fill="none"
          className="group-hover:block hidden absolute bottom-0 w-6 translate-x-1/2 right-1/2 shadow-2xl translate-y-[2px]"
        >
          <path d="M68.5 0L136.483 62.25H0.517006L68.5 0Z" fill="white" />
        </svg>
        <div className="p-5 group-hover:block hidden absolute bg-white z-10 min-w-[160px] rounded-md py-2 shadow-2xl translate-x-1/2 right-1/2 ">
          {links.map((link: any, index: any) => (
            <Link href={link.href} passHref key={index}>
              <span className="block py-1 text-zinc-500 hover:underline">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
