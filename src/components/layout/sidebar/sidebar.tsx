import { MOVIE_GENRES, SIDEBAR_NAV, TV_GENRES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { CancelIcon, PanelLeftIcon } from '@hugeicons/core-free-icons'
import { type Dispatch, type SetStateAction } from 'react'
import { Button } from '../../ui/button'
import Icon from '../../ui/icon'
import SidebarGenres from './sidebar-genres'
import SidebarSection from './sidebar-section'

type SidebarProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-50 flex h-screen w-[280px] flex-col bg-background transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)]',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <Button
        variant='secondary'
        size='icon'
        onClick={() => setIsOpen((open) => !open)}
        className='absolute top-3 -right-14 hidden lg:flex xl:top-5'
      >
        <Icon icon={PanelLeftIcon} />
      </Button>

      <div className='flex items-center justify-between px-4 py-3 xl:py-5'>
        <span className='font-heading text-xl font-black tracking-tight text-white italic select-none'>
          NEXTFLIX
        </span>
        <Button
          variant='secondary'
          size='icon'
          onClick={() => setIsOpen(false)}
          className='lg:invisible'
        >
          <Icon icon={CancelIcon} />
        </Button>
      </div>

      <div className='flex flex-1 flex-col gap-6 overflow-y-auto overscroll-contain pt-1 pb-4 [scrollbar-width:none]'>
        {SIDEBAR_NAV.map((section) => (
          <SidebarSection key={section.title} section={section} />
        ))}

        <SidebarGenres
          title='Movie Genres'
          genres={MOVIE_GENRES}
          basePath='/movies'
        />

        <SidebarGenres
          title='TV Genres'
          genres={TV_GENRES}
          basePath='/tv-shows'
        />
      </div>
    </aside>
  )
}
