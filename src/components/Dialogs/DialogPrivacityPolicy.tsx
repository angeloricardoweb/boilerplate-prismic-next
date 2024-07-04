'use client'
import React, { useEffect, useState } from 'react'
import sm from '../../../slicemachine.config.json'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button } from '../Buttons/Button'

export default function DialogPrivacityPolicy() {
  const [open, setOpen] = useState(false)

  const cookieName = `user-accept-cookies_${sm.repositoryName}`

  function setCookie() {
    localStorage.setItem(cookieName, cookieName)
    setOpen(false)
  }

  useEffect(() => {
    const cookie = localStorage.getItem(cookieName) || ''
    if (!cookie.includes(cookieName)) {
      setOpen(true)
    }
  }, [cookieName])

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Content className="fixed bottom-2 left-[50%] z-[9999] w-[90%] translate-x-[-50%] rounded-lg border border-t border-b-red-50 bg-white/80 p-5 md:w-[70%]">
          <h2 className="text-2xl font-bold">Política de privacidade</h2>
          <p className="mb-4">
            Nós armazenamos dados temporariamente para melhorar a sua
            experiência de navegação e recomendar conteúdo de seu interesse. Ao
            utilizar nossos serviços, você concorda com tal monitoramento.
          </p>
          <div className="flex justify-between">
            <Button onClick={setCookie} variant="outlinedBlack">
              Aceitar Cookies
            </Button>
            <Button
              onClick={() => {
                setOpen(false)
              }}
              variant="outlinedBlack"
            >
              Rejeitar
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
