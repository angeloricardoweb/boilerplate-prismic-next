import { Icon } from '@iconify/react'

export function WhatsappButton() {
  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=5591999999999`}
      target="_blank"
      className="fixed bottom-32 md:bottom-12 right-12 z-50"
      rel="noreferrer"
    >
      <Icon
        icon="logos:whatsapp-icon"
        className="hover:scale-105 transition-all"
        fontSize={48}
      />
    </a>
  )
}
