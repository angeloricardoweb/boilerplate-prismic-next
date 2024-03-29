/* eslint-disable @next/next/no-img-element */
import ContentRichText from '@/components/Prismic/ContentRichText'
import { client } from '@/services/prismicClient'
import { Metadata } from 'next'
import React, { cache } from 'react'
export const fetchCache = 'force-no-store'

const getPostDetails = cache(async (uid: string) => {
    return await client.getByUID("post", uid)
})

export async function generateMetadata({ params }: { params: { uid: string } }): Promise<Metadata> {
    const post = await getPostDetails(params.uid)

    return {
        title: post.data.titulo,
        description: post.data.resumo,
        openGraph: {
            images: [
                {
                    url: post.data.capa.url as string,
                }
            ]
        }
    }
}

export default async function Page({ params }: { params: { uid: string } }) {
    const post = await getPostDetails(params.uid)

    return (
        <div className='max-w-lg mx-auto py-10'>
            {
                post.data.capa.url &&
                < img src={post.data.capa.url} alt={post.data.capa.alt ?? "capa"} />
            }
            <h2>{post.data.titulo}</h2>
            <p>{post.data.autor}</p>
            <ContentRichText data={post.data.conteudo} />
        </div>
    )
}
