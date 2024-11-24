export default async function fetchMovies(page = 1) {
  try {
    const url = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_API_KEY}&page=${page}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Något gick fel med att hämta filmerna");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fel vid hämtning av filmer:", error);
    throw error;
  }
}
