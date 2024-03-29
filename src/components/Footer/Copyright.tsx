/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container } from '../Partials/Container'

export function Copyright() {
  return (
    <div className="py-4 border-t border-t-zinc-600 mt-10 ">
      <Container>
        <div className="flex items-center justify-center md:justify-between flex-col md:flex-row">
          <p className="text-xs m-0">
            Boilerplate Prismic Next 14 - {new Date().getFullYear()} © Todos os direitos
            reservados
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
                  className="inline-block ml-2"
                />
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <p className="flex items-center text-xs m-0">
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
                  className="inline-block ml-2"
                />
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
