import Container from '@/components/layout/container'
import Skeleton from '@/components/ui/skeleton'

export default function Loading() {
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
              <Skeleton className='h-7 w-full lg:h-12 lg:w-5/8' />
              <Skeleton className='h-7 w-1/2 lg:hidden' />
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
