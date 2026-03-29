import Container from '@/components/layout/container'
import { Button, buttonVariants } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { ROUTES } from '@/lib/routes'
import { getMovieDetails } from '@/lib/tmdb/api'
import { formatRating, formatRuntime, getReleaseYear } from '@/lib/tmdb/utils'
import { cn } from '@/lib/utils'
import {
  Calendar04Icon,
  ClockIcon,
  Globe02Icon,
  PlayIcon,
  PlusSignIcon,
  Share05Icon,
  StarIcon,
} from '@hugeicons/core-free-icons'
import Image from 'next/image'
import Link from 'next/link'
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
      <div className='relative h-[50svh] w-full lg:h-[70vh]'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={`${movie.title} backdrop`}
            fill
            priority
            sizes='100vw'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent' />
          <div className='absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent' />
        </div>
      </div>

      <Container className='relative mx-auto -mt-32 flex max-w-7xl flex-col gap-12 md:gap-20 lg:-mt-48'>
        <section className='flow-root space-y-4'>
          {/* Poster Image */}
          <div className='relative float-left mr-4 mb-2 aspect-2/3 w-2/5 max-w-64 shrink-0 overflow-hidden rounded-2xl md:mr-8 md:mb-4'>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              fill
              sizes='(max-width: 768px) 40vw, 256px'
              className='object-cover'
            />
          </div>

          {/* Data */}
          <div className='mb-auto space-y-4'>
            <h1 className='font-heading text-3xl leading-none font-bold text-balance md:text-4xl lg:text-6xl'>
              {movie.title}
            </h1>

            <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center'>
              {/* Metadata */}
              <div className='flex flex-wrap items-center gap-3 text-sm'>
                <span className='flex items-center gap-1.5 rounded-full bg-amber-200/20 px-2.5 py-0.5 text-amber-300'>
                  <Icon icon={StarIcon} size={16} className='fill-amber-300' />
                  {formatRating(movie.vote_average)}
                </span>
                <span className='flex items-center gap-1.5 text-foreground/60'>
                  <Icon icon={Calendar04Icon} size={16} />
                  {getReleaseYear(movie.release_date)}
                </span>
                <span className='flex items-center gap-1.5 text-foreground/60'>
                  <Icon icon={ClockIcon} size={16} />
                  {formatRuntime(movie.runtime)}
                </span>
              </div>

              {/* Genres */}
              <div className='flex flex-wrap gap-2 text-xs'>
                {movie.genres.map((genre) => (
                  <Link
                    key={genre.id}
                    href={ROUTES.MOVIE_GENRE(
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
            {movie.tagline && (
              <p className='text-foreground/60 italic lg:text-lg'>
                &ldquo;{movie.tagline}&rdquo;
              </p>
            )}

            {/* Overview */}
            <p className='leading-relaxed text-pretty text-foreground/90 lg:text-lg'>
              {movie.overview}
            </p>

            <div className='flex flex-wrap gap-3'>
              <Button>
                <Icon icon={PlayIcon} className='fill-black' />
                Watch
              </Button>
              <Button variant='secondary'>
                <Icon icon={PlusSignIcon} />
                Watchlist
              </Button>

              {/* TODO: Rating button */}

              {movie.homepage && (
                <a
                  href={movie.homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonVariants({ variant: 'secondary' }))}
                >
                  <Icon icon={Globe02Icon} />
                  Website
                </a>
              )}
              {movie.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonVariants({ variant: 'secondary' }))}
                >
                  <Icon icon={Share05Icon} />
                  IMDB
                </a>
              )}
            </div>
          </div>
        </section>

        {/* <ScrollSection title='Top Cast'>
          {[...Array(12).keys()].map((i) => (
            <li key={i}>
              <Link
                href='/actor/123'
                className='group flex w-24 flex-col gap-2.5 md:w-32 lg:w-40'
              >
                <div className='relative aspect-square overflow-hidden rounded-full'>
                  <Image
                    src='https://image.tmdb.org/t/p/w342/xcCv7C1zNuIr3JeNau9UjZLaVC1.jpg'
                    alt={'Actor name'}
                    fill
                    className='object-cover object-[70%_30%] transition-[scale] group-hover:scale-107'
                  />
                </div>
                <div className='space-y-0.5 text-center text-xs md:text-sm lg:text-base'>
                  <p className='truncate leading-tight font-semibold text-foreground/90'>
                    Chris Pratt
                  </p>
                  <p className='truncate leading-tight text-foreground/60'>
                    Judge Maddox
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ScrollSection> */}
        {/* <ScrollSection title='Trailers & Videos'>
          {[...Array(6).keys()].map((i) => (
            <li key={i}>
              <button className='group flex w-64 flex-col gap-1.5'>
                <div className='relative aspect-video overflow-hidden rounded-xl bg-foreground/15'>
                  <div className='absolute inset-0 flex items-center justify-center bg-background/30 transition-colors group-hover:bg-background/20'>
                    <div className='absolute top-1/2 left-1/2 flex size-12 -translate-1/2 items-center justify-center rounded-full bg-foreground/20 backdrop-blur-md transition-colors group-hover:bg-foreground/30'>
                      <Icon icon={PlayIcon} className='fill-foreground' />
                    </div>
                  </div>
                </div>
                <p className='truncate text-start text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground'>
                  Trailer {i}
                </p>
              </button>
            </li>
          ))}
        </ScrollSection> */}
        {/* <ScrollSection title='You Might Also Like'>
          {[...Array(6).keys()].map((i) => (
            <li key={i}>
              <MediaCard />
            </li>
          ))}
        </ScrollSection> */}
      </Container>
    </div>
  )
}
