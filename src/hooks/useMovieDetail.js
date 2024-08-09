import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetail = (movieId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId,
          API_OPTIONS
        );
        if (!response.ok) throw new Error("Failed to fetch movie details");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  return { data, loading, error };
};

export default useMovieDetail;
