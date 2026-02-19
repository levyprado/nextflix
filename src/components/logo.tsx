import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <span className='size-0 border-t-30 border-r-18 border-l-18 border-t-amber-600 border-r-transparent border-l-transparent' />
      <span className='hidden font-heading text-2xl font-extrabold sm:block md:hidden lg:block'>
        Nextflix
      </span>
    </Link>
  )
}
