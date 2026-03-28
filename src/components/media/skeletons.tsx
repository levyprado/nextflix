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
