import BackButton from '@/components/back-button'
import Container from '@/components/layout/container'
import CastSection from '@/components/media/cast-section'
import DetailHero from '@/components/media/detail/detail-hero'
import LastEpisodeCard from '@/components/media/detail/last-episode-card'
import SeasonsGrid from '@/components/media/detail/seasons-grid'
import RecommendationsSection from '@/components/media/recommendations-section'
import TrailersSection from '@/components/media/trailers-section'
import { getTVShowDetails } from '@/lib/tmdb/api'
import { notFound } from 'next/navigation'

export default async function TVShowDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const tvShow = await getTVShowDetails(Number(id))

  if (!tvShow) notFound()

  return (
    <div className='min-h-screen pb-16'>
      <BackButton />

      <DetailHero media={tvShow} />

      <Container className='relative mx-auto mt-12 flex max-w-7xl flex-col gap-12 md:mt-20 md:gap-20'>
        <CastSection cast={tvShow.credits.cast} />
        <TrailersSection videos={tvShow.videos.results} />
        <LastEpisodeCard episode={tvShow.last_episode_to_air} />
        <SeasonsGrid seasons={tvShow.seasons} />
        <RecommendationsSection
          recommendations={tvShow.recommendations.results}
        />
      </Container>
    </div>
  )
}
