import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcommingMovies = useSelector((store) => store.movies?.upcommingMovies);
  return (
    <div className="">
      <div className="-mt-20 z-20">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
      </div>
      <MovieList title="Popular Movies" movies={popularMovies} />
      <MovieList title="Top Rated Movies" movies={topRatedMovies} />
      <MovieList title="Upcomming Movies" movies={upcommingMovies} />
    </div>
  );
};

export default SecondaryContainer;
