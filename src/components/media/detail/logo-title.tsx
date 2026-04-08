import type { Image as ImageType } from '@/lib/tmdb/types'
import { getLogoTitleUrl } from '@/lib/tmdb/utils'
import Image from 'next/image'

type LogoTitleProps = {
  logos: ImageType[]
  altTitle: string
}

export default function LogoTitle({ logos, altTitle }: LogoTitleProps) {
  if (!logos?.length) {
    return (
      <h1 className='font-heading text-3xl leading-none font-bold text-balance wrap-break-word md:text-4xl lg:text-6xl'>
        {altTitle}
      </h1>
    )
  }

  const bestLogo = logos.find((logo) => logo.iso_639_1 === 'en') ?? logos[0]

  return (
    <div className='relative mb-4 w-full'>
      <div
        className='relative ml-[calc(min(40%,256px)+16px)] max-h-24 md:ml-[calc(min(40%,256px)+32px)] lg:max-h-32'
        style={{ aspectRatio: `${bestLogo.width} / ${bestLogo.height}` }}
      >
        <Image
          src={getLogoTitleUrl(bestLogo.file_path)}
          alt={altTitle}
          fill
          preload={true}
          className='object-contain object-left'
        />
      </div>
      <h1 className='sr-only'>{altTitle}</h1>
    </div>
  )
}
