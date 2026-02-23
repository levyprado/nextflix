import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href='/'
      className='size-0 border-t-32 border-r-[19.2px] border-l-[19.2px] border-t-amber-600 border-r-transparent border-l-transparent transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-rotate-180'
    ></Link>
  )
}
