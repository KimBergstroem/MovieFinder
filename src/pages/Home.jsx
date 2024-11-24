import { useState, useEffect } from "react";
import fetchMovies from "@/apis/fetchMovies";
import {
  HomeContainer,
  Title,
  MovieGrid,
  MovieItem,
  LoadMoreButton,
} from "@/assets/css/home.styles";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMovieData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchMovies(page);
      setMovies((prev) => [...prev, ...data.results]);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchMovieData();
  }, [page]);

  return (
    <HomeContainer>
      <Title>WHAT MOVIE DO YOU WANT TO WATCH?</Title>

      {error && <div>Error: {error}</div>}

      {movies.length > 0 && (
        <>
          <MovieGrid>
            {movies.map((movie) => (
              <MovieItem key={movie.id}>{movie.title}</MovieItem>
            ))}
          </MovieGrid>
          <LoadMoreButton onClick={loadMore} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load More"}
          </LoadMoreButton>
        </>
      )}
    </HomeContainer>
  );
}

export default Home;
