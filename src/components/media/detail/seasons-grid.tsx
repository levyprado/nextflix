import type { Season } from '@/lib/tmdb/types'
import { getPosterUrl, getReleaseYear } from '@/lib/tmdb/utils'
import Image from 'next/image'

type SeasonsGridProps = {
  seasons: Season[]
}

export default function SeasonsGrid({ seasons }: SeasonsGridProps) {
  if (!seasons?.length) return null

  const sortedSeasons = [...seasons].sort(
    (a, b) => b.season_number - a.season_number,
  )

  return (
    <section className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
      <h2 className='font-heading text-xl font-bold md:text-2xl lg:text-3xl'>
        Seasons
      </h2>

      <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
        {sortedSeasons.map((season) => {
          const posterUrl = getPosterUrl(season.poster_path, 'w342')
          return (
            <li
              key={season.id}
              className='group flex flex-col overflow-hidden rounded-lg border border-foreground/10 bg-linear-to-br from-foreground/10 to-foreground/5 transition-colors hover:border-foreground/20'
            >
              <div className='relative flex aspect-2/3 items-center justify-center'>
                {posterUrl ? (
                  <Image
                    src={posterUrl}
                    alt={season.name}
                    width={342}
                    height={513}
                    className='size-full object-cover'
                  />
                ) : (
                  <div className='text-sm text-foreground/60'>No Image</div>
                )}
              </div>
              <div className='flex flex-col gap-2 p-3 text-foreground/60'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-heading leading-tight font-bold text-foreground'>
                    {season.name}
                  </h3>
                  {season.vote_average > 0 && (
                    <span className='inline-block shrink-0 rounded-md bg-yellow-400/20 px-2 py-1 text-xs font-bold text-yellow-400'>
                      {season.vote_average.toFixed(1)}
                    </span>
                  )}
                </div>
                <div className='flex items-center justify-between text-xs'>
                  <p>
                    {season.episode_count}{' '}
                    {season.episode_count === 1 ? 'episode' : 'episodes'}
                  </p>
                  {season.air_date && <p>{getReleaseYear(season.air_date)}</p>}
                </div>
                {season.overview && (
                  <p className='line-clamp-3 text-xs leading-normal'>
                    {season.overview}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
