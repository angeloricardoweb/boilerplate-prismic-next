import ContentRichText from '@/components/Prismic/ContentRichText'
import { getServicesDetails } from '@/services/prismicData'
import { Metadata } from 'next'
import React from 'react'
export const fetchCache = 'force-no-store'

export async function generateMetadata({
  params,
}: {
  params: { uid: string }
}): Promise<Metadata> {
  const servico = await getServicesDetails(params.uid)

  return {
    title: servico.data.titulo,
  }
}

export default async function Page({ params }: { params: { uid: string } }) {
  const servico = await getServicesDetails(params.uid)

  return (
    <div className="mx-auto max-w-lg py-10">
      <h2>{servico.data.titulo}</h2>
      <ContentRichText data={servico.data.descricao} />
    </div>
  )
}
