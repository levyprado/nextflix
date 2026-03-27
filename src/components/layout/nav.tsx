'use client'

import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Home',
    href: ROUTES.HOME,
  },
  {
    label: 'Movies',
    href: ROUTES.MOVIES,
  },
  {
    label: 'TV Shows',
    href: ROUTES.TV_SHOWS,
  },
  {
    label: 'New',
    href: ROUTES.NEW,
  },
  {
    label: 'Watchlist',
    href: ROUTES.WATCHLIST,
  },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className='hidden gap-6 font-bold sm:flex xl:gap-8'>
      {navItems.map(({ href, label }) => {
        const isActive = pathname === href

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'relative after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-foreground after:transition-[width] after:duration-200 hover:after:w-full',
              isActive && 'after:w-full',
            )}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
