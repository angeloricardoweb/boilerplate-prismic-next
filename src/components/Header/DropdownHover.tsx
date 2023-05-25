import Link from 'next/link'
import React from 'react'

type DropdownHoverProps = {
  title: string
  links: {
    label: string
    href: string
  }[]
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
}: DropdownHoverProps) {
  return (
    <div className="cursor-pointer relative inline-block group ">
      <button className="px-2 cursor-pointer text-white hover:text-white transition-colors font-semibold lg:text-sm text-lg mb-4 lg:mb-0 translate-y-[6px]">
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
        <div className="group-hover:block hidden absolute bg-white z-10 min-w-[160px] rounded-md py-2 shadow-2xl translate-x-1/2 right-1/2 ">
          {links.map((link: any, index: any) => (
            <Link href={link.href} passHref key={index}>
              <a className="block py-1 font-bold text-blue-400">{link.label}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
