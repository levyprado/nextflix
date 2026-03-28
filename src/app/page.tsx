import Container from '@/components/layout/container'
import HeroSection from '@/components/media/hero-section'
import MediaList from '@/components/media/media-list'
import {
  HeroBannerSkeleton,
  MediaRowSkeleton,
} from '@/components/media/skeletons'
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/lib/tmdb/api'
import { Suspense } from 'react'

const ROWS = [
  { title: 'Now Playing', fetcher: getNowPlayingMovies },
  { title: 'Popular Movies', fetcher: getPopularMovies },
  { title: 'Top Rated Movies', fetcher: getTopRatedMovies },
  { title: 'Upcoming', fetcher: getUpcomingMovies },
]

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<HeroBannerSkeleton />}>
        <HeroSection />
      </Suspense>

      <Container
        as='section'
        className='relative -mt-12 flex flex-col gap-16 pb-16'
      >
        {ROWS.map((row) => (
          <Suspense key={row.title} fallback={<MediaRowSkeleton />}>
            <MediaList title={row.title} fetcher={row.fetcher} />
          </Suspense>
        ))}
      </Container>
    </>
  )
}
