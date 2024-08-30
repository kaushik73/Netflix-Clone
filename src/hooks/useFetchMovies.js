import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTMDBApiData } from "../utils/common";

const useFetchMovies = (url, actionCreator, selector) => {
  const dispatch = useDispatch();
  const movies = useSelector(selector);

  const fetchMovies = async () => {
    const jsonData = await getTMDBApiData(url);
    dispatch(actionCreator(jsonData));
  };

  useEffect(() => {
    if (!movies) {
      fetchMovies();
    }
  }, [movies]);

  return movies;
};

export default useFetchMovies;
