import Container from '@/components/layout/container'
import HeroSection from '@/components/media/hero-section'
import MediaList from '@/components/media/media-list'
import {
  HeroBannerSkeleton,
  MediaRowSkeleton,
} from '@/components/media/skeletons'
import {
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getThrillerMovies,
  getTopRatedMovies,
  getTrendingAll,
  getTrendingTVShows,
  getUpcomingMovies,
} from '@/lib/tmdb/api'
import { Suspense } from 'react'

const ROWS = [
  { title: 'Trending Now', fetcher: getTrendingAll },
  { title: 'Popular Movies', fetcher: getPopularMovies },
  { title: 'Trending TV Shows', fetcher: getTrendingTVShows },
  { title: 'Top Rated', fetcher: getTopRatedMovies },
  { title: 'Explosive Action Hits', fetcher: getActionMovies },
  { title: 'Laugh Out Loud Comedy', fetcher: getComedyMovies },
  { title: 'Terrifying Horror', fetcher: getHorrorMovies },
  { title: 'Pulse-Pounding Thriller Hits', fetcher: getThrillerMovies },
  { title: 'New Releases', fetcher: getNowPlayingMovies },
  { title: 'Coming Soon', fetcher: getUpcomingMovies },
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
