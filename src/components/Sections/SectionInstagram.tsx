'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import FadeAnimation from '../Animations/FadeAnimation'

export function SectionInstagram() {
  /* update the token with your instagram token */
  const token =
    'IGQWROQTdkUnpjQnVKelNLZsadsdisdjfnskMk1oTWhCcF9uWTcyOaswlls254a598asda26UhrSzk1MHFoYVRjUk9LWTRGcG4tWGJvUTdhYVc2MnlVR1VSdwZDZD'

  const { data, error } = useFetch(
    `https://graph.instagram.com/me/media?fields=id,username,thumbnail_url,media_url,profile_pic,media_type,permalink&access_token=${token}`,
  )
  if (error) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5 mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <img
                src="/img/logos/logo-instagram.svg"
                alt="{informationsInstagram?.data.logo.alt as string}"
              />
              <p className="text-black">Siga-nos no Instagram</p>
            </div>
            <FadeAnimation direction="up">
              <p className="text-4xl font-bold text-black mb-2 text-center md:text-start">
                Acompanhe as novidades, deixe o like e compartilhe
              </p>
              <p className="text-black text-center md:text-start">
                @‌bolilerplaitePrismic
              </p>
            </FadeAnimation>
          </div>
          <div className="col-span-12 md:col-span-7">
            {/* To enable dynamic swiper remove the "!" */}
            {data && data.data ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[Pagination, Navigation, Autoplay]}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {data?.data.map((photo: any, index: any) => {
                  if (index >= 15) return null
                  return (
                    <SwiperSlide key={photo.id}>
                      <a href={photo.permalink} target="__blank">
                        <div className="aspect-[6/6] shadow-md shadow-black/30">
                          <img
                            src={
                              photo.media_type === 'IMAGE' ||
                              photo.media_type === 'CAROUSEL_ALBUM'
                                ? photo.media_url
                                : photo.thumbnail_url
                            }
                            alt="postagem do instagram"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </a>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            ) : (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <a href="#" target="__blank">
                    <div className="aspect-[6/6] shadow-md shadow-black/30">
                      <img
                        src="/img/temp/img-mockup-instagram.png"
                        alt="postagem do instagram"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" target="__blank">
                    <div className="aspect-[6/6]] shadow-md shadow-black/30">
                      <img
                        src="/img/temp/img-mockup-instagram.png"
                        alt="postagem do instagram"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" target="__blank">
                    <div className="aspect-[6/6] shadow-md shadow-black/30">
                      <img
                        src="/img/temp/img-mockup-instagram.png"
                        alt="postagem do instagram"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" target="__blank">
                    <div className="aspect-[6/6] shadow-md shadow-black/30">
                      <img
                        src="/img/temp/img-mockup-instagram.png"
                        alt="postagem do instagram"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

function useFetch(url: string) {
  const [data, setData] = React.useState<any>(null)
  const [error, setError] = React.useState<any>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [url])

  return { data, error }
}
