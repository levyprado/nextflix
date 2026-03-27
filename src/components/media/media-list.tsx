import type { Movie, PaginatedResponse, TVShow } from '@/lib/tmdb/types'
import MediaCard from './media-card'
import ScrollSection from './scroll-section'

type MediaListProps = {
  title: string
  fetcher: () => Promise<PaginatedResponse<Movie | TVShow>>
}

export default async function MediaList({ title, fetcher }: MediaListProps) {
  const { results } = await fetcher()

  return (
    <ScrollSection title={title}>
      {results.map((media) => (
        <li key={media.id}>
          <MediaCard media={media} />
        </li>
      ))}
    </ScrollSection>
  )
}
