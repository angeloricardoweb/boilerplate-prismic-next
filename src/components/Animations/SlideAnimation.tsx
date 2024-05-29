'use client'
import { Slide } from 'react-awesome-reveal'
import React from 'react'

export default function SlideAnimation({
  direction = 'left',
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
    <Slide cascade={cascade} direction={direction} className={className}>
      {children}
    </Slide>
  )
}
