import type { Movie, TVShow } from '@/lib/tmdb/types'
import { formatRating } from '@/lib/tmdb/utils'
import Image from 'next/image'
import Link from 'next/link'

type MediaCardProps = {
  media: Movie | TVShow
}

export default function MediaCard({ media }: MediaCardProps) {
  const isMovie = 'title' in media
  const title = isMovie ? media.title : media.name
  const imageUrl = `https://image.tmdb.org/t/p/w500${media.poster_path}`

  return (
    <Link
      href={isMovie ? `/movies/${media.id}` : `/shows/${media.id}`}
      className='group flex w-36 shrink-0 flex-col gap-2 md:w-44 xl:w-52 2xl:w-56'
    >
      <div className='relative aspect-2/3 w-full overflow-hidden rounded-xl'>
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={750}
          className='size-full object-cover transition-[scale] duration-300 group-hover:scale-107'
        />
        <div>
          <div className='absolute top-2 right-2 flex items-center gap-1 rounded-full bg-background/60 px-2 py-0.5 backdrop-blur-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='10'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='fill-yellow-400 text-yellow-400'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
            <span className='text-[10px] font-semibold md:text-xs'>
              {formatRating(media.vote_average)}
            </span>
          </div>
        </div>
        <div className='absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
      </div>
      <p className='line-clamp-2 text-sm leading-tight font-semibold md:text-base'>
        {title}
      </p>
    </Link>
  )
}
