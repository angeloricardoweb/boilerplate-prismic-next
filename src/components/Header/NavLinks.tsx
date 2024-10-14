'use client'
import Link from 'next/link'
import Icon from '../Adapters/Icon'
import { useSelectedLayoutSegment } from 'next/navigation'
import { DropdownHover } from './DropdownHover'
import useNavLinks from '@/hooks/useNavLinks'

export default function NavLinks() {
  const segment = useSelectedLayoutSegment()
  const { navLinks } = useNavLinks()

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
              suppressHydrationWarning
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
