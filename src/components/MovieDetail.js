import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import useMovieRecommendation from "../hooks/useMovieRecommendation"; // Import the recommendation hook
import { IMAGE_URL, IMAGE_URL_FOR_DETAIL_PAGE } from "../utils/constants";
import netflixLogo from "../Images/Netflix_Logo.png";
import MovieList from "./MovieList";
import useGetMovieReviews from "../hooks/useGetReviews";
import MovieReviews from "./MovieReviews";
import MovieTrailer from "./MovieRealtedVideos";
import CastList from "./CastList";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data: movieDetail, loading, error } = useMovieDetail(movieId);
  const {
    data: recommendedMovies,
    loading: recommendationLoading,
    error: recommendationError,
  } = useMovieRecommendation(movieId); // Fetch recommended movies

  const [showReviews, setShowReviews] = useState(true);
  const [showRecommended, setShowRecommended] = useState(false);
  const [showRelatedVideos, setShowRelatedVideos] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");

  if (loading || recommendationLoading)
    return (
      <div className="text-center text-2xl bg-white text-black p-4 font-bold">
        <span className="animate-spin">⚪Loading....</span>
      </div>
    );
  if (error || recommendationError)
    return (
      <div className="text-red-500">Error: {error || recommendationError}</div>
    );
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

          <div className="sm:absolute top-1/2 left-0 right-0 flex flex-col md:flex-row items-center md:items-start md:justify-between p-4 bg-gradient-to-t from-black via-black to-transparent">
            <img
              src={`${IMAGE_URL + movieDetail.poster_path}`}
              alt={movieDetail.title}
              className="w-40 hidden md:block md:w-60 mb-4 md:mb-0 rounded-lg shadow-lg "
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
        {/* Filters */}
        <div className="mt-0 sm:pt-[30%] flex flex-wrap gap-4 justify-center">
          <div
            className={`cursor-pointer px-4 py-2 rounded-lg  ${
              showReviews ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
            }`}
            onClick={() => setShowReviews(!showReviews)}
          >
            <p>See Reviews</p>
          </div>
          <div
            className={`cursor-pointer px-4 py-2 rounded-lg  ${
              showRecommended
                ? "bg-gray-200 text-black"
                : "bg-gray-800 text-white"
            }`}
            onClick={() => setShowRecommended(!showRecommended)}
          >
            <p>See Recommended Movies</p>
            {showRecommended && <span className="top-0"></span>}
          </div>
          <div
            className={`cursor-pointer px-4 py-2 rounded-lg  ${
              showRelatedVideos
                ? "bg-gray-200 text-black"
                : "bg-gray-800 text-white"
            }`}
            onClick={() => setShowRelatedVideos(!showRelatedVideos)}
          >
            <p>See Related Videos</p>
          </div>
          <div
            className={`cursor-pointer px-4 py-2 rounded-lg  ${
              showCast ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
            }`}
            onClick={() => setShowCast(!showCast)}
          >
            <p>View Cast</p>
          </div>
        </div>

        {/* Related Videos Section */}
        {showRelatedVideos && <MovieTrailer movieId={movieId} />}
        {/* Cast Section */}
        {showCast && <CastList movieId={movieId} />}
        {/* Movie Review Section */}
        <>
          {/* {movieReviewsLoading ? (
            <div className="text-center text-white mt-6">
              Loading Reviews...
            </div>
          ) : movieReviewsError ? (
            <div className="text-center text-red-500 mt-6">
              Error loading reviews: {movieReviewsError}
            </div>
          ) : showReviews ? (
            <MovieReviews movieReviews={movieReviews} />
          ) : null} */}

          {showReviews && <MovieReviews movieId={movieId} />}
        </>
        {/* Recommended Movie Section */}
        <>
          {showRecommended && (
            <div className="mt-8">
              <div className="">
                <MovieList
                  title="Recommended Movies"
                  movies={recommendedMovies?.results}
                  isMovieRecommended={true}
                />
              </div>
            </div>
          )}
        </>
        <div className="h-72">{/* Empty Div for below space */}</div>
      </div>

      {/* logo Container */}
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
