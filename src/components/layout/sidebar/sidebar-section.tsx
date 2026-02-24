import type { SidebarSection } from '@/lib/constants'
import SidebarLink from './sidebar-link'

type SidebarSectionProps = {
  section: SidebarSection
}

export default function SidebarSection({ section }: SidebarSectionProps) {
  return (
    <section key={section.title} className='flex flex-col gap-2'>
      <h3 className='px-4 text-xs font-bold tracking-[0.15em] text-foreground/40 uppercase'>
        {section.title}
      </h3>
      <ul>
        {section.items.map((item) => (
          <li key={item.href}>
            <SidebarLink href={item.href} icon={item.icon} label={item.label} />
          </li>
        ))}
      </ul>
    </section>
  )
}
