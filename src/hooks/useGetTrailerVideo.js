import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useGetTrailerVideo = (videoId) => {
  const dispatch = useDispatch(videoId);

  const getVideo = async () => {
    console.log(
      "https://api.themoviedb.org/3/movie/",
      videoId,
      "/videos VIDO URL"
    );

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + videoId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filterVideos = json?.results?.filter(
      (video) => video?.type === "Trailer"
    );

    // if not found any trailer take the 1st video :
    const trailer = filterVideos?.length ? filterVideos[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getVideo();
  }, []);
};

export default useGetTrailerVideo;
