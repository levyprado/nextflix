import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
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

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <>
      <section className='relative h-[50svh] md:h-[70vh]'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src='https://image.tmdb.org/t/p/original/7HKpc11uQfxnw0Y8tRUYn1fsKqE.jpg'
            alt='Backdrop'
            width={2560}
            height={1440}
            className='size-full object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent' />
          <div className='absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent' />
        </div>

        <Container className='mx-auto flex max-w-6xl flex-col gap-12 pt-[30vh] md:pt-[35vh]'>
          <section className='flex flex-col gap-4 md:flex-row md:items-end md:gap-8'>
            {/* Poster Image */}
            <div className='relative aspect-2/3 w-2/5 max-w-64 shrink-0 overflow-hidden rounded-2xl'>
              <Image
                src='https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
                alt={'Movie title'}
                fill
                className='object-cover'
              />
            </div>

            {/* Data */}
            <div className='flex flex-col gap-4'>
              <h1 className='font-heading text-2xl leading-tight font-black tracking-wider md:text-3xl lg:text-5xl'>
                Mercy
              </h1>
              <div className='flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center'>
                {/* Metadata */}
                <div className='flex flex-wrap items-center gap-3'>
                  <span className='flex items-center gap-1.5 rounded-full bg-amber-200/20 px-2.5 py-0.5 text-amber-300'>
                    <Icon
                      icon={StarIcon}
                      size={16}
                      className='fill-amber-300'
                    />
                    6.6
                  </span>
                  <span className='flex items-center gap-1.5 text-foreground/60'>
                    <Icon icon={Calendar04Icon} size={16} />
                    2026
                  </span>
                  <span className='flex items-center gap-1.5 text-foreground/60'>
                    <Icon icon={ClockIcon} size={16} />
                    1h40m
                  </span>
                </div>

                {/* Genres */}
                <div className='flex flex-wrap gap-2 text-xs'>
                  {[...Array(3).keys()].map((i) => (
                    <span
                      key={i}
                      className='inline-block rounded-full border border-foreground/20 bg-background/40 px-2.5 py-0.5 text-foreground/90 backdrop-blur-md'
                    >
                      Action
                    </span>
                  ))}
                </div>
              </div>

              {/* Tagline */}
              <p className='text-foreground/60 italic'>
                &ldquo;Prove your innocence to an AI judge or face
                execution.&rdquo;
              </p>

              {/* Overview */}
              <p className='max-w-prose leading-relaxed text-foreground/90'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, impedit. Deserunt obcaecati delectus sint placeat
                ipsam aliquid quasi ad possimus asperiores id. Repellendus quasi
                et quisquam repudiandae asperiores vero sit.
              </p>

              <div className='mt-3 flex flex-wrap gap-3'>
                <Button>
                  <Icon icon={PlayIcon} className='fill-black' />
                  Watch
                </Button>
                <Button variant='secondary'>
                  <Icon icon={PlusSignIcon} />
                  Watchlist
                </Button>
                {/* TODO: Rating button */}
                <Button variant='secondary'>
                  <Icon icon={Globe02Icon} />
                  Website
                </Button>
                <Button variant='secondary'>
                  <Icon icon={Share05Icon} />
                  IMDB
                </Button>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <h2 className='font-heading text-xl font-bold'>Top Cast</h2>
            <ul className='flex gap-4 overflow-x-auto'>
              {[...Array(10).keys()].map((i) => (
                <li key={i}>
                  <Link
                    href='/actor/123'
                    className='flex w-24 flex-col gap-2.5'
                  >
                    <div className='relative aspect-square overflow-hidden rounded-full'>
                      <Image
                        src='https://image.tmdb.org/t/p/w342/xcCv7C1zNuIr3JeNau9UjZLaVC1.jpg'
                        alt={'Actor name'}
                        fill
                        className='object-cover object-[70%_30%]'
                      />
                    </div>
                    <div className='space-y-0.5 text-center text-xs'>
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
            </ul>
          </section>

          <section className='space-y-4'>
            <h2 className='font-heading text-xl font-bold'>
              Trailers & Videos
            </h2>
            <ul className='flex gap-4 overflow-x-auto'>
              {[...Array(6).keys()].map((i) => (
                <li key={i}>
                  <button className='group flex w-64 flex-col gap-1.5'>
                    <div className='relative aspect-video overflow-hidden rounded-xl bg-foreground/15'>
                      <div className='absolute top-1/2 left-1/2 flex size-12 -translate-1/2 items-center justify-center rounded-full bg-foreground/20 backdrop-blur-md transition-colors group-hover:bg-foreground/30'>
                        <Icon icon={PlayIcon} className='fill-foreground' />
                      </div>
                    </div>
                    <p className='truncate text-start text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground'>
                      Trailer {i}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className='space-y-4'>
            <h2 className='font-heading text-xl font-bold'>
              You Might Also Like
            </h2>
            <ul className='flex gap-4 overflow-x-auto'>
              {[...Array(6).keys()].map((i) => (
                <li
                  key={i}
                  className='group w-36 shrink-0 md:w-44 xl:w-52 2xl:w-56'
                >
                  <Link href='/' className='flex w-full flex-col gap-2'>
                    <div className='relative aspect-2/3 w-full overflow-hidden rounded-xl'>
                      <Image
                        src='https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
                        alt='Poster'
                        width={1400}
                        height={2100}
                        className='size-full object-cover transition-[scale] duration-350 group-hover:scale-107'
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
                            7.2
                          </span>
                        </div>
                      </div>
                      <div className='absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-350 group-hover:opacity-100' />
                    </div>
                    <p className='truncate leading-tight font-semibold md:text-lg'>
                      Fight Club
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </section>
    </>
  )
}
