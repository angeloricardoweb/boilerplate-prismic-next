import React from 'react'
import { Toaster } from 'react-hot-toast'

export function ToasterComponent() {
  return (
    <Toaster
      toastOptions={{
        className: 'bg-zinc-500 text-white',
        style: {
          zIndex: 999999,
        },
      }}
    />
  )
}
