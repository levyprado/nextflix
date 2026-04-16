const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export type PosterSize = 'w185' | 'w342' | 'w500' | 'original'
export type BackdropSize = 'w780' | 'w1280' | 'original'
export type ProfileSize = 'w185' | 'h632' | 'original'
export type StillSize = 'w92' | 'w185' | 'w300' | 'original'

export const getPosterUrl = (path: string | null, size: PosterSize = 'w500') =>
  path ? `${TMDB_IMAGE_BASE_URL}/${size}${path}` : null

export const getBackdropUrl = (
  path: string | null,
  size: BackdropSize = 'original',
) => (path ? `${TMDB_IMAGE_BASE_URL}/${size}${path}` : null)

export const getProfileUrl = (
  path: string | null,
  size: ProfileSize = 'w185',
) => (path ? `${TMDB_IMAGE_BASE_URL}/${size}${path}` : null)

export const getStillUrl = (path: string | null, size: StillSize = 'w300') =>
  path ? `${TMDB_IMAGE_BASE_URL}/${size}${path}` : null

export const getLogoTitleUrl = (path: string) =>
  `${TMDB_IMAGE_BASE_URL}/original${path}`

export const formatRating = (rating: number) => {
  return rating.toFixed(1)
}

export const formatRuntime = (minutes: number) => {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? `${h}h${m > 0 ? `${m}m` : ''}` : `${m}m`
}

export const getReleaseYear = (date: string) => {
  return date ? new Date(date).getFullYear().toString() : '-'
}

export const formatAirDate = (air_date: string) => {
  return new Date(air_date).toLocaleDateString('en')
}

export const formatGenrePath = (genre: string) => {
  return genre.toLowerCase().replace(/\s+/g, '-')
}

export function formatBirthdayDeathday(
  birthday: string,
  deathday: string | null,
) {
  if (!birthday) return ''

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const birthDate = new Date(birthday)
  const formattedBirth = birthDate.toLocaleDateString('en-US', dateOptions)

  if (deathday) {
    const deathDate = new Date(deathday)
    const formattedDeath = deathDate.toLocaleDateString('en-US', dateOptions)
    return `${formattedBirth} - Died ${formattedDeath}`
  }

  const age = new Date().getFullYear() - birthDate.getFullYear()
  return `${formattedBirth} (${age} years old)`
}
