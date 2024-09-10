'use server'
import AWSVerifyEmail from '@/components/EmailsTemplates/AWSVerifyEmail'
import { render } from '@react-email/components'
import { Resend } from 'resend'

const resend = new Resend('re_1234567789')

export async function sendEmailWithResend() {
  const emailHtml = await render(<AWSVerifyEmail verificationCode="123456" />)

  const response = await resend.emails.send({
    from: 'Novo Email <send@maindomain.com>',
    to: ['destination@email.com'],
    subject: 'Hello World',
    html: emailHtml as string,
  })

  return response
}
