"use client";
import React from "react";
import { Container } from "../Partials/Container";
import Icon from "../Adapters/Icon";

export default function SectionFaq() {
  return (
    <section className="mt-20">
      <Container>
        <h2 className="text-4xl font-bold text-center">Perguntas frequentes</h2>
        <ColapseItem title="Como faço para comprar uma passagem?">
          <p>
            Para comprar uma passagem, basta acessar o site da Turvicam,
            escolher o destino, data e horário desejado e clicar em comprar.
            Caso tenha alguma dúvida, entre em contato conosco.
          </p>
        </ColapseItem>
      </Container>
    </section>
  );
}

function ColapseItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <details className="mt-2">
      <summary
        className="text-lg border p-3 flex items-center justify-between cursor-pointer group hover:bg-gray-100 transition-all rounded-md"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold">{title}</span>
        <Icon
          icon="akar-icons:chevron-up"
          className={`float-right transition-all ${open ? "rotate-180" : ""} `}
        />
      </summary>
      <div className="bg-zinc-100 p-5">{children}</div>
    </details>
  );
}
