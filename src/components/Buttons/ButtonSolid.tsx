import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function ButtonSolid({
  className,
  type,
  disabled,
  onClick,
  children,
}: {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <button
      className={twMerge('btn btn-solid', className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
