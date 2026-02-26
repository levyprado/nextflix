import { MOVIE_GENRES, SIDEBAR_NAV, TV_GENRES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { CancelIcon, PanelLeftIcon } from '@hugeicons/core-free-icons'
import Link from 'next/link'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { Drawer } from 'vaul'
import { Button } from '../../ui/button'
import Icon from '../../ui/icon'
import SidebarGenres from './sidebar-genres'
import SidebarSection from './sidebar-section'

type SidebarProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  const SidebarContent = (
    <div className='flex flex-1 flex-col gap-5 overflow-y-auto overscroll-contain pt-1 pb-4 [scrollbar-width:none]'>
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
  )

  return (
    <>
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 hidden h-dvh w-sidebar flex-col bg-background transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] lg:flex',
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
          <Link
            href='/'
            className='font-heading text-xl font-black tracking-tight uppercase italic underline underline-offset-4'
          >
            Nextflix
          </Link>
          <Button
            variant='secondary'
            size='icon'
            onClick={() => setIsOpen(false)}
            className='lg:invisible'
          >
            <Icon icon={CancelIcon} />
          </Button>
        </div>

        {SidebarContent}
      </aside>

      {/* MOBILE DRAWER */}
      {!isDesktop && (
        <Drawer.Root direction='left' open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Portal>
            <Drawer.Overlay className='fixed inset-0 z-50 bg-background/60' />
            <Drawer.Content className='fixed top-0 bottom-0 left-0 z-50 flex h-dvh w-sidebar flex-col bg-background'>
              <div className='flex items-center justify-between px-4 py-3'>
                <Drawer.Title asChild>
                  <Link
                    href='/'
                    onClick={() => setIsOpen(false)}
                    className='font-heading text-xl font-black tracking-tight uppercase italic underline underline-offset-4'
                  >
                    Nextflix
                  </Link>
                </Drawer.Title>

                <Drawer.Close asChild>
                  <Button variant='secondary' size='icon'>
                    <Icon icon={CancelIcon} />
                  </Button>
                </Drawer.Close>
              </div>

              <Drawer.Description className='sr-only'>
                Main navigation for user settings, social interactions, and
                genre filtering.
              </Drawer.Description>

              {SidebarContent}
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </>
  )
}
