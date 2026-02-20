import { Search01Icon } from '@hugeicons/core-free-icons'
import Logo from './logo'
import Nav from './nav'
import { Button } from './ui/button'
import Icon from './ui/icon'
import UserAccountControl from './user-account-control'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 z-10 flex w-full items-center justify-between bg-linear-to-b from-background/60 to-transparent px-5 py-3 transition-colors duration-300 md:px-8 xl:px-12 xl:py-5 2xl:px-16'>
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
