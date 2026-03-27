import { cn } from '@/lib/utils'

export default function Skeleton({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('animate-pulse rounded-lg bg-foreground/10', className)}
      {...props}
    />
  )
}
