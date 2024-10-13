'use client'
import Link from 'next/link'
import Icon from '../Adapters/Icon'
import { useSelectedLayoutSegment } from 'next/navigation'
import { DropdownHover } from './DropdownHover'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'

export default function NavLinks() {
  const segment = useSelectedLayoutSegment()
  const { stringData } = useLang()

  const navLinks = [
    {
      route: '/',
      name: stringData(langData.Home),
    },
    {
      route: '/sobre-nos',
      name: stringData(langData.About),
    },
    {
      route: '/blog',
      name: 'Blog',
    },
    {
      route: '/contatos',
      name: stringData(langData.Contact),
    },
    {
      route: '/servicos',
      name: stringData(langData.Services),
      dinamic_submenu_document_type: 'servico', // your document needs to have a field called "titulo"
    },
    {
      route: '/submenu',
      name: 'Submenu',
      submenu: [
        {
          label: 'Submenu 1',
          href: '/submenu/submenu1',
        },
        {
          label: 'Submenu 2',
          href: '/submenu/submenu2',
        },
      ],
    },
  ]

  return (
    <>
      {navLinks?.map((link) => {
        if (link.dinamic_submenu_document_type) {
          return (
            <DropdownHover
              key={link.name}
              mainRoute={link.route}
              title={link.name}
              links={link.submenu}
              dinamicSubmenuDocumentType={link.dinamic_submenu_document_type}
            />
          )
        }
        if (link.submenu) {
          return (
            <DropdownHover
              key={link.name}
              mainRoute={link.route}
              title={link.name}
              links={link.submenu}
            />
          )
        }
        return (
          <Link key={link.name} href={link.route}>
            <span
              className={`${segment === link.route.replace('/', '') ? 'font-bold' : 'font-normal'} cursor-pointer text-white hover:opacity-70`}
            >
              {link.name}
            </span>
          </Link>
        )
      })}
      <a href="/" rel="noreferrer" target="_blank">
        <Icon icon="mdi:facebook" className="text-white" />
      </a>
      <a href="/" rel="noreferrer" target="_blank">
        <Icon icon="mdi:instagram" className="text-white" />
      </a>
    </>
  )
}
