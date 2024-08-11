import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import GptSearch from "./SearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();

  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);
  const upcommingMovies = useSelector((store) => store.movies.upcommingMovies);
  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <VideoContainer />
          {upcommingMovies && <SecondaryContainer />}
        </>
      )}
    </div>
  );
};

export default Browse;
