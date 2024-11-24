import { HomeContainer, Title } from "@/assets/css/home.styles";
import List from "@/components/Movie/List";

function Home() {
  return (
    <HomeContainer>
      <Title>WHAT MOVIE DO YOU WANT TO WATCH?</Title>
      <List />
    </HomeContainer>
  );
}

export default Home;
