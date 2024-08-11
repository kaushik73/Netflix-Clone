import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTMDBApiData } from "../utils/common";
import { API_OPTIONS, IMAGE_URL } from "../utils/constants";
import netflixLogo from "../Images/Netflix_Logo.png";

const CastDetail = () => {
  const { personId } = useParams(); // Retrieve personId from the URL parameters
  const [castDetail, setCastDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");

  useEffect(() => {
    console.log(personId, "personD");

    const fetchCastDetail = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/person/${personId}?language=en-US`,
          API_OPTIONS
        );
        console.log(data, "data");

        const json = await data.json();
        console.log(json, "json for casr detail");
        setCastDetail(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCastDetail();
  }, [personId]);

  if (loading)
    return (
      <div className="text-center text-2xl bg-white text-black p-1 mt-3 font-bold">
        <span className="animate-spin">⚪Loading....</span>
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  if (!castDetail)
    return (
      <div className="text-white text-center p-4">No details available</div>
    );

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
        <img
          src={`${IMAGE_URL}${castDetail.profile_path}`}
          alt={castDetail.name}
          className="w-60 h-80 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{castDetail.name}</h1>
          <p className="text-gray-300 mb-4 italic">{castDetail.biography}</p>
          <p className="mb-2">
            <span className="font-semibold">Birthday:</span>{" "}
            {castDetail.birthday || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Place of Birth:</span>{" "}
            {castDetail.place_of_birth || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Known For:</span>{" "}
            {castDetail.known_for_department || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Popularity:</span>{" "}
            {castDetail.popularity || "N/A"}
          </p>
        </div>
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

export default CastDetail;
