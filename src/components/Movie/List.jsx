import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchMovies from "@/apis/fetchMovies";
import {
  MovieList,
  MovieItem,
  LoadMoreButton,
} from "@/assets/css/movie/list.styles";
import Card from "@/components/Movie/Card";

function List() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page),
    keepPreviousData: true,
  });

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {data?.results && (
        <>
          <MovieList>
            {data.results.map((movie) => (
              <MovieItem key={movie.id}>
                <Card movie={movie} />
              </MovieItem>
            ))}
          </MovieList>
          <LoadMoreButton onClick={loadMore} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load more"}
          </LoadMoreButton>
        </>
      )}
    </>
  );
}

export default List;
