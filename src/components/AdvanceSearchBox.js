import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import { getTMDBApiData } from "../utils/common";
import { addMoviesFromKeyword, addSearchResult } from "../utils/store/gptSlice";
import { TMDB_SEARCH_URL } from "../utils/constants";

const AdvanceSearchBox = ({
  darkMode: isDarkMode,
  selectedLanguage,
  handleIsSearching,
}) => {
  console.log(isDarkMode, "dark Mode AdvanceSearchBox");

  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdvanceInputSearch = async () => {
    setIsLoading(true);
    try {
      dispatch(addSearchResult(searchText.current.value));
      const keywordData = await getTMDBApiData(
        `${TMDB_SEARCH_URL}/keyword?query=${searchText.current.value}&page=1`
      );
      console.log(searchText.current.value, "handleAdvanceInputSearch");

      if (!keywordData || keywordData.length === 0) {
        dispatch(addMoviesFromKeyword(null));
        return;
      }

      const moviesDetails = await Promise.all(
        keywordData.slice(0, 10).map(async (movie) => {
          if (movie == null) return;
          const movieData = await getTMDBApiData(
            `${TMDB_SEARCH_URL}/movie?query=${movie.name}&page=1`
          );
          return movieData[0];
        })
      );

      moviesDetails.length === 0
        ? dispatch(addMoviesFromKeyword([]))
        : dispatch(addMoviesFromKeyword(moviesDetails));
      console.log(moviesDetails, "moviesDetails");
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setIsLoading(false);
      handleIsSearching(false);
    }
  };

  return (
    <div className={`${isDarkMode ? " text-white" : " text-black"} p-6`}>
      <div className="flex justify-center pt-3">
        <input
          type="text"
          ref={searchText}
          className={`w-[40%] p-2 rounded-md px-4 text-xl placeholder:text-lg ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
          }`}
          placeholder={lang[selectedLanguage]?.gptSearchPlaceholder}
        />
        <div>
          <button
            className={`${
              isDarkMode
                ? "bg-gray-700 text-slate-300"
                : "bg-slate-100 text-black"
            } mx-2 p-4 rounded-md from-neutral-950 text-lg`}
            onClick={handleAdvanceInputSearch}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : lang[selectedLanguage]?.search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearchBox;
