import BackButton from '@/components/back-button'
import Container from '@/components/layout/container'
import MediaCard from '@/components/media/media-card'
import ScrollSection from '@/components/media/scroll-section'
import { Button, buttonVariants } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { getPersonDetails } from '@/lib/tmdb/api'
import {
  formatBirthdayDeathday,
  getBackdropUrl,
  getProfileUrl,
} from '@/lib/tmdb/utils'
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

  const seen = new Set()
  const knownFor = person.combined_credits.cast
    .sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0))
    .filter((m) => (seen.has(m.id) ? false : (seen.add(m.id), true)))
    .slice(0, 20)

  const backdropUrl = getBackdropUrl(knownFor[0].backdrop_path)

  return (
    <div className='@container min-h-screen pb-16'>
      <BackButton />

      <div className='relative h-[16.6svh] w-full lg:h-[23.3vh]'>
        <div className='absolute inset-0 -z-10 bg-foreground/10'>
          {backdropUrl && (
            <Image
              src={backdropUrl}
              alt=''
              fill
              preload={true}
              sizes='100vw'
              className='object-cover object-top'
            />
          )}
          <div className='absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent' />
          <div className='absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent' />
        </div>
      </div>

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

            <div className='flex flex-wrap gap-2 md:gap-3'>
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
                    {formatBirthdayDeathday(person.birthday, person.deathday)}
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

            <p className='max-w-5xl leading-relaxed text-pretty wrap-break-word whitespace-pre-wrap text-foreground/90 lg:text-lg'>
              {person.biography}
            </p>
          </div>
        </section>

        <ScrollSection title='Known For'>
          {knownFor.map((media) => (
            <li key={media.id}>
              <MediaCard media={media} />
            </li>
          ))}
        </ScrollSection>
      </Container>
    </div>
  )
}
