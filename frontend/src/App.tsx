import { GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./componets/Navbar";
import GridItems from "./componets/GridItems";
import GenreFilter from "./componets/GenreFilter";
import useMovies from "./hooks/useMovies";
import useGenres from "./hooks/useGenres";
import { useState } from "react";

const App = () => {
  const { movies, error, isLoading } = useMovies();
  const { genres, getGenres } = useGenres();
  const [movie, setMovie] = useState("");
  console.log(movie);

  const filterdMovies = genres.length > 0 ? genres : movies;

  return (
    <SimpleGrid templateAreas={`"nav" "main"`} padding={3}>
      <GridItem area="nav">
        <Navbar searchMovie={(movie: string) => setMovie(movie)} />
      </GridItem>
      <GridItem area="main">
        <GenreFilter getGenres={(genre) => getGenres(genre)} />
        <GridItems movies={filterdMovies} error={error} isLoading={isLoading} />
      </GridItem>
    </SimpleGrid>
  );
};

export default App;
