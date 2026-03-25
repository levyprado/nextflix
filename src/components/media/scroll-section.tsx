import { cn } from '@/lib/utils'

type ScrollSectionProps = {
  title: string
  children: React.ReactNode
  className?: string
}

export default function ScrollSection({
  title,
  children,
  className,
}: ScrollSectionProps) {
  return (
    <section className={cn('flex flex-col gap-4 md:gap-6 lg:gap-8', className)}>
      <h2 className='font-heading text-xl font-bold md:text-2xl lg:text-3xl'>
        {title}
      </h2>
      <ul className='no-scrollbar flex gap-3 overflow-x-auto xl:gap-4'>
        {children}
      </ul>
    </section>
  )
}
