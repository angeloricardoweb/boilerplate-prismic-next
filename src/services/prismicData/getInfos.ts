'use server'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getInfos = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('dados_e_redes_sociais', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
}
