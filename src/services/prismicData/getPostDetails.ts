'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getPostDetails = async (uid: string) => {
  const lang = await getCurrentLang()
  const data = await client.getByUID('post', uid, {
    lang: lang ?? 'pt-br',
  })

  return data
}
