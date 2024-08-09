import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/store/movieSlice";
import { getTMDBApiData } from "../utils/common";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getPopularMovies = async () => {
    const jsonData = await getTMDBApiData(
      "https://api.themoviedb.org/3/movie/popular"
    );

    dispatch(addPopularMovies(jsonData));
  };

  useEffect(() => {
    !topRatedMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
