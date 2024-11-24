export default async function fetchMovies(page = 1) {
  try {
    const url = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_API_KEY}&page=${page}`;
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
