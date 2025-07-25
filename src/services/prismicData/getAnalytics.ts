'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getAnalytics = async () => {
  const lang = await getCurrentLang()
  try {
    const data = await client.getSingle('codigos_analytics', {
      lang: lang ?? 'pt-br',
    })
    return data
  } catch (e: any) {
    // Se não encontrar o documento, retorna null
    if (e?.message?.includes('No documents were returned')) {
      return null
    }
    throw e
  }
}
