import BackButton from '@/components/back-button'
import Container from '@/components/layout/container'
import { Button, buttonVariants } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { getPersonDetails } from '@/lib/tmdb/api'
import { getProfileUrl } from '@/lib/tmdb/utils'
import { cn } from '@/lib/utils'
import {
  Calendar03Icon,
  FavouriteIcon,
  FilmIcon,
  Globe02Icon,
  LocationIcon,
  Share05Icon,
} from '@hugeicons/core-free-icons'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const person = await getPersonDetails(Number(id))

  if (!person) notFound()

  const profileUrl = getProfileUrl(person.profile_path)

  return (
    <div className='@container min-h-screen pb-16'>
      <BackButton />

      <div className='relative h-[16.6svh] w-full lg:h-[23.3vh]'></div>

      <Container className='relative mx-auto mt-12 flex max-w-7xl flex-col gap-12 md:mt-20 md:gap-20'>
        <section className='flow-root space-y-4'>
          <div className='relative float-left mr-4 mb-2 aspect-2/3 w-2/5 max-w-[185px] shrink-0 overflow-hidden rounded-2xl bg-foreground/10 md:mr-8 md:mb-4'>
            {profileUrl && (
              <Image
                src={profileUrl}
                alt={person.name}
                fill
                sizes='185px'
                className='object-cover'
              />
            )}
          </div>

          <div className='mb-auto space-y-5'>
            <h1 className='font-heading text-3xl leading-none font-bold text-balance wrap-break-word md:text-4xl lg:text-6xl'>
              {person.name}
            </h1>

            <div className='flex flex-wrap gap-2'>
              {person.known_for_department && (
                <div className='flex items-center gap-1.5 text-sm leading-tight text-foreground/60'>
                  <Icon icon={FilmIcon} className='shrink-0' size={16} />
                  <span>{person.known_for_department}</span>
                </div>
              )}
              {person.birthday && (
                <div className='flex items-center gap-1.5 text-sm leading-tight text-foreground/60'>
                  <Icon icon={Calendar03Icon} className='shrink-0' size={16} />
                  <span>
                    Born{' '}
                    {new Date(person.birthday).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    {person.deathday
                      ? ` — Died ${new Date(person.deathday).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
                      : ` (${new Date().getFullYear() - new Date(person.birthday).getFullYear()} years old)`}
                  </span>
                </div>
              )}
              {person.place_of_birth && (
                <div className='flex items-center gap-1.5 text-sm leading-tight text-foreground/60'>
                  <Icon icon={LocationIcon} className='shrink-0' size={16} />
                  <span>{person.place_of_birth}</span>
                </div>
              )}
            </div>

            <div className='flex flex-wrap gap-3'>
              <Button variant='secondary'>
                <Icon icon={FavouriteIcon} />
                Add Favorite
              </Button>

              {person.homepage && (
                <a
                  href={person.homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonVariants({ variant: 'secondary' }))}
                >
                  <Icon icon={Globe02Icon} />
                  Website
                </a>
              )}

              {person.imdb_id && (
                <a
                  href={`https://www.imdb.com/name/${person.imdb_id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    buttonVariants(),
                    'border-yellow-400/30 bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30',
                  )}
                >
                  <Icon icon={Share05Icon} />
                  IMDb
                </a>
              )}
            </div>

            <p className='max-w-5xl leading-relaxed text-pretty text-foreground/90 lg:text-lg'>
              {person.biography}
            </p>
          </div>
        </section>
      </Container>
    </div>
  )
}
