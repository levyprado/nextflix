import { cn } from '@/lib/utils'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Dispatch, SetStateAction } from 'react'
import { Button } from './ui/button'
import Icon from './ui/icon'

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-20 hidden h-screen w-[min(20vw,275px)] flex-col px-5 py-3 transition-transform duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] lg:flex xl:py-5',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      Sidebar
      <Button
        variant='secondary'
        size='icon'
        className='absolute -right-8.5'
        onClick={() => setIsOpen((open) => !open)}
      >
        <Icon
          icon={ArrowRight02Icon}
          className={cn(
            'transition-transform duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)]',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
        />
      </Button>
    </div>
  )
}
