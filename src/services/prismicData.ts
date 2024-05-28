import { cache } from 'react'
import { client } from './prismicClient'

export const getPostList = cache(async () => {
  return await client.getAllByType('post')
})

export const getPostDetails = cache(async (uid: string) => {
  return await client.getByUID('post', uid)
})

export const getServicesList = cache(async () => {
  return await client.getAllByType('servico')
})

export const getServicesDetails = cache(async (uid: string) => {
  return await client.getByUID('servico', uid)
})
