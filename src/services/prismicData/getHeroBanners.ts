'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getHeroBanners = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('banners', {
    lang: lang ?? 'pt-br',
  })
  return data
}
