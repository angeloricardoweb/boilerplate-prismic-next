'use client'
import { ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

// Tutorial de uso: Basta adicionar este componente em layout.tsx, de preferência embaixo da propriedade children, assim como consta no projeto
// Este componente é responsável por adicionar um botão que leva o usuário ao topo da página. Ele só aparece quando o usuário rola a página para baixo
// Para personalizar o botão, você pode alterar as classes CSS no className do botão

function ScrollToTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 160)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={` !scroll-smooth fixed bottom-2 right-2 p-3 bg-brand-gray-50 text-white rounded-full shadow-lg transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </button>
  )
}

export default ScrollToTopButton
