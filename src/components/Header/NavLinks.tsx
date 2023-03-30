/* eslint-disable @next/next/no-img-element */

import { Icon } from '@iconify/react'
import Link from 'next/link'
export const navLinks = [

  {
    route: '/sobre-nos',
    name: 'Sobre Nós',
  },
  {
    route: '/contatos',
    name: 'Contatos',
  },
]

export default function NavLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.route}>
          <span className="text-white cursor-pointer">{link.name}</span>
        </Link>
      ))}
      <a href="/" rel="noreferrer" target="_blank">
        <Icon icon="mdi:facebook" className="text-white" />
      </a>
      <a href="/" rel="noreferrer" target="_blank">
        <Icon icon="mdi:instagram" className="text-white" />
      </a>
    </>
  )
}
