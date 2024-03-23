import SwiperHero from "@/components/Swipers/SwiperHero";

export default async function Home() {
  const banners = [
    {
      banner: {
        url: 'https://via.placeholder.com/1920x1080',
        alt: 'Banner 1',
      }
    },
    {
      banner: {
        url: 'https://via.placeholder.com/1920x1080',
        alt: 'Banner 1',
      }
    }
  ]

  return (
    <main>
      <SwiperHero banners={banners} />
    </main>
  );
}
