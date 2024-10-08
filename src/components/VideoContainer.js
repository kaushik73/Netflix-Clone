import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (movies === null) return;

  const topMovie = movies[0];
  const { title, overview, id } = topMovie;

  return (
    <div className="relative">
      <VideoTitle title={title} overview={overview} movieId={id} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default VideoContainer;
