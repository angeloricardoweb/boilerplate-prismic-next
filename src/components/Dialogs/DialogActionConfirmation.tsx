import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Icon } from '@iconify/react'

type Props = {
  actionOnAccept: () => void
  title: string
  description: string
  children: React.ReactNode
}

export const DialogActionConfirmation = (props: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(open: boolean) => {
        setOpen(open)
      }}
    >
      <Dialog.Trigger asChild>{props.children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-zinc-600 bg-black p-10">
          <Dialog.Close className="absolute right-0 top-0 m-3 text-2xl text-white">
            <Icon icon="mdi:close" />
          </Dialog.Close>
          <h2 className="text-center text-2xl font-bold">{props.title}</h2>
          <p className="mt-2 text-center text-zinc-300">{props.description}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                props.actionOnAccept()
                setOpen(false)
              }}
              className="rounded-xl bg-zinc-500 p-3 transition-all hover:scale-105"
            >
              Sim, confirmar
            </button>
            <button
              onClick={() => {
                setOpen(false)
              }}
              className="rounded-xl border border-zinc-500 p-3 transition-all hover:scale-105"
            >
              Cancelar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

{
  /* <DialogActionConfirmation
        title="Tem certeza que deseja deletar este artigo?"
        description="Ao deletar este artigo, ele será removido permanentemente do sistema."
        actionOnAccept={() => alert('Deletar')}
      
      >
 <button className="group grid w-full place-items-center rounded-xl bg-zinc-800 py-3">
    <Icon
      icon="mdi:delete-outline"
      className="text-2xl text-white"
    />
  </button>
</DialogActionConfirmation> */
}
