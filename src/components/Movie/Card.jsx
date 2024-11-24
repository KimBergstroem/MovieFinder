import {
  CardContainer,
  MovieTitle,
  ReleaseDate,
} from "@/assets/css/movies.styles";

function Card({ movie }) {
  if (!movie) return null;

  return (
    <CardContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <ReleaseDate>{movie.release_date}</ReleaseDate>
    </CardContainer>
  );
}

export default Card;
