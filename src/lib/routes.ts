export const ROUTES = {
  HOME: '/',

  MOVIES: '/movies',
  MOVIE_GENRE: (slug: string) => `/movies/${slug}`,
  MOVIE_DETAIL: (id: number) => `/movie/${id}`,

  TV_SHOWS: '/tv-shows',
  TV_SHOW_GENRE: (slug: string) => `/tv-shows/${slug}`,
  TV_SHOW_DETAIL: (id: number) => `/tv-show/${id}`,

  PERSON: (id: number) => `/person/${id}`,

  WATCHLIST: '/watchlist',
  HISTORY: '/history',
  RATED: '/rated',
  FRIENDS: '/friends',
  NOTIFICATIONS: '/notifications',
  TRENDING: '/trending-now',
  NEW: '/new',
} as const
