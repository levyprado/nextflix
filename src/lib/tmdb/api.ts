import { tmdbFetch } from './client'
import type { Movie, PaginatedResponse } from './types'

export const getNowPlayingMovies = () => {
  return tmdbFetch<PaginatedResponse<Movie>>('/movie/now_playing')
}

export const getPopularMovies = () => {
  return tmdbFetch<PaginatedResponse<Movie>>('/movie/popular')
}

export const getTopRatedMovies = () => {
  return tmdbFetch<PaginatedResponse<Movie>>('/movie/top_rated')
}

export const getUpcomingMovies = () => {
  return tmdbFetch<PaginatedResponse<Movie>>('/movie/upcoming')
}
