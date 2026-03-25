import Container from '@/components/layout/container'
import HeroBanner from '@/components/media/hero-banner'
import MediaCard from '@/components/media/media-card'
import ScrollSection from '@/components/media/scroll-section'

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <Container as='section' className='-mt-12 flex flex-col gap-16 pb-16'>
        {[...Array(6).keys()].map((i) => (
          <ScrollSection title='For You' key={i}>
            {[...Array(10).keys()].map((i) => (
              <li key={i}>
                <MediaCard />
              </li>
            ))}
          </ScrollSection>
        ))}
      </Container>
    </>
  )
}
