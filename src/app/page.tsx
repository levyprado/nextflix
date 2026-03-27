import Container from '@/components/layout/container'
import HeroBanner from '@/components/media/hero-banner'
import MediaCard from '@/components/media/media-card'
import ScrollSection from '@/components/media/scroll-section'
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/lib/tmdb/api'

export default async function HomePage() {
  const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
    getNowPlayingMovies(),
    getPopularMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ])

  const sections = [
    { title: 'Now Playing', items: nowPlaying.results },
    { title: 'Popular Movies', items: popular.results },
    { title: 'Top Rated Movies', items: topRated.results },
    { title: 'Upcoming Movies', items: upcoming.results },
  ]

  return (
    <>
      <HeroBanner />

      <Container as='section' className='-mt-12 flex flex-col gap-16 pb-16'>
        {sections.map((section) => (
          <ScrollSection key={section.title} title={section.title}>
            {section.items.map((item) => (
              <li key={item.id}>
                <MediaCard media={item} />
              </li>
            ))}
          </ScrollSection>
        ))}
      </Container>
    </>
  )
}
