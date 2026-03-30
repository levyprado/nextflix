import { Movie } from '@/lib/tmdb/types'
import MediaCard from './media-card'
import ScrollSection from './scroll-section'

type RecommendationsSectionProps = {
  recommendations: Movie[]
}

export default function RecommendationsSection({
  recommendations,
}: RecommendationsSectionProps) {
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
