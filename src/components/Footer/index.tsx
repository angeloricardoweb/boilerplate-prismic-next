'use client'

import Link from 'next/link'
import { navLinks } from '../Header/NavLinks'
import { Container } from '../Partials/Container'
import { Copyright } from './Copyright'
import Icon from '../Adapters/Icon'

export default function Footer() {
  /* Follow the example in the README to make server calls in React components that operate on the client side */

  return (
    <footer className="border-t pt-5">
      <Container>
        <div className="flex flex-wrap justify-between gap-10">
          <div className="w-[320px]">
            <div className="flex w-fit items-center justify-center rounded-full bg-black p-1">
              <img
                src="/img/logo.png"
                data-fancybox
                data-caption="Single image"
                alt="Logo"
                className="w-20 cursor-pointer"
              />
            </div>
            <small className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              autem adipisci magnam rerum quae distinctio sequi eius ipsam
              delectus fugiat harum ratione, dignissimos qui soluta
              reprehenderit et laboriosam consequuntur alias!
            </small>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex w-[320px] flex-col">
              <strong>Encontre nosso escritório</strong>
              <small>
                Rodovia Augusto Montenegro, 4300, Parque Office, Torre Norte,
                Sala 614N Belém - Pará
              </small>
              <strong className="mt-4">Horário de atendimento</strong>
              <small>Segunda à sexta, de 8h às 17h</small>
            </div>

            <div className="flex w-[80px] flex-col gap-5">
              {navLinks.map((link) => {
                return (
                  <Link href={link.route} key={link.name}>
                    <strong>{link.name}</strong>
                  </Link>
                )
              })}
            </div>

            <div className="flex w-[80px] flex-col">
              <strong>Siga nos</strong>
              <div className="flex gap-2">
                <a href="/" rel="noreferrer" target="_blank">
                  <Icon icon="mdi:facebook" className="text-xl" />
                </a>
                <a href="/" rel="noreferrer" target="_blank">
                  <Icon icon="mdi:instagram" className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  )
}
