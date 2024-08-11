import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const handleMoreInfoClick = () => {
    navigate(`/detail/${movieId}`);
  };
  return (
    <div className="absolute bottom-20  hidden md:block left-2  w-full max-w-lg px-6 py-4 ">
      <div className="text-center">
        <h1 className="font-bold text-white text-4xl mb-4">{title} </h1>
        <p className="text-lg text-white mb-6">{overview}</p>
        <div>
          <button
            onClick={handleMoreInfoClick}
            className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
