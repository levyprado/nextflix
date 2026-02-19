import { Search01Icon } from '@hugeicons/core-free-icons'
import Link from 'next/link'
import Logo from './logo'
import Icon from './ui/icon'
import UserAccountControl from './user-account-control'

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Movies',
    href: '/movies',
  },
  {
    label: 'TV Shows',
    href: '/tv-shows',
  },
  {
    label: 'New',
    href: '/new',
  },
  {
    label: 'Watchlist',
    href: '/watchlist',
  },
]

export default function Header() {
  return (
    <header className='relative flex items-center justify-between px-4 py-3 md:px-8 xl:px-12 xl:py-4 2xl:px-16'>
      <Logo />

      <nav className='absolute top-1/2 left-1/2 hidden -translate-1/2 gap-6 font-medium md:flex xl:gap-8'>
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className='relative after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-foreground after:transition-[width] after:duration-200 hover:after:w-full'
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className='flex items-center gap-2.5'>
        <button className='flex size-10 items-center justify-center rounded-full bg-foreground/10'>
          <Icon icon={Search01Icon} />
        </button>
        <UserAccountControl />
      </div>
    </header>
  )
}
