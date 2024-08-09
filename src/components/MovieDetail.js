import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { IMAGE_URL, IMAGE_URL_FOR_DETAIL_PAGE } from "../utils/constants";
import netflixLogo from "../Images/Netflix_Logo.png";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data: movieDetail, loading, error } = useMovieDetail(movieId);
  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");
  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!movieDetail)
    return <div className="text-white">No movie details available</div>;

  return (
    <div className="relative">
      <div className="bg-black text-white min-h-screen p-4">
        <div className="relative">
          <img
            src={`${IMAGE_URL_FOR_DETAIL_PAGE + movieDetail.backdrop_path}`}
            alt={movieDetail.title}
            className="w-full h-60 object-cover"
          />
          {/* <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
          className="w-full aspect-video"
          title="YouTube player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe> */}
          <div className="absolute top-1/2 left-0 right-0 flex flex-col md:flex-row items-center md:items-start md:justify-between p-4 bg-gradient-to-t from-black via-black to-transparent">
            <img
              src={`${IMAGE_URL + movieDetail.poster_path}`}
              alt={movieDetail.title}
              className="w-40 md:w-60 mb-4 md:mb-0 rounded-lg shadow-lg "
            />
            <div className="max-w-2xl md:ml-6 mr-[20%]">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="border-b-2">{movieDetail.title}</span>
              </h1>
              <p className="italic text-gray-300 mb-4">{movieDetail.tagline}</p>
              <p className="mb-4">{movieDetail.overview}</p>
              <p className="mb-2">
                Release Date:{" "}
                <span className="font-semibold">
                  {movieDetail.release_date}
                </span>
              </p>
              <p className="mb-2">
                Runtime:{" "}
                <span className="font-semibold">
                  {Math.floor(movieDetail.runtime / 60)} hr{" "}
                  {movieDetail.runtime % 60} min
                </span>
              </p>
              <p className="mb-2">
                Genres:{" "}
                <span className="font-semibold">
                  {movieDetail.genres.map((genre) => genre.name).join(", ")}
                </span>
              </p>
              <p className="mb-4">
                Production Countries:{" "}
                <span className="font-semibold">
                  {movieDetail.production_countries
                    .map((genre) => genre.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-2 flex items-center cursor-pointer"
        onClick={() => handleLogoClick()}
      >
        <img src={netflixLogo} alt="logo" className="w-24 md:w-36" />
      </div>
    </div>
  );
};

export default MovieDetail;
