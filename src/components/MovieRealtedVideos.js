import React from "react";
import useGetRelatedVideos from "../hooks/useGetRelatedVideos";

const MovieRealtedVideos = ({ movieId }) => {
  console.log(movieId, "movieId");

  const { data: movieVideos, loading, error } = useGetRelatedVideos(movieId);

  if (loading)
    return (
      <div className="text-center text-2xl mt-2 text-black p-4 font-bold">
        <span className="bg-white p-2 animate-spin">⚪Loading....</span>
      </div>
    );
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!movieVideos?.results?.length) {
    return (
      <div className="text-center text-xl text-gray-400">
        No related videos available.
      </div>
    );
  }

  console.log(movieVideos?.results, "Movide Tesailere");

  return (
    <>
      <h2 className="flex justify-center text-3xl font-bold my-3 mt-6 text-gray-200">
        Related Videos:
      </h2>

      <div className=" flex flex-wrap gap-2">
        {movieVideos?.results?.map((video) => (
          <iframe
            src={`https://www.youtube.com/embed/${video.key}?autoplay=0&mute=0&controls=0&showinfo=0&rel=0`}
            className="w-[30%] aspect-video"
            title="YouTube player"
            allow="encrypted-media"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </>
  );
};

export default MovieRealtedVideos;
