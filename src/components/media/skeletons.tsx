import Container from '../layout/container'
import Skeleton from '../ui/skeleton'

export function MediaCardSkeleton() {
  return (
    <div className='flex w-36 shrink-0 flex-col gap-3 md:w-44 xl:w-52 2xl:w-56'>
      <div className='flex flex-col gap-2'>
        <Skeleton className='aspect-2/3 w-full rounded-xl' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    </div>
  )
}

function ScrollSectionSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
      <Skeleton className='h-7 w-44 md:h-8 md:w-56 lg:h-9 lg:w-72' />
      <ul className='no-scrollbar flex gap-3 overflow-x-auto xl:gap-4'>
        {children}
      </ul>
    </section>
  )
}

export function MediaRowSkeleton() {
  return (
    <ScrollSectionSkeleton>
      {[...Array(20).keys()].map((i) => (
        <li key={i}>
          <MediaCardSkeleton />
        </li>
      ))}
    </ScrollSectionSkeleton>
  )
}

export function HeroBannerSkeleton() {
  return (
    <div className='relative h-[90svh] w-full animate-pulse bg-foreground/10'>
      <div>
        <div className='absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent' />
        <div className='absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent' />
      </div>

      <Container className='absolute bottom-[20%] flex w-full max-w-3xl flex-col'>
        <Skeleton className='h-9 w-64 lg:h-14 lg:w-4/6' />
        <div className='mt-6 space-y-3'>
          {[...Array(3).keys()].map((i) => (
            <Skeleton key={i} className='h-4 w-full lg:h-5' />
          ))}
        </div>
        <div className='mt-6 flex flex-wrap gap-2.5'>
          <Skeleton className='h-11 w-40 rounded-full' />
          <Skeleton className='h-11 w-40 rounded-full' />
        </div>
      </Container>
    </div>
  )
}

export function DetailPageSkeleton() {
  return (
    <div className='min-h-[150vh] pb-16'>
      {/* Backdrop */}
      <div className='relative h-[50svh] w-full animate-pulse bg-foreground/10 lg:h-[70vh]'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent' />
          <div className='absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent' />
        </div>
      </div>

      <Container className='relative mx-auto -mt-32 flex max-w-7xl flex-col gap-12 md:gap-20 lg:-mt-48'>
        <div className='space-y-4'>
          {/* Poster Image */}
          <div className='float-left mr-4 mb-2 aspect-2/3 w-2/5 max-w-64 shrink-0 overflow-hidden rounded-2xl bg-foreground/10 md:mr-8 md:mb-4' />

          {/* Data */}
          <div className='mb-auto space-y-4 lg:space-y-8'>
            <div className='flex flex-col gap-2'>
              <Skeleton className='h-16 w-full lg:h-28 lg:w-5/8' />
            </div>

            <div className='space-y-4 md:flex md:flex-wrap md:items-center md:gap-4 md:space-y-0'>
              {/* Metadata */}
              <div className='flex flex-wrap items-center gap-3 text-sm'>
                {[...Array(3).keys()].map((i) => (
                  <Skeleton key={i} className='h-5 w-16' />
                ))}
              </div>

              {/* Genres */}
              <div className='flex flex-wrap gap-2 text-xs'>
                {[...Array(2).keys()].map((i) => (
                  <Skeleton key={i} className='h-5 w-18 rounded-full' />
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div className='flex flex-col gap-2'>
              <Skeleton className='h-5 w-7/8 lg:w-3/8' />
              <Skeleton className='h-5 w-1/3 lg:hidden' />
            </div>

            {/* Overview */}
            <div className='flex flex-col gap-3'>
              <Skeleton className='h-5 w-full' />
              <Skeleton className='h-5 w-full' />
              <Skeleton className='h-5 w-full' />
              <Skeleton className='h-5 w-1/2' />
              <Skeleton className='h-5 w-full lg:hidden' />
              <Skeleton className='h-5 w-full lg:hidden' />
            </div>

            <div className='mt-6 flex flex-wrap gap-3'>
              {[...Array(4).keys()].map((i) => (
                <Skeleton key={i} className='h-11 w-36 rounded-full' />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
