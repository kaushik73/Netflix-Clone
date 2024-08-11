import React from "react";
import { useNavigate } from "react-router-dom";

const CastCard = ({ personDetail }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/cast/${personDetail.id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    personDetail?.profile_path && (
      <div
        onClick={handleCardClick}
        className="bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${personDetail?.profile_path}`}
          alt={personDetail.name}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-bold">{personDetail.name}</h3>
        <p className="text-sm text-gray-400">
          Character: {personDetail.character}
        </p>
        <p className="text-sm text-gray-400">
          Department: {personDetail.known_for_department}
        </p>
      </div>
    )
  );
};

export default CastCard;
