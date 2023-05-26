/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { navLinks } from '../Header/NavLinks'
import Container from '../Partials/Container'
import { Copyright } from './Copyright'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex justify-between flex-wrap gap-10">
          <div className="w-[320px]">
            <img src="/img/logo.png" alt="Logo" />

            <small className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              autem adipisci magnam rerum quae distinctio sequi eius ipsam
              delectus fugiat harum ratione, dignissimos qui soluta
              reprehenderit et laboriosam consequuntur alias!
            </small>
          </div>

          <div className="flex gap-10 flex-wrap">
            <div className="flex flex-col w-[320px]">
              <strong>Encontre nosso escritório</strong>
              <small>
                Rodovia Augusto Montenegro, 4300, Parque Office, Torre Norte,
                Sala 614N Belém - Pará
              </small>
              <strong className="mt-4">Horário de atendimento</strong>
              <small>Segunda à sexta, de 8h às 17h</small>
            </div>

            <div className="flex flex-col gap-5 w-[80px]">
              {navLinks.map((link) => {
                return (
                  <Link href={link.route} key={link.name}>
                    <strong>{link.name}</strong>
                  </Link>
                )
              })}
            </div>

            <div className="flex flex-col w-[80px]">
              <strong>Siga nos</strong>
              <div className="flex gap-2">
                <a href="/" rel="noreferrer" target="_blank">
                  <Icon icon="mdi:facebook" className="text-white text-xl" />
                </a>
                <a href="/" rel="noreferrer" target="_blank">
                  <Icon icon="mdi:instagram" className="text-white text-xl" />
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
