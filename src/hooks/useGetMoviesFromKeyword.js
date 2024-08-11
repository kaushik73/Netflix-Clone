import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTMDBApiData } from "../utils/common";
import { addMoviesFromKeyword } from "../utils/store/gptSlice";
import { TMDB_SEARCH_URL } from "../utils/constants";

const useGetMoviesFromKeyword = (keyword) => {
  const dispatch = useDispatch();
  const moviesFromKeyword = useSelector((store) => store.gpt.moviesFromKeyword);
  const getMoviesFromKeyword = async () => {
    const jsonData = await getTMDBApiData(
      `${TMDB_SEARCH_URL}/keyword?query=${keyword}&page=1`
    );

    dispatch(addMoviesFromKeyword(jsonData));
  };

  useEffect(() => {
    !moviesFromKeyword && getMoviesFromKeyword();
  }, []);
};

export default useGetMoviesFromKeyword;
