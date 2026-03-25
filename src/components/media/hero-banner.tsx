import { InformationCircleIcon, PlayIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import Container from '../layout/container'
import { Button } from '../ui/button'
import Icon from '../ui/icon'

export default function HeroBanner() {
  return (
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

      <Container className='absolute bottom-[20%] flex max-w-3xl flex-col gap-2'>
        <h1 className='font-heading text-4xl leading-tight font-bold text-balance wrap-break-word uppercase italic lg:text-6xl lg:leading-none'>
          Mercy
        </h1>
        <p className='line-clamp-3 max-w-xl leading-relaxed text-foreground/75 lg:text-lg'>
          In the near future, a detective stands on trial accused of murdering
          his wife. He has ninety minutes to prove his innocence to the advanced
          AI Judge he once championed, before it determines his fate.
        </p>
        <div className='mt-3 flex flex-wrap gap-2.5'>
          <Button>
            <Icon icon={PlayIcon} className='fill-background' />
            Watch Now
          </Button>
          <Button variant='secondary'>
            <Icon icon={InformationCircleIcon} />
            More Info
          </Button>
        </div>
      </Container>
    </section>
  )
}
