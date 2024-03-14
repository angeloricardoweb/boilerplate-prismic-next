import { createClient } from '@prismicio/client'
import sm from '../../slicemachine.config.json'

export const client = createClient(`https://${sm.repositoryName}.cdn.prismic.io/api/v2`)