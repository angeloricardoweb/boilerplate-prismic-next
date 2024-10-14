'use client'
import React from 'react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { Icon } from '@iconify/react'
import useNavLinks from '@/hooks/useNavLinks'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

export function MenuHamburguer() {
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()
  const { navLinks } = useNavLinks()

  const router = useRouter() // router.push('/')

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  return (
    <div
      className={`fixed top-0 z-[999999] flex h-full w-[90%] items-center justify-center bg-white/80 bg-[url(/img/background.png)] bg-cover bg-fixed bg-center shadow-2xl backdrop-blur-md md:hidden ${
        showMenuHamburguer ? 'right-0' : '-right-[700px]'
      } overflow-y-auto transition-all`}
    >
      <div className="relative h-full w-full py-20">
        <Icon
          icon="mdi:close"
          className="absolute right-5 top-5 cursor-pointer text-3xl"
          onClick={() => setShowMenuHamburguer(false)}
        />
        <div className="flex justify-center px-10 py-4">
          <img src="/img/logo.png" alt="bredi" />
        </div>

        <div className="py-20">
          {navLinks.map((link) => {
            if (link.submenu) {
              return (
                <div
                  key={link.name}
                  className="border-brand-yellow cursor-pointer border-b bg-white text-2xl text-zinc-900"
                >
                  <div className="flex justify-between border-b p-5">
                    <div className="">{link.name}</div>
                    <ChevronDown size={20} className="mt-2 text-black/40" />
                  </div>
                  <div className="flex flex-col gap-2 px-5 py-1">
                    {link.submenu.map((sublink, index) => (
                      <div
                        key={sublink.label}
                        className={`cursor-pointer bg-white p-5 text-xl text-zinc-900 ${link.submenu.length - 1 === index ? '' : 'border-b'}`}
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
                  className="border-brand-yellow cursor-pointer border-b bg-white p-5 text-2xl text-zinc-900"
                  onClick={() => handleRouting(link.route)}
                >
                  {link.name}
                </div>
              )
          })}

          <div className="bg-white py-10">
            <div className="flex flex-col items-center justify-center pb-5">
              <h2>Idioma</h2>
            </div>
            <p className="text-center text-xl text-zinc-900">
              contato@site.com.br
            </p>
            <p className="flex items-center justify-center text-center text-xl text-zinc-900">
              <Icon
                icon="mdi:whatsapp"
                className="mr-2 text-xl text-blue-300"
              />{' '}
              (99) 9999-9999
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
