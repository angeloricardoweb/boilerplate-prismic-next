'use client'
import React from 'react'
import { LoaderCircle } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

// Tutorial de uso:
// Caso precise adicionar um botão em seu projeto, você pode utilizar o componente Button. Para isso, basta importá-lo e utilizá-lo em seu código. Para personalizar o botão, você pode passar o nome da sua propriedade na área variant, que está com um comentário e depois adicionar uma nova prop na const VARIANT_CLASSES, que também estará comentada.
// Na VARIANT_CLASSES você adiciona a estlização necessária para a sua página

// Agora você pode usar classNames customizadas para o botão, como por exemplo: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"

type Props = {
  children: React.ReactNode
  variant: 'primaryGreen' | 'outlinedBlack'
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  full?: boolean
  isLoading?: boolean
  className?: string
}

const VARIANT_CLASSES = {
  // const VARIANT_CLASSES
  primaryGreen: 'bg-brand-green-50 text-white',
  outlinedBlack: 'bg-transparent border border-black text-black',
}

export function Button({
  children,
  variant = 'primaryGreen',
  disabled = false,
  onClick,
  type = 'button',
  full = false,
  isLoading = false,
  className = '',
}: Props) {
  const buttonClasses = twMerge(
    `
    flex items-center justify-center gap-2 rounded-md px-8 py-4 transition-all 
    hover:opacity-75 disabled:opacity-50 
    ${VARIANT_CLASSES[variant]} 
    ${full ? 'md:w-full' : 'md:w-fit'}
  `,
    className,
  )

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={{
        whiteSpace: 'nowrap',
      }}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <LoaderCircle className="mx-4 size-5 animate-spin" />
      ) : (
        children
      )}
    </button>
  )
}
