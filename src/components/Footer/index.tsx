'use client'
import Link from 'next/link'
import { Container } from '../Partials/Container'
import { Copyright } from './Copyright'
import Icon from '../Adapters/Icon'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import useNavLinks from '@/hooks/useNavLinks'
import useSWR from 'swr'
import { getInfos } from '@/services/prismicData/getInfos'

export default function Footer() {
  const { stringData } = useLang()
  const { navLinks } = useNavLinks()

  const { data: infos } = useSWR('getInfos', async () => {
    const response = await getInfos()
    return response
  })

  return (
    <footer className="border-t">
      <Container>
        <div className="grid grid-cols-12 py-10 gap-2">
          <div className=" col-span-12 md:col-span-4">
            <div className="flex justify-center md:justify-start">
              <div className="flex w-fit items-center justify-center rounded-full bg-black p-1 mb-2">
                <img
                  src="/img/logo.png"
                  data-fancybox
                  data-caption="Single image"
                  alt="Logo"
                  className="w-20 cursor-pointer"
                />
              </div>
            </div>
            <p className="mt-4 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              autem adipisci magnam rerum quae distinctio sequi eius ipsam
              delectus fugiat harum ratione, dignissimos qui soluta
              reprehenderit et laboriosam consequuntur alias!
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 flex gap-4 justify-center md:justify-end items-center flex-wrap">
              {navLinks.map((link) => {
                return (
                  <Link href={link.route} key={link.name}>
                    <strong>{link.name}</strong>
                  </Link>
                )
              })}
            </div>
            <div className="col-span-12 md:col-span-2"></div>

            <div className="col-span-12 md:col-span-4 flex flex-col items-center md:items-end">
              <p className="font-bold text-center md:text-end">
                {stringData(langData.AddressTitle)}
              </p>
              <p className="text-xs text-center md:text-end">
                {infos?.data.endereco}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col items-center md:items-end">
              <p className="font-bold text-center md:text-end">
                Horário de atendimento
              </p>
              <p className="text-xs text-center md:text-end">
                Segunda à sexta, de 8h às 17h
              </p>
            </div>
            <div className="col-span-12 md:col-span-2 flex flex-col items-center md:items-end">
              <p className="font-bold text-center md:text-end">
                {stringData(langData.FollowUs)}
              </p>
              <div className="flex gap-2">
                {infos?.data.facebook && (
                  <a
                    href={infos?.data.facebook}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon icon="mdi:facebook" className="text-2xl" />
                  </a>
                )}
                {infos?.data.instagram && (
                  <a
                    href={infos?.data.instagram}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon icon="mdi:instagram" className="text-2xl" />
                  </a>
                )}
                {infos?.data.linkedin && (
                  <a
                    href={infos?.data.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon icon="mdi:linkedin" className="text-2xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  )
}
