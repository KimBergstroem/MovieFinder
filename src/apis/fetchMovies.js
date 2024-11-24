export default async function fetchMovies(page = 1, genre = "") {
  try {
    const genreParam = genre ? `&with_genres=${genre}` : "";
    const url = `${import.meta.env.VITE_BASE_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=${page}${genreParam}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong with fetching the movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

export async function fetchMovieDetails(id) {
  try {
    const url = `${import.meta.env.VITE_BASE_URL}movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits`;
    const response = await fetch(url);
    console.log("Fetching movie details from URL:", url);
    if (!response.ok) {
      throw new Error("Something went wrong with fetching the movie details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
}

export async function fetchGenres() {
  const url = `${import.meta.env.VITE_BASE_URL}genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }
  const data = await response.json();
  return data.genres;
}
