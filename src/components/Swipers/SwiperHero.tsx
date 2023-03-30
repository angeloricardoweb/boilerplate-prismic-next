/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { BannerDTO } from '../../protocols/prismic/dtos'

export default function SwiperHero({ banners }: { banners: BannerDTO[] }) {
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
