import { TMDB_MOVIE_URL } from "../utils/constants";
import useFetchData from "./useFetchData";

const useMovieDetail = (movieId) => {
  const { data, loading, error } = useFetchData(`${TMDB_MOVIE_URL}/${movieId}`);

  return { data, loading, error };
};

export default useMovieDetail;
