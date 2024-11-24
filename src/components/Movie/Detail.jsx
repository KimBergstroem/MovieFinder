import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "@/apis/fetchMovies";
import { ERROR } from "@/utils/validation";
import MovieDetailSkeleton from "@/components/ui/skeletons/MovieDetailSkeleton";
import {
  DetailContainer,
  MovieTitle,
  MovieImage,
  MovieDescription,
  MovieGenres,
  MovieRating,
  MovieInfo,
  GenreBubble,
  MovieDetailParagraph,
  MovieDetailSpan,
} from "@/assets/css/movie/detail.styles";

function MovieDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) return <MovieDetailSkeleton />;
  if (error) return <div>{ERROR.FETCH_MOVIE_DETAILS}</div>;

  const countries = data.production_countries
    .map((country) => country.name)
    .join(", ");
  const cast = data.credits.cast
    .slice(0, 5)
    .map((actor) => actor.name)
    .join(", ");

  return (
    <DetailContainer>
      <MovieImage
        src={`${import.meta.env.VITE_IMAGE_BASE_URL}${data.poster_path}`}
        alt={data.title}
      />
      <MovieInfo>
        <MovieTitle>{data.title}</MovieTitle>
        <MovieGenres>
          {data.genres.map((genre) => (
            <GenreBubble key={genre.id}>{genre.name}</GenreBubble>
          ))}
        </MovieGenres>
        <MovieRating>Rating: {data.vote_average} </MovieRating>
        <MovieDescription>{data.overview}</MovieDescription>
        <MovieDetailParagraph>
          <MovieDetailSpan>Country:</MovieDetailSpan> {countries}
        </MovieDetailParagraph>
        <MovieDetailParagraph>
          <MovieDetailSpan>Released:</MovieDetailSpan> {data.release_date}
        </MovieDetailParagraph>
        <MovieDetailParagraph>
          <MovieDetailSpan>Casts:</MovieDetailSpan> {cast}
        </MovieDetailParagraph>
      </MovieInfo>
    </DetailContainer>
  );
}

export default MovieDetail;
