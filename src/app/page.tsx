import SwiperHero from '@/components/Swipers/SwiperHero'
import SectionFaq from '@/components/Sections/SectionFaq'
import { Metadata } from 'next'
import { SectionInstagram } from '@/components/Sections/SectionInstagram'

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
  const banners = [
    {
      banner: {
        url: 'https://via.placeholder.com/1920x1080',
        alt: 'Banner 1',
      },
    },
    {
      banner: {
        url: 'https://via.placeholder.com/1920x1080',
        alt: 'Banner 1',
      },
    },
  ]

  return (
    <main>
      <SwiperHero banners={banners} />
      <div>
        <SectionFaq />
        <SectionInstagram />
      </div>
    </main>
  )
}
