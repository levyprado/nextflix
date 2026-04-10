'use client'

import { ROUTES } from '@/lib/routes'
import { ArrowLeftIcon } from '@hugeicons/core-free-icons'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import Icon from './ui/icon'

export default function BackButton() {
  const router = useRouter()

  const handleClick = () => {
    if (history.length > 1) {
      router.back()
      return
    }

    router.push(ROUTES.HOME)
  }

  return (
    <div className='fixed top-20 z-10 px-4 md:px-8 lg:px-4 xl:top-28'>
      <Button
        variant='secondary'
        size='icon'
        onClick={handleClick}
        aria-label='Go back'
        className='@8xl:h-11 @8xl:w-auto @8xl:gap-2 @8xl:px-6 @8xl:pl-5'
      >
        <Icon icon={ArrowLeftIcon} className='-ml-0.5 @8xl:-ml-1' />
        <span className='sr-only @8xl:not-sr-only'>Back</span>
      </Button>
    </div>
  )
}
