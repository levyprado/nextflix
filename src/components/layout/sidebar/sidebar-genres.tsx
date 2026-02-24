import Icon from '@/components/ui/icon'
import { Genre } from '@/lib/constants'
import { ArrowDownIcon, GridIcon } from '@hugeicons/core-free-icons'
import Link from 'next/link'

type SidebarGenresProps = {
  title: string
  genres: Genre[]
  basePath: string
}

export default function SidebarGenres({
  title,
  genres,
  basePath,
}: SidebarGenresProps) {
  const initialGenres = genres.slice(0, 3)

  return (
    <section className='flex flex-col gap-2'>
      <div className='flex items-center gap-2 px-4 text-foreground/40'>
        <Icon icon={GridIcon} size={16} />
        <h3 className='text-xs font-bold tracking-[0.15em] uppercase'>
          {title}
        </h3>
      </div>

      <ul>
        {initialGenres.map((genre) => (
          <GenreLink key={genre.id} genre={genre} basePath={basePath} />
        ))}
      </ul>

      <button className='mx-4 flex items-center gap-2 text-xs font-semibold text-foreground/40 transition-colors hover:text-foreground/80'>
        <Icon icon={ArrowDownIcon} size={16} />
        Show more
      </button>
    </section>
  )
}

function GenreLink({ genre, basePath }: { genre: Genre; basePath: string }) {
  return (
    <li>
      <Link
        href={`${basePath}/${genre.slug}`}
        className='mx-2 flex items-center gap-2.5 rounded-lg px-3 py-1.5 font-medium text-foreground/60 transition-all duration-150 hover:bg-foreground/6 hover:text-foreground/90 hover:transition-none'
      >
        <span className='size-1.5 rounded-full bg-foreground/20' />
        <span className='truncate'>{genre.name}</span>
      </Link>
    </li>
  )
}
