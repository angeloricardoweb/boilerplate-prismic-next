'use server'
import { cache } from 'react'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getServicesList = cache(async () => {
  const lang = await getCurrentLang()
  const data = await client.getAllByType('servico', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
})
