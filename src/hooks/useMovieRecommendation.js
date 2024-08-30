import { TMDB_MOVIE_URL } from "../utils/constants";
import useFetchData from "./useFetchData";

const useMovieRecommendation = (movieId) => {
  const { data, loading, error } = useFetchData(
    `${TMDB_MOVIE_URL}/${movieId}/recommendations?&page=1`
  );

  return { data, loading, error };
};

export default useMovieRecommendation;
