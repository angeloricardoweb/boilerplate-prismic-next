/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { client } from '@/services/prismicClient'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type DinamicSubmenu = {
  uid: string
  title: string
}

type DropdownHoverProps = {
  title: string
  links?: {
    label: string
    href: string
  }[]
  mainRoute: string
  dinamic_submenu_document_type?: string
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
  dinamic_submenu_document_type,
}: DropdownHoverProps) {
  const pathName = usePathname()
  const [dinamicSubmenu, setDinamicSubmenu] = useState<DinamicSubmenu[]>([])

  async function getDinamicSubmenu() {
    const docs: any = await client.getAllByType(dinamic_submenu_document_type as any)
    setDinamicSubmenu(docs.map((doc: any) => ({ uid: doc.uid, title: doc.data.titulo })))
  }

  useEffect(() => {
    if (dinamic_submenu_document_type) {
      getDinamicSubmenu()
    }

  }, [dinamic_submenu_document_type])

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
        {
          dinamic_submenu_document_type ?
            <div className="p-5 group-hover:block hidden absolute bg-white z-10 min-w-[160px] rounded-md py-2 shadow-2xl translate-x-1/2 right-1/2 ">
              {dinamicSubmenu.map((doc) => (
                <Link href={`${mainRoute}/${doc.uid}`} passHref key={doc.uid}>
                  <span className="block py-1 text-zinc-500 hover:underline">
                    {doc.title}
                  </span>
                </Link>
              ))}
            </div>
            :
            <div className="p-5 group-hover:block hidden absolute bg-white z-10 min-w-[160px] rounded-md py-2 shadow-2xl translate-x-1/2 right-1/2 ">
              {links.map((link: any, index: any) => (
                <Link href={link.href} passHref key={index}>
                  <span className="block py-1 text-zinc-500 hover:underline">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
        }
      </div>
    </div>
  )
}
