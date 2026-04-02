import { tmdbFetch } from './client'
import type { Movie, MovieDetails, PaginatedResponse, TVShow } from './types'

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

export const getMovieDetails = (id: number) => {
  return tmdbFetch<MovieDetails>(
    `/movie/${id}?append_to_response=credits,videos,recommendations`,
  )
}

export const getTrendingAll = () => {
  return tmdbFetch<PaginatedResponse<Movie | TVShow>>('/trending/all/week')
}

export const getTrendingTVShows = () => {
  return tmdbFetch<PaginatedResponse<TVShow>>('/trending/tv/week')
}

export const getActionMovies = () => {
  return tmdbFetch<PaginatedResponse<Movie>>('/discover/movie?with_genres=28')
}

export const getComedyMovies = () => {
  return tmdbFetch<PaginatedResponse<Movie>>('/discover/movie?with_genres=35')
}

export const getHorrorMovies = () => {
  return tmdbFetch<PaginatedResponse<Movie>>('/discover/movie?with_genres=27')
}

export const getThrillerMovies = () => {
  return tmdbFetch<PaginatedResponse<Movie>>('/discover/movie?with_genres=53')
}
