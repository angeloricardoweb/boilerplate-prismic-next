import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import React from 'react'

export function BackButton() {
  const router = useRouter()
  return (
    <div className="my-3 flex" onClick={() => router.back()}>
      <div className="flex items-center justify-start rounded-md bg-blue-500 p-2 text-white">
        <Icon icon="mdi:arrow-left" className="cursor-pointer text-xl" />
        <span className="text-white">Voltar</span>
      </div>
    </div>
  )
}
