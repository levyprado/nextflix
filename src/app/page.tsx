import Container from '@/components/layout/container'
import HeroBanner from '@/components/media/hero-banner'
import MediaList from '@/components/media/media-list'
import { MediaRowSkeleton } from '@/components/media/skeletons'
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
      <HeroBanner />

      <Container as='section' className='-mt-12 flex flex-col gap-16 pb-16'>
        {ROWS.map((row) => (
          <Suspense key={row.title} fallback={<MediaRowSkeleton />}>
            <MediaList title={row.title} fetcher={row.fetcher} />
          </Suspense>
        ))}
      </Container>
    </>
  )
}
