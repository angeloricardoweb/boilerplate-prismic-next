import { createClient } from '@prismicio/client'
import sm from '../../sm.json'

export const client = createClient(sm.apiEndpoint)
