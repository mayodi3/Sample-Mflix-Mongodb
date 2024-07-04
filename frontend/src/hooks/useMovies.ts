import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

export interface Movie {
  _id: string;
  title: string;
  poster: string | undefined;
  genres: string[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get<Movie[]>("http://localhost:3000/api/movies", {
        signal: controller.signal,
      })
      .then((response) => {
        setMovies(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof AxiosError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { movies, isLoading, error };
};

export default useMovies;
