'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getServiceDetails = async (uid: string) => {
  const lang = await getCurrentLang()
  const data = await client.getByUID('servico', uid, {
    lang: lang ?? 'pt-br',
  })

  return data
}
