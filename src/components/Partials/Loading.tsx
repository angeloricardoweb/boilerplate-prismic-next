import { Icon } from '@iconify/react'
import React from 'react'

export function Loading() {
  return (
    <div className="flex justify-center">
      <Icon
        icon="mingcute:loading-fill"
        className="animate-spin text-cyan-500"
        width="40"
        height="40"
      />
    </div>
  )
}
