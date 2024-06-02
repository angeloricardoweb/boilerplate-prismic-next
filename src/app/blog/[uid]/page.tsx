import ContentRichText from '@/components/Prismic/ContentRichText'
import { getPostDetails } from '@/services/prismicData'
import { Metadata } from 'next'
import React from 'react'
export const fetchCache = 'force-no-store'

export async function generateMetadata({
  params,
}: {
  params: { uid: string }
}): Promise<Metadata> {
  const post = await getPostDetails(params.uid)

  return {
    title: post.data.titulo,
    description: post.data.resumo,
    openGraph: {
      images: [
        {
          url: post.data.capa.url as string,
        },
      ],
    },
  }
}

export default async function Page({ params }: { params: { uid: string } }) {
  const post = await getPostDetails(params.uid)

  return (
    <div className="mx-auto max-w-lg py-10">
      {post.data.capa.url && (
        <img src={post.data.capa.url} alt={post.data.capa.alt ?? 'capa'} />
      )}
      <h2>{post.data.titulo}</h2>
      <p>{post.data.autor}</p>
      <ContentRichText data={post.data.conteudo} />
    </div>
  )
}
