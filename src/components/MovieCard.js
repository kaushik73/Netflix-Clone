import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleMovieCardClick = (movieId) => {
    console.log(movieId, "handleMovieCardClick");

    // dispatch(addDisplayMovie(data));
    navigate(`/detail/${movieId}`);
  };

  return (
    movie && (
      <div
        className="sm:w-48 w-36 mr-3 cursor-pointer  relative hover:overflow-hidden rounded-xl"
        onClick={() => handleMovieCardClick(movie.id)}
      >
        <div className=" hover:scale-110 ">
          <img
            className="rounded-t-xl"
            src={IMAGE_URL + movie?.poster_path}
            alt={movie?.original_title}
          />
        </div>
        <div className=" flex justify-center items-end pb-[1%] font-bold text-white absolute bottom-0 bg-gradient-to-t  from-black  to-transparent w-full min-h-32 p-2">
          {" "}
          <h2>{movie?.title}</h2>
        </div>
      </div>
    )
  );
};

export default MovieCard;
