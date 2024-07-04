import { useState } from "react";
import { Movie } from "./useMovies";
import axios from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Movie[]>([]);
  const getGenres = async (genre: string) => {
    axios
      .post<Movie[]>(`http://localhost:3000/api/movies/${genre}`)
      .then((response) => setGenres(response.data))
      .catch((error) => console.error(error));
  };

  return { genres, getGenres };
};

export default useGenres;
