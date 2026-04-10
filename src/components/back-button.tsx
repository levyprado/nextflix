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
    <div className='px-4 md:px-8 lg:px-4'>
      <Button
        variant='secondary'
        size='icon'
        onClick={handleClick}
        className='fixed top-20 z-10 xl:top-28 2xl:h-11 2xl:w-auto 2xl:gap-2 2xl:px-6 2xl:pl-5'
      >
        <Icon icon={ArrowLeftIcon} className='-ml-0.5 2xl:-ml-1' />
        <span className='hidden 2xl:inline-block'>Back</span>
      </Button>
    </div>
  )
}
