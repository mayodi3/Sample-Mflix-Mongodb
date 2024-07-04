import { SimpleGrid, Text } from "@chakra-ui/react";
import GridItemCard from "./GridItemCard";
import GridItemSkeleton from "./GridItemSkeleton";
import { Movie } from "../hooks/useMovies";

const GridItems = ({
  movies,
  error,
  isLoading,
}: {
  movies: Movie[];
  error: string;
  isLoading: boolean;
}) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={3}
      spacing={10}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GridItemSkeleton key={skeleton} />)}
      {movies.map((movie) => (
        <GridItemCard key={movie._id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default GridItems;
