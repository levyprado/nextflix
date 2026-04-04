export const formatRating = (rating: number): string => {
  return rating.toFixed(1)
}

export const formatRuntime = (minutes: number): string => {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? `${h}h${m > 0 ? `${m}m` : ''}` : `${m}m`
}

export const getReleaseYear = (date: string): string => {
  return date ? new Date(date).getFullYear().toString() : '-'
}

export const formatAirDate = (air_date: string): string => {
  return new Date(air_date).toLocaleDateString('en')
}
