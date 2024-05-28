'use client'
import React from 'react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { navLinks } from '../Header/NavLinks'
import { Icon } from '@iconify/react'
import { LanguageToggle } from './LanguageToggle'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

export function MenuHamburguer() {
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()

  const router = useRouter() // router.push('/')

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  return (
    <div
      className={`fixed w-[90%] md:hidden h-full bg-[url(/img/background.png)] bg-cover bg-center bg-fixed top-0 flex items-center justify-center shadow-2xl z-[999999] bg-white/80 backdrop-blur-md ${
        showMenuHamburguer ? 'right-0' : '-right-[700px]'
      } transition-all overflow-y-auto`}
    >
      <div className="w-full h-full relative py-20">
        <Icon
          icon="mdi:close"
          className="text-3xl absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowMenuHamburguer(false)}
        />
        <div className="flex justify-center py-4 px-10">
          <img src="/img/logo.png" alt="bredi" />
        </div>

        <div className="py-20">
          {navLinks.map((link) => {
            if (link.submenu) {
              return (
                <div
                  key={link.name}
                  className="text-2xl cursor-pointer text-zinc-900 bg-white  border-b border-brand-yellow"
                >
                  <div className="border-b p-5 flex justify-between">
                    <div className="">{link.name}</div>
                    <ChevronDown size={20} className="mt-2 text-black/40" />
                  </div>
                  <div className="flex flex-col gap-2 px-5 py-1">
                    {link.submenu.map((sublink, index) => (
                      <div
                        key={sublink.label}
                        className={`text-xl cursor-pointer text-zinc-900 bg-white p-5 ${link.submenu.length - 1 === index ? '' : 'border-b'}`}
                        onClick={() => handleRouting(sublink.href)}
                      >
                        {sublink.label}
                      </div>
                    ))}
                  </div>
                </div>
              )
            } else
              return (
                <div
                  key={link.name}
                  className="text-2xl cursor-pointer text-zinc-900 bg-white p-5 border-b border-brand-yellow"
                  onClick={() => handleRouting(link.route)}
                >
                  {link.name}
                </div>
              )
          })}

          <div className="bg-white py-10">
            <div className="flex flex-col items-center justify-center pb-5">
              <h2>Idioma</h2>
              <LanguageToggle />
            </div>
            <p className="text-zinc-900 text-center text-xl">
              contato@site.com.br
            </p>
            <p className="text-zinc-900 text-center text-xl flex justify-center items-center">
              <Icon
                icon="mdi:whatsapp"
                className="text-brand-yellow mr-2 text-xl"
              />{' '}
              (99) 9999-9999
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
