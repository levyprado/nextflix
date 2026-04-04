import Container from '@/components/layout/container'
import CastSection from '@/components/media/cast-section'
import LastEpisodeCard from '@/components/media/detail/last-episode-card'
import SeasonsGrid from '@/components/media/detail/seasons-grid'
import RecommendationsSection from '@/components/media/recommendations-section'
import TrailersSection from '@/components/media/trailers-section'
import { Button, buttonVariants } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { ROUTES } from '@/lib/routes'
import { getTVShowDetails } from '@/lib/tmdb/api'
import { formatRating, getReleaseYear } from '@/lib/tmdb/utils'
import { cn } from '@/lib/utils'
import {
  Calendar04Icon,
  Film02Icon,
  Globe02Icon,
  PlayIcon,
  PlusSignIcon,
  Share05Icon,
  StarIcon,
  TvIcon,
} from '@hugeicons/core-free-icons'
import Image from 'next/image'
import Link from 'next/link'
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
      <div className='relative h-[50svh] w-full lg:h-[70vh]'>
        <div className='absolute inset-0 -z-10 bg-foreground/10'>
          <Image
            src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
            alt={`${tvShow.name} backdrop`}
            fill
            priority
            sizes='100vw'
            className='object-cover object-center lg:object-[85%_15%]'
          />
          <div className='absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent' />
          <div className='absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent' />
        </div>
      </div>

      <Container className='relative mx-auto -mt-32 flex max-w-7xl flex-col gap-12 md:gap-20 lg:-mt-48'>
        <section className='flow-root space-y-4'>
          {/* Poster Image */}
          <div className='relative float-left mr-4 mb-2 aspect-2/3 w-2/5 max-w-64 shrink-0 overflow-hidden rounded-2xl bg-foreground/10 md:mr-8 md:mb-4'>
            <Image
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              alt={tvShow.name}
              fill
              sizes='(max-width: 768px) 40vw, 256px'
              className='object-cover'
            />
          </div>

          {/* Data */}
          <div className='mb-auto space-y-4'>
            <h1 className='font-heading text-3xl leading-none font-bold text-balance wrap-break-word md:text-4xl lg:text-6xl'>
              {tvShow.name}
            </h1>

            <div className='space-y-4 md:flex md:flex-wrap md:items-center md:gap-4 md:space-y-0'>
              {/* Metadata */}
              <div className='flex flex-wrap items-center gap-3 text-sm'>
                <span className='flex items-center gap-1.5 rounded-full bg-yellow-400/20 px-2.5 py-0.5 text-yellow-400'>
                  <Icon icon={StarIcon} size={16} className='fill-yellow-400' />
                  {formatRating(tvShow.vote_average)}
                </span>
                <span className='flex items-center gap-1.5 text-foreground/60'>
                  <Icon icon={Calendar04Icon} size={16} />
                  {getReleaseYear(tvShow.first_air_date)}
                </span>
                <span className='flex items-center gap-1.5 text-foreground/60'>
                  <Icon icon={TvIcon} size={16} />
                  {tvShow.number_of_seasons}{' '}
                  {tvShow.number_of_seasons === 1 ? 'Season' : 'Seasons'}
                </span>
                <span className='flex items-center gap-1.5 text-foreground/60'>
                  <Icon icon={Film02Icon} size={16} />
                  {tvShow.number_of_episodes}{' '}
                  {tvShow.number_of_episodes === 1 ? 'Episode' : 'Episodes'}
                </span>
              </div>

              {/* Genres */}
              <div className='flex flex-wrap gap-2 text-xs'>
                {tvShow.genres.map((genre) => (
                  <Link
                    key={genre.id}
                    href={ROUTES.TV_SHOW_GENRE(
                      genre.name.toLowerCase().replace(/\s+/g, '-'),
                    )}
                    className='inline-block rounded-full border border-foreground/20 bg-foreground/15 px-2.5 py-0.5 text-foreground/90 backdrop-blur-md'
                  >
                    {genre.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tagline */}
            {tvShow.tagline && (
              <p className='text-foreground/60 italic lg:text-lg'>
                &ldquo;{tvShow.tagline}&rdquo;
              </p>
            )}

            {/* Overview */}
            <p className='max-w-5xl leading-relaxed text-pretty text-foreground/90 lg:text-lg'>
              {tvShow.overview}
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <Button>
                <Icon icon={PlayIcon} className='fill-black' />
                Watch
              </Button>
              <Button variant='secondary'>
                <Icon icon={PlusSignIcon} />
                Watchlist
              </Button>

              {/* TODO: Rating button */}

              {tvShow.homepage && (
                <a
                  href={tvShow.homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonVariants({ variant: 'secondary' }))}
                >
                  <Icon icon={Globe02Icon} />
                  Website
                </a>
              )}
              {tvShow.external_ids.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${tvShow.external_ids.imdb_id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    buttonVariants(),
                    'border-yellow-400/30 bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30',
                  )}
                >
                  <Icon icon={Share05Icon} />
                  IMDB
                </a>
              )}
            </div>
          </div>
        </section>

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
