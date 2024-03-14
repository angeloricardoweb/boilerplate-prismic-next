/* eslint-disable @next/next/no-img-element */
import { client } from '@/services/prismicClient'
import React from 'react'

export default async function Page({ params }: { params: { uid: string } }) {
    const post = await client.getByUID("post", params.uid)

    return (
        <div className='max-w-lg mx-auto py-10'>
            {
                post.data.capa.url &&
                < img src={post.data.capa.url} alt={post.data.capa.alt ?? "capa"} />
            }
            <h2>{post.data.titulo}</h2>
            <p>{post.data.autor}</p>
        </div>
    )
}
