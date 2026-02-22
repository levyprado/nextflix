import { cn } from '@/lib/utils'
import { Search01Icon } from '@hugeicons/core-free-icons'
import Logo from './logo'
import Nav from './nav'
import { Button } from './ui/button'
import Icon from './ui/icon'
import UserAccountControl from './user-account-control'

export default function Header({ isOpen }: { isOpen: boolean }) {
  return (
    <header
      className={cn(
        'fixed top-0 right-0 z-10 flex w-full items-center justify-between bg-linear-to-b from-background/60 to-transparent px-5 py-3 transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] md:px-8 lg:w-[calc(100%-min(20vw,275px))] xl:px-12 xl:py-5 2xl:px-16',
        isOpen ? 'lg:w-[calc(100%-min(20vw,275px))]' : 'lg:w-full',
      )}
    >
      <Logo />

      <Nav />

      <div className='flex items-center gap-2.5'>
        <Button variant='secondary' size='icon'>
          <Icon icon={Search01Icon} />
        </Button>
        <UserAccountControl />
      </div>
    </header>
  )
}
