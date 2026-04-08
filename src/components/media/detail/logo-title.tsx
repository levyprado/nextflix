import type { Image as ImageType } from '@/lib/tmdb/types'
import { getLogoTitleUrl } from '@/lib/tmdb/utils'
import Image from 'next/image'

type LogoTitleProps = {
  logos: ImageType[]
  altTitle: string
}

export default function LogoTitle({ logos, altTitle }: LogoTitleProps) {
  if (!logos?.length) return null

  const userLanguage = 'en'
  const logoInLanguage = logos.find((logo) => logo.iso_639_1 === userLanguage)
  const bestLogo = logoInLanguage || logos[0]

  return (
    <Image
      src={getLogoTitleUrl(bestLogo.file_path)}
      alt={altTitle}
      width={bestLogo.width}
      height={bestLogo.height}
      className='max-h-24 w-fit object-contain sm:min-w-3xs'
    />
  )
}
