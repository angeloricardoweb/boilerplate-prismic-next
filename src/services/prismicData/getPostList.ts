'use server'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getPostList = async () => {
  const lang = await getCurrentLang()
  const data = await client.getAllByType('post', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
}
