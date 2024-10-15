'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getFaq = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('faq', {
    lang: lang ?? 'pt-br',
  })
  console.log(data)
  return data
}
