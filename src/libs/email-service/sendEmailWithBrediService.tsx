'use server'
import AWSVerifyEmail from '@/components/EmailsTemplates/AWSVerifyEmail'
import { api } from '@/services/axios'
import { render } from '@react-email/components'

export async function sendEmailWithBrediService() {
  const emailHtml = await render(
    <AWSVerifyEmail verificationCode="123456789" />,
  )

  const response = await api.post('https://youremail.service/api/send-email', {
    nome_remetente: 'Sender Name',
    email_remetente: 'sender@email.com',
    conteudo_html: emailHtml,
    assunto: 'contact from site',
    nome_destinatario: 'Site_Name',
    email_destinatario: 'destination@email.com',
    // cc: ['johnnyenglish@email.com', 'ethanhunt@email.com'],
    // cco: ['harryhart@email.com'],
  })

  return response
}
