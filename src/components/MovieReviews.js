import React, { useState } from "react";
import useGetMovieReviews from "../hooks/useGetReviews";

const MovieReviews = ({ movieId }) => {
  const {
    data: movieReviews,
    loading: movieReviewsLoading,
    error: movieReviewsError,
  } = useGetMovieReviews(movieId);
  const [openReviewIndex, setOpenReviewIndex] = useState(null);

  const handleNameClick = (index) => {
    setOpenReviewIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  if (movieReviewsLoading)
    return (
      <div className="text-center text-2xl  p-0 mt-5 font-bold">
        <span className="animate-spin bg-white text-black p-2">
          ⚪Loading....
        </span>
      </div>
    );
  if (movieReviewsError) return <div>Error loading Movie Reviews</div>;
  if (!movieReviews) return <div>No Movie Reviews available</div>;

  return (
    <div className="mt-12">
      <h2 className="flex justify-center text-3xl font-bold mb-6 text-gray-200">
        Reviews:
      </h2>
      <div className="space-y-6">
        {movieReviews?.results?.length > 0 ? (
          movieReviews.results.map((review, index) => (
            <div
              key={review.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h3
                className="flex justify-between items-center text-xl font-semibold text-indigo-400 mb-0 cursor-pointer"
                onClick={() => handleNameClick(index)}
              >
                <span>{review.author}</span>
                <div className="flex justify-center items-center gap-4">
                  <p className="text-right text-sm text-gray-500">
                    {new Date(review.created_at).toLocaleDateString("en-IN")}
                  </p>
                  <span>{openReviewIndex === index ? "⬆️" : "⬇️"}</span>
                </div>
              </h3>
              {openReviewIndex === index && (
                <div>
                  <p className="italic text-gray-300 my-1">{review.content}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400">No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default MovieReviews;
