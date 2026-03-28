import { getTrendingAll } from '@/lib/tmdb/api'
import HeroBanner from './hero-banner'

export default async function HeroSection() {
  const { results } = await getTrendingAll()
  const media = results[0]

  return <HeroBanner media={media} />
}
