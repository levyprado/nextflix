import type { Movie, TVShow } from '@/lib/tmdb/types'
import MediaCard from './media-card'
import ScrollSection from './scroll-section'

type RecommendationsSectionProps = {
  recommendations: Movie[] | TVShow[]
}

export default function RecommendationsSection({
  recommendations,
}: RecommendationsSectionProps) {
  if (recommendations.length === 0) return null

  return (
    <ScrollSection title='You Might Also Like'>
      {recommendations.map((media) => (
        <li key={media.id}>
          <MediaCard media={media} />
        </li>
      ))}
    </ScrollSection>
  )
}
