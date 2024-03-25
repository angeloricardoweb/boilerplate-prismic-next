'use client'
import React from 'react'
import { Icon as Iconify, IconProps } from '@iconify/react'

export default function Icon(props: IconProps) {
    return (
        <Iconify
            {...props}
            style={{
                display: 'inline-block' 
            }}
        />
    )
}