import { useState } from "react";
import { HomeContainer, Title } from "@/assets/css/home.styles";
import Filter from "@/components/Filter";
import List from "@/components/Movie/List";

function Home() {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleFilterChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <HomeContainer>
      <Title>WHAT MOVIE DO YOU WANT TO WATCH?</Title>
      <Filter onFilterChange={handleFilterChange} />
      <List selectedGenre={selectedGenre} />
    </HomeContainer>
  );
}

export default Home;
