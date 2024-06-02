import Icon from '@/components/Adapters/Icon'
import React from 'react'

export default async function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Icon
        icon="mdi:loading"
        className="animate-spin transition-all hover:scale-105"
        fontSize={48}
      />
    </div>
  )
}
