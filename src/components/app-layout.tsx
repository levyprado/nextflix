'use client'

import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={cn(
          'flex flex-1 flex-col overflow-x-hidden transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)]',
          isOpen ? 'lg:pl-[min(20vw,275px)]' : 'pl-0',
        )}
      >
        <Header isOpen={isOpen} />
        <main>{children}</main>
      </div>
    </>
  )
}
