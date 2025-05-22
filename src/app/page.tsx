import SwiperHero from '@/components/Swipers/SwiperHero'
import SectionFaq from '@/components/Sections/SectionFaq'
import { Metadata } from 'next'
import { getHeroBanners } from '@/services/prismicData/getHeroBanners'
import { Button } from '@/components/Buttons/Button'
import { ArrowRightIcon } from 'lucide-react'
// import { SectionInstagram } from '@/components/Sections/SectionInstagram'

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      images: [
        {
          url: 'https://' + process.env.VERCEL_URL + '/seo.png',
        },
      ],
    },
  }
}

export default async function Home() {
  const banners = await getHeroBanners()
  return (
    <main>
      {banners && <SwiperHero banners={banners.data} />}
      <div>
        <div className="flex justify-center items-center my-10 flex-col gap-4 w-full">
          <div className="flex items-center gap-4 flex-wrap">
            <Button variant="default" isLoading={false} effect="expandIcon">
              Primary + Icon
            </Button>
            <Button effect="gradientSlideShow">Gradient slide show</Button>
            <Button
              variant="destructive"
              effect="expandIcon"
              icon={ArrowRightIcon}
              isLoading={true}
              iconPlacement="right"
            >
              Secondary + Icon
            </Button>
            <Button
              variant="ghost"
              effect="shine"
              icon={ArrowRightIcon}
              iconPlacement="right"
            >
              Outline
            </Button>
            <Button
              variant="link"
              effect="shineHover"
              icon={ArrowRightIcon}
              iconPlacement="right"
            >
              Ghost + Icon
            </Button>
            <Button
              variant="outline"
              effect="expandIcon"
              icon={ArrowRightIcon}
              iconPlacement="right"
            >
              Danger + Icon
            </Button>
          </div>
        </div>
        <SectionFaq />

        {/* <SectionInstagram /> */}
      </div>
    </main>
  )
}
