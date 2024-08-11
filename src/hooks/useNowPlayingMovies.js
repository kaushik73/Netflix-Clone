import { NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import useFetchMovies from "./useFetchMovies";

const useNowPlayingMovies = () => {
  return useFetchMovies(
    NOW_PLAYING_MOVIES_URL,
    addNowPlayingMovies,
    (store) => store.movies.nowPlayingMovies
  );
};

export default useNowPlayingMovies;
