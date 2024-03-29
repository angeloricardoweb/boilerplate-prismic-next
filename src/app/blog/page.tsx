/* eslint-disable @next/next/no-img-element */
import { client } from '@/services/prismicClient'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'
export const fetchCache = 'force-no-store'

export const metadata: Metadata = {
    title: "Blog",
  };
  

export default async function Page() {
    const posts = await client.getAllByType("post")

    return (
        <div className='flex justify-center gap-10 flex-wrap pt-10 pb-40'>
            {posts.map((post) => (
                <Link href={`/blog/${post.uid}`} key={post.id} className='max-w-sm border p-5 shadow'>
                    {
                        post.data.capa.url &&
                        < img src={post.data.capa.url} alt={post.data.capa.alt ?? "capa"} />
                    }
                    <h2>{post.data.titulo}</h2>
                    <p>{post.data.autor}</p>
                </Link>
            ))}
        </div>
    )
}
