import { getPrismicRepository } from '@/services/prismicData/getPrismicRepository'
import useSWR from 'swr'

export function usePrismicLangs() {
  const { data: langs } = useSWR('getPrismicLangs', async () => {
    return await getPrismicRepository()
  })

  return {
    availableLangs: langs?.languages,
  }
}
