import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Icon } from '@iconify/react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'

export function FormDialog({ name = 'Contato' }: { name?: string }) {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  async function handlePostForm(data: any) {
    const loading = toast.loading('Enviando formulário...')
    try {
      const response = await axios.post(
        'https://yourservice.com/api/send-email',
        {
          nome_remetente: 'Cliente Site',
          email_remetente: 'email@gmail.com',
          conteudo_html: `<div><h2 style="font-size:'20px'">Solicitação de contato via site<h2><p style="font-size:16px;font-weight: normal;"><strong>Nome:</strong> ${data.nome} ${data.sobrenome}<p><p style="font-size:16px;font-weight: normal;"><strong>E-mail:</strong> ${data.email}<p><p  style="font-size:16px;font-weight: normal;"><strong>Telefone:</strong> ${data.mensagem}<p><div>`,
          assunto: 'Contato via Site',
          nome_destinatario: 'Cliente Site',
          email_destinatario: 'email@gmail.com',
        }
      )
      toast.success(response.data.message)
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar o formulário.')
    }
    reset()
    reset({
      telefone: '',
    })
    toast.dismiss(loading)
    setOpen(false)
  }
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className="border bg-white border-1 border-purple-800 px-14 py-3 rounded-xl text-purple-800 font-light hover:bg-gray-50 transition-colors"
      >
        {name}
      </button>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 max-w-[600px] bg-white p-10 rounded-xl">
              <Dialog.Close className="absolute right-6 top-6 border-none text-zinc-500 hover:text-zinc-200">
              <Icon icon="ic:round-close" className="h-6 w-6" />
            </Dialog.Close>
          <Dialog.Title className="text-2xl font-bold leading-tight text-zinc-800">
            Contate-nos
          </Dialog.Title>
          <form
            className="grid md:grid-cols-2 gap-5 mt-5"
            onSubmit={handleSubmit(handlePostForm)}
          >
            <div>
              <label>Nome</label>
              <input
                type="text"
                className="w-full border-b border-gray-900 p-2"
                {...register('nome', { required: true })}
              />
              {errors.nome && (
                <span className="text-red-500">Campo obrigatório</span>
              )}
            </div>
            <div>
              <label>Sobrenome</label>
              <input
                type="text"
                className="w-full border-b border-gray-900 p-2"
                {...register('sobrenome', {
                  required: true,
                })}
              />
              {errors.sobrenome && (
                <span className="text-red-500">Campo obrigatório</span>
              )}
            </div>
            <div className="col-span-2">
              <label>E-mail</label>
              <input
                type="email"
                className="w-full border-b border-gray-900 p-2"
                {...register('email', {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && (
                <span className="text-red-500">Campo obrigatório</span>
              )}
            </div>
            <div className="col-span-2">
              <label>Insira uma mensagem</label>
              <textarea
                className="w-full border-b border-gray-900 p-2"
                {...register('mensagem', {
                  required: true,
                })}
              />
              {errors.mensagem && (
                <span className="text-red-500">Campo obrigatório</span>
              )}
            </div>
            <button
              className="bg-black rounded-xl px-6 py-3 text-white border-1 border-black border hover:bg-gray-600/40 transitio-all duration-500 hover:text-black"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
