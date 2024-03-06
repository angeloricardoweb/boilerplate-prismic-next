import { createClient } from '@prismicio/client'
import sm from '../../slicemachine.config.json'

export const client = createClient(`https://${sm.repositoryName}.prismic.io/api/v2`)
