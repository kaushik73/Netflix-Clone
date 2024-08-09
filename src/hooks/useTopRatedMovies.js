import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/store/movieSlice";
import { getTMDBApiData } from "../utils/common";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const jsonData = await getTMDBApiData(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1"
    );

    dispatch(addTopRatedMovies(jsonData));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
