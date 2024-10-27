'use client'
import React, { useState } from 'react'
import { Container } from '../Partials/Container'
import { Collapse } from 'react-collapse'
import { ChevronDown } from 'lucide-react'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import useSWR from 'swr'
import { getFaq } from '@/services/prismicData/getFaq'

export default function SectionFaq() {
  const { stringData } = useLang()

  const {
    data: faq,
    error,
    isLoading,
  } = useSWR('getFaq', async () => {
    const response = await getFaq()
    return response
  })

  if (error) return null

  if (isLoading) {
    return (
      <section className="py-20">
        <Container>
          <h2 className="text-center text-4xl font-bold">
            {stringData(langData.FrequentlyAskedQuestions)}
          </h2>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="mt-4">
              <div className="animate-pulse flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md">
                <div className="w-3/4 bg-gray-200 h-6 rounded-lg"></div>
                <div className="w-1/4 bg-gray-200 h-6 rounded-lg"></div>
              </div>
              <div className="rounded-b bg-zinc-100 p-3 h-16"></div>
            </div>
          ))}
        </Container>
      </section>
    )
  }

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center text-4xl font-bold">
          {stringData(langData.FrequentlyAskedQuestions)}
        </h2>
        {faq?.data.items.map((item, index) => (
          <CollapseItem key={index} title={item.pergunta as string}>
            <p className="rounded-b bg-zinc-100 p-3">{item.resposta}</p>
          </CollapseItem>
        ))}
      </Container>
    </section>
  )
}

function CollapseItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        className="mt-4 flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold text-start">{title}</h3>
        <ChevronDown
          size={24}
          className={`transform transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <Collapse isOpened={open}>{children}</Collapse>
    </div>
  )
}
