'use client'
import React from 'react'
import { Button } from '../Buttons/Button'
import toast from 'react-hot-toast'

export function Welcome() {

    function handleShowToast() {
        toast.success('Welcome')
    }

    return (
        <div>
            <Button variant={"primaryGreen"} onClick={handleShowToast}>Click</Button>
        </div>
    )
}
