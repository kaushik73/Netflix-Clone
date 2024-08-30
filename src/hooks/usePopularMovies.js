import { POPULAR_MOVIES_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/store/movieSlice";
import useFetchMovies from "./useFetchMovies";

const usePopularMovies = () => {
  return useFetchMovies(
    POPULAR_MOVIES_URL,
    addPopularMovies,
    (store) => store.movies.popularMovies
  );
};
export default usePopularMovies;
