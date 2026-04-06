import Container from '@/components/layout/container'
import CastSection from '@/components/media/cast-section'
import DetailHero from '@/components/media/detail/detail-hero'
import RecommendationsSection from '@/components/media/recommendations-section'
import TrailersSection from '@/components/media/trailers-section'
import { getMovieDetails } from '@/lib/tmdb/api'
import { notFound } from 'next/navigation'

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const movie = await getMovieDetails(Number(id))

  if (!movie) notFound()

  return (
    <div className='min-h-screen pb-16'>
      <DetailHero media={movie} />

      <Container className='relative mx-auto mt-12 flex max-w-7xl flex-col gap-12 md:mt-20 md:gap-20'>
        <CastSection cast={movie.credits.cast} />
        <TrailersSection videos={movie.videos.results} />
        <RecommendationsSection
          recommendations={movie.recommendations.results}
        />
      </Container>
    </div>
  )
}
