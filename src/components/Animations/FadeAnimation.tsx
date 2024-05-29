'use client'
import { Fade } from 'react-awesome-reveal'
import React from 'react'

export default function FadeAnimation({
  direction,
  className,
  children,
  cascade = false,
}: {
  direction?: 'left' | 'right' | 'up' | 'down'
  className?: string
  children: React.ReactNode
  cascade?: boolean
}) {
  return (
    <Fade cascade={cascade} direction={direction} className={className}>
      {children}
    </Fade>
  )
}
