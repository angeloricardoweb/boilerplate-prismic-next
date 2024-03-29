/* eslint-disable @next/next/no-img-element */
import ContentRichText from '@/components/Prismic/ContentRichText'
import { client } from '@/services/prismicClient'
import { Metadata } from 'next'
import React, { cache } from 'react'
export const fetchCache = 'force-no-store'

const getServices = cache(async (uid: string) => {
    return await client.getByUID("servico", uid)
})

export async function generateMetadata({ params }: { params: { uid: string } }): Promise<Metadata> {
    const servico = await getServices(params.uid)

    return {
        title: servico.data.titulo,
    }
}

export default async function Page({ params }: { params: { uid: string } }) {
    const servico = await getServices(params.uid)

    return (
        <div className='max-w-lg mx-auto py-10'>

            <h2>{servico.data.titulo}</h2>
            <ContentRichText data={servico.data.descricao} />
        </div>
    )
}
