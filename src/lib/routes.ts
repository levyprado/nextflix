export const ROUTES = {
  HOME: '/',

  MOVIES: '/movies',
  MOVIE_DETAIL: (id: number) => `/movies/${id}`,
  MOVIE_GENRE: (slug: string) => `/movies/genre/${slug}`,

  TV_SHOWS: '/tv-shows',
  TV_SHOW_DETAIL: (id: number) => `/tv-shows/${id}`,
  TV_SHOW_GENRE: (slug: string) => `/tv-shows/genre/${slug}`,

  WATCHLIST: '/watchlist',
  HISTORY: '/history',
  RATED: '/rated',
  FRIENDS: '/friends',
  NOTIFICATIONS: '/notifications',
  TRENDING: '/trending-now',
  NEW: '/new',
} as const
