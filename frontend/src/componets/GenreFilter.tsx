import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const GenreFilter = ({ getGenres }: { getGenres: (genre: string) => void }) => {
  const [genre, setGenre] = useState("");
  const genreTags = [
    "",
    "Animation",
    "Short",
    "Comedy",
    "Drama",
    "Western",
    "Romance",
    "Thriller",
    "Adventure",
    "Fantasy",
    "Family",
    "Action",
    "Musical",
    "Crime",
    "History",
    "Biography",
    "Mystery",
    "War",
    "Documentary",
    "Music",
    "Sport",
    "Film-Noir",
    "Horror",
    "Sci-Fi",
    "Talk-Show",
    "News",
  ];

  return (
    <Box marginLeft={3}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {genre ? genre : "Genres"}
        </MenuButton>
        <MenuList height={300} overflowY="scroll">
          {genreTags.map((genre) => (
            <MenuItem
              key={genre}
              onClick={() => {
                getGenres(genre);
                setGenre(genre);
              }}
            >
              {genre}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default GenreFilter;
