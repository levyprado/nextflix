import { tmdbFetch } from './client'
import type {
  Movie,
  MovieDetails,
  PaginatedResponse,
  TVShow,
  TVShowDetails,
} from './types'

//  Movies

export const getNowPlayingMovies = () =>
  tmdbFetch<PaginatedResponse<Movie>>('/movie/now_playing')

export const getPopularMovies = () =>
  tmdbFetch<PaginatedResponse<Movie>>('/movie/popular')

export const getTopRatedMovies = () =>
  tmdbFetch<PaginatedResponse<Movie>>('/movie/top_rated')

export const getUpcomingMovies = () =>
  tmdbFetch<PaginatedResponse<Movie>>('/movie/upcoming')

export const getMoviesByGenre = (id: number) =>
  tmdbFetch<PaginatedResponse<Movie>>(`/discover/movie?with_genres=${id}`)

export const getMovieDetails = (id: number) =>
  tmdbFetch<MovieDetails>(
    `/movie/${id}?append_to_response=credits,videos,recommendations`,
  )

// TV Shows

export const getTVShowsByGenre = (id: number) =>
  tmdbFetch<PaginatedResponse<TVShow>>(`/discover/tv?with_genres=${id}`)

export const getTVShowDetails = (id: number) =>
  tmdbFetch<TVShowDetails>(
    `/tv/${id}?append_to_response=credits,videos,recommendations,external_ids`,
  )

// Trending

export const getTrendingAll = () =>
  tmdbFetch<PaginatedResponse<Movie | TVShow>>('/trending/all/day')

export const getTrendingTVShows = () =>
  tmdbFetch<PaginatedResponse<TVShow>>('/trending/tv/week')
