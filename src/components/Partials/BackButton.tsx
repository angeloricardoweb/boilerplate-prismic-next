import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import React from 'react'

export function BackButton() {
  const router = useRouter()
  return (
    <div className="flex my-3" onClick={() => router.back()}>
      <div className="flex items-center justify-start p-2 rounded-md bg-blue-500 text-white">
        <Icon icon="mdi:arrow-left" className="text-xl cursor-pointer" />
        <span className="text-white">Voltar</span>
      </div>
    </div>
  )
}
