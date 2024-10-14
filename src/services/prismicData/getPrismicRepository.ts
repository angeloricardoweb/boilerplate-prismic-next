import { client } from '../prismicClient'

export const getPrismicRepository = async () => {
  return await client.getRepository()
}
