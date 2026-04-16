export type PaginatedResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type Genre = { id: number; name: string }

export type ProductionCompany = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export type ProductionCountry = { iso_3166_1: string; name: string }

export type CastMember = {
  id: number
  name: string
  original_name: string
  character: string
  profile_path: string | null
  order: number
  adult: boolean
  gender: 0 | 1 | 2 | 3
  known_for_department: string
  popularity: number
  credit_id: string
  cast_id: number
}

export type CrewMember = {
  id: number
  name: string
  original_name: string
  department: string
  job: string
  profile_path: string | null
  adult: boolean
  gender: 0 | 1 | 2 | 3
  known_for_department: string
  popularity: number
  credit_id: string
}

export type VideoSite = 'YouTube' | 'Vimeo'
export type VideoType =
  | 'Trailer'
  | 'Teaser'
  | 'Clip'
  | 'Featurette'
  | 'Behind the Scenes'
  | 'Bloopers'

export type Videos = {
  results: {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: VideoSite
    size: 360 | 480 | 720 | 1080
    type: VideoType
  }[]
}

export type Image = {
  aspect_ratio: number
  height: number
  iso_639_1: string | null
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export type Images = {
  backdrops: Image[]
  id: number
  logos: Image[]
  posters: Image[]
}

export type Movie = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieDetails = Omit<Movie, 'genre_ids'> & {
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string | null
    backdrop_path: string | null
  } | null
  budget: number
  credits: { cast: CastMember[]; crew: CrewMember[] }
  genres: Genre[]
  homepage: string
  imdb_id: string | null
  origin_country: string[]
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  recommendations: PaginatedResponse<Movie>
  revenue: number
  runtime: number
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string
  videos: Videos
  images: Images
}

export type TVShow = {
  backdrop_path: string | null
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  vote_average: number
  vote_count: number
}

export type Episode = {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string | null
}

export type Season = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string | null
  season_number: number
  vote_average: number
}

export type TVShowDetails = Omit<TVShow, 'genre_ids'> & {
  adult: false
  created_by: {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string
  }[]
  credits: { cast: CastMember[]; crew: CrewMember[] }
  episode_run_time: number[]
  external_ids: {
    facebook_id?: string | null
    imdb_id?: string
    instagram_id?: string | null
    twitter_id?: string | null
  }
  genres: { id: number; name: string }[]
  homepage: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: Episode
  next_episode_to_air: null
  networks: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  number_of_episodes: number
  number_of_seasons: number
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: { iso_3166_1: string; name: string }[]
  recommendations: PaginatedResponse<TVShow>
  seasons: Season[]
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string
  type: string
  videos: Videos
  images: Images
}

export type Person = {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string | null
  deathday: string | null
  gender: number
  homepage: string | null
  id: number
  imdb_id: string | null
  known_for_department: string
  name: string
  place_of_birth: string | null
  popularity: number
  profile_path: string | null
}

export type PersonCredits = {
  cast: ((Movie | TVShow) & {
    character: string
    credit_id: string
    order: number
    media_type: string
  })[]
  crew: ((Movie | TVShow) & {
    department: string
    job: string
    media_type: string
  })[]
}

export type PersonDetails = Person & {
  combined_credits: PersonCredits
}
