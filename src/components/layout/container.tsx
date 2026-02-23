import { cn } from '@/lib/utils'
import React from 'react'

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  as?: React.ElementType
}

export default function Container({
  children,
  className,
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn('px-4 md:px-8 xl:px-12 2xl:px-16', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
