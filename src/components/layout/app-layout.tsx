'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import Header from './header'
import Sidebar from './sidebar/sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex min-h-svh w-full'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={cn(
          'flex flex-1 flex-col overflow-x-auto transition-[padding] duration-450 ease-[cubic-bezier(0.32,0.72,0,1)]',
          isOpen ? 'lg:pl-[280px]' : 'pl-0',
        )}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  )
}
