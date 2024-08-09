import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const getTopRatedMovies = async (dispatch) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?&page=1",
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addTopRatedMovies(json.results));
};

const useTopRatedMovies = () => {
  console.log("Hook called");

  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies(dispatch);
  }, [dispatch]);
};

export default useTopRatedMovies;
