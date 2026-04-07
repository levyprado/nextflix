import { ROUTES } from '@/lib/routes'
import type { Movie, TVShow } from '@/lib/tmdb/types'
import { formatRating, getPosterUrl } from '@/lib/tmdb/utils'
import { StarIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../ui/icon'

type MediaCardProps = {
  media: Movie | TVShow
}

export default function MediaCard({ media }: MediaCardProps) {
  const isMovie = 'title' in media
  const title = isMovie ? media.title : media.name
  const detailHref = isMovie
    ? ROUTES.MOVIE_DETAIL(media.id)
    : ROUTES.TV_SHOW_DETAIL(media.id)

  const posterUrl = getPosterUrl(media.poster_path, 'w500')

  return (
    <Link
      href={detailHref}
      className='group flex w-36 shrink-0 flex-col gap-2 md:w-44 xl:w-52 2xl:w-56'
    >
      <div className='relative aspect-2/3 w-full overflow-hidden rounded-xl bg-foreground/10'>
        {posterUrl && (
          <Image
            src={posterUrl}
            alt={title}
            fill
            sizes='(max-width: 768px) 144px, (max-width: 1280px) 176px, 208px'
            className='size-full object-cover transition-[scale] duration-300 group-hover:scale-107'
          />
        )}
        <div className='absolute top-2 right-2 flex items-center gap-1 rounded-full bg-background/60 px-2 py-0.5 backdrop-blur-md'>
          <Icon
            icon={StarIcon}
            size={10}
            className='fill-yellow-400 text-yellow-400'
          />
          <span className='text-[10px] font-semibold md:text-xs'>
            {formatRating(media.vote_average)}
          </span>
        </div>
        <div className='absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
      </div>
      <p className='line-clamp-2 text-sm leading-tight font-semibold md:text-base'>
        {title}
      </p>
    </Link>
  )
}
