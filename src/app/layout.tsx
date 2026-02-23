import AppLayout from '@/components/layout/app-layout'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Syne } from 'next/font/google'
import './globals.css'

const syneSans = Syne({
  variable: '--font-heading',
  subsets: ['latin'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-body',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nextflix',
  description: 'Browse Movies, TV Shows and more',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${syneSans.variable} ${plusJakartaSans.variable}`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
