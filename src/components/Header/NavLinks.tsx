'use client'
import Link from 'next/link'
import Icon from '../Adapters/Icon'
import { useSelectedLayoutSegment } from 'next/navigation'
import { DropdownHover } from './DropdownHover'

export const navLinks = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/sobre-nos',
    name: 'Sobre Nós',
  },
  {
    route: '/blog',
    name: 'Blog',
  },
  {
    route: '/contatos',
    name: 'Contatos',
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
      }
    ]
  },
]

export default function NavLinks() {
  const segment = useSelectedLayoutSegment()

  return (
    <>
      {navLinks?.map((link) => {
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
            <span className={`${segment === link.route.replace("/", "") ? "font-bold" : "font-normal"} hover:opacity-70 text-white cursor-pointer`}>{link.name}</span>
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
