import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovies } from "../utils/store/movieSlice";
import { getTMDBApiData } from "../utils/common";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getUpcommingMovies = async () => {
    const jsonData = await getTMDBApiData(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1"
    );

    dispatch(addUpcommingMovies(jsonData));
  };

  useEffect(() => {
    !topRatedMovies && getUpcommingMovies();
  }, []);
};

export default useUpcommingMovies;
