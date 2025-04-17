'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { Icon } from '@iconify/react'
import useNavLinks from '@/hooks/useNavLinks'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export function MenuHamburguer() {
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()
  const { navLinks } = useNavLinks()
  const router = useRouter()
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
    {},
  )

  useEffect(() => {
    if (showMenuHamburguer) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showMenuHamburguer])

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  function toggleSubmenu(linkName: string) {
    setExpandedMenus((prev) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }))
  }

  // Isso é apenas um placeholder -  esses dados devem vir do Prismic
  const getDynamicSubmenuItems = (type: string) => {
    return [
      { label: `${type} item 1`, href: `/${type}/item-1` },
      { label: `${type} item 2`, href: `/${type}/item-2` },
      { label: `${type} item 3`, href: `/${type}/item-3` },
    ]
  }

  const menuVariants = {
    hidden: { x: '100%', opacity: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      x: '100%',
      opacity: 0.8,
      transition: {
        type: 'tween',
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
      },
    }),
  }

  const submenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <AnimatePresence>
      {showMenuHamburguer && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            className="fixed inset-0 bg-black/50 z-[99999] md:hidden"
            onClick={() => setShowMenuHamburguer(false)}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 right-0 z-[999999] flex flex-col h-full w-[85%] max-w-sm bg-gradient-to-b from-brand-gray-50 to-brand-gray-100 md:hidden overflow-hidden"
            aria-label="Menu de navegação"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative flex justify-between items-center px-6 py-5 border-b border-white/10">
              <div className="w-36 h-14 relative">
                <Image
                  src="/next.svg"
                  alt="FONACON"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                onClick={() => setShowMenuHamburguer(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white"
                aria-label="Fechar menu"
              >
                <Icon icon="mdi:close" className="text-2xl" />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-3">
              <nav className="space-y-1.5">
                {navLinks.map((link, i) => {
                  const hasSubmenu =
                    link.submenu || link.dinamic_submenu_document_type
                  const isExpanded = expandedMenus[link.name] || false
                  const submenuItems =
                    link.submenu ||
                    (link.dinamic_submenu_document_type
                      ? getDynamicSubmenuItems(
                          link.dinamic_submenu_document_type,
                        )
                      : [])

                  return (
                    <motion.div
                      key={link.name}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileTap={{ scale: hasSubmenu ? 1 : 0.98 }}
                      className="overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          hasSubmenu
                            ? toggleSubmenu(link.name)
                            : handleRouting(link.route)
                        }
                        className="w-full flex items-center py-3.5 px-4 rounded-lg text-white text-lg font-medium hover:bg-white/10 active:bg-white/5 transition-colors relative group"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow opacity-0 group-hover:opacity-100 rounded-r-full transition-opacity" />
                        <span>{link.name}</span>
                        {hasSubmenu ? (
                          <Icon
                            icon={
                              isExpanded
                                ? 'mdi:chevron-down'
                                : 'mdi:chevron-right'
                            }
                            className={`ml-auto text-xl opacity-50 group-hover:opacity-100 transition-all ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
                          />
                        ) : (
                          <Icon
                            icon="mdi:chevron-right"
                            className="ml-auto text-xl opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                          />
                        )}
                      </button>

                      {hasSubmenu && (
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={submenuVariants}
                              className="pl-4 overflow-hidden"
                            >
                              <div className="ml-3 border-l border-white/10 space-y-0.5 py-1">
                                {submenuItems.map((item, idx) => (
                                  <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <button
                                      onClick={() => {
                                        router.push(item.href)
                                        setShowMenuHamburguer(false)
                                      }}
                                      className="w-full flex items-center py-2.5 pl-4 pr-2 text-white/80 text-base font-normal hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                                    >
                                      <span>{item.label}</span>
                                      <Icon
                                        icon="mdi:arrow-top-right"
                                        className="ml-auto text-sm opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                      />
                                    </button>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  )
                })}
              </nav>

              <div className="mt-8 border-t border-white/10 pt-6 px-4">
                <h3 className="text-white/70 uppercase text-xs font-semibold tracking-wider mb-4">
                  Acesso Rápido
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/"
                    className="flex items-center justify-center bg-brand-blue-light hover:bg-brand-blue-light/90 transition-colors py-3 px-4 rounded-lg text-white font-medium"
                    onClick={() => setShowMenuHamburguer(false)}
                  >
                    <Icon icon="line-md:link" className="mr-2" />
                    Link 1
                  </Link>
                  <Link
                    href="#programacao"
                    className="flex items-center justify-center bg-white/10 hover:bg-white/15 transition-colors py-3 px-4 rounded-lg text-white font-medium"
                    onClick={() => setShowMenuHamburguer(false)}
                  >
                    <Icon icon="line-md:link" className="mr-2" />
                    Link 2
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm py-6 px-6">
              <p className="text-brand-yellow font-bold text-lg mb-3">
                Entre em contato
              </p>

              <div className="space-y-2">
                <a
                  href="mailto:contato@email.com"
                  className="flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <Icon
                    icon="mdi:email-outline"
                    className="mr-2 text-white/60"
                  />
                  contato@email.com
                </a>

                <a
                  href="tel:+559999999999"
                  className="flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <Icon icon="mdi:whatsapp" className="mr-2 text-white/60" />
                  (99) 9999-9999
                </a>
              </div>

              <div className="flex justify-center mt-5 space-x-4">
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-blue-light transition-colors text-white"
                  aria-label="Facebook"
                >
                  <Icon icon="mdi:facebook" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-blue-light transition-colors text-white"
                  aria-label="Instagram"
                >
                  <Icon icon="mdi:instagram" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-blue-light transition-colors text-white"
                  aria-label="LinkedIn"
                >
                  <Icon icon="mdi:linkedin" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
