'use client'
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import { Pagination } from 'swiper'

export default function SwiperHero({ banners }: { banners: any }) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="aspect-[21/8] md:h-auto"
    >
      {banners.map((imagem: any, index: any) => (
        <SwiperSlide key={index}>
          <img
            src={imagem.banner.url}
            alt={imagem.banner.alt}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
