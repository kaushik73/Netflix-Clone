import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";
import { API_OPTIONS, TMDB_MOVIE_URL } from "../utils/constants";

const useGetTrailerVideo = ({ videoId, isFromBrowsePage }) => {
  const dispatch = useDispatch();
  console.log(videoId, isFromBrowsePage);

  const getVideo = async () => {
    const data = await fetch(
      `${TMDB_MOVIE_URL}/${videoId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterVideos = json?.results?.filter(
      (video) => video?.type === "Trailer"
    );

    // if not found any trailer take the 1st video :
    const trailer = filterVideos?.length ? filterVideos[0] : json.results[0];
    if (isFromBrowsePage === true) {
      dispatch(addTrailerVideo(trailer));
    }
  };

  useEffect(() => {
    getVideo();
  }, []);
};

export default useGetTrailerVideo;
