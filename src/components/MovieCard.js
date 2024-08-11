import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, isDarkMode = false }) => {
  const navigate = useNavigate();
  const handleMovieCardClick = (movieId) => {
    navigate(`/detail/${movieId}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    movie &&
    movie.poster_path !== null && (
      <div
        className="rounded-lg sm:w-48 w-36 mr-3 cursor-pointer  h-[280px] relative group hover:overflow-hidden "
        onClick={() => handleMovieCardClick(movie.id)}
      >
        <div className="group-hover:scale-110 ">
          <img
            className="rounded-lg h-[280px]"
            src={IMAGE_URL + movie?.poster_path}
            alt={movie?.original_title}
          />
        </div>
        <div
          className={` rounded-lg flex justify-center items-end pb-[10%] font-bold text-white absolute bottom-0 bg-gradient-to-t  from-black  to-transparent w-full min-h-32 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        >
          {" "}
          <h2 className={`${isDarkMode ? "text-gray-400" : "text-white"}`}>
            {movie?.title}
          </h2>
        </div>
      </div>
    )
  );
};

export default MovieCard;
