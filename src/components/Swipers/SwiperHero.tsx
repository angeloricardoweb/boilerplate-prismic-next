/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

export default function SwiperHero({ banners }: { banners: any }) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="aspect-[21/8] md:h-auto"
    >
      {banners.map((imagem, index) => (
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
