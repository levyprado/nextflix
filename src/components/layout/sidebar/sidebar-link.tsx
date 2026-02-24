import Icon from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import type { IconSvgElement } from '@hugeicons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarLinkProps = {
  href: string
  icon: IconSvgElement
  label: string
}

export default function SidebarLink({ href, icon, label }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'relative mx-2 flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-all duration-150 hover:transition-none',
        isActive
          ? 'bg-foreground/10 text-foreground'
          : 'text-foreground/60 hover:bg-foreground/6 hover:text-foreground/90',
      )}
    >
      {isActive && (
        <span className='absolute top-1/2 left-0 h-4 w-0.5 -translate-y-1/2 rounded-full bg-foreground' />
      )}
      <Icon icon={icon} className='shrink-0' />
      <span>{label}</span>
    </Link>
  )
}
