'use client'
import React, { useState } from 'react'
import { Container } from '../Partials/Container'
import { Collapse } from 'react-collapse'
import { ChevronDown } from 'lucide-react'

const faq = [
  {
    question: 'Como faço para comprar uma passagem?',
    answer:
      'Para comprar uma passagem, basta acessar o site da Turvicam, escolher o destino, data e horário desejado e clicar em comprar. Caso tenha alguma dúvida, entre em contato conosco.',
  },
  {
    question: 'Como faço para comprar uma passagem?',
    answer:
      'Para comprar uma passagem, basta acessar o site da Turvicam, escolher o destino, data e horário desejado e clicar em comprar. Caso tenha alguma dúvida, entre em contato conosco.',
  },
  {
    question: 'Como faço para comprar uma passagem?',
    answer:
      'Para comprar uma passagem, basta acessar o site da Turvicam, escolher o destino, data e horário desejado e clicar em comprar. Caso tenha alguma dúvida, entre em contato conosco.',
  },
]

export default function SectionFaq() {
  return (
    <section className="mt-20">
      <Container>
        <h2 className="text-center text-4xl font-bold">Perguntas frequentes</h2>
        {faq.map((item, index) => (
          <CollapseItem key={index} title={item.question}>
            <p className="rounded-b bg-zinc-100 p-3">{item.answer}</p>
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
        <h3 className="text-lg font-semibold">{title}</h3>
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
