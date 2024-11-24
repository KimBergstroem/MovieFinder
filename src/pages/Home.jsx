import { useState } from "react";
import { HomeContainer, Title } from "@/assets/css/home.styles";
import Filter from "@/components/Filter";
import List from "@/components/Movie/List";

function Home() {
  const [filters, setFilters] = useState({ genre: "", year: "" });

  const handleFilterChange = ({ genre, year }) => {
    setFilters({ genre, year });
  };

  return (
    <HomeContainer>
      <Title>WHAT MOVIE DO YOU WANT TO WATCH?</Title>

      <Filter onFilterChange={handleFilterChange} />
      <List selectedGenre={filters.genre} selectedYear={filters.year} />
    </HomeContainer>
  );
}

export default Home;
