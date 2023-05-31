import { Icon } from '@iconify/react'
import React from 'react'

export function Loading() {
  return (
    <div className="flex justify-center">
      <Icon
        icon="mingcute:loading-fill"
        className="text-cyan-500 animate-spin"
        width="40"
        height="40"
      />
    </div>
  )
}
