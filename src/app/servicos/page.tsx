/* eslint-disable @next/next/no-img-element */
import { client } from '@/services/prismicClient'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'
export const fetchCache = 'force-no-store'

export const metadata: Metadata = {
    title: "Serviço",
  };
  

export default async function Page() {
    const servicos = await client.getAllByType("servico")

    return (
        <div className='flex justify-center gap-10 flex-wrap pt-10 pb-40'>
            {servicos.map((servico) => (
                <Link href={`/servicos/${servico.uid}`} key={servico.id} className='max-w-sm border p-5 shadow'>
                    <h2>{servico.data.titulo}</h2>
                </Link>
            ))}
        </div>
    )
}
