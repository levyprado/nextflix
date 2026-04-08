import Container from '@/components/layout/container'
import { Button, buttonVariants } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { ROUTES } from '@/lib/routes'
import type { MovieDetails, TVShowDetails } from '@/lib/tmdb/types'
import {
  formatGenrePath,
  formatRating,
  formatRuntime,
  getBackdropUrl,
  getPosterUrl,
  getReleaseYear,
} from '@/lib/tmdb/utils'
import { cn } from '@/lib/utils'
import {
  Calendar04Icon,
  ClockIcon,
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
import LogoTitle from './logo-title'
import MetadataChip from './metadata-chip'

type DetailHeroProps = {
  media: MovieDetails | TVShowDetails
}

export default function DetailHero({ media }: DetailHeroProps) {
  const isMovie = 'title' in media

  const backdropUrl = getBackdropUrl(media.backdrop_path, 'original')
  const posterUrl = getPosterUrl(media.poster_path, 'w500')

  const title = isMovie ? media.title : media.name
  const releaseYear = isMovie ? media.release_date : media.first_air_date
  const genreBasePath = isMovie ? ROUTES.MOVIE_GENRE : ROUTES.TV_SHOW_GENRE
  const imdbId = isMovie ? media.imdb_id : media.external_ids.imdb_id

  return (
    <>
      <div className='relative h-[50svh] w-full lg:h-[70vh]'>
        <div className='absolute inset-0 -z-10 bg-foreground/10'>
          {backdropUrl && (
            <Image
              src={backdropUrl}
              alt={`${title} backdrop`}
              fill
              preload={true}
              sizes='100vw'
              className='object-cover object-center lg:object-[85%_15%]'
            />
          )}
          <div className='absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent' />
          <div className='absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent' />
        </div>
      </div>

      <Container className='relative mx-auto -mt-32 max-w-7xl lg:-mt-48'>
        <section className='flow-root space-y-4'>
          <div className='relative float-left mr-4 mb-2 aspect-2/3 w-2/5 max-w-64 shrink-0 overflow-hidden rounded-2xl bg-foreground/10 md:mr-8 md:mb-4'>
            {posterUrl && (
              <Image
                src={posterUrl}
                alt={title}
                fill
                sizes='(max-width: 768px) 40vw, 256px'
                className='object-cover'
              />
            )}
          </div>

          <div className='mb-auto space-y-4'>
            <LogoTitle logos={media.images.logos} altTitle={title} />

            <div className='space-y-4 md:flex md:flex-wrap md:items-center md:gap-4 md:space-y-0'>
              <div className='flex flex-wrap items-center gap-3 text-sm'>
                {media.vote_average > 0 && (
                  <MetadataChip
                    variant='highlight'
                    icon={StarIcon}
                    label={formatRating(media.vote_average)}
                  />
                )}
                <MetadataChip
                  icon={Calendar04Icon}
                  label={getReleaseYear(releaseYear)}
                />
                {isMovie ? (
                  <MetadataChip
                    icon={ClockIcon}
                    label={formatRuntime(media.runtime)}
                  />
                ) : (
                  <>
                    <MetadataChip
                      icon={TvIcon}
                      label={`${media.number_of_seasons} ${media.number_of_seasons === 1 ? 'Season' : 'Seasons'}`}
                    />
                    <MetadataChip
                      icon={Film02Icon}
                      label={`${media.number_of_episodes} ${media.number_of_episodes === 1 ? 'Episode' : 'Episodes'}`}
                    />
                  </>
                )}
              </div>

              <div className='flex flex-wrap gap-2 text-xs'>
                {media.genres.map((genre) => (
                  <Link
                    key={genre.id}
                    href={genreBasePath(formatGenrePath(genre.name))}
                    className='inline-block rounded-full border border-foreground/20 bg-foreground/15 px-2.5 py-0.5 text-foreground/90 backdrop-blur-md transition-colors hover:border-foreground/25 hover:bg-foreground/20'
                  >
                    {genre.name}
                  </Link>
                ))}
              </div>
            </div>

            {media.tagline && (
              <p className='text-foreground/60 italic lg:text-lg'>
                &ldquo;{media.tagline}&rdquo;
              </p>
            )}

            <p className='max-w-5xl leading-relaxed text-pretty text-foreground/90 lg:text-lg'>
              {media.overview}
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

              {media.homepage && (
                <a
                  href={media.homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonVariants({ variant: 'secondary' }))}
                >
                  <Icon icon={Globe02Icon} />
                  Website
                </a>
              )}
              {imdbId && (
                <a
                  href={`https://www.imdb.com/title/${imdbId}`}
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
      </Container>
    </>
  )
}
