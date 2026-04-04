import Container from '@/components/layout/container'
import HeroSection from '@/components/media/hero-section'
import MediaList from '@/components/media/media-list'
import {
  HeroBannerSkeleton,
  MediaRowSkeleton,
} from '@/components/media/skeletons'
import { MOVIE_GENRES } from '@/lib/constants'
import {
  getMoviesByGenre,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingAll,
  getTrendingTVShows,
  getUpcomingMovies,
} from '@/lib/tmdb/api'
import { Suspense } from 'react'

const [ACTION, COMEDY, HORROR, THRILLER] = [28, 35, 27, 53].map(
  (id) => MOVIE_GENRES.find((g) => g.id === id)!,
)

const ROWS = [
  { title: 'Trending Now', fetcher: getTrendingAll },
  { title: 'Popular Movies', fetcher: getPopularMovies },
  { title: 'Trending TV Shows', fetcher: getTrendingTVShows },
  { title: 'Top Rated', fetcher: getTopRatedMovies },
  {
    title: 'Explosive Action Hits',
    fetcher: () => getMoviesByGenre(ACTION.id),
  },
  {
    title: 'Laugh Out Loud Comedy',
    fetcher: () => getMoviesByGenre(COMEDY.id),
  },
  { title: 'Terrifying Horror', fetcher: () => getMoviesByGenre(HORROR.id) },
  {
    title: 'Pulse-Pounding Thriller Hits',
    fetcher: () => getMoviesByGenre(THRILLER.id),
  },
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
