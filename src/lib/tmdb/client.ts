const BASE_URL = 'https://api.themoviedb.org/3'

export const tmdbFetch = async <T>(endpoint: string): Promise<T> => {
  const url = new URL(`${BASE_URL}${endpoint}`)

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`TMDB ${res.status}: ${res.statusText} - ${endpoint}`)
  }

  return res.json() as Promise<T>
}
