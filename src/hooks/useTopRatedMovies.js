import { TOP_RATED_MOVIES_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/store/movieSlice";
import useFetchMovies from "./useFetchMovies";

const useTopRatedMovies = () => {
  return useFetchMovies(
    TOP_RATED_MOVIES_URL,
    addTopRatedMovies,
    (store) => store.movies.topRatedMovies
  );
};

export default useTopRatedMovies;
