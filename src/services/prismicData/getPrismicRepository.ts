import { cache } from 'react'
import { client } from '../prismicClient'

export const getPrismicRepository = cache(async () => {
  return await client.getRepository()
})
