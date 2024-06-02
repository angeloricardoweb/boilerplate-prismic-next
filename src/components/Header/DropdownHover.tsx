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
  dinamicSubmenuDocumentType?: string
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
  dinamicSubmenuDocumentType,
}: DropdownHoverProps) {
  const pathName = usePathname()
  const [dinamicSubmenu, setDinamicSubmenu] = useState<DinamicSubmenu[]>([])

  async function getDinamicSubmenu() {
    const docs: any = await client.getAllByType(
      dinamicSubmenuDocumentType as any,
    )
    setDinamicSubmenu(
      docs.map((doc: any) => ({ uid: doc.uid, title: doc.data.titulo })),
    )
  }

  useEffect(() => {
    if (dinamicSubmenuDocumentType) {
      getDinamicSubmenu()
    }
  }, [dinamicSubmenuDocumentType])

  return (
    <div className="group relative inline-block cursor-pointer">
      <button
        className={`${pathName.split('/')[1] === mainRoute.split('/')[1] ? 'font-bold' : 'font-normal'} translate-y-[6px] cursor-pointer text-white hover:opacity-70`}
      >
        {title}
      </button>
      <div className="pt-3">
        <svg
          viewBox="0 0 137 63"
          fill="none"
          className="absolute bottom-0 right-1/2 hidden w-6 translate-x-1/2 translate-y-[2px] shadow-2xl group-hover:block"
        >
          <path d="M68.5 0L136.483 62.25H0.517006L68.5 0Z" fill="white" />
        </svg>
        {dinamicSubmenuDocumentType ? (
          <div className="absolute right-1/2 z-10 hidden min-w-[160px] translate-x-1/2 rounded-md bg-white p-5 py-2 shadow-2xl group-hover:block">
            {dinamicSubmenu.map((doc) => (
              <Link href={`${mainRoute}/${doc.uid}`} passHref key={doc.uid}>
                <span className="block py-1 text-zinc-500 hover:underline">
                  {doc.title}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="absolute right-1/2 z-10 hidden min-w-[160px] translate-x-1/2 rounded-md bg-white p-5 py-2 shadow-2xl group-hover:block">
            {links.map((link: any, index: any) => (
              <Link href={link.href} passHref key={index}>
                <span className="block py-1 text-zinc-500 hover:underline">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
