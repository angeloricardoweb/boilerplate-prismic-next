'use client'
import React from 'react'
import { LoaderCircle } from 'lucide-react'

type Props = {
  children: React.ReactNode
  variant: 'primaryGreen' | 'outlinedBlack'
  color?: string
  disabled?: boolean
  onClick?: any
  type?: 'button' | 'submit' | 'reset'
  full?: boolean
  isLoading?: boolean
}

export function Button({
  children,
  variant = 'primaryGreen',
  disabled = false,
  onClick,
  type = 'button',
  full = false,
  isLoading = false,
}: Props) {
  const primaryGreen = 'bg-brand-green text-white'
  const outlinedBlack = 'bg-transparent border border-black text-black'

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md px-4 py-2 transition-all hover:opacity-75 disabled:opacity-50 ${variant === 'primaryGreen' && primaryGreen} ${variant === 'outlinedBlack' && outlinedBlack} ${full ? 'w-full' : 'w-fit'} `}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={{
        whiteSpace: 'nowrap',
      }}
    >
      {isLoading ? (
        <LoaderCircle className="mx-4 size-5 animate-spin" />
      ) : (
        children
      )}
    </button>
  )
}
