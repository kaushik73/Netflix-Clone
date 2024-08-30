import { TMDB_MOVIE_URL } from "../utils/constants";
import useFetchData from "./useFetchData";

const useGetCastList = (movieId) => {
  const { data, loading, error } = useFetchData(
    `${TMDB_MOVIE_URL}/${movieId}/credits`
  );

  return { data, loading, error };
};

export default useGetCastList;
