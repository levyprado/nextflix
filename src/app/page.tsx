import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import {
  InformationCircleIcon,
  PlayIcon,
  PlusSignIcon,
} from '@hugeicons/core-free-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section className='relative h-[90svh] w-full'>
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

        <div className='absolute bottom-[20%] flex max-w-3xl flex-col gap-2 px-5 md:px-8 xl:px-12 2xl:px-16'>
          <h1 className='font-heading text-2xl font-extrabold wrap-break-word uppercase italic'>
            Mercy
          </h1>
          <p className='line-clamp-3'>
            In the near future, a detective stands on trial accused of murdering
            his wife. He has ninety minutes to prove his innocence to the
            advanced AI Judge he once championed, before it determines his fate.
          </p>
          <div className='mt-3 flex flex-wrap gap-2.5'>
            <Button>
              <Icon icon={PlayIcon} />
              Watch Now
            </Button>
            <Button variant='secondary'>
              <Icon icon={InformationCircleIcon} />
              More Info
            </Button>
            <Button
              variant='secondary'
              size='icon'
              className='hidden size-11 sm:inline-flex'
            >
              <Icon icon={PlusSignIcon} />
            </Button>
          </div>
        </div>
      </section>

      <section className='-mt-12 flex flex-col gap-16 px-5 pb-16 md:px-8 xl:px-12 2xl:px-16'>
        {/* Sections */}
        {[...Array(6).keys()].map((i) => (
          <section key={i} className='flex flex-col gap-4'>
            <h3 className='text-lg font-semibold md:text-xl xl:text-2xl'>
              For You
            </h3>
            <ul className='flex gap-3 overflow-x-auto [scrollbar-width:none] xl:gap-4'>
              {[...Array(10).keys()].map((i) => (
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
        ))}
      </section>
    </>
  )
}
