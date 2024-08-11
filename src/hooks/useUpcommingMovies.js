import { UPCOMMING_MOVIES_URL } from "../utils/constants";
import { addUpcommingMovies } from "../utils/store/movieSlice";
import useFetchMovies from "./useFetchMovies";

const useUpcommingMovies = () => {
  return useFetchMovies(
    UPCOMMING_MOVIES_URL,
    addUpcommingMovies,
    (store) => store.movies.upcommingMovies
  );
};

export default useUpcommingMovies;
