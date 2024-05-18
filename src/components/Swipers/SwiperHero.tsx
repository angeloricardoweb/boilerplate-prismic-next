'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

type SwiperHeroProps = {
  banners: { banner: { url: string; alt: string } }[]
}

export default function SwiperHero({ banners }: SwiperHeroProps) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="aspect-[21/8] md:h-auto"
    >
      {banners.map((imagem, index: number) => (
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
