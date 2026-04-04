import { ROUTES } from '@/lib/routes'
import type { CastMember } from '@/lib/tmdb/types'
import { UserIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../ui/icon'
import ScrollSection from './scroll-section'

type CastSectionProps = {
  cast: CastMember[]
}

export default async function CastSection({ cast }: CastSectionProps) {
  if (cast.length === 0) return null

  return (
    <ScrollSection title='Top Cast'>
      {cast.slice(0, 10).map((member) => (
        <li key={member.id}>
          <Link
            href={ROUTES.PERSON(member.id)}
            className='group flex w-24 flex-col gap-2.5 md:w-32 lg:w-40'
          >
            <div className='relative flex aspect-square items-center justify-center overflow-hidden rounded-full bg-foreground/10'>
              {member.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                  alt={member.name}
                  fill
                  sizes='160px'
                  className='object-cover object-[70%_30%] transition-[scale] duration-300 group-hover:scale-105'
                />
              ) : (
                <Icon
                  icon={UserIcon}
                  size={52}
                  className='md:size-16 lg:size-20'
                />
              )}
            </div>
            <div className='space-y-0.5 text-center text-xs md:text-sm lg:text-base'>
              <p className='truncate leading-tight font-semibold text-foreground/90'>
                {member.name}
              </p>
              <p className='truncate leading-tight text-foreground/60'>
                {member.character}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ScrollSection>
  )
}
