import React from "react";
import GptSearchBox from "./GptSearchBox";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    // giving the dropdown
    <div className="bg-bgBody h-screen">
      <GptSearchBox />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
