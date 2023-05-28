/* eslint-disable @next/next/no-img-element */
import TopBar from './TopBar'
import NavLinks, { navLinks } from './NavLinks'
import { useWindowScroll } from 'react-use'
import Link from 'next/link'
import Container from '../Partials/Container'
import { Icon } from '@iconify/react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { useEffect } from 'react'

export function Header() {
  const { y } = useWindowScroll()
  const { setShowMenuHamburguer } = useMenuHamburguerStore()

  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`fixed z-50 w-full shadow-xl backdrop-blur transition-all top-0 py-3 ${
        y > 0 ? 'bg-black/70' : 'bg-black'
      } `}
    >
      {/* {y > 0 ? null : <TopBar />} */}

      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src="/img/logo.png"
              alt=""
              className="py-3 transition-all cursor-pointer"
              style={{ height: y > 0 ? '3rem' : '4rem' }}
            />
          </Link>
          <div className="md:flex gap-5 items-center hidden">
            <NavLinks />
          </div>
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-white text-3xl" />
          </div>
        </div>
      </Container>
    </header>
  )
}
