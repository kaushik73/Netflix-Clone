import React, { useState } from "react";
import AdvanceSearchBox from "./AdvanceSearchBox";
import AdvanceMovieSuggestions from "./AdvanceMovieSuggestions";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const darkMode = useSelector((store) => store.config.darkTheme);
  const selectedLanguage = useSelector((store) => store.config.lang);

  const [isSearching, setIsSearching] = useState(true);
  const handleIsSearching = (isSearching) => {
    setIsSearching(isSearching);
  };
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-bgBody"
      } min-h-screen object-contain`}
    >
      <AdvanceSearchBox
        darkMode={darkMode}
        selectedLanguage={selectedLanguage}
        handleIsSearching={handleIsSearching}
      />
      {!isSearching && (
        <div className="">
          <AdvanceMovieSuggestions
            darkMode={darkMode}
            selectedLanguage={selectedLanguage}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
