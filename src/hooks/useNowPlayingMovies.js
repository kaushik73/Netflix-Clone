import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { getTMDBApiData } from "../utils/common";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getNowPlayingMovies = async () => {
    const jsonData = await getTMDBApiData(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1"
    );

    dispatch(addNowPlayingMovies(jsonData));
  };

  useEffect(() => {
    !topRatedMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
