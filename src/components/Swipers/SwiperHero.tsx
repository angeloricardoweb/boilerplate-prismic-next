'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { BannersDocumentData } from '../../../prismicio-types'

export default function SwiperHero({
  banners,
}: {
  banners: BannersDocumentData
}) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="aspect-[580/846] md:aspect-[2/1] h-auto"
    >
      {banners.items.map((imagem, index: number) => (
        <SwiperSlide key={index}>
          <picture>
            <source
              srcSet={imagem.banner_mobile.url as string}
              media="(max-width: 640px)"
            />
            <source
              srcSet={imagem.banner_desktop.url as string}
              media="(min-width: 640px)"
            />
            <img
              src={imagem.banner_desktop.url as string}
              alt={'banner'}
              className="h-full w-full object-cover"
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
