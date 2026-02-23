import { cn } from '@/lib/utils'
import { Cancel01Icon, PanelLeftIcon } from '@hugeicons/core-free-icons'
import type { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'
import Icon from '../ui/icon'

type SidebarProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-50 h-screen w-[300px] bg-background transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)]',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className='px-4 py-3 xl:py-5'>
        <Button
          variant='secondary'
          size='icon'
          onClick={() => setIsOpen(false)}
          className='lg:hidden'
        >
          <Icon icon={Cancel01Icon} />
        </Button>
      </div>

      <Button
        variant='secondary'
        size='icon'
        onClick={() => setIsOpen((prev) => !prev)}
        className='absolute top-3 -right-14 hidden lg:flex xl:top-5'
      >
        <Icon icon={PanelLeftIcon} />
      </Button>
    </aside>
  )
}
