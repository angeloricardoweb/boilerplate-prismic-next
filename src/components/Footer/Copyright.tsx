import React from 'react'
import { Container } from '../Partials/Container'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'

export function Copyright() {
  const { stringData } = useLang()

  return (
    <div className="border-t border-t-zinc-600 py-4">
      <Container>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p className="m-0 text-xs text-center md:text-start">
            Boilerplate Prismic Next 14 - {new Date().getFullYear()} ©{' '}
            {stringData(langData.AllRightsReserved)}
          </p>

          <div className="flex items-center">
            <p className="flex items-center text-xs">
              <a
                href="https://www.bredi.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Made in
                <img
                  src="/next.svg"
                  alt="next"
                  width={48}
                  className="ml-2 inline-block"
                />
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <p className="m-0 flex items-center text-xs">
              <a
                href="https://www.bredi.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Powered by
                <img
                  src="/vercel.svg"
                  alt="vercel"
                  width={48}
                  className="ml-2 inline-block"
                />
              </a>
            </p>
          </div>

          {/* <div>
            <a href="https://www.bredi.com.br/" target="blank" rel="noreferrer">
              <small className="flex flex-row items-center gap-2">
                Desenvolvido por
                <strong>Bredi</strong>
                <img src="/img/logos/logo-bredi.svg" alt="logo bredi" />
              </small>
            </a>
          </div> */}
        </div>
      </Container>
    </div>
  )
}
