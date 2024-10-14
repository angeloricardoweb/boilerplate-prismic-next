import { useCookies } from '@/stores/useCookies'

export default function useLang() {
  const { getCookie } = useCookies()

  function stringData(data: any) {
    const lang = getCookie('lang') ?? 'pt-br'
    const response = data[lang]
    return response
  }

  return { stringData }
}
