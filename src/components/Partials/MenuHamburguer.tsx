import React from 'react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { navLinks } from '../Header/NavLinks'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'

export function MenuHamburguer() {
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()

  const router = useRouter() // router.push('/')

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  return (
    <div
      className={`fixed z-50 w-[90%] md:hidden h-full bg-white top-0 flex items-center justify-center shadow-2xl ${
        showMenuHamburguer ? 'right-0' : '-right-[700px]'
      } transition-all`}
    >
      <div className="w-full h-full relative">
        <Icon
          icon="mdi:close"
          className="text-black text-3xl absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowMenuHamburguer(false)}
        />
        <div className="flex w-full h-full flex-col items-center justify-center">
          {navLinks.map((link) => (
            <span
              key={link.name}
              className="text-black text-2xl cursor-pointer"
              onClick={() => handleRouting(link.route)}
            >
              {link.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
