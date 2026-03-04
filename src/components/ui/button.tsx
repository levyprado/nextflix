import { cn } from '@/lib/utils'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center border font-bold whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-foreground focus-visible:ring-3 focus-visible:ring-foreground/50 active:scale-97 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-600/50 aria-invalid:ring-3 aria-invalid:ring-red-600/40 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-foreground text-background border-foreground hover:bg-foreground/80',
        secondary:
          'bg-foreground/15 border-foreground/20 backdrop-blur-md hover:bg-foreground/10',
      },
      size: {
        default: 'h-11 gap-2 px-6 rounded-full has-[svg]:pl-5',
        icon: 'size-10 rounded-full backdrop-blur-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
