import React from "react";
import { useSelector } from "react-redux";
import useGetTrailerVideo from "../hooks/useGetTrailerVideo";

const VideoBackground = ({ videoId }) => {
  useGetTrailerVideo(videoId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const trailerYoutubeKey = trailerVideo?.key;
  return (
    <div className="w-full overflow-hidden">
      {trailerYoutubeKey && (
        // <iframe
        //   src={`https://youtube.com/embed/${trailerYoutubeKey}?&rel=0&controls=0&autoplay=1&mute=1&showinfo=0`}
        //   className="w-full aspect-video"
        //   title="Youtube player"
        // ></iframe>

        <iframe
          src={`https://www.youtube.com/embed/${trailerYoutubeKey}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
          className="w-full aspect-video"
          title="YouTube player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
