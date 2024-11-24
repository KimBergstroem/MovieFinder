import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  MovieImage,
  MovieTitle,
  ReleaseDate,
} from "@/assets/css/movie/card.styles";

function Card({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null;

  const imageUrl = movie.poster_path
    ? `${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <CardContainer>
      <MovieImage src={imageUrl} alt={movie.title} onClick={handleClick} />
      <MovieTitle>{movie.title}</MovieTitle>
      <ReleaseDate>{movie.release_date}</ReleaseDate>
    </CardContainer>
  );
}

export default Card;
