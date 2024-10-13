import { cookies } from 'next/headers'

export async function getCurrentLang() {
  const cookiesStore = cookies()
  const lang = cookiesStore.get('lang')
  return lang?.value
}
