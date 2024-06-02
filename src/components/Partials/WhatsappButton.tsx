import { Icon } from '@iconify/react'

export function WhatsappButton() {
  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=5591999999999`}
      target="_blank"
      className="fixed bottom-32 right-12 z-50 md:bottom-12"
      rel="noreferrer"
    >
      <Icon
        icon="logos:whatsapp-icon"
        className="transition-all hover:scale-105"
        fontSize={48}
      />
    </a>
  )
}
