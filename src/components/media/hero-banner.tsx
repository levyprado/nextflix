import { ROUTES } from '@/lib/routes'
import type { Movie, TVShow } from '@/lib/tmdb/types'
import { getBackdropUrl } from '@/lib/tmdb/utils'
import { InformationCircleIcon, PlayIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../layout/container'
import { buttonVariants } from '../ui/button'
import Icon from '../ui/icon'

type HeroBannerProps = {
  media: Movie | TVShow
}

export default function HeroBanner({ media }: HeroBannerProps) {
  const isMovie = 'title' in media
  const title = isMovie ? media.title : media.name
  const detailHref = isMovie
    ? ROUTES.MOVIE_DETAIL(media.id)
    : ROUTES.TV_SHOW_DETAIL(media.id)

  const backdropUrl = getBackdropUrl(media.backdrop_path, 'original')

  return (
    <section className='relative h-[90svh] w-full'>
      <div className='absolute inset-0 -z-10 bg-foreground/10'>
        {backdropUrl && (
          <Image
            src={backdropUrl}
            alt={`${title} Backdrop`}
            fill
            preload={true}
            sizes='100vw'
            className='object-cover'
          />
        )}
        <div className='absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent' />
        <div className='absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent' />
      </div>

      <Container className='absolute bottom-[20%] flex max-w-3xl flex-col gap-2'>
        <h1 className='font-heading text-4xl leading-none font-bold text-balance wrap-break-word uppercase italic lg:text-6xl'>
          {title}
        </h1>
        <p className='line-clamp-3 max-w-xl leading-relaxed text-foreground/75 lg:text-lg'>
          {media.overview}
        </p>
        <div className='mt-3 flex flex-wrap gap-2.5'>
          <Link href={detailHref} className={buttonVariants()}>
            <Icon icon={PlayIcon} className='fill-background' />
            Watch Now
          </Link>
          <Link
            href={detailHref}
            className={buttonVariants({ variant: 'secondary' })}
          >
            <Icon icon={InformationCircleIcon} />
            More Info
          </Link>
        </div>
      </Container>
    </section>
  )
}
