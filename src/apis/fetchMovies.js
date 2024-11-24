import { ERROR } from "@/utils/validation";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default async function fetchMovies(page = 1, genre = "", year = "") {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
      page: page.toString(),
      ...(genre && { with_genres: genre }),
      ...(year && { primary_release_year: year }),
    });

    const url = `${BASE_URL}discover/movie?${params.toString()}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(ERROR.FETCH_MOVIES);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("", error);
    throw error;
  }
}

export async function fetchMovieDetails(id) {
  try {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits`;
    const response = await fetch(url);
    console.log("Fetching movie details from URL:", url);
    if (!response.ok) {
      throw new Error(ERROR.FETCH_MOVIE_DETAILS);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("", error);
    throw error;
  }
}

export async function fetchGenres() {
  const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(ERROR.GENRES_FETCH);
  }
  const data = await response.json();
  return data.genres;
}
