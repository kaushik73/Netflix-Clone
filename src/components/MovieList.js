import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({
  title,
  movies,
  isDarkMode = false,
  isMovieRecommended = false,
}) => {
  console.log({ title, movies });

  return (
    <div className="p-2">
      <div className="">
        {!isMovieRecommended && (
          <>
            <h1 className=" text-xl md:text-3xl font-semibold pb-2 mt-[0] px-3 text-white z-10">
              {title} :
            </h1>
            <div className="grid grid-rows-1 gap-2 grid-flow-col  overflow-x-scroll scrollbar-none scrollbar-hide ">
              {movies?.map((movie) => (
                <div key={movie?.id}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </>
        )}
        {isMovieRecommended && (
          <>
            <div className="flex justify-center ">
              <h1
                className={`d-flex justify-center text-xl md:text-3xl font-semibold pb-2 mt-[0] px-3 z-10 ${
                  isDarkMode ? "text-gray-200" : "text-white"
                }`}
              >
                {" "}
                {title} :
              </h1>
            </div>
            <div className=" flex flex-wrap gap-x-5 gap-y-3 justify-center scrollbar-none scrollbar-hide mt-[1%]">
              {movies?.map((movie) => (
                <div key={movie?.id}>
                  <MovieCard movie={movie} isDarkMode={isDarkMode} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieList;
