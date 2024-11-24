import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { ERROR } from "@/utils/validation";
import fetchMovies from "@/apis/fetchMovies";
import {
  MovieList,
  MovieItem,
  LoadMoreButton,
} from "@/assets/css/movie/list.styles";
import Card from "@/components/Movie/Card";
import MovieListSkeleton from "@/components/ui/skeletons/MovieListSkeleton";

function List({ selectedGenre, selectedYear }) {
  const [page, setPage] = useState(1);

  const queryKey = useMemo(
    () => ["movies", page, selectedGenre, selectedYear],
    [page, selectedGenre, selectedYear]
  );

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => fetchMovies(page, selectedGenre, selectedYear),
    keepPreviousData: true,
  });

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) return <MovieListSkeleton />;
  if (error) return <div>{ERROR.DATA_FETCH}</div>;

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
