import { TMDB_MOVIE_URL } from "../utils/constants";
import useFetchData from "./useFetchData";

const useGetMovieReviews = (movieId) => {
  const { data, loading, error } = useFetchData(
    `${TMDB_MOVIE_URL}/${movieId}/reviews?&page=1`
  );

  return { data, loading, error };
};

export default useGetMovieReviews;
