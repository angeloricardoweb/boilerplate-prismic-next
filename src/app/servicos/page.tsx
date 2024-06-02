import { getServicesList } from '@/services/prismicData'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
export const fetchCache = 'force-no-store'

export const metadata: Metadata = {
  title: 'Serviço',
}

export default async function Page() {
  const servicos = await getServicesList()

  return (
    <div className="flex flex-wrap justify-center gap-10 pb-40 pt-10">
      {servicos.map((servico) => (
        <Link
          href={`/servicos/${servico.uid}`}
          key={servico.id}
          className="max-w-sm border p-5 shadow"
        >
          <h2>{servico.data.titulo}</h2>
        </Link>
      ))}
    </div>
  )
}
