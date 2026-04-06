import Icon from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import type { IconSvgElement } from '@hugeicons/react'
import { cva, type VariantProps } from 'class-variance-authority'

const chipVariants = cva('flex items-center gap-1.5 ', {
  variants: {
    variant: {
      default: 'text-foreground/60',
      highlight: 'rounded-full bg-yellow-400/20 px-2.5 py-0.5 text-yellow-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type MetadataChipProps = {
  icon: IconSvgElement
  label: string
}

export default function MetadataChip({
  icon,
  label,
  variant,
}: MetadataChipProps & VariantProps<typeof chipVariants>) {
  return (
    <span className={cn(chipVariants({ variant }))}>
      <Icon
        icon={icon}
        size={16}
        className={cn(variant === 'highlight' && 'fill-yellow-400')}
      />
      {label}
    </span>
  )
}
