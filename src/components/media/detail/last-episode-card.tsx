import type { Episode } from '@/lib/tmdb/types'
import { formatAirDate, formatRuntime, getStillUrl } from '@/lib/tmdb/utils'
import Image from 'next/image'

type LastEpisodeCardProps = {
  episode: Episode
}

export default function LastEpisodeCard({ episode }: LastEpisodeCardProps) {
  if (!episode || !episode.still_path) return null

  const stillUrl = getStillUrl(episode.still_path, 'w300')

  return (
    <section className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
      <h2 className='font-heading text-xl font-bold md:text-2xl lg:text-3xl'>
        Last Episode
      </h2>

      <div className='from flex flex-col gap-3 rounded-lg bg-linear-to-br from-foreground/10 to-foreground/5 p-4 md:flex-row md:items-center md:gap-6 md:p-6'>
        <div className='relative w-full shrink-0 overflow-hidden rounded-lg bg-foreground/10 md:w-60'>
          {stillUrl && (
            <Image
              src={stillUrl}
              alt={episode.name}
              width={342}
              height={192}
              className='w-full'
            />
          )}
        </div>

        <div className='flex w-full flex-col gap-2'>
          <div className='flex items-start justify-between gap-4'>
            <div className='flex flex-col'>
              <h3 className='font-heading text-xl leading-tight font-semibold text-balance'>
                {episode.name}
              </h3>
              <p className='text-foreground/60'>
                S{episode.season_number}E{episode.episode_number}
                <span className='mx-2 inline-block'>•</span>
                {formatAirDate(episode.air_date)}
              </p>
            </div>
            {episode.vote_average > 0 && (
              <div className='flex flex-col items-center'>
                <span className='text-lg leading-tight font-bold text-yellow-400'>
                  {episode.vote_average.toFixed(1)}
                </span>
                <span className='text-sm leading-tight text-foreground/60'>
                  Rating
                </span>
              </div>
            )}
          </div>
          {episode.overview && (
            <p className='text-sm leading-relaxed text-pretty text-foreground/90'>
              {episode.overview}
            </p>
          )}
          {episode.runtime > 0 && (
            <p className='text-sm text-foreground/60'>
              {formatRuntime(episode.runtime)}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
