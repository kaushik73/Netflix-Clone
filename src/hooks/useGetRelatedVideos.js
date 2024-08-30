import { TMDB_MOVIE_URL } from "../utils/constants";
import useFetchData from "./useFetchData";

const useGetRelatedVideos = (movieId) => {
  const { data, loading, error } = useFetchData(
    `${TMDB_MOVIE_URL}/${movieId}/videos`
  );

  return { data, loading, error };
};

export default useGetRelatedVideos;
