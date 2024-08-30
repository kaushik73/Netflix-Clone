import React from "react";
import useGetCastList from "../hooks/useGetCastList";
import CastCard from "./CastCard";

const CastList = ({ movieId }) => {
  const { data: castList, loading, error } = useGetCastList(movieId);

  if (loading)
    return (
      <div className="text-center text-2xl  p-0 mt-5 font-bold">
        <span className="animate-spin bg-white text-black p-2">
          ⚪Loading....
        </span>
      </div>
    );
  if (error) return <div>Error loading cast list</div>;
  if (!castList) return <div>No cast information available</div>;
  console.log(castList, "caasrt List ");

  return (
    <>
      <h2 className="flex justify-center text-3xl font-bold mb-5 mt-2 text-gray-200">
        Cast:
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 cursor-pointer">
        {castList?.cast?.map((person) => (
          <CastCard key={person?.id} personDetail={person} />
        ))}
      </div>
    </>
  );
};

export default CastList;
