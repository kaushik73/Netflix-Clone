import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstants";

const AdvanceMovieSuggestions = ({
  darkMode: isDarkMode,
  selectedLanguage,
}) => {
  const movies = useSelector((store) => store.gpt.moviesFromKeyword);
  const searchText = useSelector((store) => store.gpt.searchText);
  if (searchText === "")
    return (
      <div className="text-center w-[47%] pt-2 m-auto">
        <p className="font-bold bg-zinc-300  text-lg text-red-800 ">
          {lang[selectedLanguage]?.pleaseSearchSomething}
        </p>
      </div>
    );
  if (movies == null && searchText !== null) {
    return (
      <div className="text-center w-[47%] pt-2 m-auto">
        <p className="font-bold bg-zinc-300  text-lg text-red-800 ">
          {lang[selectedLanguage]?.noResultFound}
        </p>
      </div>
    );
  }
  if (searchText === null) return;
  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : ""}>
      <MovieList
        title={lang[selectedLanguage].searchResults}
        movies={movies}
        isMovieRecommended={true}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default AdvanceMovieSuggestions;
