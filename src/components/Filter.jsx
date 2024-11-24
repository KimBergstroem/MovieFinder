import { useReducer, useEffect } from "react";
import {
  FilterContainer,
  GenreButton,
  YearDropdown,
} from "@/assets/css/filter.styles";
import { fetchGenres } from "@/apis/fetchMovies";

function genreReducer(state, action) {
  switch (action.type) {
    case "SET_GENRES":
      return { ...state, genres: action.payload, loading: false };
    case "SET_SELECTED_GENRE":
      return { ...state, selectedGenre: action.payload };
    case "SET_SELECTED_YEAR":
      return { ...state, selectedYear: action.payload };
    case "RESET_FILTERS":
      return { ...state, selectedGenre: "", selectedYear: "" };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

function Filter({ onFilterChange }) {
  const [state, dispatch] = useReducer(genreReducer, {
    selectedGenre: "",
    selectedYear: "",
    genres: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    async function loadGenres() {
      dispatch({ type: "SET_LOADING" });
      try {
        const fetchedGenres = await fetchGenres();
        console.log("Fetched genres:", fetchedGenres);
        dispatch({ type: "SET_GENRES", payload: fetchedGenres });
      } catch (error) {
        console.error("Error fetching genres:", error);
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    loadGenres();
  }, []);

  const handleGenreClick = (genre) => {
    const genreValue = genre === "All" ? "" : genre.id;
    dispatch({ type: "SET_SELECTED_GENRE", payload: genreValue });
    onFilterChange({ genre: genreValue, year: state.selectedYear });
  };

  const handleYearChange = (event) => {
    const yearValue = event.target.value;
    dispatch({ type: "SET_SELECTED_YEAR", payload: yearValue });
    onFilterChange({ genre: state.selectedGenre, year: yearValue });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FILTERS" });
    onFilterChange({ genre: "", year: "" });
  };

  const filteredGenres = state.genres.filter((genre) =>
    ["Action", "Comedy", "Drama", "Fantasy", "Horror"].includes(genre.name)
  );

  return (
    <FilterContainer>
      {state.loading && <div>Loading genres...</div>}
      {state.error && <div>Error: {state.error}</div>}
      <GenreButton
        key="all"
        active={state.selectedGenre === ""}
        onClick={() => handleGenreClick({ id: "", name: "All" })}
      >
        Newest
      </GenreButton>
      {filteredGenres.map((genre) => (
        <GenreButton
          key={genre.id}
          active={state.selectedGenre === genre.id}
          onClick={() => handleGenreClick(genre)}
        >
          {genre.name}
        </GenreButton>
      ))}
      <YearDropdown value={state.selectedYear} onChange={handleYearChange}>
        <option value="">All Years</option>
        {Array.from({ length: 30 }, (_, i) => 2023 - i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </YearDropdown>
      <GenreButton onClick={handleReset} active={false}>
        Reset
      </GenreButton>
    </FilterContainer>
  );
}

export default Filter;
