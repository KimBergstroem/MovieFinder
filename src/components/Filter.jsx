import { useState, useEffect } from "react";
import { FilterContainer, GenreButton } from "@/assets/css/filter.styles";
import { fetchGenres } from "@/apis/fetchMovies";

function Filter({ onFilterChange }) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function loadGenres() {
      try {
        const fetchedGenres = await fetchGenres();
        console.log("Fetched genres:", fetchedGenres);
        setGenres(fetchedGenres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }
    loadGenres();
  }, []);

  const handleGenreClick = (genre) => {
    const genreValue = genre === "All" ? "" : genre.id;
    setSelectedGenre(genreValue);
    onFilterChange(genreValue);
  };

  const filteredGenres = genres.filter((genre) =>
    ["Action", "Comedy", "Drama", "Fantasy", "Horror"].includes(genre.name)
  );

  return (
    <FilterContainer>
      <GenreButton
        key="all"
        active={selectedGenre === ""}
        onClick={() => handleGenreClick({ id: "", name: "All" })}
      >
        All
      </GenreButton>
      {filteredGenres.map((genre) => (
        <GenreButton
          key={genre.id}
          active={selectedGenre === genre.id}
          onClick={() => handleGenreClick(genre)}
        >
          {genre.name}
        </GenreButton>
      ))}
    </FilterContainer>
  );
}

export default Filter;
