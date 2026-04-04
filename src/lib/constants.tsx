import {
  Bookmark02Icon,
  FireIcon,
  NotificationIcon,
  StarIcon,
  TradeUpIcon,
  UserGroupIcon,
  VideoReplayIcon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import { ROUTES } from './routes'

export type SidebarItem = {
  label: string
  href: string
  icon: IconSvgElement
}

export type SidebarSection = {
  title: string
  items: SidebarItem[]
}

export type SidebarGenre = { id: number; name: string; slug: string }

export const SIDEBAR_NAV: SidebarSection[] = [
  {
    title: 'My space',
    items: [
      { label: 'Watchlist', href: ROUTES.WATCHLIST, icon: Bookmark02Icon },
      { label: 'History', href: ROUTES.HISTORY, icon: VideoReplayIcon },
      { label: 'Rated', href: ROUTES.RATED, icon: StarIcon },
    ],
  },
  {
    title: 'Social',
    items: [
      { label: 'Friends', href: ROUTES.FRIENDS, icon: UserGroupIcon },
      {
        label: 'Notifications',
        href: ROUTES.NOTIFICATIONS,
        icon: NotificationIcon,
      },
    ],
  },
  {
    title: 'Discover',
    items: [
      { label: 'Trending Now', href: ROUTES.TRENDING, icon: TradeUpIcon },
      { label: 'New Releases', href: ROUTES.NEW, icon: FireIcon },
    ],
  },
]

export const MOVIE_GENRES: SidebarGenre[] = [
  { id: 28, name: 'Action', slug: 'action' },
  { id: 12, name: 'Adventure', slug: 'adventure' },
  { id: 16, name: 'Animation', slug: 'animation' },
  { id: 35, name: 'Comedy', slug: 'comedy' },
  { id: 80, name: 'Crime', slug: 'crime' },
  { id: 99, name: 'Documentary', slug: 'documentary' },
  { id: 18, name: 'Drama', slug: 'drama' },
  { id: 10751, name: 'Family', slug: 'family' },
  { id: 14, name: 'Fantasy', slug: 'fantasy' },
  { id: 36, name: 'History', slug: 'history' },
  { id: 27, name: 'Horror', slug: 'horror' },
  { id: 10402, name: 'Music', slug: 'music' },
  { id: 9648, name: 'Mystery', slug: 'mistery' },
  { id: 10749, name: 'Romance', slug: 'romance' },
  { id: 878, name: 'Science Fiction', slug: 'sci-fi' },
  { id: 10770, name: 'TV Movie', slug: 'tv-movie' },
  { id: 53, name: 'Thriller', slug: 'thriller' },
  { id: 10752, name: 'War', slug: 'war' },
  { id: 37, name: 'Western', slug: 'western' },
]

export const TV_GENRES: SidebarGenre[] = [
  { id: 10759, name: 'Action & Adventure', slug: 'action-adventure' },
  { id: 16, name: 'Animation', slug: 'animation' },
  { id: 35, name: 'Comedy', slug: 'comedy' },
  { id: 80, name: 'Crime', slug: 'crime' },
  { id: 99, name: 'Documentary', slug: 'documentary' },
  { id: 18, name: 'Drama', slug: 'drama' },
  { id: 10751, name: 'Family', slug: 'family' },
  { id: 10762, name: 'Kids', slug: 'kids' },
  { id: 9648, name: 'Mystery', slug: 'mystery' },
  { id: 10763, name: 'News', slug: 'news' },
  { id: 10764, name: 'Reality', slug: 'reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy', slug: 'sci-fi-fantasy' },
  { id: 10766, name: 'Soap', slug: 'soap' },
  { id: 10767, name: 'Talk', slug: 'talk' },
  { id: 10768, name: 'War & Politics', slug: 'war-politics' },
  { id: 37, name: 'Western', slug: 'western' },
]
