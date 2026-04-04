import type { Videos } from '@/lib/tmdb/types'
import { PlayIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import Icon from '../ui/icon'
import ScrollSection from './scroll-section'

type TrailersSectionProps = {
  videos: Videos['results']
}

export default function TrailersSection({ videos }: TrailersSectionProps) {
  const trailers = videos.filter(
    (v) => v.site === 'YouTube' && v.type === 'Trailer',
  )
  if (trailers.length === 0) return null

  return (
    <ScrollSection title='Trailers'>
      {trailers.map((video) => (
        <li key={video.id}>
          <button className='group flex w-64 shrink-0 flex-col gap-1.5'>
            <div className='relative aspect-video overflow-hidden rounded-xl bg-foreground/15'>
              <Image
                src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                alt={video.name}
                fill
                sizes='256px'
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 flex items-center justify-center bg-background/30 transition-colors duration-300 group-hover:bg-background/20'>
                <div className='absolute top-1/2 left-1/2 flex size-12 -translate-1/2 items-center justify-center rounded-full bg-foreground/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-foreground/30'>
                  <Icon icon={PlayIcon} className='fill-foreground' />
                </div>
              </div>
            </div>
            <p className='truncate text-start text-sm font-medium text-foreground/90 transition-colors duration-300 group-hover:text-foreground'>
              {video.name}
            </p>
          </button>
        </li>
      ))}
    </ScrollSection>
  )
}
