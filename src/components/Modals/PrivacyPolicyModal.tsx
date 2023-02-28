import { Dialog } from '@headlessui/react'
import privacyPolicyModalStore from '../../stores/modals/privacyPolicyModalStore'
import ButtonPrimary from '../Buttons/ButtonPrimary'

export function PrivacyPolicyModal() {
  const { modalState, setModalState } = privacyPolicyModalStore()

  return (
    <Dialog open={modalState} onClose={() => setModalState(false)} className="w-full h-full
    flex justify-center items-center
    fixed top-0 left-0 z-[100]
    bg-[rgba(0,0,0,0.5)]
    ">
      <Dialog.Panel
        className="bg-white p-5 rounded-xl max-w-3xl"
      >
        <Dialog.Title>Política de Privacidade</Dialog.Title>
        <p className='py-3'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, soluta saepe, nobis enim consequuntur quisquam animi amet aliquid non libero a nulla repudiandae suscipit quibusdam velit expedita beatae alias dolorem.
        </p>
        <div className='flex gap-3'>
          <ButtonPrimary onClick={() => setModalState(false)}>Fechar</ButtonPrimary>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}
