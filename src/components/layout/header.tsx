import { cn } from '@/lib/utils'
import { MenuIcon, Search01Icon } from '@hugeicons/core-free-icons'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import Logo from '../logo'
import { Button } from '../ui/button'
import Icon from '../ui/icon'
import UserAccountControl from '../user-account-control'
import Container from './container'
import Nav from './nav'

type HeaderProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container
      as='header'
      className={cn(
        'fixed top-0 right-0 z-10 flex items-center justify-between bg-linear-to-b from-background/60 to-transparent py-3 transition-all duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] lg:pl-16! xl:py-5',
        isOpen ? 'w-full lg:w-[calc(100%-var(--sidebar-width))]' : 'w-full',
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 -z-10 bg-background transition-all duration-450 ease-[cubic-bezier(0.32,0.72,0,1)]',
          isScrolled ? 'opacity-100' : 'opacity-0',
        )}
      />

      <div className='flex items-center gap-6 md:gap-10 xl:gap-14'>
        <div className='flex items-center gap-2 md:gap-3'>
          <Button
            variant='secondary'
            size='icon'
            onClick={() => setIsOpen(true)}
            className='lg:hidden'
          >
            <Icon icon={MenuIcon} />
          </Button>
          <Logo />
        </div>
        <Nav />
      </div>

      <div className='flex items-center gap-2.5'>
        <Button variant='secondary' size='icon'>
          <Icon icon={Search01Icon} />
        </Button>
        <UserAccountControl />
      </div>
    </Container>
  )
}
