import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies, "MovieList");

  return (
    <div className="bg-black p-2">
      {/* One Container */}
      <div className="">
        <h1 className="text-3xl font-semibold pb-3 px-3 text-white">
          {title} :
        </h1>
        <div className="grid grid-rows-1 gap-2 grid-flow-col overflow-x-scroll scrollbar-none scrollbar-hide ">
          {movies?.map((movie) => (
            <div className="">
              <MovieCard key={movie.id} movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
