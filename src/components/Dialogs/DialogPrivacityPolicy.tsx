'use client'
import React, { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Buttons/Button'
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export default function DialogPrivacityPolicy() {
  const [open, setOpen] = useState(false)

  function setCookie() {
    localStorage.setItem('user-accept-cookies', 'hasCookie')
    setOpen(false)
  }

  useEffect(() => {
    const cookie = localStorage.getItem('user-accept-cookies') || ''
    if (!cookie.includes('user-accept-cookies')) {
      setOpen(true)
    }

  }, [])

  return (

    <AlertDialog.Root open={open}
      onOpenChange={(open: any) => {
        setOpen(open)
      }}>
      <AlertDialog.Trigger asChild>
        <button className="Button violet">Delete account</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Content className="fixed bottom-2 border-t left-[50%] translate-x-[-50%] rounded-2xl bg-white p-5 w-full">
          <h2 className="text-2xl font-bold">Política de privacidade</h2>
          <p >
            Nós armazenamos dados temporariamente para melhorar a sua experiência de navegação e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento.
          </p>
          <div className='flex justify-between'>
            <Button
              onClick={setCookie}
              variant='outlinedBlack'
            >
              Aceitar Cookies
            </Button>
            <Button
              onClick={() => {
                setOpen(false)
              }}
              variant='secondary'
            >
              Rejeitar
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>

  )
}
